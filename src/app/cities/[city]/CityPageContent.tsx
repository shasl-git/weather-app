'use client'

import { useParams, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

type WeatherData = {
  weather: { description: string; icon: string }[]
  main: { temp: number; feels_like: number }
  name: string
}

export default function CityPageContent() {
  const params = useParams()
  const searchParams = useSearchParams()

  const city = decodeURIComponent(params.city as string)
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')

  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!lat || !lon) return

    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ru`

    setLoading(true)
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Ошибка при получении погоды')
        return res.json()
      })
      .then((data) => setWeather(data))
      .catch(() => setError('Не удалось загрузить погоду'))
      .finally(() => setLoading(false))
  }, [lat, lon])

  return (
    <main>
      <h1>Погода в городе: {city}</h1>

      {loading && <p>Загрузка погоды...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div>
          <p>Температура: {weather.main.temp}°C</p>
          <p>Ощущается как: {weather.main.feels_like}°C</p>
          <p>Описание: {weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Иконка погоды"
          />
        </div>
      )}
    </main>
  )
}
