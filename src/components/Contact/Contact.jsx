import { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'
import { Button } from '../ui/Button'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = 'template_8fkox9i'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [statusType, setStatusType] = useState('') // 'success' | 'error' | ''
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    // basic validation
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!name || !email || !message) {
      setStatusType('error')
      setStatus('Please complete every field before sending.')
      return
    }

    if (!emailRe.test(email)) {
      setStatusType('error')
      setStatus('Please enter a valid email address.')
      return
    }

    setIsSending(true)
    setStatusType('')
    setStatus('Sending message...')

    if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS configuration is missing')
      setStatusType('error')
      setStatus('Oops! Something went wrong. Please try again later.')
      setIsSending(false)
      return
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
      to_email: 'mahilalalex27@gmail.com',
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      setStatusType('success')
      setStatus('Message sent successfully!')
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error('EmailJS send failed', error)
      setStatusType('error')
      setStatus('Oops! Something went wrong. Please try again later.')
    } finally {
      setIsSending(false)
    }
  }

  const openTelegram = (event) => {
    try {
      event.preventDefault()
      event.stopPropagation()
    } catch (e) {}

    const tgScheme = 'tg://resolve?domain=enat217'
    const webUrl = 'https://t.me/enat217'

    // Try to open Telegram app first. If blocked or unavailable, fallback to web URL.
    let opened = false
    try {
      const win = window.open(tgScheme)
      if (win) {
        opened = true
        try { win.focus() } catch (e) {}
      }
    } catch (e) {
      opened = false
    }

    // After a short delay, if tg:// didn't open, open the web URL in a new tab.
    setTimeout(() => {
      if (!opened) {
        try {
          window.open(webUrl, '_blank', 'noopener,noreferrer')
        } catch (err) {
          // final fallback: navigate current window
          window.location.href = webUrl
        }
      }
    }, 600)
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.overline}>Let's work together</p>
          <p className={styles.description}>
            Have a project in mind or looking for a developer? Feel free to get in touch. I'm always excited to discuss new ideas, freelance work, and exciting opportunities.
          </p>

          <div className={styles.infoCards}>
            <article className={styles.infoCard}>
              <span className={styles.icon}>📧</span>
              <div>
                <p className={styles.infoTitle}>Email</p>
                <a href="mailto:mahilalalex27@gmail.com">mahilalalex27@gmail.com</a>
              </div>
            </article>
            <article className={styles.infoCard}>
              <span className={styles.icon}>📞</span>
              <div>
                <p className={styles.infoTitle}>Phone</p>
                <a href="tel:+251931886826">+251 931 886 826</a>
              </div>
            </article>
            <article className={styles.infoCard}>
              <span className={styles.icon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.05 12h19.9M12 2.05v19.9M4.5 6.5c2.5 1.5 5 1.5 7.5 0 2.5 1.5 5 1.5 7.5 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className={styles.socialContent}>
                <p className={styles.infoTitle}>Social</p>
                <div className={styles.socialLinks}>
                  <a href="https://github.com/mahilala1921" className={styles.socialButton} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://linkedin.com/in/mahlet-alemnew-engidaw-354aa7428" className={styles.socialButton} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <div className={styles.socialButtonContainer}>
                    <a
                      href="https://t.me/enat217"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialButton}
                      aria-label="Telegram"
                      onClick={openTelegram}
                    >
                      <span className={styles.buttonIcon}>
                        <svg width="16" height="16" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M120 0C53.73 0 0 53.73 0 120s53.73 120 120 120 120-53.73 120-120S186.27 0 120 0z" fill="#0088cc" />
                          <path d="M181.1 78.2l-21.1 99.8c-1.6 6.9-5.9 8.6-12 5.4l-33.2-24.5-16 15.4c-1.7 1.7-3.1 3.1-6.3 3.1l2.3-32.8 59.7-53.8c2.6-2.3-.6-3.6-4-1.3L80 124.6 45.6 111.5c-6.9-2.4-7-6.9 1.5-10.2L168.6 74c5.4-1.8 10.1 1.9 12.5 4.2 1.9 1.8 2.3 4.1 0 0z" fill="#fff" />
                        </svg>
                      </span>
                      Telegram
                    </a>
                    <div className={styles.tooltip} role="tooltip">@enat217</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <p className={styles.formLabel}>Send a message</p>
            <p className={styles.formIntro}>Share a few details about your idea and I’ll get back to you quickly with a thoughtful response.</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label htmlFor="name" className={styles.field}>
                <span>Name</span>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>
              <label htmlFor="email" className={styles.field}>
                <span>Email</span>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
            </div>

            <label htmlFor="message" className={styles.field}>
              <span>Message</span>
              <textarea
                id="message"
                placeholder="Tell me about your project, timeline, and goals..."
                rows="7"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </label>

            {status && (
              <p className={`${styles.formStatus} ${statusType === 'success' ? styles.success : ''} ${statusType === 'error' ? styles.error : ''}`}>
                {status}
              </p>
            )}
            <Button variant="primary" type="submit" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message →'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
