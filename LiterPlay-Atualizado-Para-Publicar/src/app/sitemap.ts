import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://literplay-profissional-157.vercel.app";
  return ["", "/demonstracao", "/materias", "/ranking", "/login", "/cadastro", "/privacidade", "/termos"].map((path) => ({
    url: `${site}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}
