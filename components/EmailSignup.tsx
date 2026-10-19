"use client";

import { useState } from "react";
import { isValidEmail } from "@/lib/plans";

// shortcut: demo only, nothing is sent; connect a form service or API route for a real launch
export default function EmailSignup() {
  const [state, setState] = useState<"idle" | "error" | "done">("idle");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "");
    if (isValidEmail(email)) return setState("done");
    setState("error");
    e.currentTarget.querySelector("input")?.focus(); // send keyboard and screen-reader users straight to the field to fix
  }

  if (state === "done") {
    return (
      <p role="status" className="rounded-lg border border-cyan/40 bg-cyan/10 px-4 py-3 text-sm text-cyan">
        You&apos;re on the list. (Demo: no email was actually sent.)
      </p>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <label htmlFor="email" className="sr-only">
        Work email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@company.com"
        aria-invalid={state === "error"}
        aria-describedby={state === "error" ? "email-error" : undefined}
        className="min-w-0 flex-1 rounded-lg border border-line bg-panel px-4 py-2.5 text-sm placeholder:text-muted focus:border-violet"
      />
      <button type="submit" className="rounded-lg bg-violet px-5 py-2.5 text-sm font-medium text-bg hover:bg-[#a59aff]">
        Get early access
      </button>
      {state === "error" && (
        <p id="email-error" role="alert" className="text-sm text-red-300 sm:basis-full">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
