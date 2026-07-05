import { profile, type Project } from '../data/profile'
import { useInView } from '../hooks/useInView'
import { IconArrowUpRight } from './Icons'

function ProjectCard({ index, project }: { index: number; project: Project }) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <article
      ref={ref}
      className={`project-card reveal ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      {project.links && project.links.length > 0 && (
        <div className="project-links">
          {project.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
              <IconArrowUpRight className="icon-inline" />
            </a>
          ))}
        </div>
      )}
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="section-head">
        <h2>Projects</h2>
      </div>
      <div className="project-grid">
        {profile.projects.map((project, i) => (
          <ProjectCard key={project.title} index={i} project={project} />
        ))}
      </div>
    </section>
  )
}
