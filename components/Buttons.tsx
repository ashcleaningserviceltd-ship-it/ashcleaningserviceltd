import Link from "next/link";
import { siteConfig } from "@/config/site";

export function QuoteButton({ label = "Get Your Free Quote", className = "" }: { label?: string; className?: string }) {
  return <Link href="/contact#quote-form" className={`btn btn-primary ${className}`}>{label}<span aria-hidden="true">→</span></Link>;
}
export function WhatsAppButton({ label = "WhatsApp Us", className = "" }: { label?: string; className?: string }) {
  return <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className={`btn btn-secondary ${className}`} aria-label={`${label} (opens WhatsApp)`}><span aria-hidden="true">◉</span>{label}</a>;
}
export function StickyMobileCTA() {
  return <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-white/10 bg-[#08100f]/95 p-2 backdrop-blur md:hidden"><QuoteButton label="Free Quote" className="!min-h-12 !px-3"/><WhatsAppButton className="!min-h-12 !px-3"/></div>;
}
