import Image from "next/image";
import { portfolio } from "@/data/portfolio";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
    <path d="M5 19 19 5M8 5h11v11" fill="none" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const SectionHeading = ({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) => (
  <div className="section-heading">
    <span>{eyebrow}</span>
    <h2>{title}</h2>
  </div>
);

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.name,
    jobTitle: portfolio.role,
    email: `mailto:${portfolio.email}`,
    telephone: portfolio.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lázaro Cárdenas",
      addressRegion: "Michoacán",
      addressCountry: "MX",
    },
    alumniOf: portfolio.education.institution,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero" id="inicio">
        <div className="hero-glow" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="status">
              <span />
              {portfolio.availability}
            </div>
            <p className="eyebrow">Hola, soy {portfolio.shortName}</p>
            <h1>
              Desarrollo soluciones digitales con <em>propósito.</em>
            </h1>
            <p className="hero-intro">{portfolio.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proyectos">
                Ver proyectos <Arrow />
              </a>
              <a className="text-link" href={`mailto:${portfolio.email}`}>
                Hablemos
              </a>
            </div>
          </div>

          <div className="portrait-card">
            <Image
              className="portrait-photo"
              src="/images/profile/jose-eduardo.webp"
              alt={`Retrato profesional de ${portfolio.name}`}
              fill
              priority
              sizes="(max-width: 820px) 92vw, 34vw"
            />
            <div className="portrait-caption">
              <span>{portfolio.specialty}</span>
              <span>Michoacán</span>
            </div>
          </div>
        </div>
        <div className="shell marquee" aria-label="Areas de especialidad">
          {portfolio.focus.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section shell" id="sobre-mi">
        <SectionHeading eyebrow="01 / Sobre mí" title="Tecnología con sentido práctico." />
        <div className="about-grid">
          <p className="lead">{portfolio.about}</p>
          <div className="stats">
            {portfolio.stats.map((stat) => (
              <div className="stat" key={stat.value}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="experiencia">
        <div className="shell">
          <SectionHeading eyebrow="02 / Experiencia" title="Operación, soporte y liderazgo." />
          <div className="timeline">
            {portfolio.experience.map((item) => (
              <article className="timeline-row" key={item.period}>
                <span className="timeline-period">{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p className="timeline-company">{item.company}</p>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="habilidades">
        <SectionHeading eyebrow="03 / Conocimientos" title="Herramientas al servicio de buenas soluciones." />
        <div className="skills-grid">
          {portfolio.skills.map((skill, index) => (
            <div className="skill" key={skill}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{skill}</strong>
            </div>
          ))}
        </div>
        <div className="credentials-grid">
          <article className="credential-card">
            <span>Formación</span>
            <p>{portfolio.education.period}</p>
            <h3>{portfolio.education.degree}</h3>
            <p>{portfolio.education.institution}</p>
          </article>
          <article className="credential-card">
            <span>Cursos y certificaciones</span>
            <ul>
              {portfolio.certifications.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="credential-card">
            <span>Idiomas</span>
            <ul>
              {portfolio.languages.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="section projects-section" id="proyectos">
        <div className="shell">
          <SectionHeading eyebrow="04 / Proyectos" title="Trabajo seleccionado." />
          <div className="projects-grid">
            {portfolio.projects.map((project) => (
              <article className="project-card" key={project.number}>
                <a href={project.href} aria-label={`Ver ${project.title}`}>
                  <div className="project-image">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 760px) 100vw, 50vw"
                    />
                    <span className="project-arrow"><Arrow /></span>
                  </div>
                  <div className="project-meta">
                    <span>{project.number}</span>
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <ul>
                        {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                      </ul>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">05 / Contacto</p>
            <h2>¿Construimos algo que valga la pena?</h2>
          </div>
          <div className="contact-action">
            <p>
              Cuéntame sobre tu idea, producto o reto. Podemos empezar con una
              conversación breve y concreta.
            </p>
            <a href={`mailto:${portfolio.email}`}>
              {portfolio.email} <Arrow />
            </a>
            <a href={`tel:${portfolio.phone}`}>
              {portfolio.phone} <Arrow />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
