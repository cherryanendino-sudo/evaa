import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

interface NavbarProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/academics', label: 'Academics' },
  { path: '/campus', label: 'Campus' },
  { path: '/spiritual-life', label: 'Faith' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/campus-life', label: 'Events' },
  { path: '/alumni', label: 'Alumni' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 border-b"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-primary)',
      }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 no-underline"
          style={{ color: 'var(--text-primary)' }}
        >
          <div
            className="flex h-8 w-8 items-center justify-center border text-xs font-bold"
            style={{
              borderColor: 'var(--text-primary)',
              fontFamily: 'Space Mono, monospace',
            }}
          >
            E
          </div>
          <span
            className="hidden text-xs tracking-widest uppercase sm:block"
            style={{ fontFamily: 'Space Mono, monospace', letterSpacing: '0.15em' }}
          >
            EVAA
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className="no-underline transition-all duration-150"
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const,
                  padding: '6px 12px',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--text-primary)' : 'transparent',
                  backgroundColor: isActive ? 'var(--text-primary)' : 'transparent',
                  color: isActive ? 'var(--bg-primary)' : 'var(--text-secondary)',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Mobile menu button */}
          <button
            className="flex h-8 w-8 flex-col items-center justify-center gap-1 border lg:hidden"
            style={{
              borderColor: 'var(--border-primary)',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className="block h-px w-4"
              style={{ backgroundColor: 'var(--text-primary)' }}
            />
            <span
              className="block h-px w-4"
              style={{ backgroundColor: 'var(--text-primary)' }}
            />
            <span
              className="block h-px w-4"
              style={{ backgroundColor: 'var(--text-primary)' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="border-b lg:hidden"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-primary)',
          }}
        >
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="no-underline py-2 px-3 transition-all duration-150"
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase' as const,
                      borderLeft: isActive ? '2px solid var(--text-primary)' : '2px solid transparent',
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      backgroundColor: isActive ? 'var(--bg-tertiary)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
