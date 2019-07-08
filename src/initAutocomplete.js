const initAutocomplete = (searchBar) => {
  const searchBox = new google.maps.places.SearchBox(searchBar);
  let a;

  searchBox.addListener('places_changed', () => {
    const places = searchBox.getPlaces();

    if (places.length === 0) {
      return;
    }

    a = places[0].geometry.location.lng();
  });

  return a;
};

export { initAutocomplete as default };
