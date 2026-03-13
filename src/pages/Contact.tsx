import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'

const contactInfo = [
  {
    label: 'Address',
    value: 'Academy Heights, Brgy. San Sotero, Javier, Leyte 6511, Philippines',
    color: 'var(--accent-green)',
  },
  {
    label: 'Mailing',
    value: 'P.O. Box 241, 6500 Tacloban City, Philippines',
    color: 'var(--accent-blue)',
  },
  {
    label: 'Phone',
    value: '+63 935 835 7254',
    color: 'var(--accent-yellow)',
  },
  {
    label: 'Facebook',
    value: '/eastvisayanadventistacademyofleyte',
    color: 'var(--accent-purple)',
    link: 'https://www.facebook.com/eastvisayanadventistacademyofleyte/',
  },
]

const directions = [
  {
    from: 'Tacloban City',
    time: '~1 hour',
    desc: 'Travel south from Tacloban via the national highway through Javier, then follow signs to Academy Heights, Brgy. San Sotero.',
  },
  {
    from: 'Ormoc City',
    time: '~2 hours',
    desc: 'Travel east from Ormoc through the interior Leyte road network to Javier, Leyte.',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry. The school will respond to your message shortly.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div>
      {/* Hero */}
      <section className="hero-image-section border-b" style={{ borderColor: 'var(--border-primary)' }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1600&h=900&fit=crop)',
          }}
        />
        <div className="hero-content mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <span className="mono-label mb-4 inline-block border px-3 py-1.5" style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}>
            Contact
          </span>
          <h1
            style={{
              fontWeight: 200,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
            }}
          >
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
            We'd love to hear from you. Whether you have questions about admissions, campus life,
            or anything else, reach out and we'll respond as soon as we can.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Details" title="Contact Information" />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {contactInfo.map((info) => (
            <div key={info.label} className="card" style={{ borderLeft: `3px solid ${info.color}` }}>
              <div className="mb-2 flex items-center gap-2">
                <span className="status-dot" style={{ backgroundColor: info.color }} />
                <span className="mono-label">{info.label}</span>
              </div>
              {info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm no-underline"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {info.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Directions */}
      <section
        className="border-y"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Directions" title="How to Get Here" />
          <div className="mt-8 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
            <div>
              {directions.map((d, i) => (
                <div key={d.from} className="card mb-4" style={{ borderLeft: i === 0 ? '3px solid var(--accent-green)' : '3px solid var(--accent-blue)' }}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="mono-tag" style={{ color: 'var(--text-primary)' }}>{d.from}</span>
                    <span className="mono-label">{d.time}</span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Map placeholder with image */}
            <div className="img-card" style={{ aspectRatio: '16/10' }}>
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop"
                alt="Map area"
                loading="lazy"
                style={{ filter: 'grayscale(60%) contrast(1.1)' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.3)',
                }}
              >
                <span className="mono-label mb-2" style={{ color: '#fff' }}>Location</span>
                <p className="mb-4 text-sm text-center px-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Academy Heights, Brgy. San Sotero, Javier, Leyte
                </p>
                <a
                  href="https://www.google.com/maps/search/East+Visayan+Adventist+Academy+Javier+Leyte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ borderColor: '#fff', color: '#fff' }}
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Inquire" title="Send a Message" />
        <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-5">
          <form onSubmit={handleSubmit} className="md:col-span-3">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mono-label mb-2 block">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full border px-4 py-3 text-sm outline-none"
                  style={{
                    borderColor: 'var(--border-primary)',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mono-label mb-2 block">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full border px-4 py-3 text-sm outline-none"
                  style={{
                    borderColor: 'var(--border-primary)',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="mono-label mb-2 block">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="w-full border px-4 py-3 text-sm outline-none"
                style={{
                  borderColor: 'var(--border-primary)',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
                placeholder="What is this about?"
              />
            </div>
            <div className="mt-6">
              <label className="mono-label mb-2 block">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full resize-none border px-4 py-3 text-sm outline-none"
                style={{
                  borderColor: 'var(--border-primary)',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
                placeholder="Your message..."
              />
            </div>
            <div className="mt-6">
              <button type="submit" className="btn-filled btn">
                Send Message
              </button>
            </div>
          </form>
          <div className="md:col-span-2">
            <div className="img-card">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=600&fit=crop"
                alt="EVAA Campus"
                loading="lazy"
              />
              <div className="img-overlay">
                <span className="mono-label" style={{ color: '#fff' }}>Visit Us at EVAA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
