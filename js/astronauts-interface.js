var Astronauts = require('./../js/astronauts.js').AstronautsModule;

$(document).ready(function(){
  var displayAstronauts = function(name, ship, total){
    $('.astros-in-space').append("<div class = 'astronaut'>" +
    "<img src = '../../images/spaceman.png'>" +
    "<h3>" +
    name +
    "</h3>" +
    "<h4>Currently aboard the " +
    ship +
    "</h4></div>");
  };
  var astro = new Astronauts();
  astro.getResults(displayAstronauts);
});
