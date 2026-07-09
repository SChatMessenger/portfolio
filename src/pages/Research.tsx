import { PageHeader } from '../components/PageHeader'
import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'

function ResearchCard({ index, title, description }: { index: number; title: string; description: string }) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <article
      ref={ref}
      className={`research-card reveal ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export function Research() {
  return (
    <>
      <PageHeader eyebrow="Research" title="Research" lead="Core themes and questions driving the work." />
      <section className="section">
        <div className="research-grid">
          {profile.researchThemes.map((theme, i) => (
            <ResearchCard key={theme.title} index={i} title={theme.title} description={theme.description} />
          ))}
        </div>
      </section>
    </>
  )
}
