/* App Module */

var soundApp = angular.module('soundApp', [
  
  'ngRoute',
  'controllers'

]);

window.onload = function() {
	var tileElements = document.getElementsByClassName("tile");


	[].slice.call(tileElements).forEach(function(tileElements) {
	    var tiles = new Hammer(tileElements);


	    tiles.on('press', function(event) {   
		    $('.deleteButton').css('display', 'block');
		});
	});
};