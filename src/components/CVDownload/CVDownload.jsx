import { useState } from 'react'
import styles from './CVDownload.module.css'
import { Button } from '../ui/Button'

// Downloads /Mahlet_Alemnew_CV.pdf from the public folder.
// If the file is missing, shows a friendly error message.
export function CVDownload() {
  const [status, setStatus] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)

  const filePath = '/Mahlet_Alemnew_CV.pdf'
  const downloadName = 'Mahlet_Alemnew_CV.pdf'

  async function handleDownload() {
    setStatus('')
    setIsDownloading(true)

    try {
      // Try a HEAD request first to avoid downloading the whole file if missing.
      let ok = false
      try {
        const head = await fetch(filePath, { method: 'HEAD' })
        ok = head && head.ok
      } catch (err) {
        // HEAD may be blocked on some hosts; fall back to GET test below
        ok = false
      }

      if (!ok) {
        // Fallback: fetch a small range or the whole file to verify existence
        const test = await fetch(filePath, { method: 'GET' })
        if (!test.ok) {
          setStatus('Sorry — the CV file is not available right now.')
          setIsDownloading(false)
          return
        }
        // we won't use the test response body directly for download to avoid double download
      }

      // Create a hidden anchor using the public file path and download attribute.
      const a = document.createElement('a')
      a.href = filePath
      a.download = downloadName
      document.body.appendChild(a)
      a.click()
      a.remove()

      setStatus('')
    } catch (err) {
      console.error('CV download error', err)
      setStatus('Oops — something went wrong while downloading the CV. Try again later.')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className={styles.wrapper}>
      <Button
        variant="secondary"
        onClick={handleDownload}
        disabled={isDownloading}
        aria-disabled={isDownloading}
        aria-busy={isDownloading}
      >
        <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 3v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 21H3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {isDownloading ? 'Downloading...' : 'Download CV'}
      </Button>

      <p className={styles.status} role="status" aria-live="polite">
        {status}
      </p>
    </div>
  )
}

export default CVDownload
