const render = (data) => {
  const content = document.querySelector('#content');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const icon = document.createElement('img');
  icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  content.appendChild(icon);

  const p = document.createElement('p');
  p.innerHTML = `${data.main.temp} Celsius`;
  content.appendChild(p);
};

export { render as default };
