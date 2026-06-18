import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-lg border border-gray-200 dark:border-white/10 font-mono text-3xl font-bold text-primary">
          404
        </div>

        <h1 className="mt-8 text-3xl md:text-4xl font-bold">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          Sorry — we couldn&apos;t find the page you were looking for. It may
          have been moved or removed.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild variant="outline">
            <Link href="/">Go to Home</Link>
          </Button>

          <Button asChild>
            <Link
              target="_blank"
              rel="noreferrer"
              href="mailto:mansourqaderi21@gmail.com?subject=404%20on%20your%20site"
            >
              Report an issue
            </Link>
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Or contact me on{" "}
          <Link
            href="https://wa.me/93790049201"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            WhatsApp
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
