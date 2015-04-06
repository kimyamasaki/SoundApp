/* App Module */

var soundApp = angular.module('soundApp', [
  
  'ngRoute',
  'controllers'

]);



window.onload = function() {

    startRealtime();

    var soundboard = new Hammer(document.getElementById("soundboard"));
    var backButton = new Hammer(document.getElementById("backButton"));

    soundboard.on('press', function(event) {   
        $('.deleteButton').css('display', 'block');
        $('.tile .innerElement').css('opacity', '0.5');
        $('.tile').css({'border': '5px solid #4b526d', 'border-radius': 10+'px'});
        $('#topMenu, #submenu').fadeOut();
        $('#beat, #bass, #melody, #voice').prop('checked', false);
        $('#soundCategories').css({'opacity': '0.5', 'pointer-events': 'none'});
        $('#backButton').fadeIn();
        $('#gradient').fadeIn();
    });

    backButton.on("tap", function(event) {
        $('.deleteButton').css('display', 'none');
        $('.tile .innerElement').css('opacity', '1');
        $('.tile').css({'border': 'none', 'border-radius': 0});
        $('#topMenu').fadeIn();
        $('#soundCategories').css({'opacity': '1', 'pointer-events': 'auto'});
        $('#backButton').fadeOut();
        $('#gradient').fadeOut();
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

        //put your own code here etc.
        //alert('Shake! Clearing? Hopefully ;a;');
        angular.element(document.getElementById('shakeMe')).scope().clearAll();
        angular.element(document.getElementById('shakeMe')).scope().newSoundParty();
        angular.element(document.getElementById('shakeMe')).scope().$apply();

    }

};





// //--------------
// // Audio Object
// //--------------
// var audio = {
//     buffer: {},
//     compatibility: {},
//     files: [
//         'audio/drum1.wav',
//         'audio/drum2.wav',
//         'audio/drum3.wav',
//         'audio/drum1.wav',
//         'audio/drum2.wav',
//         'audio/drum1.wav',
//         'audio/drum2.wav',
//         'audio/drum3.wav',
//         'audio/drum1.wav',
//         'audio/drum2.wav',
//     ],
//     proceed: true,
//     source_loop: {},
//     source_once: {}
// };

// //-----------------
// // Audio Functions
// //-----------------
// audio.findSync = function(n) {
//     var first = 0,
//         current = 0,
//         offset = 0;

//     // Find the audio source with the earliest startTime to sync all others to
//     for (var i in audio.source_loop) {
//         current = audio.source_loop[i]._startTime;
//         if (current > 0) {
//             if (current < first || first === 0) {
//                 first = current;
//             }
//         }
//     }

//     if (audio.context.currentTime > first) {
//         offset = (audio.context.currentTime - first) % audio.buffer[n].duration;
//     }

//     return offset;
// };

// audio.play = function(n) {
//     if (audio.source_loop[n]._playing) {
//         audio.stop(n);
//     } else {
//         audio.source_loop[n] = audio.context.createBufferSource();
//         audio.source_loop[n].buffer = audio.buffer[n];
//         audio.source_loop[n].loop = true;
//         audio.source_loop[n].connect(audio.context.destination);

//         var offset = audio.findSync(n);
//         audio.source_loop[n]._startTime = audio.context.currentTime;

//         if (audio.compatibility.start === 'noteOn') {
//             /*
//             The depreciated noteOn() function does not support offsets.
//             Compensate by using noteGrainOn() with an offset to play once and then schedule a noteOn() call to loop after that.
//             */
//             audio.source_once[n] = audio.context.createBufferSource();
//             audio.source_once[n].buffer = audio.buffer[n];
//             audio.source_once[n].connect(audio.context.destination);
//             audio.source_once[n].noteGrainOn(0, offset, audio.buffer[n].duration - offset); // currentTime, offset, duration
//             /*
//             Note about the third parameter of noteGrainOn().
//             If your sound is 10 seconds long, your offset 5 and duration 5 then you'll get what you expect.
//             If your sound is 10 seconds long, your offset 5 and duration 10 then the sound will play from the start instead of the offset.
//             */

//             // Now queue up our looping sound to start immediatly after the source_once audio plays.
//             audio.source_loop[n][audio.compatibility.start](audio.context.currentTime + (audio.buffer[n].duration - offset));
//         } else {
//             audio.source_loop[n][audio.compatibility.start](0, offset);
//         }

//         audio.source_loop[n]._playing = true;
//     }
// };

// audio.stop = function(n) {
//     if (audio.source_loop[n]._playing) {
//         audio.source_loop[n][audio.compatibility.stop](0);
//         audio.source_loop[n]._playing = false;
//         audio.source_loop[n]._startTime = 0;
//         if (audio.compatibility.start === 'noteOn') {
//             audio.source_once[n][audio.compatibility.stop](0);
//         }
//     }
// };

// //-----------------------------
// // Check Web Audio API Support
// //-----------------------------
// try {
//     // More info at http://caniuse.com/#feat=audio-api
//     window.AudioContext = window.AudioContext || window.webkitAudioContext;
//     audio.context = new window.AudioContext();
// } catch(e) {
//     audio.proceed = false;
//     alert('Web Audio API not supported in this browser.');
// }

// if (audio.proceed) {
//     //---------------
//     // Compatibility
//     //---------------
//     (function() {
//         var start = 'start',
//             stop = 'stop',
//             buffer = audio.context.createBufferSource();

//         if (typeof buffer.start !== 'function') {
//             start = 'noteOn';
//         }
//         audio.compatibility.start = start;

//         if (typeof buffer.stop !== 'function') {
//             stop = 'noteOff';
//         }
//         audio.compatibility.stop = stop;
//     })();

//     //-------------------------------
//     // Setup Audio Files and Buttons
//     //-------------------------------
//     for (var a in audio.files) {
//         (function() {
//             var i = parseInt(a) + 1;
//             var req = new XMLHttpRequest();
//             req.open('GET', audio.files[i - 1], true); // array starts with 0 hence the -1
//             req.responseType = 'arraybuffer';
//             req.onload = function() {
//                 audio.context.decodeAudioData(
//                     req.response,
//                     function(buffer) {
//                         audio.buffer[i] = buffer;
//                         audio.source_loop[i] = {};
//                         var button = document.getElementById('button-loop-' + i);
//                         button.addEventListener('click', function(e) {
//                             e.preventDefault();
//                             audio.play(this.value);
//                         });
//                     },
//                     function() {
//                         console.log('Error decoding audio "' + audio.files[i - 1] + '".');
//                     }
//                 );
//             };
//             req.send();
//         })();
//     }
// }


