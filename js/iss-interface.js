var Iss = require('./../js/iss.js').IssModule;
$(document).ready(function() {
  var newIss = new Iss();
  newIss.getLocation(displayIss);
  function displayIss(lat, lon) {
    $("#iss-now").append("Latitude: " + lat + "longitude: " + lon);
  }
});
