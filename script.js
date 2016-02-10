
// This function runs on page load
$(document).ready(function(){
   var i=0;
    var color= ["pink","purple","salmon","tan","lightcyan","mistyrose"];
    $( "#changer" ).click(function() {
      alert( "Handler for .click() called." );
      $("body").css("background-color", color[i]);
      i ++;
      
      
      
      
      
    });

});