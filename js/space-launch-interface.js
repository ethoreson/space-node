var SpaceLaunch = require('./../js/space-launch.js').spaceLaunchModule;

$(document).ready(function(){
  var displayLaunch = function(name, windowstart, description){
    $('.space-launch').append("<h1> Name: " +
    name +
    "</h1><br>" +
    "<h2>Launch Date: " +
    windowstart +
     "</h2><br>" +
    "<h3> Description: " +
    description +
    "</h3><br><hr>");
  };

  var newLaunch = new SpaceLaunch();
  newLaunch.getUpcomingLaunches(displayLaunch);
});
