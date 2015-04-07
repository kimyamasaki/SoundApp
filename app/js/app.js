/* App Module */

var soundApp = angular.module('soundApp', [
  
  'ngRoute',
  'controllers'

]);



window.onload = function() {

    startRealtime();

    var soundboard = new Hammer(document.getElementById("soundboard"));
    var backButton = new Hammer(document.getElementById("backButton"));
    var xButton = new Hammer(document.getElementById("xButton"));
    var yes = new Hammer(document.getElementById("yes"));
    var no = new Hammer(document.getElementById("no"));
    // var load = new Hammer(document.getElementById("load"));
    var saveButton = new Hammer(document.getElementById("saveButton"));

    soundboard.on('press', function(event) {  
    	$('.deleteButton').css('display', 'block');
        $('.tile .innerElement').css('opacity', '0.5');
        $('.tile').css({'border': '5px solid #3B4060', 'border-radius': 10+'px'});
        $('#topMenu, #submenu, #backButton').fadeOut();
        $('#beat, #bass, #melody, #voice').prop('checked', false);
        $('#soundCategories').css({'opacity': '0.5', 'pointer-events': 'none'});
        $('#xButton').fadeIn();
    });

    backButton.on("tap", function(event) {
        $('#backButton').fadeOut();
    });

    xButton.on("tap", function(event) {
        $('.deleteButton').css('display', 'none');
        $('.tile .innerElement').css('opacity', '1');
        $('.tile').css({'border': 'none', 'border-radius': 0});
        $('#topMenu').fadeIn();
        $('#soundCategories').css({'opacity': '1', 'pointer-events': 'auto'});
        $('#xButton').fadeOut();
        $('#backButton').fadeIn();
    });

    yes.on("tap", function(event) {
    	$('#popup').velocity({opacity: 0}, {display: 'none'}, 400);

        angular.element(document.getElementById('shakeMe')).scope().clearAll();
        angular.element(document.getElementById('shakeMe')).scope().newSoundParty();
        angular.element(document.getElementById('shakeMe')).scope().$apply();
    });

    no.on("tap", function(event) {
        $('#popup').velocity({opacity: 0}, {display: 'none'}, 400);
    });

    var myShakeEvent = new Shake({
        threshold: 15
    });

    // start listening to device motion
    myShakeEvent.start();

    // register a shake event
    window.addEventListener('shake', shakeEventDidOccur, false);

    //shake event callback
    function shakeEventDidOccur () {
        $('#popup').velocity({opacity: 1}, {display: 'block'}, 500);
    }

};