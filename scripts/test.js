alert ('test is working');

console.log ('hello world');

$(document).ready (function(){

	alert('document is ready');
	$('header').hide(). fadeIn(2000).fadeOut(2000);
	$('#main-nav').click(function(){
		$('header').slideToggle(3000);
	});
	$('section.content-center a').click (function(){
		alert ('you clicked a link');
	});

	//Hide all but the first link in center content link
	function hideRestLinks (){
		$("section.content-center ul a"). slice(1).hide();
	}

//Hide all recent content links in the list
	// Show first recent content link.
	hideRestLinks();
// When hovering on a recent content link, show the next link. 
	$("section.content-center ul a").hover(function(){
	  $(this).parent().next().children('a').show();		
	});
	//Add a minimize link (after View all link)
	$("section.content-center").append('<a href="#" id="minimize">Minimize</a>')

	//When clicking minimize, hide all but first link
	$("#minimize").click(function(){
		$("section.content-center ul a").slice(1).fadeOut(2000);
	});
	$('#horned-frog').click(function(){
		$('body').toggleClass('froggy');
	});
});

