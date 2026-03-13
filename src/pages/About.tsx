import SectionHeader from '../components/SectionHeader'

const keyFacts = [
  { label: 'Full Name', value: 'East Visayan Adventist Academy of Leyte, Inc.' },
  { label: 'Identity', value: 'EVAA; "The Guardian of Truth"' },
  { label: 'Type', value: 'Complete Secondary Boarding School (SDA)' },
  { label: 'Established', value: '1992' },
  { label: 'Grade Levels', value: 'Grades 7-12' },
  { label: 'Location', value: 'Academy Heights, Brgy. San Sotero, Javier, Leyte 6511' },
  { label: 'Language', value: 'English and Filipino' },
  { label: 'Governance', value: 'East Visayan Conference, CPUC, SSD' },
]

const leadership = [
  { role: 'Principal', name: 'Contact school for current administration' },
  { role: 'Registrar', name: 'Contact school for current administration' },
  { role: 'Treasurer', name: 'Contact school for current administration' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b" style={{ borderColor: 'var(--border-primary)' }}>
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <span className="mono-label mb-4 block">About EVAA</span>
          <h1
            style={{
              fontWeight: 200,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
            }}
          >
            Our Story
          </h1>
          <p className="mt-4 max-w-2xl" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
            A Christ-centered boarding academy in Eastern Visayas, shaping young lives since 1992.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="History" title="Our Journey" />
        <div className="mt-8 max-w-3xl">
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            East Visayan Adventist Academy was opened in 1992 to provide a Christ-centered secondary
            education for young people in Eastern Visayas. Located on a peaceful hilltop campus in
            Barangay San Sotero, Javier, Leyte, EVAA was founded under the East Visayan Conference
            of Seventh-day Adventists and has since operated as a complete secondary boarding school.
          </p>
          <p className="mt-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Over the years, the academy has welcomed students from Tacloban City, Ormoc City, and
            surrounding towns, offering a quieter alternative to crowded public schools and a
            community where spiritual growth, academic rigor, and character development are
            integrated daily.
          </p>
          <p className="mt-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            As "The Guardian of Truth," EVAA continues to mold and equip young people for service
            in this world and for the world to come, staying faithful to its original educational mandate.
          </p>
        </div>
      </section>

      {/* Key Facts */}
      <section
        className="border-y"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Quick Facts" />
          <div className="mt-8">
            {keyFacts.map((fact, i) => (
              <div
                key={fact.label}
                className="row-hover flex items-start gap-4 border-b py-4"
                style={{
                  borderColor: 'var(--border-primary)',
                  borderTop: i === 0 ? '1px solid var(--border-primary)' : undefined,
                }}
              >
                <span className="mono-label pt-0.5" style={{ minWidth: '140px' }}>
                  {fact.label}
                </span>
                <span style={{ color: 'var(--text-secondary)' }}>{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Philosophy */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Identity" title="Mission, Vision & Philosophy" />

        <div className="mt-10 grid grid-cols-1 gap-px md:grid-cols-2" style={{ backgroundColor: 'var(--border-primary)' }}>
          <div className="card">
            <div className="mb-4 flex items-center gap-2">
              <span className="status-dot" style={{ backgroundColor: 'var(--accent-green)' }} />
              <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>Mission</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 300 }}>
              East Visayan Adventist Academy prepares young people to live lives of usefulness and
              service, reflecting the character of Christ in all they do and witnessing to the
              reality of a living God.
            </p>
          </div>

          <div className="card">
            <div className="mb-4 flex items-center gap-2">
              <span className="status-dot" style={{ backgroundColor: 'var(--accent-blue)' }} />
              <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>Vision</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 300 }}>
              East Visayan Adventist Academy seeks to be a leading Christian learning institution in
              Region VIII and beyond, known for academic excellence, strong values, appropriate use
              of technology, and meaningful partnerships that support student growth.
            </p>
          </div>
        </div>

        <div className="card mt-px" style={{ borderTop: '1px solid var(--border-primary)' }}>
          <div className="mb-4 flex items-center gap-2">
            <span className="status-dot" style={{ backgroundColor: 'var(--accent-purple)' }} />
            <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>Philosophy of Education</span>
          </div>
          <p className="max-w-3xl" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 300 }}>
            EVAA recognizes God as Creator, Sustainer, and the ultimate source of true knowledge and
            wisdom. Guided by the Bible and the writings emphasized in the Seventh-day Adventist
            educational framework, the school is committed to holistic, Christ-centered education
            that develops students' spiritual, intellectual, physical, and social dimensions. The
            academy aims to nurture graduates who depend on God, serve others selflessly, and act as
            responsible citizens in this world while preparing for the life to come.
          </p>
        </div>
      </section>

      {/* Identity & Affiliation */}
      <section
        className="border-t"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-tertiary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Governance" title="Affiliation & Accreditation" />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                tag: 'Conference',
                color: 'var(--accent-green)',
                title: 'East Visayan Conference',
                text: 'The regional conference of Seventh-day Adventists overseeing EVAA operations.',
              },
              {
                tag: 'Union',
                color: 'var(--accent-blue)',
                title: 'Central Philippine Union Conference',
                text: 'The union conference coordinating Adventist education in the Central Philippines.',
              },
              {
                tag: 'Division',
                color: 'var(--accent-purple)',
                title: 'Southern Asia-Pacific Division',
                text: 'The division of the world church governing Adventist institutions in the region.',
              },
            ].map((item) => (
              <div key={item.tag} className="card">
                <div className="mb-3 flex items-center gap-2">
                  <span className="status-dot" style={{ backgroundColor: item.color }} />
                  <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>{item.tag}</span>
                </div>
                <h4 style={{ fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {item.title}
                </h4>
                <p className="text-sm" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm" style={{ color: 'var(--text-tertiary)' }}>
            EVAA is recognized by DepEd Region VIII and holds a Provisional Compliance Certificate
            (PCALM-LEY-404686-199, s. 2020), confirming its regulatory standing.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t" style={{ borderColor: 'var(--border-primary)' }}>
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Leadership" title="Administration" />
          <div className="mt-8 grid grid-cols-1 gap-px md:grid-cols-3" style={{ backgroundColor: 'var(--border-primary)' }}>
            {leadership.map((person) => (
              <div key={person.role} className="card">
                <span className="mono-label block mb-2">{person.role}</span>
                <p style={{ color: 'var(--text-secondary)' }}>{person.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
