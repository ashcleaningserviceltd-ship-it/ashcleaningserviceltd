import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { title, description, url, siteName: siteConfig.name, locale: "en_CA", type: "website", images: [{ url: "/images/ash-cleaning-hero.png", width: 1692, height: 924, alt: "Professional cleaner caring for a bright modern Calgary home" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/images/ash-cleaning-hero.png"] },
  };
}
