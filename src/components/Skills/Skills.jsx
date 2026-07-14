import styles from './Skills.module.css'

const skillIcons = {
  JavaScript: (
    <svg viewBox="0 0 128 128" role="img" aria-label="JavaScript logo">
      <rect width="128" height="128" rx="24" fill="#f7df1e" />
      <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" fill="#000" fontSize="60" fontWeight="700" fontFamily="Arial, sans-serif">JS</text>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 128 128" role="img" aria-label="React logo">
      <circle cx="64" cy="64" r="10" fill="#61dafb" />
      <g fill="none" stroke="#61dafb" strokeWidth="8">
        <ellipse rx="44" ry="20" cx="64" cy="64" />
        <ellipse rx="44" ry="20" cx="64" cy="64" transform="rotate(60 64 64)" />
        <ellipse rx="44" ry="20" cx="64" cy="64" transform="rotate(120 64 64)" />
      </g>
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 128 128" role="img" aria-label="Figma logo">
      <rect x="44" y="8" width="40" height="40" rx="20" fill="#0acf83" />
      <circle cx="64" cy="64" r="20" fill="#a259ff" />
      <circle cx="64" cy="104" r="20" fill="#f24e1e" />
      <circle cx="44" cy="64" r="20" fill="#ffa000" />
      <circle cx="84" cy="84" r="20" fill="#1abcfe" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 128 128" role="img" aria-label="GitHub logo">
      <rect width="128" height="128" rx="24" fill="#181717" />
      <path d="M64 24c-22 0-40 18-40 40 0 18 11 33 27 38 2 0 3-1 3-3v-10c-11 2-13-5-13-5-2-5-5-7-5-7-4-3 0-3 0-3 5 1 8 5 8 5 4 7 10 5 12 4 0-3 2-5 3-6-9-1-18-4-18-18 0-4 1-7 3-10 0-1-1-4-1-9 0-1 0-2 1-3 0 0 4-1 13 5 4-1 9-2 14-2s10 1 14 2c9-6 13-5 13-5 1 1 1 2 1 3 2 3 3 6 3 10 0 14-9 17-18 18 1 1 3 3 3 6v9c0 2 1 3 3 3 16-5 27-20 27-38 0-22-18-40-40-40z" fill="#fff" />
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 128 128" role="img" aria-label="Node.js logo">
      <polygon points="64 16 112 40 112 88 64 112 16 88 16 40" fill="#43853d" />
      <path d="M52 44l24 14v24l-24 13z" fill="#fff" />
      <path d="M61 47v9.5l9 5.2-9 5.3V76l12-7.2-12-7.2z" fill="#43853d" />
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 128 128" role="img" aria-label="MySQL logo">
      <rect width="128" height="128" rx="24" fill="#00758f" />
      <path d="M32 88s20-40 32-40 32 40 32 40H32z" fill="#fff" />
      <path d="M64 30s-22 2-24 28c0 0 10-10 24-10s24 10 24 10c-2-26-24-28-24-28z" fill="#f29111" />
    </svg>
  ),
}

const skills = [
  {
    label: 'JavaScript',
    icon: skillIcons.JavaScript,
    subtitle: 'ES6+ • DOM • Async',
  },
  {
    label: 'React',
    icon: skillIcons.React,
    subtitle: 'Hooks • Components • Router',
  },
  {
    label: 'Figma',
    icon: skillIcons.Figma,
    subtitle: 'UI Design • Auto Layout',
  },
  {
    label: 'Git & GitHub',
    icon: skillIcons.GitHub,
    subtitle: 'Version Control • Branching • Collaboration',
  },
  {
    label: 'Node.js',
    icon: skillIcons['Node.js'],
    subtitle: 'REST APIs • Express',
  },
  {
    label: 'MySQL',
    icon: skillIcons.MySQL,
    subtitle: 'Database Design • SQL Queries',
  },
]

export function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.header}>SKILLS & TOOLS</div>
      <h2>Technologies I work with</h2>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <article key={skill.label} className={styles.card}>
            <div className={styles.icon}>{skill.icon}</div>
            <p className={styles.title}>{skill.label}</p>
            <p className={styles.subtitle}>{skill.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
