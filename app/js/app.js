/* App Module */

var contactsApp = angular.module('contactsApp', [
  
  'ngRoute',
  'controllers',
  'angularSoundManager'
]);


// window.onload = function() {

// 	var main = new Hammer(document.getElementById("main"));
//   var actionToggle = new Hammer(document.getElementById("actionToggle"));
//   var actionPhone = new Hammer(document.getElementById("actionPhone"));
//   var actionText = new Hammer(document.getElementById("actionText"));
//   var actionEdit = new Hammer(document.getElementById("actionEdit"));
//   var overlay = new Hammer(document.getElementById("overlay"));
//   var scrollknob = new Hammer(document.getElementById("scrollknob"));
//   var searchButton = new Hammer(document.getElementById("searchButton"));
//   var xButton = new Hammer(document.getElementById("xButton"));
//   var editButton = new Hammer(document.getElementById("editButton"));

//   var scrollVal = 0;
//   var mainHeight = $('#main').height();

//   console.log(mainHeight);

//   var currentScrollValue=0;

//   var scrollBool = false;


//   var content = document.getElementById("main");
//   var knob = document.getElementById("scrollknob");
//   var maxScroll = content.scrollHeight - content.offsetHeight;



// /*************** Action menu code ***************/

//   var xPos, yPos;

//   // Get touch position
//   $(document).on('touchstart', '#main', function(e) {
//     xPos = e.originalEvent.touches[0].pageX;
//     yPos = e.originalEvent.touches[0].pageY;

//     $("#actionPhone, #actionText, #actionEdit").css({'top': yPos-30, 'left': xPos-30});
//     $("#actionToggle").css({'top': yPos-60, 'left': xPos-60}); 
//   });

//   main.on("press", function(e) {   
//     console.log(xPos, yPos);
    
//     $("#actionToggle").fadeIn('fast').css({'top': yPos-60, 'left': xPos-60});
//     $("#actionPhone").fadeIn('fast').css({'top': yPos-28, 'left': xPos-90});
//     $("#actionText").fadeIn('fast').css({'top': yPos-95, 'left': xPos-25});
//     $("#actionEdit").fadeIn('fast').css({'top': yPos-28, 'left': xPos+35});
//     $("#overlay").fadeIn('fast');
//   });

//   main.on("pressup", function(e) {   
//     $("#actionToggle").css({'opacity': 0.4});
//   });


//   actionPhone.on("tap", function(e) {
//     console.log('phone call');
//     $("#actionToggle, #actionPhone, #actionText, #actionEdit, #overlay").fadeOut('fast');
//   });

//   actionText.on("tap", function(e) {
//     console.log('text');
//     $("#actionToggle, #actionPhone, #actionText, #actionEdit, #overlay").fadeOut('fast');
//   });

//   actionEdit.on("tap", function(e) {
//     console.log('edit');
//     $("#actionToggle, #actionPhone, #actionText, #actionEdit, #overlay").fadeOut('fast');
//   });

//   overlay.on("tap", function(e) {
//     console.log('close');
//     $("#actionToggle, #actionPhone, #actionText, #actionEdit, #overlay").fadeOut('fast');
//   });



//   /*************** Scrolling ***************/

//   main.on("panup pandown", function(e) {
//     $(".knob").val($('#main').scrollTop()/17);
//     $(".knob").trigger("change");
//   });

//   $("#main").scroll(function(){
//     $(".knob").val($('#main').scrollTop()/17);
//     $(".knob").trigger("change");
//   });

//   $(".knob").knob({
//       change : function (value) {
//           console.log("change : " + value);
//           var increments = (maxScroll / 100) * (value);
//           $('#main').scrollTop = increments;

//            //console.log(increments);
//           $('#main').scrollTop(increments);


//           if (value == 100) {
//             $(".gradient").fadeOut('fast');
//           }
//       },
//       release : function (value) {
//           //console.log(this.$.attr('value'));
//           //console.log("release : " + value);
//       },
//       cancel : function () {
//           console.log("cancel : ", this);
//       },
//   });




//   if ($("#saveButton").is(":disabled")) {
//     console.log('disabled');
//     $("#saveButton").css("background","url('./img/save_btn_disabled.png')");
//   } else {
//     $("#saveButton").css("background","url('./img/save_btn.png')");
//     console.log('enabled');
//   }


//   /**************** Search bar ****************/

//   searchButton.on("tap", function(e) {
//     $('h1').fadeOut('fast');
//     $('#searchClear').fadeIn('fast');
//     $('#searchButton').fadeOut('fast');
//     $('#xButton').fadeIn('fast');
//   });

//   xButton.on("tap", function(e) {
//     $('h1').fadeIn('fast');
//     $('#searchClear').fadeOut('fast');
//     $('#searchButton').fadeIn('fast');
//     $('#xButton').fadeOut('fast');
//   });
// };