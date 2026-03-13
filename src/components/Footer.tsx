import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-primary)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex h-8 w-8 items-center justify-center border text-xs font-bold"
                style={{
                  borderColor: 'var(--text-primary)',
                  fontFamily: 'Space Mono, monospace',
                  color: 'var(--text-primary)',
                }}
              >
                E
              </div>
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: 'Space Mono, monospace', letterSpacing: '0.15em', color: 'var(--text-primary)' }}
              >
                EVAA
              </span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-tertiary)', lineHeight: '1.7' }}>
              East Visayan Adventist Academy of Leyte, Inc. A Christ-centered boarding academy nurturing mind, body, and spirit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="mono-label block mb-4">Quick Links</span>
            <div className="flex flex-col gap-2">
              {[
                { path: '/about', label: 'About Us' },
                { path: '/academics', label: 'Academics' },
                { path: '/admissions', label: 'Admissions' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm no-underline transition-colors duration-150"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Campus */}
          <div>
            <span className="mono-label block mb-4">Campus</span>
            <div className="flex flex-col gap-2">
              {[
                { path: '/campus', label: 'Facilities' },
                { path: '/spiritual-life', label: 'Spiritual Life' },
                { path: '/campus-life', label: 'Events' },
                { path: '/alumni', label: 'Alumni' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm no-underline transition-colors duration-150"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="mono-label block mb-4">Contact</span>
            <div className="flex flex-col gap-3">
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                Academy Heights, Brgy. San Sotero, Javier, Leyte 6511, Philippines
              </p>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                P.O. Box 241, 6500 Tacloban City
              </p>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                +63 935 835 7254
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row"
          style={{ borderColor: 'var(--border-primary)' }}
        >
          <span className="mono-label">
            &copy; {new Date().getFullYear()} East Visayan Adventist Academy
          </span>
          <span className="mono-label">"The Guardian of Truth"</span>
        </div>
      </div>
    </footer>
  )
}
