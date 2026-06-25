export function calculateShipping(subtotal: number): number {
  return subtotal >= 150 ? 0 : 12;
}

export function calculateTax(subtotal: number): number {
  return Math.round(subtotal * 0.08 * 100) / 100;
}

export function calculateOrderTotal(subtotal: number) {
  const shipping = calculateShipping(subtotal);
  const tax = calculateTax(subtotal);
  return {
    shipping,
    tax,
    total: subtotal + shipping + tax,
  };
}

export function toCents(amount: number): number {
  return Math.round(amount * 100);
}
