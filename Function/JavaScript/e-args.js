(function (foo, bar) {
	console.log(typeof arguments); // ?
	console.log(Array.isArray( arguments)); // ?
	
	arguments[0] = 42;
	console.log(foo); // ?
})(10, 20);