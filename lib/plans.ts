export type Billing = "monthly" | "yearly";

export type Plan = {
  id: string;
  name: string;
  monthly: number; // USD per month when billed monthly
  perSeat?: boolean;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const YEARLY_DISCOUNT = 0.2;

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    monthly: 0,
    blurb: "For trying it out on your own calls.",
    features: ["5 meetings per month", "AI summary & action items", "Search across notes"],
    cta: "Start free",
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 12,
    blurb: "For people who live in meetings.",
    features: ["Unlimited meetings", "Speaker detection", "Export to Notion & Slack", "30+ languages"],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    id: "team",
    name: "Team",
    monthly: 20,
    perSeat: true,
    blurb: "For teams that share decisions.",
    features: ["Everything in Pro", "Shared workspaces", "Admin & SSO", "Priority support"],
    cta: "Talk to sales",
  },
];

/** Price shown per month; yearly billing applies the discount. */
export function monthlyPrice(plan: Plan, billing: Billing): number {
  const price = billing === "yearly" ? plan.monthly * (1 - YEARLY_DISCOUNT) : plan.monthly;
  return Math.round(price * 100) / 100;
}

export function formatUsd(amount: number): string {
  return Number.isInteger(amount) ? `$${amount}` : `$${amount.toFixed(2)}`;
}

export const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
