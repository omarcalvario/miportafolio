import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return <footer className="footer"><div className="footer-main"><div><h2>¿Tienes un proyecto en mente?</h2><p>Diseñemos una experiencia digital que responda a lo que necesitas.</p></div><a className="footer-cta" href="mailto:omarcf.info@gmail.com">Hablemos <ArrowUpRight size={22}/></a></div>
    <div className="footer-bottom"><Link href="/" className="wordmark">OMAR CALVARIO</Link><p>UI/UX, Web, Product, Design Systems, AI-Assisted Design</p><a href="mailto:omarcf.info@gmail.com">omarcf.info@gmail.com</a><a href="tel:+522224819074">+52 22 24 81 90 74</a><span>© 2026 Omar Calvario</span></div></footer>;
}
