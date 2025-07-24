'use client'

import Link from 'next/link'
import styles from './WeatherInfo.module.css'

type WeatherData = {
  weather: { description: string; icon: string }[]
  main: { temp: number; feels_like: number }
  name: string
}

export const WeatherInfo = ({ data }: { data: WeatherData }) => {
  return (
    <div className={styles.container}>
      <p className={styles.info}>Температура: {data.main.temp}°C</p>
      <p className={styles.info}>Ощущается как: {data.main.feels_like}°C</p>
      <p className={styles.info}>Описание: {data.weather[0].description}</p>
      <img
        className={styles.icon}
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="Иконка погоды"
      />
      <Link href="/cities" className={styles.backButton}>
        Назад к выбору города
      </Link>
    </div>
  )
}
