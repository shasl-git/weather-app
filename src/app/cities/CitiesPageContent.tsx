'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

type City = {
  name: string
  lat: number
  lon: number
  country: string
  state?: string
}

async function searchCities(query: string): Promise<City[]> {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
  const limit = 10
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
    query
  )}&limit=${limit}&appid=${apiKey}`

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Ошибка при запросе геокодинга')
  }
  return res.json()
}

export default function CitiesPageContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

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
    <main>
      <h1>Список городов</h1>

      <form>
        <input
          type="text"
          name="q"
          defaultValue={query}
          placeholder="Введите название города"
          autoComplete="off"
        />
        <button type="submit">Поиск</button>
      </form>

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {cities.length === 0 && query && !loading && <li>Города не найдены</li>}

        {cities.map((city, idx) => (
          <li key={idx}>
            <Link
              href={{
                pathname: `/cities/${encodeURIComponent(city.name)}`,
                query: {
                  lat: city.lat,
                  lon: city.lon,
                },
              }}
            >
              {city.name}, {city.country} ({city.lat}, {city.lon})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
