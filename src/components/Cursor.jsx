import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (dot.current)  { dot.current.style.left  = e.clientX + 'px'; dot.current.style.top  = e.clientY + 'px' }
      if (ring.current) { ring.current.style.left = e.clientX + 'px'; ring.current.style.top = e.clientY + 'px' }
    }
    const grow = () => {
      if (dot.current)  dot.current.style.transform  = 'translate(-50%,-50%) scale(2.5)'
      if (ring.current) ring.current.style.transform = 'translate(-50%,-50%) scale(1.4)'
    }
    const shrink = () => {
      if (dot.current)  dot.current.style.transform  = 'translate(-50%,-50%) scale(1)'
      if (ring.current) ring.current.style.transform = 'translate(-50%,-50%) scale(1)'
    }

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={dot}  style={styles.dot}  />
      <div ref={ring} style={styles.ring} />
    </>
  )
}

const styles = {
  dot: {
    width: 10, height: 10,
    background: 'var(--g1)',
    borderRadius: '50%',
    position: 'fixed', top: 0, left: 0,
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%,-50%)',
    transition: 'transform 0.15s',
    mixBlendMode: 'screen',
  },
  ring: {
    width: 34, height: 34,
    border: '1.5px solid var(--g1)',
    borderRadius: '50%',
    position: 'fixed', top: 0, left: 0,
    pointerEvents: 'none',
    zIndex: 9998,
    transform: 'translate(-50%,-50%)',
    transition: 'left 0.08s, top 0.08s, transform 0.2s',
    opacity: 0.5,
  }
}
