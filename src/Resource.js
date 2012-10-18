var Resource = function () {

};

Resource.getColor = function (type) {
	switch(type) {
		case Resource.TYPES.LUMBER:
			return "#E6E1B1"
		case Resource.TYPES.STONE:
			return "#91918A";
		case Resource.TYPES.GOLD:
			return "#91918A";
		case Resource.TYPES.DIAMOND:
			return "#91918A";
		case Resource.TYPES.COAL:
			return "#91918A";
		case Resource.TYPES.WATER:
			return "#85BCDE";
		case Resource.TYPES.OIL:
			return "#333226";
		case Resource.TYPES.GRAIN:
			return "#CCCC74";
	}
}

//constant resource types
Resource.TYPES = {
	LUMBER: 	0,
	STONE: 		1,
	GOLD: 		2,
	DIAMOND: 	3,
	COAL: 		4,
	WATER: 		5,
	OIL: 		6,
	GRAIN: 		7
};

exports = Resource;