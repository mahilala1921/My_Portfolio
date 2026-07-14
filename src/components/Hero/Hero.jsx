import { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import { Button } from '../ui/Button'
import CVDownload from '../CVDownload/CVDownload'
import img1 from '../../assets/hero-user-1.png'
import img2 from '../../assets/hero-user-2.png'
import img3 from '../../assets/hero-user-3.png'

export function Hero() {
  const images = [img1, img2, img3]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <div className={styles.heroEyebrow}>HELLO,</div>
        <h1 className={styles.title}>
          I'm <span className={styles.name}>Mahilet</span>
        </h1>
        <p className={styles.roles}>
          Software Engineer <span className={styles.bullet}>•</span> Frontend Developer <span className={styles.bullet}>•</span> UI/UX Designer
        </p>
        <p className={styles.description}>
          I build clean, performant web experiences with pixel-perfect UI.
          Obsessed with the intersection of great code and great design.
        </p>
        <div className={styles.actions}>
          <Button
            variant="primary"
            onClick={() => {
              const el = document.getElementById('projects')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View Projects
          </Button>
          <CVDownload />
        </div>
      </div>
      <div className={styles.heroImage} aria-hidden="true">
        <div className={styles.imageFrame}>
          <div className={styles.slider}>
            {images.map((src, i) => (
              <div
                key={src}
                className={`${styles.slide} ${i === current ? styles.active : ''}`}
              >
                <img src={src} alt={`Hero slide ${i + 1}`} className={styles.slideImage} />
              </div>
            ))}
          </div>
          <div className={styles.imageOverlay} />
        </div>
      </div>
    </section>
  )
}
