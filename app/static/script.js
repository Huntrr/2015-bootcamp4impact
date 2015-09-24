$(function() {
 var map = new GMaps({
    div: '#map',
    lat: coordinates[0]? coordinates[0].latitude : 0,
    lng: coordinates[0]? coordinates[0].longitude : 0
 });

 for (var i = 0; i < coordinates.length; i++) {
        map.addMarker({
          lat: coordinates[i].latitude,
          lng: coordinates[i].longitude,
          infoWindow: {
            content: '<p>' + coordinates[i].notes + '</p>'
          }
        });
      }
});

