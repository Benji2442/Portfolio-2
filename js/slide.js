//SLIDE.JS
$(document).ready(function(){
//NEEDED TO SLIDE H1 AND P TAGS DOWN FROM IMG ONCE CLICKED...
$('.slide-job h1').hide();
$('.slide-job p ').hide();
//SELECT ANCHOR WITH IMG AND CREATE CLICK HANDLER
$( ".trigger" ).click(function( event ) {
  event.preventDefault();
	$('.slide-job h1').slideToggle();
	$('.slide-job p').slideToggle();
});

//SELECT H1 AND SLIDE DOWN ONCE CLICKED
});
