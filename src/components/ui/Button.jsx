import styles from './Button.module.css'

// Reusable button component for primary and secondary actions.
export function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <button className={`${styles.button} ${styles[variant]} ${className}`} type="button" {...props}>
      {children}
    </button>
  )
}
