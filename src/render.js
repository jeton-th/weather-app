import { convertTemperature } from './utils';

const render = (data) => {
  const content = document.querySelector('#content');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const iconCode = data.weather[0].icon;
  if (iconCode[2] === 'n') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  const place = document.createElement('h1');
  place.innerHTML = data.name;
  content.appendChild(place);

  const dateElement = document.createElement('small');
  const date = new Date();
  dateElement.innerHTML = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  content.appendChild(dateElement);

  const div = document.createElement('div');
  div.classList.add('row');
  content.appendChild(div);

  const icon = document.createElement('img');
  icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconCode}@2x.png`);
  icon.setAttribute('alt', data.weather[0].description);
  div.appendChild(icon);

  const span = document.createElement('span');
  span.classList.add('temperature');
  span.innerHTML = (data.main.temp).toFixed(0);
  span.style = 'font-size: 48px;';
  div.appendChild(span);

  const desc = document.createElement('span');
  desc.innerHTML = data.weather[0].description;
  desc.style.textTransform = 'capitalize';
  content.appendChild(desc);
};

const changeTemperature = () => {
  const temperature = document.querySelector('.temperature');
  const newTemperature = convertTemperature(temperature.innerHTML);
  temperature.innerHTML = newTemperature;
};

export { render, changeTemperature };
