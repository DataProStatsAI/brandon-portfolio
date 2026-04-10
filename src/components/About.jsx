import styles from './About.module.css'

const STATS = [
  { num: '3+', label: 'Years Coding' },
  { num: '2',  label: 'Programmes' },
  { num: '8+', label: 'Tech Skills' },
  { num: '1',  label: 'Dissertation' },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <p className={styles.label}>// 01. About</p>
      <h2 className={styles.title}>Who I <span>Am</span></h2>

      <div className={styles.grid}>

        {/* Text */}
        <div className={styles.text}>
          <p>
            I'm Brandon Nyatsanza — a third-year Applied Statistics student at the
            University of Zimbabwe and a full-stack developer who ships real,
            production-ready applications. I work across the entire stack: React
            frontends, Node.js backends, Supabase and PostgreSQL databases.
          </p>
          <p>
            Currently completing my BSc Honours in Applied Statistics while enrolled
            in ALX Africa's 16-month Data Science programme. My dissertation investigates
            income stability in Zimbabwe using econometric modelling and real-world datasets.
          </p>
          <p>
            I speak English, Shona, basic Kiswahili and basic Chinese — and I pick up
            new technologies just as fast.
          </p>

          <div className={styles.stats}>
            {STATS.map(s => (
              <div className={styles.statCard} key={s.label}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Code visual */}
        <div className={styles.codeBlock}>
          <div className={styles.dots}>● ● ●</div>
          <pre className={styles.pre}>{`const brandon = {
  role: "Full Stack Dev",
  stack: ["React", "Node", "SQL"],
  stats: ["R", "Power BI", "Python"],
  location: "Harare, ZW",
  university: "UZ Applied Statistics",
  available: true,

  // always learning 🌱
}

brandon.build("something great")`}
          </pre>
        </div>

      </div>
    </section>
  )
}
