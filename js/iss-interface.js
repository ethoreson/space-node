var Iss = require('./../js/iss.js').IssModule;
$(document).ready(function() {
  var newIss = new Iss();
  function displayIss(lat, lon) {
    $("#iss-now").text("Latitude: " + lat + ", Longitude: " + lon);
  }

   newIss.getLocation(displayIss);
   setInterval(function() { newIss.getLocation(displayIss); }, 5000);
});
