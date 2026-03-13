interface ThemeToggleProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="flex h-8 items-center gap-2 border px-3 transition-all duration-150"
      style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: '10px',
        letterSpacing: '0.15em',
        textTransform: 'uppercase' as const,
        borderColor: 'var(--border-primary)',
        backgroundColor: 'transparent',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
      }}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <span
        className="status-dot"
        style={{
          backgroundColor: theme === 'light' ? 'var(--accent-yellow)' : 'var(--accent-purple)',
        }}
      />
      {theme === 'light' ? 'Light' : 'Dark'}
    </button>
  )
}
