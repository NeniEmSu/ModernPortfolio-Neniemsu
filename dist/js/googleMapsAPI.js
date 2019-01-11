function initMap() {
    var location = {
        lat: 49.543021,
        lng: 25.599604
    };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}