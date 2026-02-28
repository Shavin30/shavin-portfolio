import { useMemo, useState } from 'react'

function ProjectsSection({ projects }) {
  const [activeProject, setActiveProject] = useState('')

  const featuredProjects = useMemo(() => projects.slice(0, 3), [projects])

  return (
    <section className="section-block reveal" id="projects">
      <div className="section-head">
        <h2>Projects</h2>
        <p>Click any card to expand details.</p>
      </div>
      <div className="project-grid">
        {featuredProjects.map((project) => {
          const isActive = activeProject === project.title
          return (
            <article
              key={project.title}
              className={`project-card ${isActive ? 'expanded' : ''}`}
              onClick={() =>
                setActiveProject((current) =>
                  current === project.title ? '' : project.title
                )
              }
            >
              <img
                src={project.coverImage}
                alt={`${project.title} preview`}
                className="project-image"
                loading="lazy"
              />
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={`project-extra ${isActive ? 'show' : ''}`}>
                <p>{project.details}</p>
                <div className="stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <a
                  href={`#/project/${project.slug}`}
                  className="project-link"
                  onClick={(event) => event.stopPropagation()}
                >
                  Explore
                </a>
              </div>
            </article>
          )
        })}
      </div>
      <div className="projects-footer">
        <a
          className="btn btn-ghost"
          href="#/projects"
        >
          See More Projects
        </a>
      </div>
    </section>
  )
}

export default ProjectsSection
