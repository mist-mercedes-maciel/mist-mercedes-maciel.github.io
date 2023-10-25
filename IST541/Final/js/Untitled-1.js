// JavaScript Document
$( function() {
   $("map area").click( function(){
  $('#myModal').modal("show");
      if ($(this).attr("id") == "walkie") {
         $("#feedback").css("color","blue");
         $("#feedback").html("When returning the walkies to the port, make sure to place then properly, you see the red light indicating that it is changing");
      }

      if ($(this).attr("id") == "back") {
         $("#feedback").css("color","blue");
         $("#feedback").html("Return the tour backpack to the docent cabinet and they are ready for the next docent.");
      }

      if ($(this).attr("id") == "materials") {
         $("#feedback").css("color","blue");
         $("#feedback").html("If the tour backpack needs to be re-stock, you can find additional tour materials in the bottom drawers.");
      }

   });
}); //end main jQuery function