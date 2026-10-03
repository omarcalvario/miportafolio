"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [{ href: "/#work", label: "Work" }, { href: "/about", label: "About" }, { href: "/#process", label: "Process" }, { href: "/contact", label: "Contact" }];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return <header className="nav-wrap" onKeyDown={event => { if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); } }}>
    <nav className="nav-shell" aria-label="Navegación principal"><Link href="/" className="wordmark" onClick={() => setOpen(false)}>OMAR CALVARIO</Link>
      <div className="nav-links">{links.map(item => <Link key={item.label} href={item.href}>{item.label}</Link>)}<a href="mailto:omarcf.info@gmail.com" className="nav-contact">Hablemos <ArrowUpRight size={15}/></a></div>
      <button ref={toggle} className="menu-toggle" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </nav>
    {open && <nav id="mobile-navigation" className="mobile-menu" aria-label="Navegación móvil">{links.map(item => <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<a href="mailto:omarcf.info@gmail.com" onClick={() => setOpen(false)}>Hablemos</a></nav>}
  </header>;
}
