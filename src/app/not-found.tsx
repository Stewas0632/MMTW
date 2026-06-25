import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-mmtw-black px-6">
      <p className="font-display text-8xl text-mmtw-light">404</p>
      <p className="mt-4 font-sans text-sm text-mmtw-muted">
        Page not found.
      </p>
      <Link href="/" className="mt-8">
        <Button>Back Home</Button>
      </Link>
    </div>
  );
}
