import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("static GitHub Pages 404 offers accessible recovery", async () => {
  const html = await readFile(new URL("../dist/404.html", import.meta.url), "utf8");
  assert.match(html, /<title>Page not found — Voxletra<\/title>/);
  assert.match(html, /<meta name="robots" content="noindex,follow"\s*\/?>/);
  assert.match(html, /href="#main">Skip to content<\/a>/);
  assert.match(html, /<main id="main" tabindex="-1">/);
  assert.match(html, /href="\/">Return to Voxletra home/);
  assert.match(html, /aria-label="Primary navigation"/);
  assert.doesNotMatch(html, /<script\b[^>]*src=/i);
});
