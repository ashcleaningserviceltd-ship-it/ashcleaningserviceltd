"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { QuoteButton, WhatsAppButton } from "./Buttons";

const links = [["/","Home"],["/services","Services"],["/about","About"],["/before-after","Before & After"],["/contact","Contact"]] as const;

export function Header() {
  const [open,setOpen]=useState(false); const path=usePathname();
  return <header className="glass sticky top-0 z-50 border-x-0 border-t-0">
    <div className="container flex h-18 items-center justify-between gap-4">
      <Link href="/" className="flex items-center gap-2" aria-label="ASH Cleaning Service home"><span className="grid size-9 place-items-center rounded-xl bg-[#5ee6c5] font-black text-[#08201a]">A</span><span className="leading-tight font-extrabold">ASH <span className="hidden text-[#9eb1ac] sm:inline">Cleaning Service</span></span></Link>
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">{links.map(([href,label])=><Link key={href} href={href} aria-current={path===href?"page":undefined} className={`text-sm font-bold transition-colors hover:text-[#5ee6c5] ${path===href?"text-[#5ee6c5]":"text-[#c5d2ce]"}`}>{label}</Link>)}<QuoteButton label="Get a Free Quote"/></nav>
      <div className="flex items-center gap-2 lg:hidden"><div className="hidden sm:block"><WhatsAppButton label="WhatsApp"/></div><button onClick={()=>setOpen(!open)} className="grid size-11 place-items-center rounded-full border border-white/15" aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu"><span className="text-xl" aria-hidden="true">{open?"×":"≡"}</span></button></div>
    </div>
    {open&&<nav id="mobile-menu" className="container border-t border-white/10 py-4 lg:hidden" aria-label="Mobile navigation"><div className="grid gap-1">{links.map(([href,label])=><Link key={href} href={href} onClick={()=>setOpen(false)} className="rounded-xl px-3 py-3 font-bold hover:bg-white/5">{label}</Link>)}<div className="mt-2 grid grid-cols-2 gap-2"><QuoteButton label="Free Quote"/><WhatsAppButton/></div></div></nav>}
  </header>;
}
