import { InfoPage } from '../components/InfoPage'
import { profile } from '../data/profile'

export function GroupMeeting() {
  return (
    <InfoPage
      eyebrow="Group Info"
      title="Group Meeting"
      lead="When and where the group gets together."
      paragraphs={profile.groupMeeting}
    />
  )
}
