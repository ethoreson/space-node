function Astronauts() {
}

Astronauts.prototype.getResults = function(displayAstronauts) {
  $.get("http://api.open-notify.org/astros.json").then(function(response) {
    console.log(JSON.stringify(response));
    for(var i = 0; i < response.number; i++) {
      displayAstronauts(response.people[i].name, response.people[i].craft, response.number);
    }
  });
};

exports.AstronautsModule = Astronauts;
