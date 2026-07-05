import { profile, type Award } from '../data/profile'
import { useCountUp } from '../hooks/useCountUp'
import { useInView } from '../hooks/useInView'

function StatCounter({ label, value, suffix }: { label: string; value: number; suffix?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const count = useCountUp(value, inView)
  return (
    <div ref={ref} className="stat">
      <span className="stat-value">
        {count}
        {suffix ?? ''}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

function AwardCard({ index, award }: { index: number; award: Award }) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <article
      ref={ref}
      className={`award-card reveal ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="award-head">
        <h3>{award.title}</h3>
        <span className="award-year">{award.year}</span>
      </div>
      <p className="award-issuer">{award.issuer}</p>
      {award.description && <p className="award-desc">{award.description}</p>}
    </article>
  )
}

export function Awards() {
  return (
    <section id="awards" className="section">
      <div className="section-head">
        <h2>Awards &amp; Achievements</h2>
      </div>
      <div className="stats-row">
        {profile.stats.map((stat) => (
          <StatCounter key={stat.label} label={stat.label} value={stat.value} suffix={stat.suffix} />
        ))}
      </div>
      <div className="award-grid">
        {profile.awards.map((award, i) => (
          <AwardCard key={award.title} index={i} award={award} />
        ))}
      </div>
    </section>
  )
}
