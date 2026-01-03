let map;

function initMap() {
    const userLocation = { lat: 17.3850, lng: 78.4867 }; // Hyderabad

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: userLocation,
    });

    new google.maps.Marker({
        position: userLocation,
        map: map,
        title: "You are here",
    });
}

function sendSOS() {
    alert("🚨 SOS Alert Sent!\nLocation shared with contacts.");
}