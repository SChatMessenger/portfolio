import { profile, type EducationItem } from '../data/profile'
import { useInView } from '../hooks/useInView'

function TimelineItem({ index, item }: { index: number; item: EducationItem }) {
  const { ref, inView } = useInView<HTMLLIElement>()
  return (
    <li
      ref={ref}
      className={`timeline-item reveal ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="timeline-period">{item.period}</div>
      <div className="timeline-body">
        <h3>{item.degree}</h3>
        <p>{item.institution}</p>
        {item.detail && <p className="timeline-detail">{item.detail}</p>}
      </div>
    </li>
  )
}

export function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="section-head">
        <h2>Education</h2>
      </div>
      <ol className="timeline">
        {profile.education.map((item, i) => (
          <TimelineItem key={item.degree} index={i} item={item} />
        ))}
      </ol>
      <div className="section-cta">
        <a className="btn btn-ghost" href={profile.cvHref} target="_blank" rel="noreferrer">
          Download full CV
        </a>
      </div>
    </section>
  )
}
