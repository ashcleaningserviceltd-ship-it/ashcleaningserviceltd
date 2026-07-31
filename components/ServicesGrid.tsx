import Link from "next/link";
import { services } from "@/config/site";

export function ServiceCard({service}:{service:(typeof services)[number]}){return <article className="card group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-[#5ee6c5]/40"><div className="mb-5 grid size-12 place-items-center rounded-2xl bg-[#5ee6c5]/10 text-2xl text-[#5ee6c5]">{service.icon}</div><h3 className="h3">{service.title}</h3><p className="muted mt-3 flex-1">{service.short}</p><div className="mt-6 flex flex-wrap gap-3"><Link href={`/services/${service.slug}`} className="font-bold text-[#5ee6c5]">View service →</Link><Link href={`/contact?service=${service.slug}#quote-form`} className="font-bold text-white">Request a quote</Link></div></article>}
export function ServicesGrid(){return <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(s=><ServiceCard key={s.slug} service={s}/>)}</div>}
