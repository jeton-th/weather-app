const weather = () => new Promise(
  (resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject),
);

weather()
  .then(position => position)
  .catch(err => err.message);

export { weather as default };
