import Link from "next/link";
export default function NotFound() { return <main id="main" className="page-width not-found"><span className="section-number">ERROR 404</span><h1>Esta página<br/><em>no existe.</em></h1><Link href="/" className="button-primary">Volver al inicio ↗</Link></main>; }
