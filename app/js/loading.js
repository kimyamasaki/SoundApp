window.addEventListener("load", function(){
  var loadScreen = document.getElementById("loadScreen");
  setTimeout(function(){
        document.body.removeChild(loadScreen);
    }, 200);
  
});
