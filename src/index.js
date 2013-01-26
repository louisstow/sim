var World = require("./World");
var MapRenderer = require("./MapRenderer");

window.onload = init;

function init (argument) {
	var cnv = document.getElementById("canvas");
	cnv.width = 1000;
	cnv.height = 1000;

	var ctx = cnv.getContext("2d");
	var width = 500;
	var height = 500;

	//create a world for resources and buildings
	var resources = new World(width, height);
	var buildings = new World(width, height);

	//renderer for buildings and resources
	var resourcesRender = new MapRenderer(resources);
	resourcesRender.render(ctx);

	//setup a tick
	var ticker = setInterval(function() {
		resources.tick();
		buildings.tick();
		
	}, 1000 / 60 | 0);
}