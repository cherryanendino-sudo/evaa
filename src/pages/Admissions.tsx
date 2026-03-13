import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

const reasons = [
  {
    color: 'var(--accent-green)',
    title: 'Christ-Centered Environment',
    text: 'Every aspect of campus life is grounded in Christian values and Adventist education principles.',
    img: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=250&fit=crop',
  },
  {
    color: 'var(--accent-blue)',
    title: 'Boarding Community',
    text: 'A structured, supportive residential setting where students build independence and lifelong friendships.',
    img: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=250&fit=crop',
  },
  {
    color: 'var(--accent-purple)',
    title: 'Holistic Development',
    text: 'Academic rigor combined with spiritual growth, character formation, and practical life skills.',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop',
  },
  {
    color: 'var(--accent-yellow)',
    title: 'Peaceful Setting',
    text: 'A quiet hilltop campus surrounded by nature, away from urban distractions, ideal for focused learning.',
    img: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&h=250&fit=crop',
  },
]

const requirements = [
  'Report Card (Form 138 / SF9)',
  'Certificate of Good Moral Character',
  'PSA Birth Certificate',
  'Baptismal Certificate (if applicable)',
  '2x2 ID Photos',
  'Medical Certificate',
  'Entrance Examination Results',
]

const steps = [
  { num: '01', title: 'Inquire', desc: 'Contact the school office or visit campus to learn more about EVAA.' },
  { num: '02', title: 'Submit Documents', desc: 'Prepare and submit the required admission documents.' },
  { num: '03', title: 'Examination', desc: 'Take the entrance examination as scheduled by the school.' },
  { num: '04', title: 'Interview', desc: 'Participate in an interview with the admissions committee.' },
  { num: '05', title: 'Enrollment', desc: 'Upon acceptance, complete enrollment and dormitory registration.' },
]

export default function Admissions() {
  return (
    <div>
      {/* Hero with image */}
      <section className="hero-image-section border-b" style={{ borderColor: 'var(--border-primary)' }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600&h=900&fit=crop)',
          }}
        />
        <div className="hero-content mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <span className="mono-label mb-4 inline-block border px-3 py-1.5" style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}>
            Admissions
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
            Join EVAA
          </h1>
          <p className="mt-4 max-w-2xl" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
            Begin your journey at East Visayan Adventist Academy. We welcome students who seek
            academic excellence within a faith-centered boarding community.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-filled btn">Start Your Application</Link>
          </div>
        </div>
      </section>

      {/* Why EVAA with images */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Why EVAA" title="Why Study Here" />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="card card-hover">
              <div className="img-card mb-4" style={{ aspectRatio: '16/9' }}>
                <img src={r.img} alt={r.title} loading="lazy" />
              </div>
              <div className="mb-3 flex items-center gap-2">
                <span className="status-dot" style={{ backgroundColor: r.color }} />
                <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>
                  {r.title.split(' ')[0]}
                </span>
              </div>
              <h4 className="mb-2" style={{ fontWeight: 400, color: 'var(--text-primary)' }}>
                {r.title}
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who Can Apply */}
      <section
        className="border-y"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Eligibility" title="Who Can Apply" />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="card" style={{ borderLeft: '3px solid var(--accent-blue)' }}>
              <div className="mb-3 flex items-center gap-2">
                <span className="status-dot" style={{ backgroundColor: 'var(--accent-blue)' }} />
                <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>JHS</span>
              </div>
              <h4 className="mb-2" style={{ fontWeight: 400, color: 'var(--text-primary)' }}>
                Junior High School
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                Incoming Grade 7 students and transferees from other schools. Must have completed
                elementary education or the equivalent grade level for transfer students.
              </p>
            </div>
            <div className="card" style={{ borderLeft: '3px solid var(--accent-purple)' }}>
              <div className="mb-3 flex items-center gap-2">
                <span className="status-dot" style={{ backgroundColor: 'var(--accent-purple)' }} />
                <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>SHS</span>
              </div>
              <h4 className="mb-2" style={{ fontWeight: 400, color: 'var(--text-primary)' }}>
                Senior High School
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                Grade 11 and 12 applicants. Available tracks and strands are to be confirmed
                with the school administration. Contact the registrar for current offerings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Process" title="How to Apply" />
        <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="flex flex-col">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="row-hover flex items-start gap-6 border-b py-6"
                  style={{
                    borderColor: 'var(--border-primary)',
                    borderTop: i === 0 ? '1px solid var(--border-primary)' : undefined,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 200,
                      fontSize: '2rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1,
                      minWidth: '48px',
                    }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h4 style={{ fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {step.title}
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm" style={{ color: 'var(--text-muted)' }}>
              The exact admission process may vary. Please contact the school office for the most current procedures.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="img-card">
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&h=600&fit=crop"
                alt="Students at EVAA"
                loading="lazy"
              />
              <div className="img-overlay">
                <span className="mono-label" style={{ color: '#fff' }}>Welcome to EVAA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section
        className="border-y"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Documents" title="Admission Requirements" />
          <div className="mt-8 flex flex-col">
            {requirements.map((req, i) => (
              <div
                key={req}
                className="flex items-center gap-3 border-b py-3"
                style={{
                  borderColor: 'var(--border-primary)',
                  borderTop: i === 0 ? '1px solid var(--border-primary)' : undefined,
                }}
              >
                <span className="status-dot" style={{ backgroundColor: 'var(--accent-green)' }} />
                <span style={{ color: 'var(--text-secondary)' }}>{req}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm" style={{ color: 'var(--text-muted)' }}>
            Requirements are subject to change. Please confirm with the registrar's office before submission.
          </p>
        </div>
      </section>

      {/* Tuition */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Fees" title="Tuition & Fees" />
        <div className="mt-8 card max-w-2xl" style={{ borderLeft: '3px solid var(--accent-yellow)' }}>
          <div className="mb-3 flex items-center gap-2">
            <span className="status-dot" style={{ backgroundColor: 'var(--accent-yellow)' }} />
            <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>DepEd Approved</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Tuition and miscellaneous fees at EVAA are approved by DepEd Region VIII and are
            published annually through regional memoranda. Fees are subject to change each school
            year. For the latest approved fee schedule, please contact the school treasurer or
            refer to the most recent DepEd Region VIII Regional Memorandum.
          </p>
          <div className="mt-4">
            <a
              href="https://region8.deped.gov.ph/wp-content/uploads/2024/08/RM-s2024-931.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Latest Fee Memo
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="border-t"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-tertiary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3
                style={{
                  fontWeight: 200,
                  fontSize: '1.5rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                Ready to apply?
              </h3>
              <p className="mt-1 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                Get in touch with us to start the enrollment process.
              </p>
            </div>
            <Link to="/contact" className="btn-filled btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
