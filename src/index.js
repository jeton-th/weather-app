const input = document.querySelector('.place');
const button = document.querySelector('.detect');

button.addEventListener('click', () => {
  button.classList.toggle('on');
  if (button.classList.contains('on')) {
    input.disabled = true;
    input.value = '';
  } else {
    input.disabled = false;
    input.focus();
  }
});

function initAutocomplete() {
  const searchBox = new google.maps.places.SearchBox(input);

  searchBox.addListener('places_changed', () => {
    const places = searchBox.getPlaces();

    if (places.length === 0) {
      return;
    }

    console.log(places[0].geometry.location.lat());
    console.log(places[0].geometry.location.lng());
  });
}

initAutocomplete();
