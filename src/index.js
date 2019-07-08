import currentLocation from './currentLocation';
import render from './render';

const searchBar = document.querySelector('.search-bar');
const locationIcon = document.querySelector('.location-icon');

const weather = (long, lat) => fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=4e1f41a544e8138e1382d0bff94cc988`, { mode: 'cors' })
  .then(response => response.json())
  .then((response) => {
    render(response);
  });

const getCurrent = () => new Promise((resolve) => {
  resolve(currentLocation());
}).then((result) => {
  searchBar.value = ''; // clear the search bar
  const long = (result.coords.longitude).toFixed(2);
  const lat = (result.coords.latitude).toFixed(2);
  weather(long, lat);
});

getCurrent();

locationIcon.addEventListener('click', () => {
  getCurrent();
});

function initAutocomplete() {
  const searchBox = new google.maps.places.SearchBox(searchBar);
  searchBox.addListener('places_changed', () => {
    const places = searchBox.getPlaces();
    if (places.length === 0) {
      return;
    }
    const long = (places[0].geometry.location.lng()).toFixed(2);
    const lat = (places[0].geometry.location.lat()).toFixed(2);
    weather(long, lat);
  });
}

initAutocomplete();
