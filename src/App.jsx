import { useEffect, useState } from "react";
import { profile, projects, skills } from "./projects.js";

function Stage({ project, device }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(false), [project.id]);

  if (project.kind === "code") {
    return (
      <div className="stage-body stage-code" key={project.id}>
        <pre tabIndex={0}><code>{project.code}</code></pre>
      </div>
    );
  }

  return (
    <div className={"stage-body device-" + device} key={project.id}>
      <iframe
        className={loaded ? "is-loaded" : ""}
        src={project.path}
        title={"Vista previa de " + project.title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default function App() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const [device, setDevice] = useState("desktop");
  const project = projects.find((p) => p.id === activeId);
  const isLive = project.kind === "live";

  return (
    <>
      <header className="top">
        <a className="brand" href="#inicio">{profile.short}</a>
        <nav aria-label="Principal">
          <a href="#trabajos">Trabajos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero">
          <h1>
            Siete trabajos de un semestre de diseño web, funcionando aquí mismo.
          </h1>
          <p>
            Soy {profile.name}, estudiante de {profile.career}. Cada proyecto de
            abajo se abre en vivo: puedes buscar un pokémon, jugar, o ver cómo
            se adapta una página a un teléfono.
          </p>
        </section>

        <section id="trabajos" className="work" aria-labelledby="t-trabajos">
          <h2 id="t-trabajos" className="sr-only">Trabajos</h2>

          <div className="picker" role="tablist" aria-label="Proyectos" aria-orientation="vertical">
            {projects.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={p.id === activeId}
                className={p.id === activeId ? "is-active" : ""}
                onClick={() => {
                  setActiveId(p.id);
                  if (p.mobileFirst) setDevice("mobile");
                }}
              >
                <span className="picker-title">{p.title}</span>
                <span className="picker-tags">{p.tags.slice(0, 3).join(", ")}</span>
              </button>
            ))}
          </div>

          <div className="stage">
            <div className="stage-bar">
              <span className="stage-name">{project.title}</span>
              {isLive ? (
                <>
                  <div className="toggle" role="group" aria-label="Tamaño de pantalla">
                    <button aria-pressed={device === "desktop"} onClick={() => setDevice("desktop")}>Escritorio</button>
                    <button aria-pressed={device === "mobile"} onClick={() => setDevice("mobile")}>Móvil</button>
                  </div>
                  <a className="open" href={project.path} target="_blank" rel="noreferrer">
                    Abrir en pestaña nueva
                  </a>
                </>
              ) : (
                <span className="stage-note">Código fuente (necesita su propio HTML para correr)</span>
              )}
            </div>
            <Stage project={project} device={device} />
          </div>

          <article className="detail" aria-live="polite">
            <p className="summary">{project.summary}</p>
            <h3>Lo que practiqué</h3>
            <ul>
              {project.learned.map((l) => <li key={l}>{l}</li>)}
            </ul>
            <ul className="tags" aria-label="Tecnologías">
              {project.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        </section>

        <section id="habilidades" className="skills" aria-labelledby="t-hab">
          <h2 id="t-hab">Lo que sé hacer hoy</h2>
          <ul>
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </section>
      </main>

      <footer id="contacto" className="contact">
        <h2>¿Trabajamos juntos?</h2>
        <p>Busco prácticas y proyectos donde seguir aprendiendo desarrollo web.</p>
        <p>
          <a href={"mailto:" + profile.email}>{profile.email}</a>
          {"  "}
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </p>
        <small>Hecho con React y Vite. {profile.name}, matrícula {profile.matricula}.</small>
      </footer>
    </>
  );
}
