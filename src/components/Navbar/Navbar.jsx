import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>Mahlet.</div>
      <nav className={styles.links} aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
