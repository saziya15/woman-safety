let map, marker;

function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {

        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        map = new google.maps.Map(document.getElementById("map"), {
          zoom: 16,
          center: userLocation,
        });

        marker = new google.maps.Marker({
          position: userLocation,
          map: map,
          title: "You are here",
        });

      },
      function () {
        alert("Location permission denied");
      }
    );
  } else {
    alert("Geolocation not supported");
  }
}

function sendSOS() {
  if (marker) {
    const pos = marker.getPosition();
    alert("🚨 SOS sent!\nLatitude: " + pos.lat() + "\nLongitude: " + pos.lng());
  }
}
