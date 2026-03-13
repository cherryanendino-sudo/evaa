import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

const stats = [
  { label: 'Founded', value: '1992' },
  { label: 'Type', value: 'Boarding' },
  { label: 'Grades', value: '7-12' },
  { label: 'Location', value: 'Leyte' },
]

const highlights = [
  {
    tag: 'Academics',
    color: 'var(--accent-blue)',
    title: 'Christ-Centered Education',
    text: 'A complete secondary curriculum integrating faith, strong academics, and practical life skills within the Adventist education framework.',
    link: '/academics',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
  },
  {
    tag: 'Boarding',
    color: 'var(--accent-green)',
    title: 'Campus Living',
    text: 'A structured boarding environment where students grow in independence, responsibility, and community on a peaceful hilltop campus.',
    link: '/campus',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
  },
  {
    tag: 'Faith',
    color: 'var(--accent-purple)',
    title: 'Spiritual Growth',
    text: 'Daily worship, Bible instruction, and service activities that shape character and nurture a personal relationship with God.',
    link: '/spiritual-life',
    img: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop',
  },
]

const campusImages = [
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=400&fit=crop', label: 'Classrooms' },
  { src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=400&fit=crop', label: 'Campus Life' },
  { src: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=400&fit=crop', label: 'Community' },
  { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=400&fit=crop', label: 'Students' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop', label: 'Learning' },
  { src: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&h=400&fit=crop', label: 'Nature' },
]

const events = [
  {
    status: 'Upcoming',
    statusColor: 'var(--accent-green)',
    title: 'Pass-in-Review Ceremony',
    description: 'Annual parade and ceremonial review featuring student formations and performances.',
    date: 'School Calendar',
  },
  {
    status: 'Annual',
    statusColor: 'var(--accent-blue)',
    title: 'Band & Drill Performances',
    description: 'Showcase of student band divisions and fancy drill teams.',
    date: 'School Calendar',
  },
  {
    status: 'Spiritual',
    statusColor: 'var(--accent-purple)',
    title: 'Week of Prayer',
    description: 'A dedicated week of spiritual emphasis, worship, and reflection for the entire campus community.',
    date: 'School Calendar',
  },
  {
    status: 'Community',
    statusColor: 'var(--accent-yellow)',
    title: 'Recognition Day',
    description: 'Celebrating student achievements in academics, leadership, and character development.',
    date: 'School Calendar',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero with background image */}
      <section className="hero-image-section border-b" style={{ borderColor: 'var(--border-primary)' }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=900&fit=crop)',
          }}
        />
        <div className="hero-content mx-auto max-w-7xl px-4 py-28 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <span className="mono-label mb-6 inline-block border px-3 py-1.5" style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}>
              Est. 1992 &mdash; Javier, Leyte, Philippines
            </span>
            <h1
              style={{
                fontWeight: 200,
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: 'var(--text-primary)',
              }}
            >
              The Guardian of Truth<br />in Eastern Visayas
            </h1>
            <p
              className="mt-6 max-w-xl"
              style={{
                color: 'var(--text-tertiary)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
              }}
            >
              East Visayan Adventist Academy is a Christ-centered, complete secondary
              boarding school nurturing mind, body, and spirit for service in this
              world and the world to come.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admissions" className="btn-filled btn">
                Inquire Now
              </Link>
              <Link to="/campus" className="btn">
                Explore Campus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b" style={{ borderColor: 'var(--border-primary)' }}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="stat-card"
                style={{
                  borderRight: i < stats.length - 1 ? '1px solid var(--border-primary)' : 'none',
                }}
              >
                <div className="stat-label">{stat.label}</div>
                <div className="stat-value">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights with images */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Why EVAA" title="A Place to Grow" />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <Link
              key={item.tag}
              to={item.link}
              className="card card-hover flex flex-col no-underline group"
            >
              <div className="img-card mb-4" style={{ aspectRatio: '16/10' }}>
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>
              <div className="mb-3 flex items-center gap-2">
                <span className="status-dot" style={{ backgroundColor: item.color }} />
                <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>{item.tag}</span>
              </div>
              <h3
                className="mb-2"
                style={{
                  fontWeight: 300,
                  fontSize: '1.25rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.title}
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Campus image banner */}
      <div className="image-banner">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=400&fit=crop"
          alt="Campus panoramic view"
          loading="lazy"
        />
        <div className="banner-overlay" />
        <span className="floating-badge" style={{ bottom: '1rem', right: '1rem' }}>
          Academy Heights, Javier, Leyte
        </span>
      </div>

      {/* Mission snippet */}
      <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <span className="mono-label mb-6 block">Our Mission</span>
              <blockquote
                style={{
                  fontWeight: 200,
                  fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                  lineHeight: 1.5,
                  color: 'var(--text-secondary)',
                  letterSpacing: '-0.01em',
                }}
              >
                "East Visayan Adventist Academy prepares young people to live lives
                of usefulness and service, reflecting the character of Christ in all
                they do and witnessing to the reality of a living God."
              </blockquote>
              <Link to="/about" className="btn mt-8 inline-block">
                Learn Our Story
              </Link>
            </div>
            <div className="img-card">
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop"
                alt="Students at EVAA"
                loading="lazy"
              />
              <div className="img-overlay">
                <span className="mono-label" style={{ color: '#fff' }}>Student Life at EVAA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="border-t" style={{ borderColor: 'var(--border-primary)' }}>
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Gallery" title="Campus Snapshots" />
          <div className="gallery-grid mt-10">
            {campusImages.map((img) => (
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

      {/* Events */}
      <section
        className="border-t"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-tertiary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Events" title="Campus Activities" />
          <div className="mt-10 flex flex-col">
            {events.map((event, i) => (
              <div
                key={event.title}
                className="row-hover flex items-start gap-4 border-b py-5"
                style={{
                  borderColor: 'var(--border-primary)',
                  borderTop: i === 0 ? '1px solid var(--border-primary)' : undefined,
                }}
              >
                <div className="flex items-center gap-2 pt-1" style={{ minWidth: '100px' }}>
                  <span className="status-dot" style={{ backgroundColor: event.statusColor }} />
                  <span className="mono-label">{event.status}</span>
                </div>
                <div className="flex-1">
                  <h4 style={{ fontWeight: 400, fontSize: '1rem', color: 'var(--text-primary)' }}>
                    {event.title}
                  </h4>
                  <p className="mt-1 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    {event.description}
                  </p>
                </div>
                <span className="mono-label hidden pt-1 sm:block">{event.date}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/campus-life" className="btn">View All Events</Link>
          </div>
        </div>
      </section>

      {/* CTA with image */}
      <section className="border-t" style={{ borderColor: 'var(--border-primary)' }}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center py-16 pr-8">
              <span className="mono-label mb-4 block">Enrollment</span>
              <h3
                style={{
                  fontWeight: 200,
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                Begin your journey at EVAA
              </h3>
              <p className="mt-3 text-sm" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                Join a community committed to excellence, faith, and service.
                Applications are open for Junior and Senior High School students.
              </p>
              <div className="mt-6 flex gap-3">
                <Link to="/admissions" className="btn-filled btn">Apply Now</Link>
                <Link to="/contact" className="btn">Contact Us</Link>
              </div>
            </div>
            <div className="img-card hidden md:block" style={{ aspectRatio: 'auto', minHeight: '300px', border: 'none', borderLeft: '1px solid var(--border-primary)' }}>
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=500&fit=crop"
                alt="Students walking on campus"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
