import { OPENWEATHER_API_KEY } from '@/shared/config/api'

export async function searchCities(query: string) {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=10&appid=${OPENWEATHER_API_KEY}`

  const res = await fetch(url)
  if (!res.ok) throw new Error('Ошибка при запросе геокодинга')

  return res.json()
}
