var Astronauts = require('./../js/astronauts.js').AstronautsModule;

$(document).ready(function(){

  var displayTotal = function(total){
    $('#total-astros').text("There are currently " + total + " astronauts in space:");
  };

  var displayAstronauts = function(name, ship){
    var nameArray = name.split(" ");
    console.log(nameArray[1]);
    $('.astros-in-space').append("<div class = 'astronaut'>" +
    "<img src = '../../images/spaceman.png'>" +
    "<span class='dont-move'><h3><a href='//en.wikipedia.org/wiki/" +
    nameArray[0] +
    "_" +
    nameArray[1] +
    "'>" +
    name +
    "</a></h3>" +
    "<h4>Currently aboard the " +
    ship +
    "</h4></span></div>");
  };
  var astro = new Astronauts();
  astro.displayTotalAstros(displayTotal);
  astro.getResults(displayAstronauts);
});
