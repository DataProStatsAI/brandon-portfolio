import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const LINKS = ['Home','About','Skills','Projects','Research','Contact']

export default function Navbar({ active, onNav }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id) => { onNav(id); setOpen(false) }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo}>B<span>.</span>Nyatsanza</div>

        <ul className={styles.links}>
          {LINKS.map(l => (
            <li key={l}
              className={active === l ? styles.active : ''}
              onClick={() => go(l)}>
              {l}
            </li>
          ))}
        </ul>

        <button className={styles.hamburger} onClick={() => setOpen(true)} aria-label="Open menu">
          <span/><span/><span/>
        </button>
      </nav>

      {open && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeBtn} onClick={() => setOpen(false)}>✕</button>
          {LINKS.map(l => (
            <li key={l} className={styles.mobileLink} onClick={() => go(l)}>{l}</li>
          ))}
        </div>
      )}
    </>
  )
}
