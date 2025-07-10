'use client'

import styles from './Footer.module.css'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <a href="tel:89132341833">📞 89132341833</a>
        <a href="mailto:slava.shamne.20@gmail.com">
          ✉️ slava.shamne.20@gmail.com
        </a>
      </div>
      <div className={styles.icons}>
        <Link
          href="https://vk.com/shasl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/vk.svg" alt="VK" />
        </Link>
        <Link
          href="https://t.me/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/telegram.svg" alt="Telegram" />
        </Link>
        <Link
          href="https://wa.me/79132341833"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/whatsapp.svg" alt="WhatsApp" />
        </Link>
      </div>
    </footer>
  )
}
