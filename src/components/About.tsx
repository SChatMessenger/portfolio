import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'

export function About() {
  const { ref: bioRef, inView: bioInView } = useInView<HTMLDivElement>()
  const { ref: factsRef, inView: factsInView } = useInView<HTMLDListElement>()

  return (
    <section id="about" className="section">
      <div className="section-head">
        <h2>About</h2>
      </div>
      <div className="about-grid">
        <div ref={bioRef} className={`about-bio reveal ${bioInView ? 'in-view' : ''}`}>
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl
          ref={factsRef}
          className={`about-facts reveal ${factsInView ? 'in-view' : ''}`}
          style={{ transitionDelay: '120ms' }}
        >
          <div>
            <dt>Affiliation</dt>
            <dd>{profile.affiliation}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>{profile.field}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
