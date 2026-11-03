import type { MetadataRoute } from "next";
import { services, siteConfig } from "@/config/site";
export default function sitemap():MetadataRoute.Sitemap{const paths=["","/services","/about","/contact","/privacy",...services.map(s=>`/services/${s.slug}`)];return paths.map(path=>({url:`${siteConfig.siteUrl}${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:path==="/contact"?.9:.7}))}
