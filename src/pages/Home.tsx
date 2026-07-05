import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { About } from '../components/About'
import { Awards } from '../components/Awards'
import { Contact } from '../components/Contact'
import { Education } from '../components/Education'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Publications } from '../components/Publications'
import { Research } from '../components/Research'

export function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const target = document.querySelector(hash)
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth' }))
    }
  }, [hash])

  return (
    <>
      <Hero />
      <About />
      <Research />
      <Publications />
      <Projects />
      <Awards />
      <Education />
      <Contact />
    </>
  )
}
