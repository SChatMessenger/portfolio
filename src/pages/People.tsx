import { PageHeader } from '../components/PageHeader'
import { PersonCard } from '../components/PersonCard'
import { profile } from '../data/profile'

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
