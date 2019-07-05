import currentLocation from './currentLocation';
import initAutocomplete from './initAutocomplete';

const location = () => {
  // const searchBar = document.querySelector('.search-bar');
  // const locationIcon = document.querySelector('.location-icon');
  // const searchIcon = document.querySelector('.search-icon');

  // locationIcon.addEventListener('click', () => {
  //   locationIcon.classList.toggle('on');
  //   if (locationIcon.classList.contains('on')) {
  //     searchBar.disabled = true;
  //     searchBar.value = '';
  //     return currentLocation();
  //   }
  //   searchBar.disabled = false;
  //   searchBar.focus();
  //   return initAutocomplete();
  // });

  return currentLocation();
};

export { location as default };
