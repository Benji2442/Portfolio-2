// JQUERY FOR SCROLLING NAVIGATION

$(document).ready(function(){
	$('.slide-section').click(function(e){

		var linkHref = $(this).attr('href');
		console.log(linkHref)

		$('html, body').animate({
			scrollTop: $(linkHref).offset().top
		});

		e.preventDefault();
	});
});
