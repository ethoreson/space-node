function Astronauts() {
}

Astronauts.prototype.displayTotalAstros = function(displayTotal) {
  $.get("http://api.open-notify.org/astros.json").then(function(response) {
    displayTotal(response.number);
  });
};

Astronauts.prototype.getResults = function(displayAstronauts) {
  $.get("http://api.open-notify.org/astros.json").then(function(response) {
    for(var i = 0; i < response.number; i++) {
      displayAstronauts(response.people[i].name, response.people[i].craft);
    }
  });
};

exports.AstronautsModule = Astronauts;
