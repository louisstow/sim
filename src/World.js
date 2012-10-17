var World = function() {
	this.counter = 0;
};

World.prototype.hi = function() {
	console.log("WTF", this.counter++);
};

exports = World;