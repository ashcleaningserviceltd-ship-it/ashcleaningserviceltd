import Link from "next/link";
export default function NotFound(){return <section className="section"><div className="container text-center"><p className="eyebrow">404</p><h1 className="h2 mt-3">That page has moved out.</h1><p className="muted mt-4">The page you requested could not be found.</p><Link href="/" className="btn btn-primary mt-7">Return home</Link></div></section>}
