const initAutocomplete = () => {
  const searchBox = new google.maps.places.SearchBox(searchBar);

  searchBox.addListener('places_changed', () => {
    const places = searchBox.getPlaces();

    if (places.length === 0) {
      return;
    }

    return places[0].geometry.location.lat();
    // places[0].geometry.location.lng(),
  });
};

export { initAutocomplete as default };
