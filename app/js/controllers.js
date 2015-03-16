var module = angular.module('contactsApp', []);

module.service('ContactService', function () {
    //to create unique contact id
    var uid = 1;

    //contacts array to hold list of all contacts
    var contacts = [{
        id: 1,
        
        'head': '../img/corgi_head.png',
        'body': '../img/corgi_body.png',
        'name': 'Corgi',

        'beat': 'rain.mp3',

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
    var audio = new Audio('audio/bark.wav');
    var drum = new Audio('audio/drum.wav');
    audio.loop = true;
    drum.loop = true;
    
$scope.playBeat = function(){
    
    audio.play();
};

$scope.stopBeat = function(){
    audio.pause();
    audio.currentTime = 0;
};

$scope.drumBeat = function(){
    
    drum.play();
};

$scope.drumStopBeat = function(){
    drum.pause();
    drum.currentTime = 0;
};



    
   

});