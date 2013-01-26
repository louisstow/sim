/**
* Shim the require function used in node.js
*/
(function(parent) {

if (parent.require !== undefined)
	throw 'RequireException: \'require\' already defined in global scope';


parent.require = function(module) {
	var url = parent.require.resolve(module);

	//check the cache first
	if (parent.require.cache[url])
		return parent.require.cache[url];
	
	//create the request object
	var request = new XMLHttpRequest();
	
	//make the require request synchronous (the third parameter)
	request.open('GET', url, false);
	request.send();

	try {
		//evaluate the code in a closure
		eval(
			"(function() {" +
			request.response +
			"})();"
		);
	} catch(e) {
		//problem loading module
		console.error("Error loading " + module);
		console.error(e);
	}

	//save the exports and remove it from global
	var exportThis = exports;
	delete window.exports;

	//save the export in the cache
	parent.require.cache[url] = exportThis;

	//return the exports variable
	return exportThis;
};

//transform require url into a real url
parent.require.resolve = function(module) {
	var r = module.match(/^(\.{0,2}\/)?([^\.]*)(\..*)?$/);
	return (r[1]?r[1]:'./')+r[2]+(r[3]?r[3]:(r[2].match(/\/$/)?'index.js':'.js'));
};

//create module cache
parent.require.cache = {};
})(window);
