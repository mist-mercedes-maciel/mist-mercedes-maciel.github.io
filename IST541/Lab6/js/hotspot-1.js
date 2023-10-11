// JavaScript Document
$(function (){
  $("map area").click(function(){
   $('#myModal').modal("show");
    if ($(this).attr("id") == "Cupula") {
      $("#feedback").css("color", "navy");
      $("#feedback").html("The Cupula is a dome shaped structure use as the roof of the Lantern Room");
    }
    if ($(this).attr("id") == "Window Panels") {
      $("#feedback").css("color", "navy");
      $("#feedback").html("The beacon aka ligh signal is surrounded by window panels that the keepers had to clean during their shift");
    }
    if ($(this).attr("id") == "Fresnel Lens") {
      $("#feedback").css("color", "navy");
      $("#feedback").html("A Fresnel lens is a type of composite compact lens use to gather, magnify and project the light");
    }
    if ($(this).attr("id") == "Main Gallery") {
      $("#feedback").css("color", "navy");
      $("#feedback").html("The Main Gallery houses the carousel mount for the Fresnel lens");
    }
    if ($(this).attr("id") == "Carousel") {
      $("#feedback").css("color", "navy");
      $("#feedback").html("The rotation of the carousel is what makes the characteristic flashing of a beacon");
    }
    if ($(this).attr("id") == "Clockwork Mechanism") {
      $("feedback").css("color", "navy");	
      $("feedback").html("The keeper would crank the clockwork mechanism, and then let the weight fall which would in turn rotate the carousel barrel");
    }
    if ($(this).attr("id") == "Balcony") {
      $("feedback").css("color", "navy");		
      $("feedback").html("The lantern room is sorrounded by a balcony");
    }
  
 });
}); //end main jQuery function


