import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/Buttons";
import { siteConfig } from "@/config/site";

const manrope = localFont({
  src: [
    { path: "./fonts/manrope-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/manrope-extrabold.ttf", weight: "800", style: "normal" },
  ],
  display: "swap",
  variable: "--font-manrope",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: "Professional Cleaning Services in Calgary | ASH Cleaning Service", template: "%s | ASH Cleaning Service" },
  description: "Professional home, deep, move-in, move-out, carpet and garden cleaning services for busy Calgary families. Request a free quote from ASH Cleaning Service.",
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = { themeColor: "#08100f", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-CA" className={manrope.variable}><body style={{fontFamily:"var(--font-manrope),sans-serif"}}><a href="#main" className="skip-link">Skip to content</a><Header/><main id="main">{children}</main><Footer/><StickyMobileCTA/></body></html>;
}
