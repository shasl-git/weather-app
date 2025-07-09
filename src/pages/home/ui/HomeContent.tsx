'use client'

import Link from 'next/link'
import styles from './HomeContent.module.css'

export function HomeContent() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Добро пожаловать!</h1>
      <Link href="/cities" className={styles.link}>
        Проверить погоду в вашем городе
      </Link>
    </div>
  )
}
