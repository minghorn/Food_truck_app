var map = null;

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(37.7891192079118,-122.395881037818),
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

}
google.maps.event.addDomListener(window, 'load', initialize);