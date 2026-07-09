import { InfoPage } from '../components/InfoPage'
import { profile } from '../data/profile'

export function Seminars() {
  return (
    <InfoPage
      eyebrow="Group Info"
      title="Seminars"
      lead="The seminar series the group follows and contributes to."
      paragraphs={profile.seminars}
    />
  )
}
