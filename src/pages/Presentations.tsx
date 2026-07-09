import { PageHeader } from '../components/PageHeader'
import { profile, type PresentationEntry } from '../data/profile'
import { useInView } from '../hooks/useInView'

function PresentationCard({ index, item }: { index: number; item: PresentationEntry }) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <article
      ref={ref}
      className={`award-card reveal ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${(index % 6) * 70}ms` }}
    >
      <h3>{item.title}</h3>
      {item.authors && <p className="pub-authors">{item.authors}</p>}
      <p className="award-desc">{item.detail}</p>
    </article>
  )
}

export function Presentations() {
  return (
    <>
      <PageHeader
        eyebrow="Presentation"
        title="Presentations & Meetings"
        lead="Talks, invited seminars, and conference presentations."
      />
      <section className="section">
        <div className="section-head">
          <h2>Sajeev Philip</h2>
        </div>
        <div className="award-grid">
          {profile.presentations.map((item, i) => (
            <PresentationCard key={item.title + i} index={i} item={item} />
          ))}
        </div>
      </section>
      <section className="section section-alt">
        <div className="section-head">
          <h2>Research Group at IIT Delhi</h2>
        </div>
        <div className="award-grid">
          {profile.groupPresentations.map((item, i) => (
            <PresentationCard key={item.title + i} index={i} item={item} />
          ))}
        </div>
      </section>
    </>
  )
}
