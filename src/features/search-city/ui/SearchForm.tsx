'use client'

import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'
import styles from './SearchForm.module.css'

export const SearchForm = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentQuery = (searchParams as URLSearchParams).get('q') || ''
  const [input, setInput] = useState(currentQuery)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      router.push(`/cities?q=${encodeURIComponent(input.trim())}`)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="q"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите название города"
        autoComplete="off"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Поиск
      </button>
    </form>
  )
}
