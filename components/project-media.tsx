"use client";

import Image from "next/image";
import { useState } from "react";

type Props = { src?: string; poster?: string; alt: string; caption?: string; captions?: string; kind?: "image" | "video" | "gif" };

export function ProjectMedia({ src, poster, alt, caption, captions, kind = "image" }: Props) {
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  return <figure className="project-media">
    <div className="media-frame">
      {!src || failed ? <div className="media-empty"><strong>{alt}</strong><p>{failed ? "No se pudo cargar el archivo. Revisa su ruta." : "Espacio preparado para agregar material del proyecto."}</p></div>
        : kind === "video" ? <video controls playsInline preload="none" poster={poster} aria-label={alt} onError={() => setFailed(true)}><source src={src}/>{captions && <track default kind="captions" src={captions} srcLang="es" label="Español"/>}</video>
        : kind === "gif" && !playing ? <div className="media-empty">{poster && <Image src={poster} alt={alt} fill sizes="90vw"/>}<button type="button" onClick={() => setPlaying(true)}>Reproducir GIF</button></div>
        : <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 85vw" unoptimized={kind === "gif"} onError={() => setFailed(true)}/>}
    </div>
    {kind === "gif" && playing && <button type="button" onClick={() => setPlaying(false)}>Detener GIF</button>}
    {caption && <figcaption>{caption}</figcaption>}
  </figure>;
}
