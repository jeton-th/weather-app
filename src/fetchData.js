import { getUnit } from './utils';

const getWeather = async (long, lat) => {
  const unit = getUnit().name;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${unit}&APPID=4e1f41a544e8138e1382d0bff94cc988`;
  const result = await fetch(url, { mode: 'cors' })
    .then((response) => {
      if (response.status === 200) return response.json();
      return Promise.reject(new Error('Cannot fetch data'));
    });

  return result;
};

const currentLocation = () => new Promise(
  (resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject),
)
  .then(position => position)
  .catch(err => err.message);

export { currentLocation, getWeather };
