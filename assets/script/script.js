// Initialize the Google Maps API
// const config = {
//   googleMapsApiKey: 'AIzaSyADJ534OZMnSqGaHgy3zHYwIkKHXiy_1Ig',
//   yelpApiKey: '68t81zE-KSob2HpH89pB3f8q21-Sw8lDGlfsVBZLHFzKk0iU1F9E0s2524_kXcJIXxaIpQeyUDIxdQZkfii_xk7ysxyNsS3m-ADOtMj-iwiBwDpHvEEiCvWuec4kZHYx'
// };
// export default config;
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
initMap()