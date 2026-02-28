function JourneySection({ timeline }) {
  return (
    <section className="section-block reveal" id="journey">
      <div className="section-head">
        <h2>Journey</h2>
      </div>
      <div className="timeline journey-scroll">
        {timeline.map((item) => (
          <article key={item.year + item.title} className="timeline-item">
            <span className="dot" />
            <div>
              <p className="year">{item.year}</p>
              <h3>{item.title}</h3>
              <ul className="timeline-points">
                {item.detail
                  .split(',')
                  .map((point) => point.trim())
                  .filter(Boolean)
                  .map((point) => (
                    <li key={point}>{point}</li>
                  ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default JourneySection
