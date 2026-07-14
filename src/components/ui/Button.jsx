import styles from './Button.module.css'

// Reusable button component for primary and secondary actions.
export function Button({ children, variant = 'primary', ...props }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} type="button" {...props}>
      {children}
    </button>
  )
}
