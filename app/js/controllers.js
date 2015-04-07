var module = angular.module('soundApp', []);

module.service('soundservice', function () {
    //to create unique sound id
    var uid = 16;

    //sounds array to hold list of all sounds
    //----------------------------BEAT------------------------------------
    
    var sounds = [{
        id: 0,
        'thumb': '../img/c_portrait_4.png',
        'pic': '../img/drum1.gif',
        'name': '1',
        'audio': 'audio/drum1.wav',
        'png' : '../img/drum.png',
        'hide': 'drum1',
        'added': false,
        'isPlaying': false,
        'type': 'beat'
    },

    {
        id: 1,
        'thumb': '../img/c_portrait_1.png',
        'pic': '../img/drum2.gif',
        'name': '2',
        'audio': 'audio/drum2.wav',
        'png' : '../img/drum.png',
        'hide': 'drum2',
        'added': false,
        'isPlaying': false,
        'type': 'beat'
    },

    {
        id: 2,
        'thumb': '../img/c_portrait_2.png',
        'pic': '../img/drum3.gif',
        'name': '3',
        'audio': 'audio/drum3.wav',
        'png' : '../img/drum.png',
        'hide': 'drum3',
        'added': false,
        'isPlaying': false,
        'type': 'beat'
    },

    {
        id: 3,
        'thumb': '../img/c_portrait_3.png',
        'pic': '../img/drum4.gif',
        'name': '4',
        'audio': 'audio/drum4.wav',
        'png' : '../img/drum.png',
        'hide': 'drum4',
        'added': false,
        'isPlaying': false,
        'type': 'beat'
    },
    //----------------------------BASS------------------------------------
    {
        id: 4,
        'thumb': '../img/c_portrait_5.png',
        'pic': '../img/bass1.gif',
        'name': '1',
        'audio': 'audio/bass1.wav',
        'png' : '../img/bass.png',
        'added': false,
        'isPlaying': false,
        'type': 'bass'
    },

    {
        id: 5,
        'thumb': '../img/c_portrait_6.png',
        'pic': '../img/bass2.gif',
        'name': '2',
        'audio': 'audio/bass2.wav',
        'png' : '../img/bass.png',
        'added': false,
        'isPlaying': false,
        'type': 'bass'
    },

    {
        id: 6,
        'thumb': '../img/c_portrait_7.png',
        'pic': '../img/bass3.gif',
        'name': '3',
        'audio': 'audio/bass3.wav',
        'png' : '../img/bass.png',
        'added': false,
        'isPlaying': false,
        'type': 'bass'
    },

    {
        id: 7,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/bass4.gif',
        'name': '4',
        'audio': 'audio/bass4.wav',
        'png' : '../img/bass.png',
        'added': false,
        'isPlaying': false,
        'type': 'bass'
    },
    //----------------------------MELODY------------------------------------
    {
        id: 8,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/melody1.gif',
        'name': '1',
        'audio': 'audio/melody1.wav',
        'png' : '../img/melody.png',
        'added': false,
        'isPlaying': false,
        'type': 'melody'
    },

    {
        id: 9,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/melody2.gif',
        'name': '2',
        'audio': 'audio/melody2.wav',
        'png' : '../img/melody.png',
        'added': false,
        'isPlaying': false,
        'type': 'melody'
    },

    {
        id: 10,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/melody3.gif',
        'name': '3',
        'audio': 'audio/melody3.wav',
        'png' : '../img/melody.png',
        'added': false,
        'isPlaying': false,
        'type': 'melody'
    },

    {
        id: 11,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/melody4.gif',
        'name': '4',
        'audio': 'audio/melody4.wav',
        'png' : '../img/melody.png',
        'added': false,
        'isPlaying': false,
        'type': 'melody'
    },
    //----------------------------VOICE------------------------------------
    {
        id: 12,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/voice1.gif',
        'name': '1',
        'audio': 'audio/voice1.wav',
        'png' : '../img/voice.png',
        'added': false,
        'isPlaying': false,
        'type': 'voice'
    },

    {
        id: 13,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/voice2.gif',
        'name': '2',
        'audio': 'audio/voice2.wav',
        'png' : '../img/voice.png',
        'added': false,
        'isPlaying': false,
        'type': 'voice'
    },

    {
        id: 14,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/voice3.gif',
        'name': '3',
        'audio': 'audio/voice2.wav',
        'png' : '../img/voice.png',
        'added': false,
        'isPlaying': false,
        'type': 'voice'
    },

    {
        id: 15,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/voice4.gif',
        'name': '4',
        'audio': 'audio/voice4.wav',
        'png' : '../img/voice.png',
        'added': false,
        'isPlaying': false,
        'type': 'voice'
    }

    ];

    



    //$scope.groups = [];
    //console.log(sounds[0]);

    //save method create a new sound if not already exists
    //else update the existing object
    this.save = function (sound) {
        if (sound.id == null) {
            //if this is new sound, add it in sounds array
            sound.id = uid++;
            sounds.push(sound);
        } else {
            //for existing sound, find this sound using id
            //and update it.
            for (i in sounds) {
                if (sounds[i].id == sound.id) {
                    sounds[i] = sound;
                }
            }
        }

    }

    //simply search sounds list for given id
    //and returns the sound object if found
    this.get = function (id) {
        for (i in sounds) {
            if (sounds[i].id == id) {
                return sounds[i];
            }
        }

    }


    //iterate through sounds list and delete 
    //sound if found
    this.delete = function (id) {
        for (i in sounds) {
            if (sounds[i].id == id) {
                sounds.splice(i, 1);
            }
        }
    }

    //simply returns the sounds list
    this.list = function () {
        return sounds;
    }

});

