import React from 'react';
import { useCityContext } from '../context/CityContext';
import { API_ICON_URL } from '../assets/constants';
import Cities from './Cities';

function Weather() {
  const { weather } = useCityContext();;
  const forecast = weather.data ? weather.data.slice(0, 7) : [];

  return (
    <div>
      <div className='weather-forecast'>
        <div><Cities /></div>
        <ul className='weather-list'>
          {
            forecast.map((f, i) => {
              let min = parseInt(f.min_temp);
              let max = parseInt(f.high_temp);
              let day = new Date(f.valid_date);
              let dayShortName = day.toLocaleString('tr-tr', { weekday: 'short' });
              return (
                <li key={`fo_${i}`}>
                  <div className='weather-box'>
                    <div className='day-name'>{dayShortName}</div>
                    <div className='weather-image'><img src={`${API_ICON_URL}${f.weather.icon}.png`} alt="" width={61} /></div>
                    <div className='teprature'>{min}° / {max}°</div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <br /> <br />
      </div>
    </div>
  )
}

export default Weather;