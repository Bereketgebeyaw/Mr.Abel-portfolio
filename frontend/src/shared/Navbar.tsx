import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/journey', label: 'Journey' },
  { to: '/skills', label: 'Skills & Certificates' },
  { to: '/contact', label: 'Contact' },
] as const

function linkClass(isActive: boolean) {
  return isActive ? 'navLink navLinkActive' : 'navLink'
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navWrap">
      <div className="container nav">
        <div className="brand">
          <span className="brandMark" aria-hidden="true">
            ⚓︎
          </span>
          <div className="brandText">
            <div className="brandName">Abel Bewunet</div>
            <div className="brandRole">Maritime Cadet</div>
          </div>
        </div>

        <button
          className="navToggle btn btnGhost"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <nav id="site-nav" className={open ? 'navMenu navMenuOpen' : 'navMenu'}>
          {navItems.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) => linkClass(isActive)}
              end={it.to === '/'}
              onClick={() => setOpen(false)}
            >
              {it.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

