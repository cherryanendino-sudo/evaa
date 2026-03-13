import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export default function Layout({ children, theme, toggleTheme }: LayoutProps) {
  return (
    <div className="noise-overlay relative min-h-screen">
      <div className="grid-bg" />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="page-content pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}
