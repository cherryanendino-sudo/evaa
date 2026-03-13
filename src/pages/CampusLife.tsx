import SectionHeader from '../components/SectionHeader'

const featuredEvents = [
  {
    title: 'Pass-in-Review & Parade Ceremony',
    desc: 'A signature EVAA event featuring student formations, the school band, and formal review proceedings. Events like "The Ant Fortress" parade showcase discipline, teamwork, and school pride.',
    status: 'Annual',
    color: 'var(--accent-green)',
  },
  {
    title: 'Band & Fancy Drill Performances',
    desc: 'Student band divisions and fancy drill teams perform in campus events and inter-school competitions, demonstrating skill, coordination, and artistic expression.',
    status: 'Regular',
    color: 'var(--accent-blue)',
  },
  {
    title: 'Recognition Day',
    desc: 'A formal ceremony celebrating student achievements in academics, leadership, character development, and special awards throughout the school year.',
    status: 'Annual',
    color: 'var(--accent-yellow)',
  },
  {
    title: 'Week of Prayer',
    desc: 'A week dedicated to spiritual renewal and deeper faith, with special speakers, worship programs, and campus-wide prayer activities.',
    status: 'Semestral',
    color: 'var(--accent-purple)',
  },
  {
    title: 'Sabbath Programs',
    desc: 'Weekly Sabbath worship services and special programs at the campus church, featuring music, preaching, and fellowship.',
    status: 'Weekly',
    color: 'var(--accent-green)',
  },
]

const organizations = [
  {
    name: 'Supreme Student Government (SSG)',
    desc: 'The student government body representing the student body in campus governance and organizing school-wide activities.',
    color: 'var(--accent-blue)',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop',
  },
  {
    name: 'Campus Ministries',
    desc: 'Student-led spiritual groups involved in worship planning, outreach, and faith-sharing activities.',
    color: 'var(--accent-purple)',
    img: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=250&fit=crop',
  },
  {
    name: 'School Band',
    desc: 'The EVAA band performs at ceremonies, parades, and competitions, developing musical talent and teamwork.',
    color: 'var(--accent-yellow)',
    img: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=250&fit=crop',
  },
  {
    name: 'Drill Team',
    desc: 'The fancy drill team trains for precision performances and inter-school drill competitions.',
    color: 'var(--accent-green)',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=250&fit=crop',
  },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=400&fit=crop', label: 'Campus Events' },
  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop', label: 'Student Life' },
  { src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop', label: 'Performances' },
  { src: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=400&fit=crop', label: 'Community' },
  { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=400&fit=crop', label: 'Activities' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop', label: 'Outdoors' },
]

export default function CampusLife() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-image-section border-b" style={{ borderColor: 'var(--border-primary)' }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600&h=900&fit=crop)',
          }}
        />
        <div className="hero-content mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <span className="mono-label mb-4 inline-block border px-3 py-1.5" style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}>
            Campus Life & Events
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
            Life Beyond the Classroom
          </h1>
          <p className="mt-4 max-w-2xl" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
            From parades to prayer weeks, campus life at EVAA is vibrant, community-driven,
            and deeply connected to faith.
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Events" title="Featured Events" />
        <div className="mt-10 flex flex-col">
          {featuredEvents.map((event, i) => (
            <div
              key={event.title}
              className="row-hover flex flex-col gap-2 border-b py-6 sm:flex-row sm:items-start sm:gap-6"
              style={{
                borderColor: 'var(--border-primary)',
                borderTop: i === 0 ? '1px solid var(--border-primary)' : undefined,
              }}
            >
              <div className="flex items-center gap-2" style={{ minWidth: '110px' }}>
                <span className="status-dot" style={{ backgroundColor: event.color }} />
                <span className="mono-label">{event.status}</span>
              </div>
              <div className="flex-1">
                <h4 style={{ fontWeight: 400, color: 'var(--text-primary)' }}>{event.title}</h4>
                <p className="mt-1 text-sm" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                  {event.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="border-y" style={{ borderColor: 'var(--border-primary)' }}>
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Gallery" title="Campus Moments" />
          <div className="gallery-grid mt-10">
            {galleryImages.map((img) => (
              <div key={img.label} className="gallery-item">
                <img src={img.src} alt={img.label} loading="lazy" />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '0.75rem',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.5))',
                  }}
                >
                  <span className="mono-label" style={{ color: '#fff' }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations with images */}
      <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Organizations" title="Student Leadership" />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {organizations.map((org) => (
              <div key={org.name} className="card card-hover">
                <div className="img-card mb-4" style={{ aspectRatio: '16/9' }}>
                  <img src={org.img} alt={org.name} loading="lazy" />
                </div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="status-dot" style={{ backgroundColor: org.color }} />
                  <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>
                    {org.name.split(' ')[0]}
                  </span>
                </div>
                <h4 className="mb-2" style={{ fontWeight: 400, color: 'var(--text-primary)' }}>
                  {org.name}
                </h4>
                <p className="text-sm" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                  {org.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media / Social */}
      <section className="border-t" style={{ borderColor: 'var(--border-primary)' }}>
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Media" title="Stay Connected" />
          <div className="mt-8 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
            <div className="card" style={{ borderLeft: '3px solid var(--accent-blue)' }}>
              <div className="mb-3 flex items-center gap-2">
                <span className="status-dot" style={{ backgroundColor: 'var(--accent-blue)' }} />
                <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>Facebook</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                Follow the official EVAA Facebook page for the latest campus photos, event updates,
                and community news. The Facebook page serves as the primary channel for live updates
                and multimedia content from school events.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.facebook.com/eastvisayanadventistacademyofleyte/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Visit Facebook Page
                </a>
              </div>
            </div>
            <div className="img-card">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=350&fit=crop"
                alt="Student community"
                loading="lazy"
              />
              <div className="img-overlay">
                <span className="mono-label" style={{ color: '#fff' }}>EVAA Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
