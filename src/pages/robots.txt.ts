import type { APIRoute } from "astro";

// Static endpoint follows astro.config.mjs's verified public site origin.
export const GET: APIRoute = ({ site }) => {
  const origin = new URL(site ?? "https://voxletra.github.io");
  const sitemap = new URL("/sitemap.xml", origin);
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: ${sitemap.href}\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
};
