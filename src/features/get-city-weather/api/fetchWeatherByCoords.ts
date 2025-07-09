import { OPENWEATHER_API_KEY } from '@/shared/config/api'

export async function fetchWeatherByCoords(lat: string, lon: string) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=ru`

  const res = await fetch(url)
  if (!res.ok) throw new Error('Ошибка при получении погоды')

  return res.json()
}
