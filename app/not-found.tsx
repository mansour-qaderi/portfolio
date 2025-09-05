import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-[#ffe960] text-gray-900 mx-auto shadow-lg">
          <span className="text-3xl font-bold">404</span>
        </div>

        <h1 className="mt-8 text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">
          Page not found
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-100">
          Sorry — we couldn’t find the page you were looking for. It may have
          been moved or removed.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="inline-block">
            <Button
              className="rounded-xl font-semibold shadow hover:opacity-90 transition"
              variant="ghost"
            >
              Go to Home
            </Button>
          </Link>

          <Link
            target="_blank"
            rel="noreferrer"
            href="mailto:mansourqaderi21@gmail.com?subject=404%20on%20your%20site"
            className="inline-block"
          >
            <Button className="rounded-xl hover:shadow-sm transition">
              Report an issue
            </Button>
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Or contact me on{" "}
          <Link
            href="https://wa.me/790049201"
            target="_blank"
            rel="noreferrer"
            className="text-[#ffe960]"
          >
            WhatsApp
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
