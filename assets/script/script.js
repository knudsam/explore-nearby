// Initialize the Google Maps API
function initMap() {
  // Set up a map centered on the user's location
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const map = new google.maps.Map(document.getElementById("map-container"), {
        center: { lat: lat, lng: lng },
        zoom: 15,
      })
    });
  const userMarker = new google.maps.Marker({
    position: { lat: lat, lng: lng },
    map: map,
    title: "You are here",
  });
}

initMap();