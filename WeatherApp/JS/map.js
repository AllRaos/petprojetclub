// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
// AIzaSyAArqDRjZfYFHiCKEXq-wiTT6ZNHPf1l64
function initMap(){
    let opt = {
        center: {lat: -33.8668, lng: 151.2093},
        zoom: 4,
    }
    let map = new google.maps.Map(document.getElementById('mapConteiner'), opt);
}