var Iss = require('./../js/iss.js').IssModule;
$(document).ready(function() {
  var newIss = new Iss();
  function displayIss(lat, lon) {
    $("#iss-now").append("Latitude: " + lat + ", Longitude: " + lon);
  }

   newIss.getLocation(displayIss);

  // setTimeout(function(){
  //   while (true){
  //     newIss.getLocation(displayIss);
  //   }
  // }, 5);
});
