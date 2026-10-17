import { contactItems, navItems, personalBlocks, projects, skillGroups } from './data/portfolioData';

const currentYear = new Date().getFullYear();

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand" href="#inicio" aria-label="Ir a inicio">
            <span className="brand-mark">[TN]</span>
            <span className="brand-text">[TU NOMBRE]</span>
          </a>

          <nav className="main-nav" aria-label="Navegación principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button-primary nav-cta" href="#contacto">
            Contactar
          </a>

          <button className="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero section-padded">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Desarrollador Web Junior</p>
              <h1>
                Hola, soy <span>[TU NOMBRE]</span>
              </h1>
              <h2>Desarrollador Web Junior</h2>
              <p className="lead">
                Estoy construyendo mi camino en el desarrollo web con enfoque en experiencias limpias,
                interfaces modernas y soluciones funcionales. Aquí irán mis proyectos, aprendizajes y mi
                forma de trabajar.
              </p>

              <div className="action-row">
                <a className="button button-primary" href="#proyectos">
                  Ver proyectos
                </a>
                <a className="button button-secondary" href="#contacto">
                  Contactar
                </a>
              </div>

              <div className="social-links" aria-label="Redes sociales">
                <a href="#" aria-label="GitHub">
                  GitHub
                </a>
                <a href="#" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Espacio para fotografía personal">
              <div className="portrait-frame">
                <div className="portrait-placeholder">
                  <span>Foto</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="section-padded">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Sobre mí</p>
              <h3>Perfil profesional</h3>
            </div>

            <div className="about-grid">
              <article className="info-card large-card">
                <h4>Presentación</h4>
                <p>
                  [Escribe aquí una breve presentación personal, tu enfoque, qué te interesa del desarrollo y
                  cómo quieres crecer profesionalmente en el sector.]
                </p>
              </article>

              <article className="info-card">
                <h4>Formación</h4>
                <p>[Añadir formación académica, cursos o estudios relevantes.]</p>
              </article>

              <article className="info-card">
                <h4>Experiencia</h4>
                <p>[Añadir proyectos, prácticas, trabajos o experiencia previa en desarrollo web.]</p>
              </article>

              <article className="info-card">
                <h4>Objetivos</h4>
                <p>[Describir tus metas profesionales, áreas que quieres dominar y cómo te ves en el futuro.]</p>
              </article>

              <article className="info-card">
                <h4>Forma de trabajar</h4>
                <p>[Explicar tu forma de aprender, plantear soluciones y trabajar en equipo.]</p>
              </article>
            </div>
          </div>
        </section>

        <section id="tecnologias" className="section-padded section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Tecnologías</p>
              <h3>Tecnologías y conocimientos</h3>
            </div>

            <div className="skill-groups">
              {skillGroups.map((group) => (
                <article key={group.title} className="skill-group">
                  <h4>{group.title}</h4>
                  <div className="skill-grid">
                    {group.items.map((skill) => (
                      <div key={`${group.title}-${skill.name}`} className="skill-card">
                        <div className="skill-header">
                          <span className="skill-icon">{skill.icon ?? skill.name.charAt(0)}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        {skill.description ? <p>{skill.description}</p> : null}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="section-padded">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Proyectos</p>
              <h3>Mis proyectos</h3>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article key={project.name} className={`project-card accent-${project.accent}`}>
                  <div className="project-visual" aria-label={`Imagen del proyecto ${project.name}`}>
                    <span>Preview</span>
                  </div>
                  <div className="project-content">
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <ul className="project-stack">
                      {project.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <div className="project-links">
                      <a href={project.demoUrl} target="_blank" rel="noreferrer">
                        {project.demoLabel}
                      </a>
                      <a href={project.repoUrl} target="_blank" rel="noreferrer">
                        {project.repoLabel}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padded section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Personal</p>
              <h3>Aficiones y motivaciones</h3>
            </div>

            <div className="personal-grid">
              {personalBlocks.map((block) => (
                <article key={block.title} className="info-card">
                  <h4>{block.title}</h4>
                  <ul>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section-padded contact-section">
          <div className="container contact-shell">
            <div className="section-heading align-left">
              <p className="eyebrow">Contacto</p>
              <h3>Hablemos</h3>
            </div>

            <div className="contact-list">
              {contactItems.map((contact) => (
                <a key={contact.label} className="contact-item" href={contact.href}>
                  <span>{contact.label}</span>
                  <strong>{contact.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-shell">
          <p>© {currentYear} [TU NOMBRE]</p>
          <div className="footer-links">
            <a href="#inicio">Inicio</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
