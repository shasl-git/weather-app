'use client'

import { useSearchParams, useParams } from 'next/navigation'

export default function CityPageContent() {
  const params = useParams()
  const searchParams = useSearchParams()

  const city = decodeURIComponent(params.city as string)
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')

  return (
    <main>
      <h1>Погода в городе: {city}</h1>
      <p>
        Координаты: {lat}, {lon}
      </p>
    </main>
  )
}
