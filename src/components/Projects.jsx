import styles from './Projects.module.css'

const PROJECTS = [
  {
    icon: '📊',
    title: 'Income Stability Research',
    desc: 'Dissertation research analysing income stability patterns in Zimbabwe — applying statistical modelling and econometrics to real-world economic data.',
    tags: ['R', 'Statistics', 'Econometrics'],
  },
  {
    icon: '🌐',
    title: 'Full Stack Web App',
    desc: 'React + Supabase application with real-time data, authentication, and a polished, responsive UI built entirely from scratch.',
    tags: ['React', 'Supabase', 'PostgreSQL'],
  },
  {
    icon: '📈',
    title: 'Data Pipeline Dashboard',
    desc: 'Power BI dashboard connected to live SQL databases for monitoring and evaluation reporting on project KPIs.',
    tags: ['Power BI', 'SQL', 'M&E'],
  },
  {
    icon: '🔬',
    title: 'Survey Data Analysis',
    desc: 'Applied sampling theory and survey techniques to design and analyse a demographic study with structured data collection.',
    tags: ['R', 'SQL', 'Sampling Theory'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <p className={styles.label}>// 03. Projects</p>
      <h2 className={styles.title}>What I've <span>Built</span></h2>

      <div className={styles.grid}>
        {PROJECTS.map(p => (
          <div className={styles.card} key={p.title}>
            <div className={styles.icon}>{p.icon}</div>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.desc}>{p.desc}</p>
            <div className={styles.tags}>
              {p.tags.map(t => <span className={styles.tag} key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
