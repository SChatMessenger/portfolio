import { useState } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { IconClose, IconMenu } from './Icons'

const sectionLinks = [
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'projects', label: 'Projects' },
  { id: 'awards', label: 'Awards' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const pageLinks = [
  { to: '/people', label: 'People' },
  { to: '/gallery', label: 'Gallery' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/#top" className="nav-mark" onClick={() => setOpen(false)}>
          {initials}
        </Link>
        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {sectionLinks.map((link) => (
            <Link key={link.id} to={`/#${link.id}`} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          {pageLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>
    </header>
  )
}
