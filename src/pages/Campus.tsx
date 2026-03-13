import SectionHeader from '../components/SectionHeader'

const facilities = [
  {
    name: 'Academic Buildings',
    desc: 'Classrooms and learning spaces designed for focused study and instruction.',
    color: 'var(--accent-blue)',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&h=300&fit=crop',
  },
  {
    name: 'Dormitories',
    desc: 'Separate residential halls for boys and girls, providing a safe and structured living environment.',
    color: 'var(--accent-green)',
    img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&h=300&fit=crop',
  },
  {
    name: 'Cafeteria',
    desc: 'On-campus dining facility serving nutritious meals for the boarding community.',
    color: 'var(--accent-yellow)',
    img: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=500&h=300&fit=crop',
  },
  {
    name: 'Campus Church',
    desc: 'A dedicated worship space for Sabbath services, chapel programs, and spiritual gatherings.',
    color: 'var(--accent-purple)',
    img: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&h=300&fit=crop',
  },
]

const boardingFeatures = [
  {
    title: 'Self-Care & Responsibility',
    text: 'Students learn to care for their own laundry, uniforms, bed linens, and towels, and to keep their living spaces in order.',
    icon: 'var(--accent-green)',
  },
  {
    title: 'Time Management',
    text: 'Residents manage their time between classes, study periods, worship, and recreation within a structured daily schedule.',
    icon: 'var(--accent-blue)',
  },
  {
    title: 'Financial Responsibility',
    text: 'Students learn to budget their monthly allowance wisely, developing practical money management skills.',
    icon: 'var(--accent-yellow)',
  },
  {
    title: 'Community Living',
    text: 'Living on campus means forming close friendships, joining dorm worships and group activities, and experiencing a supportive community that feels like a second family.',
    icon: 'var(--accent-purple)',
  },
]

const campusGallery = [
  { src: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&h=400&fit=crop', label: 'Green Spaces' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop', label: 'Learning' },
  { src: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=400&fit=crop', label: 'Community' },
  { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=400&fit=crop', label: 'Campus Walk' },
]

export default function Campus() {
  return (
    <div>
      {/* Hero with image */}
      <section className="hero-image-section border-b" style={{ borderColor: 'var(--border-primary)' }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=900&fit=crop)',
          }}
        />
        <div className="hero-content mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <span className="mono-label mb-4 inline-block border px-3 py-1.5" style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}>
            Campus & Boarding
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
            Life on the Hill
          </h1>
          <p className="mt-4 max-w-2xl" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
            A peaceful campus at Academy Heights, surrounded by nature and designed for focused learning.
          </p>
        </div>
      </section>

      {/* Campus Setting with image */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Location" title="Campus Setting" />
        <div className="mt-8 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div>
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
          <div className="img-card">
            <img
              src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=600&h=400&fit=crop"
              alt="Campus natural setting"
              loading="lazy"
            />
            <div className="img-overlay">
              <span className="mono-label" style={{ color: '#fff' }}>Hilltop Campus</span>
            </div>
          </div>
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

      {/* Campus Gallery */}
      <div className="border-y" style={{ borderColor: 'var(--border-primary)' }}>
        <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {campusGallery.map((img) => (
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

      {/* Facilities */}
      <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Facilities" title="Campus Infrastructure" />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {facilities.map((f) => (
              <div key={f.name} className="card card-hover">
                <div className="img-card mb-4" style={{ aspectRatio: '16/9' }}>
                  <img src={f.img} alt={f.name} loading="lazy" />
                </div>
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
      <section className="border-t" style={{ borderColor: 'var(--border-primary)' }}>
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Boarding" title="The Boarding Experience" />
          <div className="mt-4 grid grid-cols-1 items-start gap-10 md:grid-cols-5">
            <div className="md:col-span-3">
              <p className="mb-8" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                As a boarding school, EVAA gives students a structured environment to grow in
                independence and responsibility. Life on campus builds skills that last a lifetime.
              </p>
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
                    <div className="flex items-center gap-2" style={{ minWidth: '200px' }}>
                      <span className="status-dot" style={{ backgroundColor: feature.icon }} />
                      <span className="mono-label" style={{ paddingTop: '2px' }}>
                        {feature.title}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="img-card">
                <img
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=500&h=600&fit=crop"
                  alt="Student community life"
                  loading="lazy"
                />
                <div className="img-overlay">
                  <span className="mono-label" style={{ color: '#fff' }}>Community Living</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety placeholder */}
      <section
        className="border-t"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-tertiary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Safety" title="Supervision & Care" />
          <div className="mt-8 card max-w-2xl" style={{ borderLeft: '3px solid var(--accent-green)' }}>
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
