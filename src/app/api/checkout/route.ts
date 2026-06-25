import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { getProductBySlug } from "@/data/products";
import { calculateOrderTotal, toCents } from "@/lib/checkout";
import { getStripe } from "@/lib/stripe";

interface CheckoutItemPayload {
  slug: string;
  quantity: number;
  size: string;
  color: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const items: CheckoutItemPayload[] = body.items;

    if (!items?.length) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
    let subtotal = 0;

    for (const item of items) {
      const product = getProductBySlug(item.slug);
      if (!product) {
        return NextResponse.json(
          { error: `Product not found: ${item.slug}` },
          { status: 400 }
        );
      }

      if (item.quantity < 1 || item.quantity > 99) {
        return NextResponse.json({ error: "Invalid quantity" }, { status: 400 });
      }

      subtotal += product.price * item.quantity;

      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            description: `${item.size} / ${item.color}`,
            images: product.images[0] ? [product.images[0]] : undefined,
            metadata: {
              slug: product.slug,
              size: item.size,
              color: item.color,
            },
          },
          unit_amount: toCents(product.price),
        },
        quantity: item.quantity,
      });
    }

    const { shipping, tax } = calculateOrderTotal(subtotal);

    if (shipping > 0) {
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: { name: "Shipping" },
          unit_amount: toCents(shipping),
        },
        quantity: 1,
      });
    }

    if (tax > 0) {
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: { name: "Estimated Tax" },
          unit_amount: toCents(tax),
        },
        quantity: 1,
      });
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? request.nextUrl.origin;

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout?canceled=1`,
      shipping_address_collection: { allowed_countries: ["US", "CA", "GB"] },
      billing_address_collection: "required",
      metadata: {
        source: "mmtw-cart",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
