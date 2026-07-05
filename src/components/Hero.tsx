import { profile } from '../data/profile'
import { AtmosphereBackground } from './AtmosphereBackground'

export function Hero() {
  return (
    <section id="top" className="hero">
      <AtmosphereBackground className="hero-atmosphere" />
      <div className="hero-inner">
        <p className="eyebrow">
          {profile.role} · {profile.field}
        </p>
        <h1>{profile.name}</h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <p className="hero-affiliation">
          {profile.affiliation} · {profile.location}
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#research">
            View research
          </a>
          <a className="btn btn-ghost" href={profile.cvHref} target="_blank" rel="noreferrer">
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

