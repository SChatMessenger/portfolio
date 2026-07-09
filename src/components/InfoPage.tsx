import { useInView } from '../hooks/useInView'
import { PageHeader } from './PageHeader'

export function InfoPage({
  eyebrow,
  title,
  lead,
  paragraphs,
}: {
  eyebrow: string
  title: string
  lead: string
  paragraphs: string[]
}) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} lead={lead} />
      <section className="section">
        <div ref={ref} className={`page-content reveal ${inView ? 'in-view' : ''}`}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </>
  )
}
