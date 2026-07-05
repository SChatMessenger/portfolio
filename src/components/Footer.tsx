import { profile } from '../data/profile'
import { IconArrowUp } from './Icons'

export function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <button
        type="button"
        className="footer-top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <IconArrowUp />
      </button>
    </footer>
  )
}
