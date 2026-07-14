import styles from './About.module.css'
import aboutPhoto from '../../assets/about.jpeg'

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
          <p className={styles.roles}>
            <span>Frontend Development</span>
            <span className={styles.dot}>•</span>
            <span>UI/UX Design</span>
            <span className={styles.dot}>•</span>
            <span>Design Systems</span>
          </p>
        </div>
      </div>
    </section>
  )
}
