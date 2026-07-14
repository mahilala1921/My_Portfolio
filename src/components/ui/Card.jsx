import styles from './Card.module.css'

// Generic card wrapper used for consistent layout across sections.
export function Card({ children, className = '' }) {
  return <div className={`${styles.card} ${className}`.trim()}>{children}</div>
}
