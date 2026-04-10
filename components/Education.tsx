export default function Education() {
  const education = [
    { year: "2023–2027", qualification: "BSc Honours in Applied Statistics", institution: "University of Zimbabwe", details: "Statistical Computing (Class 1), Multivariate Analysis, Time Series" },
    { year: "Ongoing", qualification: "Data Science Programme (16 months)", institution: "ALX Africa", details: "Practical data science, machine learning" },
    { year: "2022", qualification: "A-Level", institution: "Vengere High School", details: "Computer Science: A, Pure Mathematics: B" },
    { year: "2020", qualification: "O-Level (13 subjects)", institution: "Saint Joseph's High School, Rusape", details: "Mathematics: A, Combined Science: A, Commerce: B" }
  ]

  return (
    <section id="education" className="py-12 px-6">
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <ul className="space-y-4">
        {education.map((edu, idx) => (
          <li key={idx}>
            <h3 className="text-xl font-semibold">{edu.year} — {edu.qualification}</h3>
            <p className="italic">{edu.institution}</p>
            <p>{edu.details}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
