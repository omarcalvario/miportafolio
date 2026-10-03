import { demoStudies } from "@/lib/demo-studies";
import { Experiment } from "./experiment";
import { ProjectMedia } from "./project-media";

export function DemoStudy({ slug }: { slug: string }) {
  const demo = demoStudies[slug];
  if (!demo) return null;
  return <section className="demo-study">
    <aside className="demo-notice"><strong>Caso demostrativo editable</strong><p>Las decisiones y el flujo siguientes son ejemplos de presentación. No documentan investigación, implementación ni resultados reales del proyecto.</p></aside>
    <div className="study-prose"><h2>Reto de diseño</h2><p>{demo.challenge}</p><h2>Un recorrido posible</h2><ol className="flow-list">{demo.flow.map(step => <li key={step}>{step}</li>)}</ol><h2>Decisiones de UX y UI</h2><p>{demo.decision}</p><h2>Sistema visual</h2><p>Ejemplo de documentación: reunir navegación, botones, formularios, mensajes y espaciado en una biblioteca. Sustituir por los componentes y tokens reales del proyecto.</p></div>
    <ProjectMedia alt="Pantallas y decisiones de interfaz" caption="Galería preparada para screenshots, wireframes y vistas responsive."/>
    <div className="study-prose"><h2>Prototipo e interacción</h2><p>Este componente es una exploración independiente en código. Puedes sustituirlo por una interacción del proyecto.</p></div><Experiment/>
    <ProjectMedia kind="video" alt="Video del recorrido" caption="Añade un MP4 o WebM para mostrar el prototipo con controles de reproducción."/>
    <div className="study-prose"><h2>Implementación</h2><p>Espacio para documentar qué llegó a construirse, con qué herramientas y cuál fue tu participación. La demo anterior pertenece al portfolio.</p><h2>Reflexión de ejemplo</h2><p>{demo.reflection}</p></div>
  </section>;
}
