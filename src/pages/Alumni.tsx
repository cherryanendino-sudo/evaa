import SectionHeader from '../components/SectionHeader'

const ways = [
  {
    title: 'Share Your Story',
    desc: 'We want to hear from you. Share your EVAA experience and how the academy shaped your life and career.',
    color: 'var(--accent-green)',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop',
  },
  {
    title: 'Mentor Students',
    desc: 'Help current students by sharing your professional experience, offering career advice, or hosting campus talks.',
    color: 'var(--accent-blue)',
    img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=250&fit=crop',
  },
  {
    title: 'Support the Academy',
    desc: 'Contribute to campus development, scholarship funds, or specific projects that benefit current and future students.',
    color: 'var(--accent-purple)',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop',
  },
  {
    title: 'Stay Connected',
    desc: 'Join alumni gatherings, follow the school on social media, and maintain your connection with the EVAA community.',
    color: 'var(--accent-yellow)',
    img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=250&fit=crop',
  },
]

export default function Alumni() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-image-section border-b" style={{ borderColor: 'var(--border-primary)' }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600&h=900&fit=crop)',
          }}
        />
        <div className="hero-content mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <span className="mono-label mb-4 inline-block border px-3 py-1.5" style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}>
            Alumni
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
            Guardians of Truth
          </h1>
          <p className="mt-4 max-w-2xl" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
            Once an EVAA student, always a Guardian of Truth. Our alumni carry the values of
            faith, service, and excellence wherever they go.
          </p>
        </div>
      </section>

      {/* Identity with image */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Community" title="The EVAA Family" />
        <div className="mt-8 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Graduates of East Visayan Adventist Academy share a unique bond forged through years
              of boarding school life, shared worship, and academic challenges. As Guardians of Truth,
              our alumni network spans across the Philippines and beyond, united by the values and
              experiences that defined their formative years at EVAA.
            </p>
            <p className="mt-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Whether you graduated decades ago or just recently, the EVAA community remains your
              family. We encourage all alumni to stay connected and give back to the institution
              that helped shape who they are today.
            </p>
          </div>
          <div className="img-card">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop"
              alt="Alumni community"
              loading="lazy"
            />
            <div className="img-overlay">
              <span className="mono-label" style={{ color: '#fff' }}>EVAA Alumni Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section
        className="border-y"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <SectionHeader label="Stories" title="Alumni Voices" />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop' },
              { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop' },
              { img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop' },
            ].map((item, i) => (
              <div key={i} className="card">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="overflow-hidden border"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderColor: 'var(--border-secondary)',
                    }}
                  >
                    <img
                      src={item.img}
                      alt={`Alumni ${i + 1}`}
                      className="h-full w-full object-cover"
                      style={{ filter: 'grayscale(30%)' }}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="mono-label block">Alumni Story</span>
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      Coming soon
                    </span>
                  </div>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7, fontStyle: 'italic' }}>
                  "Alumni testimonials and stories will be featured here as they are submitted.
                  We invite all EVAA graduates to share their experiences."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to connect with images */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader label="Get Involved" title="Ways to Connect" />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {ways.map((w) => (
            <div key={w.title} className="card card-hover">
              <div className="img-card mb-4" style={{ aspectRatio: '16/9' }}>
                <img src={w.img} alt={w.title} loading="lazy" />
              </div>
              <div className="mb-3 flex items-center gap-2">
                <span className="status-dot" style={{ backgroundColor: w.color }} />
                <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>
                  {w.title.split(' ')[0]}
                </span>
              </div>
              <h4 className="mb-2" style={{ fontWeight: 400, color: 'var(--text-primary)' }}>
                {w.title}
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)', lineHeight: 1.7 }}>
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="border-t"
        style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-tertiary)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h3
              style={{
                fontWeight: 200,
                fontSize: '1.5rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              Are you an EVAA alumnus?
            </h3>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-tertiary)' }}>
              We'd love to hear from you. Reach out through our contact page or connect
              with us on Facebook.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <a
                href="https://www.facebook.com/eastvisayanadventistacademyofleyte/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