module.controller('soundController', function ($scope, $window, soundservice) {

    $scope.types = [
        {'category': 'beat'},
        {'category': 'bass'},
        {'category': 'melody'},
        {'category': 'voice'}
    ];

    $scope.windowHeight = $window.innerHeight - 70;
    $scope.sounds = soundservice.list(); 
    $scope.clips = [];
    $scope.nowPlaying = [];
    $scope.filters = {};

    $scope.splashHideShow = true;
    $scope.soundPartyHideShow = false;

    var loadList = [];
    var numSounds = 0;
    var delay = false;


    for (var i = 0; i < $scope.sounds.length; i++) {
        $scope.clips[i] = (new Audio($scope.sounds[i].audio));
    }

    // if (numSounds == 0) {
    //     $('#saveButton').css({'opacity': '0.5', 'pointer-events': 'none'});
    // } else {
    //     $('#saveButton').css({'opacity': '1', 'pointer-events': 'auto'});
    // }

    $scope.start = function(){
        // $('#authMe').css('display', 'none');
        $('#authMe').velocity("transition.bounceDownOut", 600)
            .delay(100)
            .velocity({display: 'none'});
        $('#new').delay(500).velocity("transition.bounceUpIn", 600);
        $('#load').delay(580).velocity("transition.bounceUpIn", 600);
    }



    $scope.newSoundParty = function(){
        $scope.save();

        $('#new').velocity("transition.bounceDownOut", 600)
            .velocity({display: 'none'});
        $('#load').velocity("transition.bounceDownOut", 600)
            .delay(80)
            .velocity({display: 'none'});


        if (loadList.length > 0) {
            var r = window.confirm("Creating a new Sound Party will overwrite your load file! Continue?");
            if (r == true) {
                $('textarea').val('');
                $scope.splashHideShow = false;
                $scope.soundPartyHideShow = true;
                console.log('New!')

            } else {
                console.log("Cancel");
            }
        } else {
            $scope.splashHideShow = false;
            $scope.soundPartyHideShow = true;
            console.log('New!');
        } 
    }

    $scope.loadSoundParty = function(id){
        
        $scope.save();

        if (0 < loadList.length) {

            $scope.splashHideShow = false;
            $scope.soundPartyHideShow = true;

            for (var i = 0; i < loadList.length; i++) {
                $scope.sounds[loadList[i]].added = true;
                $scope.togglePlay(loadList[i]);
            }

            numSounds = loadList.length;
            $scope.getTileSize();

            $('#backButton').fadeIn();
            $('#beat, #bass, #melody, #voice').prop('checked', false);
            $('#submenu').css('display', 'none');
        

        } else {
            alert("Your load file is empty. Create a new Sound Party!");
        }  


    }

    $scope.splashToggle = function() {
        $scope.splashHideShow = true;
        $scope.soundPartyHideShow = false;

        $('#new').velocity("transition.bounceUpIn", 600);
        $('#load').delay(80).velocity("transition.bounceUpIn", 600);
    }


     $scope.clearAll = function(){
        var savedArray = document.getElementById("editor1").value;
        
        loadList = savedArray.split(" ").map(Number);
       
        for (var i = 0; i < loadList.length; i++) {
            $scope.deleteSound(loadList[i]);       
         }
        
        loadList = [];
        numSounds = 0;
    }


    $scope.clearBack = function(){
        var savedArray = document.getElementById("editor1").value;
        
        loadList = savedArray.split(" ").map(Number);
       
        for (var i = 0; i < loadList.length; i++) {
            $scope.deleteBack(loadList[i]);       
        }
        
        // loadList = [];
        numSounds = 0;
    }


    $scope.save = function() {
        var savedArray = document.getElementById("editor1").value;
        
        loadList = savedArray.split(" ").map(Number);

        if (loadList[loadList.length-1] == 0){
                loadList.pop();
            }
        console.log(loadList);
    }


    $scope.savePopup = function() {

        $('#savePopup').fadeIn('fast').delay(1000).fadeOut('fast');

        $('#savePopup').velocity({opacity: 1}, {display: 'block'}, 500)
            .delay(1000)
            .velocity({opacity: 0}, {display: 'none'});
    }

    $scope.addSound = function(id) {
        
        if (numSounds > 7) {
            alert("Oops, that's too many animals! Press and hold to delete a few.");
            $scope.sounds[id].added = false;
            return;
        } else {

            // check if the sound is already on the soundboard
            if ($.inArray($scope.clips[id], $scope.nowPlaying) != -1) {
                $scope.deleteSound(id);
            } else {
                numSounds++;
                $scope.nowPlaying.push($scope.clips[id]);
                $scope.sounds[id].added = true;
                $scope.sounds[id].isPlaying = false;
                $scope.togglePlay(id);
                $scope.getTileSize();

                console.log($scope.nowPlaying);
            }
        }
        



        console.log("number of sounds: " + numSounds);
        
        var el = document.getElementById("editor1");
        el.value += id;
        string.setText(el.value + " ");

        // var greens = ['#ff0000', '#00ff00', '#0000ff'];
        // var random_color = greens[Math.floor(Math.random() * greens.length)];
        // $(".green").css('background', random_color);
    };

    $scope.deleteSound = function(id){
        numSounds--;

        $scope.sounds[id].added = false;
        $scope.sounds[id].isPlaying = false;

        $scope.clips[id].pause();
        $scope.clips[id].currentTime = 0;

        $(".tile").css('width', 80 + '%');

        $scope.getTileSize();
        console.log("number of sounds: " + numSounds);

        for(var i = $scope.nowPlaying.length - 1; i >= 0; i--) {
            if($scope.nowPlaying[i] === $scope.clips[id]) {
               $scope.nowPlaying.splice(i, 1);
            }
        }

        //This deletes the right ids out of the text area
        var savedArray = document.getElementById("editor1").value;
        var changeToArray = savedArray.split(" ").map(Number);

        if (changeToArray[changeToArray.length-1] == 0){
            changeToArray.pop();
        }

        var index = changeToArray.indexOf(id);
        changeToArray.splice(index, 1);
        $('textarea').val('');
       
        var joinedArray = changeToArray.join(" ");
        var el = document.getElementById("editor1");
        el.value += joinedArray;
        string.setText(el.value);
    };


    $scope.deleteBack = function(id){
        numSounds--;

        $scope.sounds[id].added = false;
        $scope.sounds[id].isPlaying = false;

        $scope.clips[id].pause();
        $scope.clips[id].currentTime = 0;

        $(".tile").css('width', 80 + '%');

        $scope.getTileSize();
        console.log("number of sounds: " + numSounds);

        for(var i = $scope.nowPlaying.length - 1; i >= 0; i--) {
            if($scope.nowPlaying[i] === $scope.clips[id]) {
               $scope.nowPlaying.splice(i, 1);
            }
        }
    };


    var gifs = [
        '../img/drum1.gif', '../img/drum2.gif', '../img/drum3.gif', '../img/drum4.gif',
        '../img/bass1.gif', '../img/bass2.gif', '../img/bass3.gif', '../img/bass4.gif',
        '../img/melody1.gif', '../img/melody2.gif', '../img/melody3.gif', '../img/melody4.gif',
        '../img/voice1.gif', '../img/voice2.gif', '../img/voice3.gif', '../img/voice4.gif'
    ];

    $scope.togglePlay = function(id){
        console.log(numSounds);
        var compare = $scope.sounds[id].hide;
        var selected = $scope.sounds[id];
        console.log(compare);
        var selectedClip = $scope.clips[id];
        selectedClip.loop = true;
        var delay;


        if ($scope.nowPlaying.length == 0) {
            delay = 0;
        } else {
            delay = $scope.nowPlaying[0].duration - $scope.nowPlaying[0].currentTime;
            // console.log('song playing! starting at ' + $scope.nowPlaying[0].currentTime + '/' + $scope.nowPlaying[0].duration);
            console.log('delay: ' + delay);
        }


        $scope.getDelay();

        

        if (!selected.isPlaying) {
            
            $scope.sounds[id].pic = gifs[id];

            console.log(delay);
            selectedClip.play();

        } else if (selected.isPlaying) {  

            $scope.sounds[id].pic = $scope.sounds[id].png;

            selectedClip.pause();
            selectedClip.currentTime = 0;

        }

        if (selected.ended) {
            console.log("ended!");
        } else {
            console.log('not ended');
        }
    };

    

    $scope.getDelay = function() {
        
        var delay;

        if ($scope.nowPlaying.length == 0) {
            delay = 0;
        } else {
            delay = $scope.nowPlaying[0].duration - $scope.nowPlaying[0].currentTime;
            // console.log('song playing! starting at ' + $scope.nowPlaying[0].currentTime + '/' + $scope.nowPlaying[0].duration);
            console.log('delay: ' + delay);
            return delay;
        }
    };


    $scope.getTileSize = function() {

        switch (numSounds) {
            case 0:
                $('.deleteButton').css('display', 'none');
                $('.tile .innerElement').css('opacity', '1');
                $('.tile').css({'border': 'none', 'border-radius': 0});
                $('#topMenu').fadeIn('fast');
                $('#soundCategories').css({'opacity': '1', 'pointer-events': 'auto'});
                $('#xButton').fadeOut('fast');
                $('#backButton').fadeIn('fast');

                break;
            case 1:
                console.log("1 sound");
                $(".tile").css('height', $scope.windowHeight + 'px');
                $(".tile").css('width', 100 + '%');
                $(".tile img").css('height', 200 + 'px');
                $(".tile").css('line-height', (540) + 'px');
                break;
            case 2:
                console.log("2 sounds");
                $(".tile").css('height', $scope.windowHeight/2 + 'px');
                $(".tile").css('width', 100 + '%');
                $(".tile img").css('height', 180 + 'px');
                $(".tile").css('line-height', ($scope.windowHeight/2) + 'px');
                break;
            case 3:
            case 4:
                console.log("4 sounds");
                $(".tile").css('height', $scope.windowHeight/2 + 'px');
                $(".tile").css('width', 50 + '%');
                $(".tile").css('line-height', ($scope.windowHeight/2) + 'px');
                $(".tile img").css('height', 140 + 'px');
                break;
            case 5:
            case 6:
                $(".tile").css('height', $scope.windowHeight/3 + 'px');
                $(".tile").css('width', 50 + '%');
                $(".tile img").css('height', 120 + 'px');
                $(".tile").css('line-height', ($scope.windowHeight/3) + 'px');
                break;
            case 7:
            case 8:
                $(".tile").css('height', $scope.windowHeight/4 + 'px');
                $(".tile").css('width', 50 + '%');
                $(".tile img").css('height', 120 + 'px');
                $(".tile").css('line-height', ($scope.windowHeight/4) + 'px');
                break;
            default:
                console.log("no sounds!");
                break;
        }
    };

    $scope.checkMenuToggle = function() {
        
        // can't check more than one checkbox at a time
        $(":checkbox").on('change', function () {
            $('[name="' + $(this).attr('name') + '"]').not(this).prop('checked', false);
        });

        // check if at least one checkbox is selected
        var checkAtLeastOne = false;
        $('input[type="checkbox"]').each(function() {
            if ($(this).is(":checked")) {
                checkAtLeastOne = true;
            }
        });

        // toggle submenu
        if (checkAtLeastOne) {
            $scope.soundmenuHideShow = true;
        } else {
            $scope.soundmenuHideShow = false;
        }

        $('#submenu').fadeOut('fast');
        $('#submenu').fadeIn('fast');
    };


    $scope.checkNumSounds = function() {
        
        if (numSounds <= 8) {
            return true;
        } else {
            return false;
        }
    };

});