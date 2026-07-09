import { IconArrowUpRight } from '../components/Icons'
import { PageHeader } from '../components/PageHeader'
import { profile, type HighlightItem } from '../data/profile'
import { useInView } from '../hooks/useInView'

function HighlightCard({ index, highlight }: { index: number; highlight: HighlightItem }) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <article
      ref={ref}
      className={`award-card reveal ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="award-head">
        <h3>{highlight.title}</h3>
        <span className="award-year">{highlight.date}</span>
      </div>
      {highlight.description && <p className="award-desc">{highlight.description}</p>}
      {highlight.href && (
        <div className="pub-links">
          <a href={highlight.href} target="_blank" rel="noreferrer">
            Read more
            <IconArrowUpRight className="icon-inline" />
          </a>
        </div>
      )}
    </article>
  )
}

export function Highlights() {
  return (
    <>
      <PageHeader
        eyebrow="Highlights"
        title="Highlights"
        lead="Recent achievements, media mentions, and milestones."
      />
      <section className="section">
        <div className="award-grid">
          {profile.highlights.map((highlight, i) => (
            <HighlightCard key={highlight.title} index={i} highlight={highlight} />
          ))}
        </div>
      </section>
    </>
  )
}
