import styles from './About.module.css'
import aboutPhoto from '../../assets/about.jpeg'
import buttonStyles from '../ui/Button.module.css'

export function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.header}>ABOUT ME</div>
      <div className={styles.grid}>
        <div className={styles.imageCard} aria-hidden="true">
          <img className={styles.aboutImage} src={aboutPhoto} alt="Portrait of Mahilet" />
        </div>
        <div className={styles.content}>
          <h2>Creating impactful digital experiences</h2>
          <p>
            I'm a Software Engineering graduate passionate about building modern,
            responsive web applications. I combine frontend development with
            thoughtful UI/UX design to create intuitive, user-focused digital
            experiences.
          </p>
          <div className={styles.roles}>
            <span className={styles.roleItem}>Frontend Development</span>
            <span className={styles.dot}>•</span>
            <span className={styles.roleItem}>UI/UX Design</span>
            <span className={styles.designSystems}>Design Systems</span>
          </div>

          <div className={styles.aboutButtons}>
            <a
              href="https://github.com/mahilala1921"
              className={`${buttonStyles.button} ${buttonStyles.secondary}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mahlet-alemnew-engidaw-354aa7428"
              className={`${buttonStyles.button} ${buttonStyles.secondary}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
