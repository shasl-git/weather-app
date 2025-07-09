'use client'

import { useSearchParams } from 'next/navigation'

export const SearchForm = () => {
  const searchParams = useSearchParams()
  const currentQuery = searchParams.get('q') || ''

  return (
    <form>
      <input
        type="text"
        name="q"
        defaultValue={currentQuery}
        placeholder="Введите название города"
        autoComplete="off"
      />
      <button type="submit">Поиск</button>
    </form>
  )
}
