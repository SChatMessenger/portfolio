import { useEffect, useState } from 'react'
import casLogo from '../cas.png'
import iitdLogo from '../IITD.svg'
import image1 from '../1.png'
import image2 from '../2.png'
import image3 from '../2.jpeg'

const STEP_DURATION = 5000

const heroSteps = [
  { type: 'duo' },
  { type: 'image', src: image3 },
  { type: 'video', src: `${import.meta.env.BASE_URL}3.mp4` },
  { type: 'video', src: `${import.meta.env.BASE_URL}4.mp4` },
  { type: 'video', src: `${import.meta.env.BASE_URL}5.mp4` },
] as const

export function Hero() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep((current) => (current + 1) % heroSteps.length)
    }, STEP_DURATION)
    return () => clearTimeout(timer)
  }, [step])

  const current = heroSteps[step]

  return (
    <section id="top" className="hero">
      {current.type === 'duo' && (
        <div className="hero-image-duo" aria-hidden="true">
          <div className="hero-image-half" style={{ backgroundImage: `url(${image1})` }} />
          <div className="hero-image-half" style={{ backgroundImage: `url(${image2})` }} />
        </div>
      )}
      {current.type === 'image' && (
        <img key={step} className="hero-media" src={current.src} alt="" aria-hidden="true" />
      )}
      {current.type === 'video' && (
        <video key={step} className="hero-media" src={current.src} autoPlay muted playsInline aria-hidden="true" />
      )}
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-inner">
        <img className="hero-logo" src={casLogo} alt="Centre for Atmospheric Sciences logo" />
        <div className="hero-text">
          <p className="eyebrow">Welcome</p>
          <h1>Atmospheric Chemistry Group</h1>
          <p className="hero-tagline">Centre for Atmospheric Sciences, IIT Delhi</p>
        </div>
        <img className="hero-logo" src={iitdLogo} alt="IIT Delhi logo" />
      </div>
    </section>
  )
}
