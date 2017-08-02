function SpaceLaunch(){
}

SpaceLaunch.prototype.getUpcomingLaunches = function(displayLaunch){
  $.get('https://launchlibrary.net/1.2/launch/next/1').then(function(response){
    console.log(JSON.stringify(response));
    displayLaunch(response.launches[0]["name"], response.launches[0]["windowstart"], response.launches[0].missions[0].description);
  }).fail(function(error){
    $('.space-launch').text("error.responseJSON.message");
  });
};

exports.spaceLaunchModule = SpaceLaunch;
