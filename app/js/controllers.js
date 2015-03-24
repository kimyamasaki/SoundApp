var module = angular.module('soundApp', []);

module.service('soundservice', function () {
    //to create unique sound id
    var uid = 2;

    //sounds array to hold list of all sounds
    var sounds = [{
        id: 0,
        'thumb': '../img/c_portrait_4.png',
        'pic': '../img/portrait_4.png',
        // 'body': '../img/corgi_body.png',
        'name': 'Corgi',
        'audio': 'audio/bark.wav',
        'added': false,
        'isPlaying': false,
        'type': 'beat'
        // 'beat': 'rain.mp3',
    },

    {
        id: 1,
        'thumb': '../img/c_portrait_1.png',
        'pic': '../img/portrait_1.png',
        'name': 'Drum',
        'audio': 'audio/drum.wav',
        'added': false,
        'isPlaying': false,
        'type': 'beat'
    },

    {
        id: 2,
        'thumb': '../img/c_portrait_2.png',
        'pic': '../img/portrait_2.png',
        'name': 'Bass',
        'audio': 'audio/bass.wav',
        'added': false,
        'isPlaying': false,
        'type': 'bass'
    },

    {
        id: 3,
        'thumb': '../img/c_portrait_3.png',
        'pic': '../img/portrait_3.png',
        'name': 'Snare',
        'audio': 'audio/snare.wav',
        'added': false,
        'isPlaying': false,
        'type': 'bass'
    },

    {
        id: 4,
        'thumb': '../img/c_portrait_5.png',
        'pic': '../img/portrait_5.png',
        'name': 'Snare',
        'audio': 'audio/snare.wav',
        'added': false,
        'isPlaying': false,
        'type': 'melody'
    },

    {
        id: 5,
        'thumb': '../img/c_portrait_6.png',
        'pic': '../img/portrait_6.png',
        'name': 'Drum',
        'audio': 'audio/drum.wav',
        'added': false,
        'isPlaying': false,
        'type': 'melody'
    },

    {
        id: 6,
        'thumb': '../img/c_portrait_7.png',
        'pic': '../img/portrait_7.png',
        'name': 'Drum',
        'audio': 'audio/drum.wav',
        'added': false,
        'isPlaying': false,
        'type': 'vocal'
    },

    {
        id: 7,
        'thumb': '../img/c_portrait_8.png',
        'pic': '../img/portrait_8.png',
        'name': 'Drum',
        'audio': 'audio/drum.wav',
        'added': false,
        'isPlaying': false,
        'type': 'vocal'
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
        
        loadList = savedArray.split("").map(Number);
        //console.log(savedArray);
        console.log(loadList);
    }

    $scope.addSound = function(id) {
        $scope.sounds[id].added = true;
        $scope.sounds[id].isPlaying = false;
        $scope.togglePlay(id);

        $scope.nowPlaying.push($scope.clips[id]);
        
        //add value
        //console.log(id);
        var el = document.getElementById("editor1");
        el.value += id;
        string.setText(el.value);
    }

    $scope.deleteSound = function(id){

        $scope.sounds[id].added = false;
        $scope.sounds[id].isPlaying = false;
        


        //This deletes the right ids out of the text area
        var savedArray = document.getElementById("editor1").value;
        var changeToArray = savedArray.split("").map(Number);
        var index = changeToArray.indexOf(id);
        changeToArray.splice(index, 1);
        $('textarea').val('');
        // console.log("commas");
        // console.log(changeToArray);
        var joinedArray = changeToArray.join("");
        //changeBack = changeToArray.toString();
        // console.log("no commas?");
        // console.log(joinedArray);
        var el = document.getElementById("editor1");
        el.value += joinedArray;
        string.setText(el.value);


        console.log($scope.sounds[id].added);

    }


    $scope.togglePlay = function(id){

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


    $scope.menuToggle = function() {
        $scope.categoriesHideShow = !$scope.categoriesHideShow;
        $scope.soundmenuHideShow = false;
    };

    $scope.viewSoundMenu = function() {
        $scope.soundmenuHideShow = true;
    };
});