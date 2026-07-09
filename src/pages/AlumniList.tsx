import { PageHeader } from '../components/PageHeader'
import { PersonCard } from '../components/PersonCard'
import { profile } from '../data/profile'

export function AlumniList() {
  return (
    <>
      <PageHeader eyebrow="Group Info" title="Alumni List & Map" lead="Where our alumni are now." />
      <section className="section">
        <div className="people-grid">
          {profile.team.alumni.map((person, i) => (
            <PersonCard key={person.name} index={i} person={person} />
          ))}
        </div>
      </section>
    </>
  )
}
