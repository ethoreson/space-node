function SpaceLaunch(){
}

SpaceLaunch.prototype.getUpcomingLaunches = function(displayLaunch){
  $.get('https://launchlibrary.net/1.2/launch/next/5').then(function(response){
//  console.log(JSON.stringify(response));
  for(var i = 0; i < 5; i++) {
    displayLaunch(response.launches[i]["name"], response.launches[i]["windowstart"], response.launches[i].missions[0].description);
  }
  }).fail(function(error){
    $('.space-launch').text("error.responseJSON.message");
  });
};

exports.spaceLaunchModule = SpaceLaunch;
