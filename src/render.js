const render = (data) => {
  const content = document.querySelector('#content');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const tempereature = (data.main.temp).toFixed(0);
  const iconCode = data.weather[0].icon;

  content.classList.add(
    'w-50',
    'mx-auto',
    'my-5',
    'text-center',
  );

  if (iconCode[2] === 'n') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  const place = document.createElement('h1');
  place.innerHTML = data.name;
  content.appendChild(place);

  const row = document.createElement('div');
  row.style = 'display: flex; justify-content: space-evenly;';
  content.appendChild(row);

  const icon = document.createElement('img');
  icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconCode}@2x.png`);
  row.appendChild(icon);

  const span = document.createElement('span');
  span.innerHTML = `${tempereature}&deg;`;
  span.style = 'font-size: 48px; line-height: 100px;';
  row.appendChild(span);

  const p = document.createElement('p');
  p.innerHTML = data.weather[0].description;
  p.style.textTransform = 'capitalize';
  content.appendChild(p);
};

export { render as default };
