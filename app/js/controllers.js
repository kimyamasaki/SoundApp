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
        'name': 'Beat 1',
        'audio': 'audio/drum1.wav',
        'added': false,
        'isPlaying': false,
        'type': 'beat'
    },

    {
        id: 1,
        'thumb': '../img/c_portrait_1.png',
        'pic': '../img/drum2.gif',
        'name': 'Beat 2',
        'audio': 'audio/drum2.wav',
        'added': false,
        'isPlaying': false,
        'type': 'beat'
    },

    {
        id: 2,
        'thumb': '../img/c_portrait_2.png',
        'pic': '../img/drum3.gif',
        'name': 'Beat 3',
        'audio': 'audio/drum3.wav',
        'added': false,
        'isPlaying': false,
        'type': 'beat'
    },

    {
        id: 3,
        'thumb': '../img/c_portrait_3.png',
        'pic': '../img/drum4.gif',
        'name': 'Beat 4',
        'audio': 'audio/drum4.wav',
        'added': false,
        'isPlaying': false,
        'type': 'beat'
    },
    //----------------------------BASS------------------------------------
    {
        id: 4,
        'thumb': '../img/c_portrait_5.png',
        'pic': '../img/bass1.gif',
        'name': 'Bass 1',
        'audio': 'audio/bass1.wav',
        'added': false,
        'isPlaying': false,
        'type': 'bass'
    },

    {
        id: 5,
        'thumb': '../img/c_portrait_6.png',
        'pic': '../img/bass2.gif',
        'name': 'Bass 2',
        'audio': 'audio/bass2.wav',
        'added': false,
        'isPlaying': false,
        'type': 'bass'
    },

    {
        id: 6,
        'thumb': '../img/c_portrait_7.png',
        'pic': '../img/bass3.gif',
        'name': 'Bass 3',
        'audio': 'audio/bass3.wav',
        'added': false,
        'isPlaying': false,
        'type': 'bass'
    },

    {
        id: 7,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/bass4.gif',
        'name': 'Bass 4',
        'audio': 'audio/bass4.wav',
        'added': false,
        'isPlaying': false,
        'type': 'bass'
    },
    //----------------------------MELODY------------------------------------
    {
        id: 8,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/melody1.gif',
        'name': 'Melody 1',
        'audio': 'audio/melody1.wav',
        'added': false,
        'isPlaying': false,
        'type': 'melody'
    },

    {
        id: 9,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/melody2.gif',
        'name': 'Melody 2',
        'audio': 'audio/melody2.wav',
        'added': false,
        'isPlaying': false,
        'type': 'melody'
    },

    {
        id: 10,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/melody3.gif',
        'name': 'Melody 3',
        'audio': 'audio/melody3.wav',
        'added': false,
        'isPlaying': false,
        'type': 'melody'
    },

    {
        id: 11,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/melody4.gif',
        'name': 'Melody 4',
        'audio': 'audio/melody4.wav',
        'added': false,
        'isPlaying': false,
        'type': 'melody'
    },
    //----------------------------VOICE------------------------------------
    {
        id: 12,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/voice1.gif',
        'name': 'Voice 1',
        'audio': 'audio/voice1.wav',
        'added': false,
        'isPlaying': false,
        'type': 'voice'
    },

    {
        id: 13,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/voice2.gif',
        'name': 'Voice 2',
        'audio': 'audio/voice2.wav',
        'added': false,
        'isPlaying': false,
        'type': 'voice'
    },

    {
        id: 14,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/voice3.gif',
        'name': 'Voice 3',
        'audio': 'audio/voice2.wav',
        'added': false,
        'isPlaying': false,
        'type': 'voice'
    },

    {
        id: 15,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/voice4.gif',
        'name': 'Voice 4',
        'audio': 'audio/voice4.wav',
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

module.controller('soundController', function ($scope, soundservice) {

    $scope.sounds = soundservice.list(); 
    $scope.clips = [];
    $scope.nowPlaying = [];
    $scope.filters = {};

    $scope.splashHideShow = true;
    $scope.soundPartyHideShow = false;
    $scope.categoriesHideShow = false;
    $scope.soundmenuHideShow = false;

    var loadList = [];

    //console.log(loadList);

    var numSounds = 0;


    var delay = false;


    for (var i = 0; i < $scope.sounds.length; i++) {
        $scope.clips[i] = (new Audio($scope.sounds[i].audio));
    }

    $scope.newSoundParty = function(id){
        $scope.save();

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

        //console.log(loadList).length;
        if (0 < loadList.length) {

            $scope.splashHideShow = false;
            $scope.soundPartyHideShow = true;

            for (var i = 0; i < loadList.length; i++) {
                $scope.sounds[loadList[i]].added = true;
                $scope.togglePlay(loadList[i]);
                //console.log(loadList[i]);
          }
        } else {
            alert("Your load file is empty. Create a new Sound Party!");
        }  
         //console.log('Loading...')
    }

    $scope.save = function() {
        var savedArray = document.getElementById("editor1").value;
        
        loadList = savedArray.split(" ").map(Number);
        //console.log(savedArray);
        console.log(loadList);
    }

    $scope.addSound = function(id) {
        numSounds++;

        $scope.sounds[id].added = true;
        $scope.sounds[id].isPlaying = false;
        $scope.togglePlay(id);

        $scope.getTileSize();

        $scope.nowPlaying.push($scope.clips[id]);
        
        var el = document.getElementById("editor1");
        el.value += id;
        string.setText(el.value + " ");
    }

    $scope.deleteSound = function(id){
        numSounds--;

        $scope.sounds[id].added = false;
        $scope.sounds[id].isPlaying = false;

        $scope.getTileSize();

        //This deletes the right ids out of the text area
        var savedArray = document.getElementById("editor1").value;
        // console.log("BEFORE");
        // console.log(savedArray);
        var changeToArray = savedArray.split(" ").map(Number);
        // console.log("LAST ITEM IS 0???");
        // console.log(changeToArray[changeToArray.length-1]);
        if (changeToArray[changeToArray.length-1] == 0){
                changeToArray.pop();
            }
        //.map(Number);
        //console.log("MY ARRAY");
        //console.log(changeToArray);
        var index = changeToArray.indexOf(id);
        changeToArray.splice(index, 1);
        $('textarea').val('');
        //console.log($'textarea');
       
        var joinedArray = changeToArray.join(" ");
        // ////changeBack = changeToArray.toString();
        
        var el = document.getElementById("editor1");
        el.value += joinedArray;
        //console.log("JOINED ARRAY");
        //console.log(joinedArray);
        string.setText(el.value);

    }


    $scope.togglePlay = function(id){
        console.log(numSounds);

        
        var selected = $scope.sounds[id];
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


        // $scope.getDelay();

        if (selected.isPlaying == false) {
            
            setTimeout(function() { selectedClip.play(); }, delay);
            // window.setTimeout(selectedClip.play(), 2000);
            console.log(delay);
            // selectedClip.play();
            // console.log('song playing! starting at ' + $scope.nowPlaying[0].currentTime + '/' + $scope.nowPlaying[0].totalTime);

        } else if (selected.isPlaying == true) {     
            selectedClip.pause();
            selectedClip.currentTime = 0;
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
            case 1:
                console.log("just 1 sound");
                $(".tile").css('height', 600 + "px");
                break;
            case 2:
                console.log("now 2 sounds");
                $(".tile").css('height', 300 + "px");
                break;
            case 3:
                console.log("now 3 sounds");
                $(".tile").css('height', 300 + 'px');
                $(".tile").css('width', 50 + '%');
                $(".tile").css('float', 'left');
                break;
            case 4:
                console.log("now 4 sounds");
                $(".tile").css('height', 300 + 'px');
                $(".tile").css('width', 50 + '%');
                $(".tile").css('float', 'left');
                break;
            default:
                console.log("no sounds!");
                break;
        }
    };


    $scope.menuToggle = function() {
        $scope.categoriesHideShow = !$scope.categoriesHideShow;
        $scope.soundmenuHideShow = false;
    };

    $scope.viewSoundMenu = function() {
        $scope.soundmenuHideShow = true;
    };

});