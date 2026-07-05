import { useState } from 'react'
import { profile } from '../data/profile'
import { IconClose, IconMenu } from './Icons'

const links = [
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#publications', label: 'Publications' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
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
        <a href="#top" className="nav-mark" onClick={() => setOpen(false)}>
          {initials}
        </a>
        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
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

