var Resource = require("./Resource");
console.log(Resource.TYPES);

var World = function(w, h) {
	this.width = w;
	this.height = h;
	this._map = [];

	this.init();
};

World.prototype = {
	/**
	 * Initialise the init function 
	 */
	init: function () {
		for (var x = 0; x < this.width; ++x) {
			this._map[x] = [];
			for (var y = 0; y < this.height; ++y) {
				this._map[x][y] = null;
			}
		}
	},

	/**
	 * Render the map
	 */
	render: function (ctx) {

	},

	/**
	 * Tick for the world
	 */
	tick: function (dt) {

	}
};

exports = World;