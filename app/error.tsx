"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center rounded-2xl p-8 shadow-lg">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#ffe960] text-gray-900 mx-auto shadow-md">
          <span className="text-2xl font-bold">500</span>
        </div>

        <h1 className="mt-6 text-2xl md:text-3xl font-bold text-gray-900">
          Something went wrong
        </h1>

        <p className="mt-4 text-gray-600">
          An unexpected error occurred on the server. Try refreshing the page —
          if the problem persists, please contact me and I’ll look into it.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={() => reset()}
            className="px-5 py-3 rounded-xl bg-[#ffe960] text-black font-semibold shadow hover:opacity-90 transition"
          >
            Try again
          </Button>

          <Link href="/" className="inline-block">
            <Button className="px-5 py-3 rounded-xl border border-gray-200 text-gray-800 hover:shadow-sm transition">
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          <p>If you want, report the issue:</p>
          <div className="mt-2 flex justify-center gap-3">
            <a
              href="mailto:mansourqaderi21@gmail.com?subject=Server%20Error%20500"
              className="text-sm text-[#111827] underline"
            >
              Email me
            </a>
            <span className="text-gray-300">·</span>
            <a
              href="https://wa.me/93790049201"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[#111827] underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
