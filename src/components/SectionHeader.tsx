interface SectionHeaderProps {
  label: string
  title?: string
  className?: string
}

export default function SectionHeader({ label, title, className = '' }: SectionHeaderProps) {
  return (
    <div className={className}>
      <div className="section-header">
        <span className="mono-label">{label}</span>
      </div>
      {title && (
        <h2
          className="mt-2"
          style={{
            fontWeight: 200,
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            lineHeight: 1.15,
          }}
        >
          {title}
        </h2>
      )}
    </div>
  )
}
