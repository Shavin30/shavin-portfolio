import { useState } from 'react'

function ProjectsPage({ projects }) {
  const [activeProject, setActiveProject] = useState('')

  return (
    <section className="section-block reveal">
      <div className="section-head">
        <h2>All Projects</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => {
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
              <button
                type="button"
                className={`project-status ${project.status === 'ongoing' ? 'ongoing' : 'done'}`}
                onClick={(event) => event.stopPropagation()}
              >
                {project.status === 'ongoing' ? 'Ongoing' : 'Done'}
              </button>
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
    </section>
  )
}

export default ProjectsPage
