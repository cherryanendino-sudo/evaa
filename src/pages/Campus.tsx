import SectionHeader from '../components/SectionHeader'

const facilities = [
  {
    name: 'Academic Buildings',
    desc: 'Classrooms and learning spaces designed for focused study and instruction.',
    color: 'var(--accent-blue)',
  },
  {
    name: 'Dormitories',
    desc: 'Separate residential halls for boys and girls, providing a safe and structured living environment.',
    color: 'var(--accent-green)',
  },
  {
    name: 'Cafeteria',
    desc: 'On-campus dining facility serving nutritious meals for the boarding community.',
    color: 'var(--accent-yellow)',
  },
  {
    name: 'Campus Church',
    desc: 'A dedicated worship space for Sabbath services, chapel programs, and spiritual gatherings.',
    color: 'var(--accent-purple)',
  },
]

const boardingFeatures = [
  {
    title: 'Self-Care & Responsibility',
    text: 'Students learn to care for their own laundry, uniforms, bed linens, and towels, and to keep their living spaces in order.',
  },
  {
    title: 'Time Management',
    text: 'Residents manage their time between classes, study periods, worship, and recreation within a structured daily schedule.',
  },
  {
    title: 'Financial Responsibility',
    text: 'Students learn to budget their monthly allowance wisely, developing practical money management skills.',
  },
  {
    title: 'Community Living',
    text: 'Living on campus means forming close friendships, joining dorm worships and group activities, and experiencing a supportive community that feels like a second family.',
  },
]

export default function Campus() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b" style={{ borderColor: 'var(--border-primary)' }}>
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <span className="mono-label mb-4 block">Campus & Boarding</span>
          <h1
            style={{
              fontWeight: 200,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
            }}
          >
            Life on the Hill
          </h1>
          <p className="mt-4 max-w-2xl" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
            A peaceful campus at Academy Heights, surrounded by nature and designed for focused learning.
          </p>
        </div>
      </section>

      {/* Campus Setting */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Location" title="Campus Setting" />
        <div className="mt-8 max-w-3xl">
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            EVAA sits on a peaceful campus at Academy Heights in Barangay San Sotero, Javier, Leyte,
            surrounded by greenery and fresh air. The location offers a quiet learning environment
            roughly one hour from Tacloban City and around two hours from Ormoc City, providing both
            accessibility and a retreat-like setting for students.
          </p>
          <p className="mt-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            The campus includes academic buildings, a cafeteria, dormitories, and a church, creating
            a closely knit community where students study, worship, eat, and live together.
          </p>
        </div>

        {/* Travel times */}
        <div className="mt-10 grid grid-cols-1 gap-px sm:grid-cols-3" style={{ backgroundColor: 'var(--border-primary)' }}>
          <div className="stat-card">
            <div className="stat-label">From Tacloban</div>
            <div className="stat-value">~1 hr</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">From Ormoc</div>
            <div className="stat-value">~2 hrs</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Elevation</div>
            <div className="stat-value">Hilltop</div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section
        className="border-y"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Facilities" title="Campus Infrastructure" />
          <div className="mt-10 grid grid-cols-1 gap-px md:grid-cols-2" style={{ backgroundColor: 'var(--border-primary)' }}>
            {facilities.map((f) => (
              <div key={f.name} className="card">
                <div className="mb-3 flex items-center gap-2">
                  <span className="status-dot" style={{ backgroundColor: f.color }} />
                  <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>
                    {f.name.split(' ')[0]}
                  </span>
                </div>
                <h4 className="mb-2" style={{ fontWeight: 400, color: 'var(--text-primary)' }}>
                  {f.name}
                </h4>
                <p className="text-sm" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boarding Life */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Boarding" title="The Boarding Experience" />
        <div className="mt-4 max-w-3xl mb-10">
          <p style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
            As a boarding school, EVAA gives students a structured environment to grow in
            independence and responsibility. Life on campus builds skills that last a lifetime.
          </p>
        </div>

        <div className="flex flex-col">
          {boardingFeatures.map((feature, i) => (
            <div
              key={feature.title}
              className="row-hover flex flex-col gap-1 border-b py-5 sm:flex-row sm:items-start sm:gap-6"
              style={{
                borderColor: 'var(--border-primary)',
                borderTop: i === 0 ? '1px solid var(--border-primary)' : undefined,
              }}
            >
              <span
                className="mono-label shrink-0"
                style={{ minWidth: '200px', paddingTop: '2px' }}
              >
                {feature.title}
              </span>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety placeholder */}
      <section
        className="border-t"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-tertiary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Safety" title="Supervision & Care" />
          <div className="mt-8 card max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="status-dot" style={{ backgroundColor: 'var(--accent-green)' }} />
              <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>Safe Campus</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              EVAA maintains a structured and supervised campus environment. Dormitory supervisors,
              faculty members, and staff work together to ensure student safety, well-being, and
              adherence to campus rules. Detailed safety policies and supervision guidelines are
              available from the school administration.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
