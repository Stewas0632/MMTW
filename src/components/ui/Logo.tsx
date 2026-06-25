import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sizes = {
  xs: { width: 32, height: 32, className: "h-7 w-7" },
  sm: { width: 48, height: 48, className: "h-10 w-10 md:h-11 md:w-11" },
  md: { width: 96, height: 96, className: "h-20 w-20 md:h-24 md:w-24" },
  lg: { width: 180, height: 180, className: "h-36 w-36 md:h-44 md:w-44" },
  xl: { width: 320, height: 320, className: "h-56 w-56 md:h-72 md:w-72 lg:h-80 lg:w-80" },
  hero: { width: 480, height: 480, className: "h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96" },
};

interface LogoProps {
  size?: keyof typeof sizes;
  className?: string;
  link?: boolean;
  priority?: boolean;
  glow?: boolean;
  pulse?: boolean;
}

export default function Logo({
  size = "sm",
  className,
  link = true,
  priority = false,
  glow = false,
  pulse = false,
}: LogoProps) {
  const { width, height, className: sizeClass } = sizes[size];

  const image = (
    <Image
      src="/logo/mmtw-logo.png"
      alt="MMTW — Money Moves The World"
      width={width}
      height={height}
      priority={priority}
      className={cn(
        "aspect-square object-contain",
        sizeClass,
        glow && "logo-glow",
        pulse && "logo-glow-pulse",
        className
      )}
    />
  );

  if (!link) {
    return image;
  }

  return (
    <Link
      href="/"
      className="group inline-flex shrink-0 items-center gap-3 transition-opacity duration-300 hover:opacity-90"
      aria-label="MMTW Home"
    >
      {image}
      <span className="hidden font-display text-lg uppercase tracking-widest text-mmtw-light transition-colors group-hover:text-mmtw-flame lg:block">
        MMTW.
      </span>
    </Link>
  );
}
