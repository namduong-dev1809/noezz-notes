"use client";

import { useState } from "react";
import { formatUsd, monthlyPrice, plans, YEARLY_DISCOUNT, type Billing } from "@/lib/plans";

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <div>
      <div className="flex justify-center">
        <div role="radiogroup" aria-label="Billing period" className="inline-flex rounded-full border border-line bg-panel p-1 text-sm">
          {(["monthly", "yearly"] as Billing[]).map((b) => (
            <button
              key={b}
              type="button"
              role="radio"
              aria-checked={billing === b}
              onClick={() => setBilling(b)}
              className={`rounded-full px-5 py-2 capitalize transition-colors ${billing === b ? "bg-text text-bg" : "text-muted hover:text-text"}`}
            >
              {b}
              {b === "yearly" && <span className="ml-2 rounded-full bg-cyan/15 px-2 py-0.5 text-xs text-cyan">−{YEARLY_DISCOUNT * 100}%</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => {
          const price = monthlyPrice(plan, billing);
          return (
            <article
              key={plan.id}
              className={`reveal relative flex flex-col rounded-2xl border p-7 ${plan.featured ? "border-violet/60 bg-violet/[0.07]" : "border-line bg-panel"}`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-violet px-3 py-1 text-xs font-medium text-bg">Most popular</span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted">{plan.blurb}</p>
              <p className="mt-6 flex items-baseline gap-1" aria-live="polite">
                <span className="text-4xl font-semibold tracking-tight">{formatUsd(price)}</span>
                <span className="text-sm text-muted">{plan.perSeat ? "/ user / month" : "/ month"}</span>
              </p>
              <p className="mt-1 h-5 text-xs text-muted">{billing === "yearly" && price > 0 ? `Billed ${formatUsd(price * 12)} yearly` : ""}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span aria-hidden="true" className="text-cyan">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#signup"
                className={`mt-8 rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-colors ${
                  plan.featured ? "bg-violet text-bg hover:bg-[#a59aff]" : "border border-line hover:border-muted"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}
