import { useState } from 'react'
import { supabase } from '../lib/supabase'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [loading, setLoading] = useState(false)

  const update = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async () => {
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{ name: form.name, email: form.email, message: form.message }])
      if (error) throw error
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
      setTimeout(() => setStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <p className={styles.label}>// 05. Contact</p>
      <h2 className={styles.title}>Let's <span>Connect</span></h2>

      <div className={styles.grid}>

        {/* Info column */}
        <div className={styles.info}>
          <p className={styles.blurb}>
            Open to industrial attachment opportunities, freelance projects, and
            collaborations. Whether you're a company looking for a data-savvy
            developer or a researcher wanting a technical partner — let's talk.
          </p>

          <div className={styles.links}>
            {[
              { icon: '✉', text: 'btstatsai@gmail.com',              href: 'mailto:btstatsai@gmail.com' },
              { icon: '📞', text: '+263 711 979 966',                 href: 'tel:+263711979966' },
              { icon: 'in', text: 'linkedin.com/in/brandon-t-nyatsanza', href: 'https://linkedin.com/in/brandon-t-nyatsanza' },
              { icon: '📍', text: 'Harare, Zimbabwe',                 href: '#' },
            ].map(l => (
              <a key={l.text} href={l.href} className={styles.link} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <span className={styles.linkIcon}>{l.icon}</span>
                {l.text}
              </a>
            ))}
          </div>
        </div>

        {/* Form column */}
        <div className={styles.form}>
          <div className={styles.field}>
            <label>Your Name</label>
            <input type="text" placeholder="John Doe" value={form.name} onChange={update('name')} />
          </div>
          <div className={styles.field}>
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" value={form.email} onChange={update('email')} />
          </div>
          <div className={styles.field}>
            <label>Message</label>
            <textarea
              placeholder="Tell me about your project or opportunity..."
              value={form.message}
              onChange={update('message')}
            />
          </div>

          <button className={styles.btn} onClick={submit} disabled={loading}>
            {loading ? 'Sending…' : 'Send Message →'}
          </button>

          {status === 'success' && (
            <div className={`${styles.toast} ${styles.success}`}>
              ✓ Message sent! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className={`${styles.toast} ${styles.error}`}>
              ✗ Something went wrong. Email me directly at btstatsai@gmail.com
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
