import { PageHeader } from '../components/PageHeader'
import { profile, type FaqItem } from '../data/profile'
import { useInView } from '../hooks/useInView'

function FaqEntry({ index, item }: { index: number; item: FaqItem }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`faq-item reveal ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <h3>{item.question}</h3>
      <p>{item.answer}</p>
    </div>
  )
}

export function FaqPhd() {
  return (
    <>
      <PageHeader
        eyebrow="Group Info"
        title="FAQ for PhD Applicants"
        lead="Common questions from prospective Ph.D. students."
      />
      <section className="section">
        <div className="page-content">
          {profile.faq.map((item, i) => (
            <FaqEntry key={item.question} index={i} item={item} />
          ))}
        </div>
      </section>
    </>
  )
}
