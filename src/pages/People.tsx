import { profile, type Person } from '../data/profile'
import { PageHeader } from '../components/PageHeader'
import { useInView } from '../hooks/useInView'

function initialsOf(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
}

function PersonCard({ index, person }: { index: number; person: Person }) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <article
      ref={ref}
      className={`person-card reveal ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {person.photo ? (
        <img className="person-photo" src={person.photo} alt={person.name} />
      ) : (
        <div className="person-avatar" aria-hidden="true">
          {initialsOf(person.name)}
        </div>
      )}
      <h3>{person.name}</h3>
      <p className="person-role">{person.role}</p>
    </article>
  )
}

export function People() {
  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title="People"
        lead={`The students and collaborators working alongside ${profile.name} on ${profile.field.toLowerCase()}.`}
      />
      <section className="section">
        <div className="section-head">
          <h2>Ph.D. Scholars</h2>
        </div>
        <div className="people-grid">
          {profile.team.phdScholars.map((person, i) => (
            <PersonCard key={person.name} index={i} person={person} />
          ))}
        </div>
      </section>
      <section className="section section-alt">
        <div className="section-head">
          <h2>Alumni</h2>
        </div>
        <div className="people-grid">
          {profile.team.alumni.map((person, i) => (
            <PersonCard key={person.name} index={i} person={person} />
          ))}
        </div>
      </section>
    </>
  )
}
