import { useEffect, useState } from 'react'
import styles from './Projects.module.css'
import buttonStyles from '../ui/Button.module.css'

const carouselImages = [
  '/hrms-dashboard-1.png',
  '/hrms-dashboard-2.png',
  '/hrms-dashboard-3.png',
  '/hrms-dashboard-4.png',
]

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slideCount = carouselImages.length

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((current) => (current + 1) % slideCount)
    }, 4500)

    return () => window.clearInterval(interval)
  }, [slideCount])

  const goPrev = () => setCurrentIndex((current) => (current - 1 + slideCount) % slideCount)
  const goNext = () => setCurrentIndex((current) => (current + 1) % slideCount)

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.headerGroup}>
        <div className={styles.overline}>Projects</div>
      </div>
      <article className={styles.card}>
        <div className={styles.media} aria-label="HRMS screenshot carousel">
          <div className={styles.carousel}>
            <div
              className={styles.slideTrack}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselImages.map((src, index) => (
                <div className={styles.slide} key={src}>
                  <img
                    src={src}
                    alt={`HRMS screenshot ${index + 1}`}
                    className={styles.screenshotImage}
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              className={`${styles.arrow} ${styles.prev}`}
              onClick={goPrev}
              aria-label="Show previous screenshot"
            >
              ‹
            </button>
            <button
              type="button"
              className={`${styles.arrow} ${styles.next}`}
              onClick={goNext}
              aria-label="Show next screenshot"
            >
              ›
            </button>
          </div>
          <div className={styles.dots}>
            {carouselImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className={styles.details}>
          <h3>HR Management System</h3>
          <p>
            A full-stack web application for managing employees, attendance, and
            HR activities. Built with a focus on intuitive UX and seamless data
            flow across departments.
          </p>
          <div className={styles.tags}>
            <div className={styles.tagRow}>
              <span>React</span>
              <span>MySQL</span>
              <span>Node.js</span>
            </div>
            <div className={styles.tagRow}>
              <span>Express</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
          <div className={styles.footerRow}>
            <span className={styles.role}>Role: Frontend Developer — UI Design & Implementation</span>
            <div className={styles.actions}>
              <a
                href="https://github.com/mahilala1921"
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonStyles.button} ${buttonStyles.secondary} ${buttonStyles.pair}`}
              >
                GitHub
              </a>
              <a
                href="https://hrms-ui-emgn.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonStyles.button} ${buttonStyles.primary} ${buttonStyles.pair}`}
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
