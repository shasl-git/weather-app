import { City } from './types'

export async function searchCities(query: string): Promise<City[]> {
  const apiKey = process.env.OPENWEATHER_API_KEY
  const limit = 5
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
    query
  )}&limit=${limit}&appid=${apiKey}`

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Ошибка при запросе геокодинга')
  }

  return res.json()
}
