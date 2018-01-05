import axios from 'axios';

const API_KEY = 'd553b937243cd695d330002523c7dbe2';
const ROOT_URL =`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER ='FETCH_WEATHER';

export function fetchWeather (city){
  const url =`${ROOT_URL}&q=${city},in&units=metric`;
  const request=axios.get(url) .catch((err) => {
      alert('City Not Found');
      return err;
    });

  return {
    type:FETCH_WEATHER,
    payload:request
  };
};
