import { useState } from 'react'

function ProjectDetailPage({ project }) {
  const [lightboxImage, setLightboxImage] = useState('')
  const closeLightbox = () => setLightboxImage('')

  return (
    <>
      <section className="project-detail section-block reveal visible">
        <a href="#/" className="project-back">
          Back to Portfolio
        </a>
        <p className="project-type">{project.type}</p>
        <h1>{project.title}</h1>
        <p className="intro">{project.longDescription}</p>

        <img
          className="detail-hero-image"
          src={project.coverImage}
          alt={`${project.title} main preview`}
        />

        <div className="detail-gallery">
          {project.gallery.map((image, index) => (
            <button
              type="button"
              key={image}
              className="detail-image-btn"
              onClick={() => setLightboxImage(image)}
              aria-label={`Open ${project.title} gallery image ${index + 1}`}
            >
              <img
                src={image}
                alt={`${project.title} gallery preview ${index + 1}`}
                loading="lazy"
              />
            </button>
          ))}
        </div>

        <div className="detail-stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="detail-actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary">
            View GitHub Repo
          </a>
        </div>
      </section>
      {lightboxImage && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button type="button" className="lightbox-backdrop" onClick={closeLightbox} aria-label="Close image preview" />
          <img src={lightboxImage} alt="Expanded project preview" />
        </div>
      )}
    </>
  )
}

export default ProjectDetailPage
