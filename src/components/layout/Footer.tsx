import Link from "next/link";
import Logo from "@/components/ui/Logo";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

const footerLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Campaign", href: "/campaign" },
  { label: "About", href: "/about" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-mmtw-black">
      <div className="overflow-hidden border-b border-white/5 py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="mx-12 font-display text-6xl uppercase tracking-widest text-white/[0.03] md:text-8xl"
            >
              MMTW.
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start lg:col-span-2">
            <Logo size="md" glow />
            <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-mmtw-muted">
              Money Moves The World. Premium streetwear for the ambitious.
              Purpose-driven design. No permission required.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-xs uppercase tracking-ultra text-mmtw-flame">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-mmtw-muted transition-colors hover:text-mmtw-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-xs uppercase tracking-ultra text-mmtw-flame">
              Connect
            </h4>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-mmtw-muted transition-colors hover:text-mmtw-flame"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="font-sans text-xs text-mmtw-muted">
            &copy; {new Date().getFullYear()} MMTW. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="font-sans text-xs text-mmtw-muted transition-colors hover:text-mmtw-light"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-sans text-xs text-mmtw-muted transition-colors hover:text-mmtw-light"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
