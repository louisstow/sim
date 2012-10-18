var World = require("./World");

window.onload = init;

function init (argument) {
	var cnv = document.getElementById("canvas");
	var ctx = cnv.getContext("2d");
	var width = 1000;
	var height = 1000;

	var resources = new World(width, height);
	var buildings = new World(width, height);

	console.log(resources, buildings);

	var ticker = setInterval(function() {
		resources.tick();
		buildings.tick();
		resources.render();
		buildings.render();
	}, 1000 / 60 | 0)
}