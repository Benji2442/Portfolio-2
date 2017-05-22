$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    if ($("#jobs").css("flex-direction") == "column" ){
        // your code here
				$('#tycmAnchor').attr('href', '#tycmModal').attr('data-toggle', 'modal');
    }
}
