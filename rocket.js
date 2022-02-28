const Rocket = () => {
  this.color = color;
  this.size = size;

  this.blastOff = function () {
    console.log("3... 2... 1... Blastoff!");
  };

  this.engageSecondaryEngines = function () {
    console.log("Secondary Engines Engaged!");
  };
};

module.exports = Rocket;