function Iss() {
}

Iss.prototype.getLocation = function(displayIss) {
  $.get("http://api.open-notify.org/iss-now.json").then(function(response) {
//    console.log(JSON.stringify(response));
    displayIss(response.iss_position["latitude"], response.iss_position["longitude"]);
  }).fail(function(error){
    $('#iss-now').text("not working");
  });
};

exports.IssModule = Iss;
