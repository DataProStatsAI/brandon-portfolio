import styles from './Hero.module.css'

export default function Hero({ onNav }) {
  return (
    <section id="home" className={styles.hero}>

      {/* ── Left column ── */}
      <div className={styles.left}>
        <span className={styles.tag}>Available for Attachment &amp; Projects</span>

        <h1 className={styles.name}>
          Brandon<br />
          <span className={styles.accent}>Nyatsanza</span>
        </h1>

        <p className={styles.title}>Full Stack Developer &amp; Applied Statistician</p>

        <p className={styles.desc}>
          Building data-driven web applications at the intersection of statistics,
          machine learning, and modern software engineering. Based in Harare, Zimbabwe.
        </p>

        <div className={styles.cta}>
          <button className={styles.btnPrimary} onClick={() => onNav('Projects')}>
            View Projects
          </button>
          <button className={styles.btnOutline} onClick={() => onNav('Contact')}>
            Get in Touch
          </button>
        </div>
      </div>

      {/* ── Right column: your photo ── */}
      <div className={styles.right}>
        <div className={styles.photoWrapper}>
          {/*
            ✅ HOW TO ADD YOUR PHOTO:
            1. Copy your photo into:  brandon-portfolio/public/profile.jpg
            2. The src below is already pointing to it.
            3. Change the filename if yours is .png or .webp
          */}
          <img
            src="/profile.jpg"
            alt="Brandon Nyatsanza"
            className={styles.photo}
            onError={(e) => { e.target.style.display = 'none' }}
          />
          {/* Decorative ring behind photo */}
          <div className={styles.ring1} />
          <div className={styles.ring2} />
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <span className={styles.scrollLine} />
        Scroll to explore
      </div>
    </section>
  )
}
