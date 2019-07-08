const currentLocation = () => new Promise(
  (resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject),
)
  .then(position => position)
  .catch(err => err.message);

export { currentLocation as default };
