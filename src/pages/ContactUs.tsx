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

export function ContactUs() {
  const { ref: leadRef, inView: leadInView } = useInView<HTMLParagraphElement>()
  const { ref: linksRef, inView: linksInView } = useInView<HTMLDivElement>()

  return (
    <>
      <PageHeader eyebrow="Group Info" title="Contact Us" lead="Get in touch." />
      <section className="section contact">
        <p ref={leadRef} className={`contact-lead reveal ${leadInView ? 'in-view' : ''}`}>
          Reach out about collaborations, questions on the work, or opportunities.
        </p>
        <div
          ref={linksRef}
          className={`contact-links reveal ${linksInView ? 'in-view' : ''}`}
          style={{ transitionDelay: '100ms' }}
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
