import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div>
      <section id="about" className="about">
          <h2>Sobre mí</h2>
          <p>
            Soy desarrollador Full Stack con experiencia en React, PHP, MySQL y MongoDB.
            Me enfoco en construir aplicaciones funcionales, escalables y bien estructuradas.
          </p>
        </section>
      <section className="hero">
        <h1>Full Stack Developer</h1>
        <p>React · PHP · MySQL · MongoDB</p>
      </section>
      <section id="projects">
        <h2>Proyectos</h2>

        <div className="grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>
        <section id="contact" className="contact">
            <h2>Contacto</h2>

            <p>¿Quieres trabajar conmigo?</p>

            <a href="mailto:tucorreo@gmail.com" className="btn">
              📧 Enviar Email
            </a>
          </section>
    </div>
  );
}