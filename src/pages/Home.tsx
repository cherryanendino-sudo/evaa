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
  },
  {
    tag: 'Boarding',
    color: 'var(--accent-green)',
    title: 'Campus Living',
    text: 'A structured boarding environment where students grow in independence, responsibility, and community on a peaceful hilltop campus.',
    link: '/campus',
  },
  {
    tag: 'Faith',
    color: 'var(--accent-purple)',
    title: 'Spiritual Growth',
    text: 'Daily worship, Bible instruction, and service activities that shape character and nurture a personal relationship with God.',
    link: '/spiritual-life',
  },
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
      {/* Hero */}
      <section
        className="relative border-b"
        style={{ borderColor: 'var(--border-primary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <span className="mono-label mb-6 block">
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
      <section
        className="border-b"
        style={{ borderColor: 'var(--border-primary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="stat-card"
                style={{
                  borderRight:
                    i < stats.length - 1
                      ? '1px solid var(--border-primary)'
                      : 'none',
                }}
              >
                <div className="stat-label">{stat.label}</div>
                <div className="stat-value">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Why EVAA" title="A Place to Grow" />
        <div className="mt-10 grid grid-cols-1 gap-px md:grid-cols-3" style={{ backgroundColor: 'var(--border-primary)' }}>
          {highlights.map((item) => (
            <Link
              key={item.tag}
              to={item.link}
              className="card card-hover flex flex-col no-underline"
            >
              <div className="mb-4 flex items-center gap-2">
                <span
                  className="status-dot"
                  style={{ backgroundColor: item.color }}
                />
                <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>
                  {item.tag}
                </span>
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
              <p
                className="text-sm"
                style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}
              >
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Mission snippet */}
      <section
        className="border-y"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
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
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
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
                <span
                  className="status-dot"
                  style={{ backgroundColor: event.statusColor }}
                />
                <span className="mono-label">{event.status}</span>
              </div>
              <div className="flex-1">
                <h4
                  style={{
                    fontWeight: 400,
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {event.title}
                </h4>
                <p
                  className="mt-1 text-sm"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {event.description}
                </p>
              </div>
              <span className="mono-label hidden pt-1 sm:block">{event.date}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/campus-life" className="btn">
            View All Events
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        className="border-t"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-tertiary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3
                style={{
                  fontWeight: 200,
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                Begin your journey at EVAA
              </h3>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                Join a community committed to excellence, faith, and service.
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/admissions" className="btn-filled btn">
                Apply Now
              </Link>
              <Link to="/contact" className="btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
