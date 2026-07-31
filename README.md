# ASH Cleaning Service website

Production-oriented lead-generation website built with Next.js 16.2 App Router, TypeScript, React 19 and Tailwind CSS 4.

## Run locally

1. Install Node.js 20.9 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and set the public site URL.
4. Run `npm run dev`, then open `http://localhost:3000`.
5. Before deployment, run `npm run lint`, `npm run typecheck` and `npm run build`.

## Required launch replacements

Edit `config/site.ts` to add the real phone number, WhatsApp number, email, business hours, founder details, booking URL, social links and confirmed service areas. Search the project for `PLACEHOLDER`, `Add verified`, and `replace before launch`.

- Replace placeholder testimonials with customer-approved, verified reviews.
- Replace gallery and case-study placeholders with approved project images.
- Add only verified credentials, business statistics and service coverage.
- Review the starter privacy policy against the actual business and software tools.
- Set `showAvailabilityMessage` to `true` only when that availability statement is accurate.

## WhatsApp

Use an E.164 number without `+`, spaces or punctuation in `siteConfig.whatsappUrl`, for example `https://wa.me/14035550123?text=...`. Test the link on mobile and desktop.

## Quote form

The form validates in the browser and again in `app/api/quote/route.ts`, then sends the complete quote request to `ash.cleaningserviceltd@gmail.com` using FormSubmit's AJAX endpoint.

FormSubmit requires one-time activation. Submit the form once, open the activation email sent by FormSubmit, and click the confirmation link. Check the Gmail spam folder if the activation message is not visible. After activation, new quote requests will be delivered directly to the inbox without opening the customer's email application.

The implementation includes a honeypot and server-side validation. Consider adding Cloudflare Turnstile before running high-volume paid traffic.

## Images

The original hero photograph is in `public/images/ash-cleaning-hero.png` and is rendered through `next/image`. Replace it only with imagery the business has permission to use. Add real before-and-after images with descriptive alt text and dimensions to prevent layout shift.

## SEO

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain. Metadata, canonical URLs, Open Graph, Twitter cards, sitemap, robots rules, LocalBusiness/CleaningService schema, FAQ schema and breadcrumbs are included. Validate structured data after verified business details are added.

## Deploy to Vercel

1. Push the project to a Git provider.
2. Import the repository in Vercel.
3. Add the environment variables from `.env.example`.
4. Deploy, connect the custom domain and set `NEXT_PUBLIC_SITE_URL` to that domain.
5. Run a real quote submission, WhatsApp link test, mobile navigation test and metadata check on the production URL.

No invented prices, reviews, statistics, insurance status, licences or coverage claims are included.
