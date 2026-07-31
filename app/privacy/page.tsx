import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Privacy Policy",
  "Privacy information for ASH Cleaning Service website enquiries and quote requests.",
  "/privacy",
);

export default function PrivacyPage() {
  return <section className="section">
    <article className="prose-page container max-w-3xl">
      <p className="eyebrow">Legal information</p>
      <h1 className="display mt-4">Privacy Policy</h1>
      <p className="mt-6">Last updated: July 13, 2026</p>
      <div className="mt-10 rounded-2xl border border-dashed border-white/20 p-5">
        <strong>Business owner review required.</strong>
        <p className="mt-2">This practical starter policy must be reviewed against the company’s actual tools, retention practices and Canadian privacy obligations before launch.</p>
      </div>
      <h2>Information we collect</h2>
      <p>When you request a quote, we may collect your name, phone number, email address, neighbourhood or postal code, property details, requested service, preferred schedule and any instructions you submit.</p>
      <h2>How we use information</h2>
      <p>We use enquiry information to respond, prepare a quote, arrange cleaning services, provide customer support and maintain appropriate business records.</p>
      <h2>Form providers and third parties</h2>
      <p>The website form may be connected to an email, CRM, Formspree, Resend or another provider. The selected provider and its privacy terms must be added here before launch. We do not sell personal information.</p>
      <h2>Retention and security</h2>
      <p>ASH Cleaning Service should retain personal information only as long as reasonably needed for the stated purposes and apply safeguards appropriate to the tools in use. Add the verified retention period and security practices here.</p>
      <h2>Your choices</h2>
      <p>You may ask about, correct or request deletion of personal information, subject to applicable legal and business-record requirements.</p>
      <h2>Contact</h2>
      <p>Questions about this policy can be sent to <a href={siteConfig.emailHref} className="font-bold text-[#5ee6c5] hover:underline">{siteConfig.email}</a>.</p>
      <h2>Cookies and analytics</h2>
      <p>No analytics or advertising cookies are included in this starter project. If Meta Pixel, analytics, chat or other tracking is added, update this policy and implement any required consent controls first.</p>
    </article>
  </section>;
}
