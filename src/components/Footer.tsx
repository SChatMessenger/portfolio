import { profile } from '../data/profile'
import { IconArrowUp } from './Icons'

export function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <a href="#top" className="footer-top" aria-label="Back to top">
        <IconArrowUp />
      </a>
    </footer>
  )
}

