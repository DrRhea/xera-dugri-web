import type { MetadataRoute } from "next";

const BASE = "https://dutagenerasiremaja.com";

/**
 * robots.txt — izinkan crawling, arahkan ke sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: [] },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
