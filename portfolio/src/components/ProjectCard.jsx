export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tech">
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      <div className="links">
        <a href={project.demo}>🚀 Demo</a>
        <a href={project.github}>💻 GitHub</a>
      </div>
    </div>
  );
}