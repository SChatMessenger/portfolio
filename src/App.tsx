import './App.css'
import { About } from './components/About'
import { Awards } from './components/Awards'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Publications } from './components/Publications'
import { Research } from './components/Research'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Projects />
        <Awards />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
