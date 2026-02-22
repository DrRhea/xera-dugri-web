import type { MetadataRoute } from "next";

const BASE = "https://dutagenerasiremaja.com";

/**
 * Sitemap untuk SEO — semua halaman publik.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = ["", "/tentang", "/program", "/kontak"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  return routes;
}
