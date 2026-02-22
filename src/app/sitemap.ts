import type { MetadataRoute } from "next";

const BASE = "https://dutagenerasiremaja.com";

/**
 * Sitemap untuk SEO — semua halaman publik.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/tentang", "/program", "/kontak"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));

  return routes;
}
