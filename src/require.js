/**
* Shim the require function used in node.js
*/

(function() {

if (window.require !== undefined)
	throw 'RequireException: \'require\' already defined in global scope';


window.require = function(module) {
	var url = window.require.resolve(module);
	
	var request = new XMLHttpRequest();
	
	request.open('GET', url, false);
	request.send();

	try {
		eval(request.response);
	} catch(e) {
		console.error("Error loading "+module);
		console.error(e);
	}

	console.log(request)

	return exports;
}

window.require.resolve = function(module) {
	var r = module.match(/^(\.{0,2}\/)?([^\.]*)(\..*)?$/);
	return (r[1]?r[1]:'./')+r[2]+(r[3]?r[3]:(r[2].match(/\/$/)?'index.js':'.js'));
}

// INFO initializing module cache
window.require.cache = new Object();
})();