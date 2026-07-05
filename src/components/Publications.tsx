import { profile, type Publication } from '../data/profile'
import { useInView } from '../hooks/useInView'
import { IconArrowUpRight } from './Icons'

function PublicationItem({ index, pub }: { index: number; pub: Publication }) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <article
      ref={ref}
      className={`pub-item reveal ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${(index % 6) * 60}ms` }}
    >
      <div className="pub-item-head">
        <h3>{pub.title}</h3>
        <span className="tag">{pub.type}</span>
      </div>
      <p className="pub-authors">{pub.authors}</p>
      <p className="pub-venue">{pub.venue}</p>
      {pub.links && pub.links.length > 0 && (
        <div className="pub-links">
          {pub.links.map((link) => (
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

export function Publications() {
  const years = [...new Set(profile.publications.map((p) => p.year))].sort((a, b) => b - a)
  let runningIndex = 0

  return (
    <section id="publications" className="section">
      <div className="section-head">
        <h2>Publications</h2>
      </div>
      <div className="pub-list">
        {years.map((year) => (
          <div key={year} className="pub-year-group">
            <div className="pub-year">{year}</div>
            <div className="pub-items">
              {profile.publications
                .filter((p) => p.year === year)
                .map((pub) => (
                  <PublicationItem key={pub.title} index={runningIndex++} pub={pub} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

