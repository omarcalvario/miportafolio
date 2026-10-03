import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
export const metadata: Metadata = { metadataBase: new URL("https://omarcalvario.com"), title: { default: "Omar Calvario | UI/UX & Web Designer", template: "%s | Omar Calvario" }, description: "Diseñador digital especializado en UI/UX, diseño web, productos digitales y design systems.", openGraph: { title: "Omar Calvario | UI/UX & Web Designer", description: "Diseño experiencias digitales desde la estructura hasta la interfaz y la implementación.", type: "website", locale: "es_MX" }, twitter: { card: "summary_large_image", title: "Omar Calvario | UI/UX & Web Designer", description: "Diseño experiencias digitales desde la estructura hasta la interfaz y la implementación." } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es" className={`${geist.variable} ${mono.variable}`}><body><a className="skip-link" href="#main">Saltar al contenido</a><Navbar />{children}<Footer /></body></html>; }
