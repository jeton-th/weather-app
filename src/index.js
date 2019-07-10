import { currentLocation, getWeather } from './fetchData';
import { render, changeTemperature } from './render';
import { getUnit, changeUnit } from './utils';

const searchBar = document.querySelector('.search-bar');
const locationIcon = document.querySelector('.location-icon');
const unitButton = document.querySelector('.unit');
unitButton.innerHTML = getUnit().sign;

function getCurrent() {
  currentLocation().then((result) => {
    const long = (result.coords.longitude).toFixed(2);
    const lat = (result.coords.latitude).toFixed(2);

    getWeather(long, lat).then((data) => {
      render(data);
    });
  });
}

locationIcon.addEventListener('click', () => {
  searchBar.value = ''; // clear the search bar
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

    getWeather(long, lat).then((data) => {
      render(data);
    });
  });
}

searchBar.addEventListener('focus', () => {
  initAutocomplete();
});

unitButton.addEventListener('click', () => {
  changeUnit();
  unitButton.innerHTML = getUnit().sign;
  changeTemperature();
});

getCurrent();
