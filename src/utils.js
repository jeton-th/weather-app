const getUnit = () => {
  if (localStorage.getItem('unit') === null) {
    localStorage.setItem('unit', JSON.stringify({ name: 'metric', sign: '&deg;C' }));
  }
  return JSON.parse(localStorage.getItem('unit'));
};

const changeUnit = () => {
  const unit = JSON.parse(localStorage.getItem('unit'));
  if (unit.name === 'metric') {
    localStorage.setItem('unit', JSON.stringify({ name: 'imperial', sign: '&deg;R' }));
  } else {
    localStorage.setItem('unit', JSON.stringify({ name: 'metric', sign: '&deg;C' }));
  }
};

const convertTemperature = (temperature) => {
  if (getUnit().name === 'metric') {
    return ((temperature - 32) * 5 / 9).toFixed(0);
  }

  return ((temperature * 9 / 5) + 32).toFixed(0);
};

export { getUnit, changeUnit, convertTemperature };
