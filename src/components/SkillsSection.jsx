function SkillsSection({ skillGroups }) {
  return (
    <section className="section-block reveal" id="skills">
      <div className="section-head">
        <h2> My Skills Set</h2>
      </div>
      <div className="skills-rows skills-scroll">
        {skillGroups.map((group) => (
          <article key={group.title} className="skills-row">
            <h3>{group.title}</h3>
            <div className="skills-list">
              {group.skills.map((skill) => {
                const label = typeof skill === 'string' ? skill : skill.label
                const icon = typeof skill === 'string' ? null : skill.icon
                return (
                  <div key={label} className="skill-item">
                    {icon ? (
                      <i className={`skill-icon ${icon}`} aria-hidden="true" />
                    ) : (
                      <span className="skill-icon fallback" aria-hidden="true" />
                    )}
                    <span>{label}</span>
                  </div>
                )
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
