import Link from 'next/link'

type City = {
  name: string
  lat: number
  lon: number
  country: string
  state?: string
}

export const CityList = ({ cities }: { cities: City[] }) => {
  if (!cities.length) return null

  return (
    <ul>
      {cities.map((city, idx) => (
        <li key={idx}>
          <Link
            href={{
              pathname: `/cities/${encodeURIComponent(city.name)}`,
              query: { lat: city.lat, lon: city.lon },
            }}
          >
            {city.name}, {city.country} ({city.lat}, {city.lon})
          </Link>
        </li>
      ))}
    </ul>
  )
}
