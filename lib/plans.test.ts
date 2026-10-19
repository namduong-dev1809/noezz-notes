// Run with: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { formatUsd, isValidEmail, monthlyPrice, plans } from "./plans.ts";

const byId = (id: string) => plans.find((p) => p.id === id)!;

test("yearly billing takes 20% off the monthly price", () => {
  assert.equal(monthlyPrice(byId("pro"), "monthly"), 12);
  assert.equal(monthlyPrice(byId("pro"), "yearly"), 9.6);
  assert.equal(monthlyPrice(byId("team"), "yearly"), 16);
  assert.equal(monthlyPrice(byId("free"), "yearly"), 0);
});

test("prices print without stray decimals", () => {
  assert.equal(formatUsd(12), "$12");
  assert.equal(formatUsd(9.6), "$9.60");
  assert.equal(formatUsd(0), "$0");
});

test("exactly one featured plan", () => {
  assert.equal(plans.filter((p) => p.featured).length, 1);
});

test("email check", () => {
  for (const ok of ["a@b.co", " lena@mail.com ", "x.y+z@sub.domain.io"]) assert.ok(isValidEmail(ok), ok);
  for (const bad of ["", "lena", "lena@", "@mail.com", "lena@mail", "le na@mail.com", "lena@mail.c"]) assert.ok(!isValidEmail(bad), bad);
});
