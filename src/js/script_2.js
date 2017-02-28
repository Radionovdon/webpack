'use strict';


require("babel-polyfill");

let hello = function() {
	alert('Hello');
};

hello();

exports.hello = hello;