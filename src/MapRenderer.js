var Resource = require("./Resource");

var Renderer = function (world) {
	this._world = world;
	this._width = this._height = 32;
};

Renderer.prototype = {
	render: function (ctx) {
		for (var x = 0; x < this._world.width; ++x) {
			for (var y = 0; y < this._world.height; ++y) {
				ctx.fillStyle = Resource.getColor(this._world._map[x][y]);
				ctx.fillRect(
					x * this._width, 
					y * this._height, 
					this._width, 
					this._height
				);
			}
		}
	}
};

exports = Renderer;