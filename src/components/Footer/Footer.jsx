import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="https://github.com/mahilala1921" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/mahlet-alemnew-engidaw-354aa7428" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:mahilalalex27@gmail.com">Email</a>
      </div>

      <p className={styles.copy}>© 2026 Mahilet Alemnew. All rights reserved.</p>

      <button
        className={styles.backToTop}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </footer>
  )
}
