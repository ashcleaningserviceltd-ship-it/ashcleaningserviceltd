// BUSINESS OWNER: Replace every value marked PLACEHOLDER before launch.
export const siteConfig = {
  name: "ASH Cleaning Service",
  shortName: "ASH Cleaning",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.your-domain.ca",
  location: "Calgary, Alberta, Canada",
  address: "10220 8 St SW, Calgary, AB T2W 0H1, Canada",
  phone: "+1 (825) 760-0851",
  phoneHref: "tel:+18257600851",
  email: "ash.cleaningserviceltd@gmail.com",
  emailHref: "mailto:ash.cleaningserviceltd@gmail.com",
  whatsappUrl: "https://wa.me/18257600851?text=Hi%20ASH%20Cleaning%2C%20I%27d%20like%20a%20free%20quote.", // WhatsApp: +1 (825) 760-0851
  bookingUrl: "/contact", // Replace with a real booking URL if used.
  businessHours: "Open 24/7",
  founder: {
    name: "FOUNDER NAME PLACEHOLDER",
    background: "Add the founder’s verified background and story here.",
    credentials: "ADD VERIFIED CREDENTIALS (IF APPLICABLE)",
  },
  socialLinks: {
    facebook: "https://www.facebook.com/profile.php?id=61582273478794",
    instagram: "#",
  },
  // Confirm each neighbourhood before publishing service-area claims.
  serviceAreas: ["Mahogany", "Auburn Bay", "Seton", "Tuscany", "Evanston", "Cranston", "Signal Hill", "Beltline", "Varsity", "Aspen Woods"],
  serviceAreasConfirmed: false,
  showAvailabilityMessage: false, // Only enable if limited recurring slots are genuinely available.
  availabilityMessage: "Limited weekly and bi-weekly cleaning slots may be available.",
  verifiedCredentials: {
    insured: false,
    backgroundChecked: false,
    licensed: false,
  },
} as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  for: string;
  problems: string[];
  includes: string[];
  outcome: string;
};

export const services: Service[] = [
  { slug: "residential-cleaning", title: "Residential Cleaning", short: "Reliable home cleaning shaped around your routine.", icon: "⌂", for: "Busy homeowners, professionals, families, seniors and pet owners.", problems: ["Dust and everyday buildup", "Bathrooms and kitchens that never stay done", "Weekends lost to chores"], includes: ["Kitchens", "Bathrooms", "Bedrooms", "Living areas", "Floors", "Dusting, vacuuming and mopping", "Baseboards and hard-to-reach areas"], outcome: "A consistently fresh home and more time for your life." },
  { slug: "deep-cleaning", title: "Deep Cleaning", short: "A detailed reset for the areas everyday cleaning misses.", icon: "✦", for: "Seasonal resets, holidays, a new baby, post-renovation cleanup or hosting guests.", problems: ["Built-up grime", "Hard water marks", "Neglected edges and detail areas"], includes: ["Detailed kitchen and bathroom cleaning", "Baseboards and edges", "High-touch surfaces", "A cleaning plan matched to your priorities"], outcome: "A deeper sense of clean, calm and comfort." },
  { slug: "move-in-move-out-cleaning", title: "Move-In / Move-Out", short: "Leave your old place spotless or start fresh in your new home.", icon: "⇄", for: "Renters, landlords, property managers and home sellers.", problems: ["Moving-day pressure", "Empty-property dust and residue", "Too many tasks at once"], includes: ["Empty-room cleaning", "Kitchen and bathroom detail", "Floors and surfaces", "Custom priorities by property"], outcome: "One less major task on moving day." },
  { slug: "carpet-cleaning", title: "Carpet Cleaning", short: "Fresh, carefully cleaned carpets for a more comfortable home.", icon: "◇", for: "Homes, rentals and properties with carpets that need a thorough refresh.", problems: ["Everyday dirt and tracked-in debris", "Dust and pet hair", "Carpets that look tired or feel less fresh"], includes: ["Carpet vacuuming", "Deep carpet cleaning", "High-traffic areas", "Service matched to your carpet’s needs"], outcome: "Cleaner, fresher carpets that make your rooms feel renewed." },
  { slug: "garden-cleaning", title: "Garden Cleaning", short: "Seasonal outdoor cleanup for a neat, welcoming property.", icon: "❧", for: "Homeowners needing seasonal or one-time outdoor help.", problems: ["Seasonal debris", "Untidy outdoor areas", "Not enough time for cleanup"], includes: ["General garden cleanup", "Debris collection", "Tidying agreed areas", "Custom scope by property"], outcome: "Outdoor areas that feel cared for and welcoming." },
  { slug: "general-cleaning", title: "General Cleaning", short: "Flexible cleaning support based on your property’s needs.", icon: "＋", for: "Homes and properties that need a custom combination of cleaning tasks.", problems: ["Unusual cleaning priorities", "Multiple spaces needing attention", "A standard package that does not quite fit"], includes: ["A personalized cleaning plan", "Agreed priority areas", "One-time or recurring options", "Home, carpet and garden combinations"], outcome: "Practical support built around what matters most to you." },
];

// PLACEHOLDER TESTIMONIALS: replace with verified customer reviews before launch.
export const testimonials = [
  "The team arrived on time, did an amazing job, and my house has never looked better.",
  "Booking was easy and the cleaners paid attention to every detail. I’ll definitely book again.",
  "It was such a relief to come home and find everything fresh, clean and ready for the weekend.",
];
