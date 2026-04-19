import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tech">
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      <div className="links">
        <a href={project.demo} target="_blank">🚀 Demo</a>
        <a href={project.github} target="_blank">💻 GitHub</a>
      </div>
    </motion.div>
  );
}