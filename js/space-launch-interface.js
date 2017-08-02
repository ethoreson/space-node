var SpaceLaunch = require('./../js/space-launch.js').spaceLaunchModule;

$(document).ready(function(){
  var displayLaunch = function(name, windowstart, description){
    $('.space-launch').text("Name: " + name + "Launch Date: " + windowstart + "Description: " + description);
  };

  var newLaunch = new SpaceLaunch();
  newLaunch.getUpcomingLaunches(displayLaunch);
});
