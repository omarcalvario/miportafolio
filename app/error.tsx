"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return <main id="main" className="page-width not-found"><h1>No pudimos cargar esta página.</h1><p>Inténtalo de nuevo para continuar explorando el portfolio.</p><button className="button-primary" onClick={reset}>Reintentar</button></main>;
}
