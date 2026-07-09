import { IconGithub, IconLinkedin, IconMail, IconScholar, IconX } from '../components/Icons'
import { PageHeader } from '../components/PageHeader'
import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'

const iconMap = {
  mail: IconMail,
  github: IconGithub,
  linkedin: IconLinkedin,
  scholar: IconScholar,
  x: IconX,
}

export function GroupInfo() {
  const { ref: bioRef, inView: bioInView } = useInView<HTMLDivElement>()
  const { ref: factsRef, inView: factsInView } = useInView<HTMLDListElement>()
  const { ref: linksRef, inView: linksInView } = useInView<HTMLDivElement>()

  return (
    <>
      <PageHeader eyebrow="Group Info" title="Group Info" lead="Who we are and how to reach us." />
      <section className="section">
        <div className="about-grid">
          <div ref={bioRef} className={`about-bio reveal ${bioInView ? 'in-view' : ''}`}>
            {profile.groupOverview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl
            ref={factsRef}
            className={`about-facts reveal ${factsInView ? 'in-view' : ''}`}
            style={{ transitionDelay: '120ms' }}
          >
            <div>
              <dt>Affiliation</dt>
              <dd>{profile.affiliation}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="section section-alt contact">
        <div className="section-head">
          <h2>Get in touch</h2>
        </div>
        <div
          ref={linksRef}
          className={`contact-links reveal ${linksInView ? 'in-view' : ''}`}
        >
          {profile.socials.map((social) => {
            const Icon = iconMap[social.icon]
            return (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="contact-link">
                <Icon />
                {social.label}
              </a>
            )
          })}
        </div>
      </section>
    </>
  )
}
