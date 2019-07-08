import location from './location';
import weather from './weather';
import render from './render';

const content = document.querySelector('#content');

new Promise((resolve) => {
  resolve(location());
}).then((result) => {
  const long = (result.coords.longitude).toFixed(2);
  const lat = (result.coords.latitude).toFixed(2);

  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=4e1f41a544e8138e1382d0bff94cc988`, { mode: 'cors' })
    .then((response) => {
      console.log(response);
    });
});
