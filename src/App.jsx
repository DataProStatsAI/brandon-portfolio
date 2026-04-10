import { useState, useEffect } from 'react'
import Cursor   from './components/Cursor'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import Research from './components/Research'
import Contact  from './components/Contact'

// Background grid + noise — purely decorative
function BgEffects() {
  return (
    <>
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(0,255,136,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,136,0.025) 1px, transparent 1px)`,
        backgroundSize: '44px 44px',
      }} />
      <div style={{
        position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none', opacity: 0.022,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />
    </>
  )
}

function Footer() {
  return (
    <footer style={{
      position: 'relative', zIndex: 2,
      padding: '1.8rem 5vw',
      borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '0.5rem',
      fontFamily: 'var(--font-m)', fontSize: '0.68rem', color: 'var(--muted)',
    }}>
      <span>© 2026 <span style={{ color: 'var(--g1)' }}>Brandon T. Nyatsanza</span>. Built with React + Supabase.</span>
      <span>Harare, Zimbabwe 🇿🇼</span>
    </footer>
  )
}

// Scroll to a section by its id (section id = link name lowercase)
function scrollTo(id) {
  const el = document.getElementById(id.toLowerCase())
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  const [active, setActive] = useState('Home')

  // Highlight nav link based on scroll position
  useEffect(() => {
    const sections = ['home','about','skills','projects','research','contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const name = e.target.id
            setActive(name.charAt(0).toUpperCase() + name.slice(1))
          }
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (id) => {
    setActive(id)
    scrollTo(id)
  }

  return (
    <>
      <BgEffects />
      <Cursor />
      <Navbar active={active} onNav={handleNav} />

      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero     onNav={handleNav} />
        <About    />
        <Skills   />
        <Projects />
        <Research />
        <Contact  />
      </main>

      <Footer />
    </>
  )
}
