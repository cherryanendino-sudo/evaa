import SectionHeader from '../components/SectionHeader'

const programs = [
  {
    name: 'Weekly Chapel',
    desc: 'Regular chapel services that bring the campus community together in worship, reflection, and spiritual growth.',
    status: 'Weekly',
    color: 'var(--accent-green)',
  },
  {
    name: 'Sabbath Services',
    desc: 'Weekly Sabbath worship at the campus church, a central part of the EVAA experience.',
    status: 'Weekly',
    color: 'var(--accent-blue)',
  },
  {
    name: 'Week of Prayer',
    desc: 'A dedicated week each semester focused on spiritual renewal, prayer, and deeper Bible study.',
    status: 'Semestral',
    color: 'var(--accent-purple)',
  },
  {
    name: 'Dorm Worships',
    desc: 'Daily devotional gatherings in the dormitories that build community and personal faith.',
    status: 'Daily',
    color: 'var(--accent-yellow)',
  },
  {
    name: 'Bible-Based Instruction',
    desc: 'Scripture is woven into classroom teaching across all subjects, connecting faith with learning.',
    status: 'Daily',
    color: 'var(--accent-green)',
  },
]

const values = [
  { title: 'Faith', text: 'Knowing God personally and trusting in His guidance for life.' },
  { title: 'Integrity', text: 'Living honestly and consistently in word and action.' },
  { title: 'Service', text: 'Following Christ\'s example of selfless service to others.' },
  { title: 'Excellence', text: 'Striving for the best in all endeavors, for God\'s glory.' },
]

export default function SpiritualLife() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b" style={{ borderColor: 'var(--border-primary)' }}>
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <span className="mono-label mb-4 block">Spiritual Life</span>
          <h1
            style={{
              fontWeight: 200,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
            }}
          >
            Faith at the Center
          </h1>
          <p className="mt-4 max-w-2xl" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
            Spiritual growth is at the heart of life at EVAA. As a Seventh-day Adventist institution,
            the academy integrates faith into every aspect of campus life.
          </p>
        </div>
      </section>

      {/* Spiritual emphasis */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Foundation" title="Spiritual Emphasis" />
        <div className="mt-8 max-w-3xl">
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Spiritual growth is at the heart of life at EVAA. As a Seventh-day Adventist institution,
            the academy integrates faith into classroom learning, co-curricular activities, and daily
            routines, encouraging students to know God personally and to follow Christ's example of service.
          </p>
          <p className="mt-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Worship experiences, Bible-based instruction, and campus church activities help shape
            students' values and character, guiding them toward a life of faith, integrity, and
            service to others.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section
        className="border-y"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Programs" title="Worship & Activities" />
          <div className="mt-10 flex flex-col">
            {programs.map((prog, i) => (
              <div
                key={prog.name}
                className="row-hover flex items-start gap-4 border-b py-5"
                style={{
                  borderColor: 'var(--border-primary)',
                  borderTop: i === 0 ? '1px solid var(--border-primary)' : undefined,
                }}
              >
                <div className="flex items-center gap-2 pt-0.5" style={{ minWidth: '90px' }}>
                  <span className="status-dot" style={{ backgroundColor: prog.color }} />
                  <span className="mono-label">{prog.status}</span>
                </div>
                <div className="flex-1">
                  <h4 style={{ fontWeight: 400, color: 'var(--text-primary)' }}>{prog.name}</h4>
                  <p className="mt-1 text-sm" style={{ color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
                    {prog.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Values" title="Core Values" />
        <div className="mt-10 grid grid-cols-2 gap-px md:grid-cols-4" style={{ backgroundColor: 'var(--border-primary)' }}>
          {values.map((v) => (
            <div key={v.title} className="card text-center">
              <h4
                style={{
                  fontWeight: 200,
                  fontSize: '1.75rem',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {v.title}
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Service */}
      <section
        className="border-t"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-tertiary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Outreach" title="Service & Mission" />
          <div className="mt-8 card max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="status-dot" style={{ backgroundColor: 'var(--accent-green)' }} />
              <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>Community</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              EVAA encourages students to put their faith into action through community service
              projects, outreach programs, and mission activities. These experiences help students
              develop compassion, leadership skills, and a heart for serving others. Specific
              outreach programs and community partnerships are coordinated through the school's
              spiritual life department.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
