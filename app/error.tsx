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
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-lg border border-gray-200 dark:border-white/10 font-mono text-2xl font-bold text-primary">
          500
        </div>

        <h1 className="mt-6 text-2xl md:text-3xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-4 text-muted-foreground">
          An unexpected error occurred on the server. Try refreshing the page —
          if the problem persists, please contact me and I&apos;ll look into it.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={() => reset()}>Try again</Button>

          <Button asChild variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          <p>If you want, report the issue:</p>
          <div className="mt-2 flex justify-center gap-3">
            <Link
              href="mailto:mansourqaderi21@gmail.com?subject=Server%20Error%20500"
              className="text-primary hover:underline"
            >
              Email me
            </Link>
            <span>·</span>
            <Link
              href="https://wa.me/93790049201"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
