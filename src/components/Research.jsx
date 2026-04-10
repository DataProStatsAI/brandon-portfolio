import styles from './Research.module.css'

export default function Research() {
  return (
    <section id="research" className={styles.research}>
      <p className={styles.label}>// 04. Research</p>
      <h2 className={styles.title}>Dissertation <span>Work</span></h2>

      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Income Stability in Zimbabwe</h3>

        <p className={styles.body}>
          My undergraduate dissertation investigates the patterns and determinants of income
          stability across households in Zimbabwe. Using a combination of time series analysis,
          multivariate regression, and survey data, the study surfaces actionable insights into
          economic resilience and vulnerability in a volatile macroeconomic environment.
        </p>
        <p className={styles.body}>
          The research draws on methodologies covered across my degree — from Theory of Estimation
          and Hypothesis Testing to Survey Techniques and Econometrics — and applies them to
          real-world data with rigorous statistical discipline.
        </p>

        <div className={styles.meta}>
          {[
            { label: 'Institution', value: 'University of Zimbabwe' },
            { label: 'Field',       value: 'Applied Statistics' },
            { label: 'Methods',     value: 'Econometrics · Time Series · Surveys' },
            { label: 'Tools',       value: 'R · SQL · Power BI' },
          ].map(m => (
            <div className={styles.metaItem} key={m.label}>
              <strong>{m.label}</strong>
              {m.value}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
