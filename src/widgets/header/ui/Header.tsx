import Link from 'next/link'
import styles from './Header.module.css'
import { ThemeToggle } from '@/shared/theme/ui/ThemeToggle'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <div className={styles.logoBlock}>
          <img
            src="/logo.png"
            alt="Logo Light"
            className={`${styles.logo} ${styles.light}`}
          />
          <img
            src="/dark_logo.png"
            alt="Logo Dark"
            className={`${styles.logo} ${styles.dark}`}
          />
        </div>

        <div className={styles.titleBlock}>
          <Link href="/">Shasl Project</Link>
        </div>

        <div className={styles.toggleBlock}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
