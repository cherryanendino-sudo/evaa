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
  { title: 'Faith', text: 'Knowing God personally and trusting in His guidance for life.', img: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=300&h=200&fit=crop' },
  { title: 'Integrity', text: 'Living honestly and consistently in word and action.', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop' },
  { title: 'Service', text: "Following Christ's example of selfless service to others.", img: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop' },
  { title: 'Excellence', text: "Striving for the best in all endeavors, for God's glory.", img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop' },
]

export default function SpiritualLife() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-image-section border-b" style={{ borderColor: 'var(--border-primary)' }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1600&h=900&fit=crop)',
          }}
        />
        <div className="hero-content mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <span className="mono-label mb-4 inline-block border px-3 py-1.5" style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}>
            Spiritual Life
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
            Faith at the Center
          </h1>
          <p className="mt-4 max-w-2xl" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
            Spiritual growth is at the heart of life at EVAA. As a Seventh-day Adventist institution,
            the academy integrates faith into every aspect of campus life.
          </p>
        </div>
      </section>

      {/* Spiritual emphasis with image */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Foundation" title="Spiritual Emphasis" />
        <div className="mt-8 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div>
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
          <div className="img-card">
            <img
              src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop"
              alt="Worship and faith"
              loading="lazy"
            />
            <div className="img-overlay">
              <span className="mono-label" style={{ color: '#fff' }}>Campus Worship</span>
            </div>
          </div>
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

      {/* Core Values with images */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Values" title="Core Values" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="card card-hover">
              <div className="img-card mb-4" style={{ aspectRatio: '3/2' }}>
                <img src={v.img} alt={v.title} loading="lazy" />
              </div>
              <h4
                style={{
                  fontWeight: 200,
                  fontSize: '1.5rem',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
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
          <div className="mt-8 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
            <div className="card" style={{ borderLeft: '3px solid var(--accent-green)' }}>
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
            <div className="img-card">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=350&fit=crop"
                alt="Community service"
                loading="lazy"
              />
              <div className="img-overlay">
                <span className="mono-label" style={{ color: '#fff' }}>Service & Outreach</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
