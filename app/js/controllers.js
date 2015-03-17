var module = angular.module('contactsApp', []);

module.service('ContactService', function () {
    //to create unique contact id
    var uid = 2;

    //contacts array to hold list of all contacts
    var contacts = [{
        id: 0,
        'head': '../img/corgi_head.png',
        // 'body': '../img/corgi_body.png',
        'name': 'Corgi',
        'audio': 'audio/bark.wav',
        'isPlaying': 'false',
        // 'beat': 'rain.mp3',
    },

    {
        id: 1,
        'head': '../img/corgi_body.png',
        // 'body': '../img/corgi_body.png',
        'name': 'Drum',
        'audio': 'audio/drum.wav',
        'isPlaying': 'false',
        // 'beat': 'rain.mp3',
    }
    
    ];
    

    //$scope.groups = [];
    //console.log(contacts[0]);

    //save method create a new contact if not already exists
    //else update the existing object
    this.save = function (contact) {
        if (contact.id == null) {
            //if this is new contact, add it in contacts array
            contact.id = uid++;
            contacts.push(contact);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }

    }

    //simply search contacts list for given id
    //and returns the contact object if found
    this.get = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }

    }
    

    // this.add = function (id) {
    //     contact.id = uid++;
    //     contact.head = '../img/corgi_head.png';
    //     contacts.push(contact);
    // }

    //iterate through contacts list and delete 
    //contact if found
    this.delete = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    }

    //simply returns the contacts list
    this.list = function () {
        return contacts;
    }



});

module.controller('ContactController', function ($scope, ContactService) {

    $scope.contacts = ContactService.list(); 
    // var audio = new Audio('audio/bark.wav');
    // var drum = new Audio('audio/drum.wav');
    // audio.loop = true;
    // drum.loop = true;

    // var called = true;


// $scope.togglePlay = function(id){
//     var selected = new Audio($scope.contacts[id].audio);
//     selected.loop = true;

//     if (called) {
//         console.log("toggle play");
//         called = false;
//         return selected.play();
        

//     } else {
//         console.log("toggle stop");
//         selected.pause();
//         selected.currentTime = 0;
//         called = true;
//     }
// }


// $scope.toggleLoop = false;


// $scope.togglePlay = function(id){

//     // $scope.toggleLoop = !$scope.toggleLoop;

//     var selected = new Audio($scope.contacts[id].audio);
//     // var called = $scope.contacts[id].called;
//     // called = true;
//     selected.loop = true;

//     if ($scope.toggleLoop) {
//         console.log("toggle play: " + selected);
//         $scope.toggleLoop = !$scope.toggleLoop;
//         return selected.play();
        

//     } else {
//         console.log("toggle stop: " + selected);
//         selected.pause();
//         selected.currentTime = 0;
//         $scope.toggleLoop = !$scope.toggleLoop;
//     }
// }


$scope.isPlaying = [];

$scope.togglePlay = function(id){
    var selected = $scope.contacts[id];
    var audio = new Audio(selected.audio);
    // var called = $scope.contacts[id].called;
    // called = true;
    audio.loop = true;

    // console.log(selected.isPlaying);


    // $scope.isPlaying[id] = $scope.isPlaying[id]=='error'?'':'error';

    selected.isPlaying = !selected.isPlaying;
    if (selected.isPlaying == false) {
        console.log("toggle play: " + selected);
        // $scope.contacts[id].called = false;
        
        // return audio.play();
        audio.play();
        

    } else if (selected.isPlaying == true) {
        
        audio.pause();
        audio.currentTime = 0;
        // selected.isPlaying = false;
        console.log("toggle stop: " + selected);
        // $scope.contacts[id].called = true;
    }



    // if (called) {
    //     console.log("toggle play: " + selected);
    //     $scope.contacts[id].called = false;
    //     return selected.play();
        

    // } else {
    //     console.log("toggle stop: " + selected);
    //     selected.pause();
    //     selected.currentTime = 0;
    //     $scope.contacts[id].called = true;
    // }
};


$scope.playBeat = function(id) {
    console.log("toggle play: " + selected);
    id.play();
};

// $scope.playBeat = function(){
    
//     audio.play();
// };

// $scope.stopBeat = function(){
//     audio.pause();
//     audio.currentTime = 0;
// };

// $scope.drumBeat = function(){
    
//     drum.play();
// };

// $scope.drumStopBeat = function(){
//     drum.pause();
//     drum.currentTime = 0;
// };



    
   

});