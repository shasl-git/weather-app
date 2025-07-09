type WeatherData = {
  weather: { description: string; icon: string }[]
  main: { temp: number; feels_like: number }
  name: string
}

export const WeatherInfo = ({ data }: { data: WeatherData }) => {
  return (
    <div>
      <p>Температура: {data.main.temp}°C</p>
      <p>Ощущается как: {data.main.feels_like}°C</p>
      <p>Описание: {data.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="Иконка погоды"
      />
    </div>
  )
}
