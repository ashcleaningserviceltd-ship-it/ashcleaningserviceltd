import { QuoteForm } from "@/components/QuoteForm";
import { WhatsAppButton } from "@/components/Buttons";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact & Free Quote",
  "Request a free cleaning quote or contact ASH Cleaning Service in Calgary by WhatsApp.",
  "/contact",
);

export default function ContactPage() {
  return <>
    <section className="section border-b border-white/10">
      <div className="container">
        <p className="eyebrow">No pressure. No obligation.</p>
        <h1 className="display mt-4 max-w-4xl">Tell Us What Would Make Life Easier</h1>
        <p className="muted mt-6 max-w-2xl text-lg">Request a clear cleaning quote for your home, vehicle, garden or a combination of services.</p>
      </div>
    </section>
    <section className="section">
      <div className="container grid items-start gap-8 lg:grid-cols-[.7fr_1.3fr]">
        <aside className="grid gap-4 lg:sticky lg:top-24">
          <div className="card p-6">
            <h2 className="text-2xl font-extrabold">Contact options</h2>
            <dl className="mt-5 grid gap-4 text-sm">
              <div><dt className="muted">Phone</dt><dd><a href={siteConfig.phoneHref} className="font-bold text-[#5ee6c5] hover:underline">{siteConfig.phone}</a></dd></div>
              <div><dt className="muted">Email</dt><dd><a href={siteConfig.emailHref} className="font-bold text-[#5ee6c5] hover:underline">{siteConfig.email}</a></dd></div>
              <div><dt className="muted">Business hours</dt><dd className="font-bold">{siteConfig.businessHours}</dd></div>
              <div><dt className="muted">Service area</dt><dd className="font-bold">Calgary, Alberta — exact coverage confirmed by quote</dd></div>
            </dl>
            <div className="mt-6"><WhatsAppButton/></div>
          </div>
          <div className="card overflow-hidden p-6">
            <h2 className="text-xl font-extrabold">Find us</h2>
            <p className="muted mt-2 text-sm">{siteConfig.address}</p>
            <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="ASH Cleaning Service location on Google Maps"
                src="https://www.google.com/maps?q=10220%208%20St%20SW%2C%20Calgary%2C%20AB%20T2W%200H1%2C%20Canada&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=10220%208%20St%20SW%2C%20Calgary%2C%20AB%20T2W%200H1%2C%20Canada"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex font-bold text-[#5ee6c5] hover:underline"
            >Open in Google Maps →</a>
          </div>
          <div className="rounded-2xl border border-[#5ee6c5]/20 bg-[#5ee6c5]/5 p-5 text-sm">
            <strong>Privacy reassurance</strong>
            <p className="muted mt-2">Your details are used only to respond to your enquiry and arrange service. See the Privacy Policy for more information.</p>
          </div>
        </aside>
        <QuoteForm/>
      </div>
    </section>
  </>;
}
