// Google Maps Pointer Events
	$('.maps').click(function () {
	    $('.maps iframe').css("pointer-events", "auto");
	});

	$( ".maps" ).mouseleave(function() {
	  $('.maps iframe').css("pointer-events", "none");
	});
	These are the new changes that I'm making right now