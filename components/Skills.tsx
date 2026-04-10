export default function Skills() {
  const skills = {
    "Statistics & Data": ["R", "SQL", "Excel", "Power BI", "Multivariate Analysis", "Time Series", "Regression & ANOVA"],
    "Development": ["React", "Next.js", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    "Research & Evaluation": ["Monitoring & Evaluation", "Statistical Inference", "Design of Experiments"],
    "Languages": ["English (Native)", "Shona (Fluent)", "Kiswahili (Basic)", "Chinese (Basic)"]
  }

  return (
    <section id="skills" className="py-12 px-6">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h3 className="text-xl font-semibold">{category}</h3>
          <ul className="list-disc list-inside">
            {items.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      ))}
    </section>
  )
}
