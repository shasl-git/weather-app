'use client'

import { useParams, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { fetchWeatherByCoords } from '@/features/get-city-weather/api/fetchWeatherByCoords'
import { WeatherInfo } from '@/entities/city-weather/ui/WeatherInfo'

type WeatherData = {
  weather: { description: string; icon: string }[]
  main: { temp: number; feels_like: number }
  name: string
}

export default function CityPageContent() {
  const params = useParams()
  const searchParams = useSearchParams()

  const city = decodeURIComponent(useParams()!.city as string)
  const lat = useSearchParams()!.get('lat')
  const lon = useSearchParams()!.get('lon')

  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!lat || !lon) return

    setLoading(true)
    setError(null)

    fetchWeatherByCoords(lat, lon)
      .then(setWeather)
      .catch(() => setError('Не удалось загрузить погоду'))
      .finally(() => setLoading(false))
  }, [lat, lon])

  return (
    <main>
      <h1>Погода в городе: {city}</h1>

      {loading && <p>Загрузка погоды...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && <WeatherInfo data={weather} />}
    </main>
  )
}
