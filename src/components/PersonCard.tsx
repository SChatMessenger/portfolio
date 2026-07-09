import type { Person } from '../data/profile'
import { useInView } from '../hooks/useInView'

function initialsOf(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
}

export function PersonCard({ index, person }: { index: number; person: Person }) {
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
