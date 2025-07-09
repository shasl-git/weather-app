'use client'
import styles from './ThemeToggle.module.css'
import { useTheme } from '../model/useTheme'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className={styles.button}>
      {theme === 'light' ? 'Светлая тема' : 'Темная тема'}
    </button>
  )
}
