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
  },
  {
    name: 'Campus Ministries',
    desc: 'Student-led spiritual groups involved in worship planning, outreach, and faith-sharing activities.',
    color: 'var(--accent-purple)',
  },
  {
    name: 'School Band',
    desc: 'The EVAA band performs at ceremonies, parades, and competitions, developing musical talent and teamwork.',
    color: 'var(--accent-yellow)',
  },
  {
    name: 'Drill Team',
    desc: 'The fancy drill team trains for precision performances and inter-school drill competitions.',
    color: 'var(--accent-green)',
  },
]

export default function CampusLife() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b" style={{ borderColor: 'var(--border-primary)' }}>
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <span className="mono-label mb-4 block">Campus Life & Events</span>
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

      {/* Organizations */}
      <section
        className="border-y"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Organizations" title="Student Leadership" />
          <div className="mt-10 grid grid-cols-1 gap-px md:grid-cols-2" style={{ backgroundColor: 'var(--border-primary)' }}>
            {organizations.map((org) => (
              <div key={org.name} className="card">
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
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Media" title="Stay Connected" />
        <div className="mt-8 card max-w-2xl">
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
      </section>
    </div>
  )
}
