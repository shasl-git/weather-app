'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { searchCities } from '@/features/search-city/api/searchCities'
import { SearchForm } from '@/features/search-city/ui/SearchForm'
import { CityList } from '@/widgets/city-list/CityList'
import styles from './CitiesPageContent.module.css'

type City = {
  name: string
  lat: number
  lon: number
  country: string
  state?: string
}

export default function CitiesPageContent() {
  const searchParams = useSearchParams()
  const query = (searchParams as URLSearchParams).get('q') || ''

  const [cities, setCities] = useState<City[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!query) {
      setCities([])
      return
    }

    setLoading(true)
    setError(null)

    searchCities(query)
      .then(setCities)
      .catch(() => setError('Ошибка при получении данных'))
      .finally(() => setLoading(false))
  }, [query])

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Список городов</h1>
      <SearchForm />
      {loading && <p className={styles.loading}>Загрузка...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && !cities.length && query && <p className={styles.empty}>Города не найдены</p>}
      <CityList cities={cities} />
    </main>
  )
}
