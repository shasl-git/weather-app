'use client'

import Link from 'next/link'
import styles from './CityList.module.css'

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
    <ul className={styles.list}>
      {cities.map((city, idx) => (
        <li key={idx} className={styles.item}>
          <Link
            href={{
              pathname: `/cities/${encodeURIComponent(city.name)}`,
              query: { lat: city.lat, lon: city.lon },
            }}
            className={styles.link}
          >
            <span className={styles.cityName}>
              {city.name}
              {city.state ? `, ${city.state}` : ''}, {city.country}
            </span>
            <span className={styles.coords}>
              ({city.lat.toFixed(2)}, {city.lon.toFixed(2)})
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
