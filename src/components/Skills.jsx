import styles from './Skills.module.css'

const SKILLS = [
  { name: 'React',             level: 90 },
  { name: 'Node.js / Express', level: 85 },
  { name: 'Supabase',          level: 82 },
  { name: 'SQL / PostgreSQL',  level: 80 },
  { name: 'R',                 level: 78 },
  { name: 'Power BI',          level: 75 },
  { name: 'Python',            level: 72 },
  { name: 'Generative AI',     level: 80 },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <p className={styles.label}>// 02. Skills</p>
      <h2 className={styles.title}>My <span>Toolkit</span></h2>

      <div className={styles.grid}>
        {SKILLS.map((s, i) => (
          <div className={styles.item} key={s.name}>
            <div className={styles.header}>
              <span className={styles.name}>{s.name}</span>
              <span className={styles.pct}>{s.level}%</span>
            </div>
            <div className={styles.bar}>
              <div
                className={styles.fill}
                style={{
                  width: `${s.level}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
