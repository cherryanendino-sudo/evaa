import SectionHeader from '../components/SectionHeader'

const coreSubjects = [
  'English',
  'Filipino',
  'Mathematics',
  'Science',
  'Araling Panlipunan',
  'Values Education',
  'MAPEH',
  'Technology & Livelihood Education',
]

const shsTracks = [
  { name: 'STEM', desc: 'Science, Technology, Engineering, and Mathematics', status: 'To be confirmed' },
  { name: 'ABM', desc: 'Accountancy, Business, and Management', status: 'To be confirmed' },
  { name: 'HUMSS', desc: 'Humanities and Social Sciences', status: 'To be confirmed' },
  { name: 'GAS', desc: 'General Academic Strand', status: 'To be confirmed' },
  { name: 'TVL', desc: 'Technical-Vocational-Livelihood', status: 'To be confirmed' },
]

const distinctives = [
  {
    icon: 'var(--accent-green)',
    title: 'Faith & Learning Integration',
    text: 'Biblical principles are woven into every subject, helping students see all knowledge as connected to God.',
  },
  {
    icon: 'var(--accent-blue)',
    title: 'Character Formation',
    text: 'Beyond academics, EVAA focuses on developing integrity, responsibility, and compassion in every student.',
  },
  {
    icon: 'var(--accent-purple)',
    title: 'Health Principles',
    text: 'Students learn the value of physical well-being through health education, balanced nutrition, and active campus life.',
  },
  {
    icon: 'var(--accent-yellow)',
    title: 'Service-Oriented Projects',
    text: 'Community outreach and service activities are integral to the learning experience at EVAA.',
  },
]

export default function Academics() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b" style={{ borderColor: 'var(--border-primary)' }}>
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <span className="mono-label mb-4 block">Academics</span>
          <h1
            style={{
              fontWeight: 200,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
            }}
          >
            Academic Programs
          </h1>
          <p className="mt-4 max-w-2xl" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
            At East Visayan Adventist Academy, secondary education is delivered within a
            Christ-centered framework that balances strong academics with values education
            and practical life skills.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Overview" title="Educational Approach" />
        <div className="mt-8 max-w-3xl">
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            As a complete secondary boarding school, EVAA follows government-mandated curricula
            while integrating the principles of Seventh-day Adventist education throughout classroom
            instruction and campus life. The academy is recognized by DepEd Region VIII, which
            issues tuition and fee approvals and provisional compliance certificates for the school.
          </p>
        </div>
      </section>

      {/* Junior High */}
      <section
        className="border-y"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Grades 7-10" title="Junior High School" />
          <p className="mt-4 max-w-2xl mb-8" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
            The Junior High School program covers Grades 7 through 10, providing a strong foundation
            in core subjects complemented by Christian values integration.
          </p>

          <div className="grid grid-cols-2 gap-px md:grid-cols-4" style={{ backgroundColor: 'var(--border-primary)' }}>
            {coreSubjects.map((subject) => (
              <div key={subject} className="card flex items-center gap-3">
                <span className="status-dot" style={{ backgroundColor: 'var(--accent-blue)' }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{subject}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm" style={{ color: 'var(--text-muted)' }}>
            Additional electives and enrichment subjects may be offered. Contact the school for the complete curriculum guide.
          </p>
        </div>
      </section>

      {/* Senior High */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Grades 11-12" title="Senior High School" />
        <p className="mt-4 max-w-2xl mb-8" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
          The Senior High School program follows the K-12 curriculum tracks. Available strands
          are subject to confirmation by the school administration.
        </p>

        <div className="flex flex-col">
          {shsTracks.map((track, i) => (
            <div
              key={track.name}
              className="row-hover flex items-center gap-4 border-b py-4"
              style={{
                borderColor: 'var(--border-primary)',
                borderTop: i === 0 ? '1px solid var(--border-primary)' : undefined,
              }}
            >
              <span
                className="mono-tag"
                style={{
                  color: 'var(--text-primary)',
                  fontWeight: 700,
                  minWidth: '60px',
                  fontFamily: 'Space Mono, monospace',
                }}
              >
                {track.name}
              </span>
              <span className="flex-1" style={{ color: 'var(--text-secondary)' }}>
                {track.desc}
              </span>
              <span className="mono-label hidden sm:block">{track.status}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Adventist Distinctives */}
      <section
        className="border-t"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-tertiary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Distinctives" title="Adventist Education" />
          <div className="mt-10 grid grid-cols-1 gap-px md:grid-cols-2" style={{ backgroundColor: 'var(--border-primary)' }}>
            {distinctives.map((item) => (
              <div key={item.title} className="card">
                <div className="mb-3 flex items-center gap-2">
                  <span className="status-dot" style={{ backgroundColor: item.icon }} />
                  <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>
                    {item.title.split(' ')[0]}
                  </span>
                </div>
                <h4
                  className="mb-2"
                  style={{ fontWeight: 400, color: 'var(--text-primary)' }}
                >
                  {item.title}
                </h4>
                <p className="text-sm" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
