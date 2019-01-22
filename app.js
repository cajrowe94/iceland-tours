$(document).ready(function(){
	//link click events, scrolls to page on screen
	$("#story-link").click(function(){
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".section-story").offset().top
		}, 1000);
	});
	
	$("#guide-link").click(function(){
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".section-guides").offset().top
		}, 1000);
	});
	
	$("#mission-link").click(function(){
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".section-mission").offset().top
		}, 1000);
	});
	
	
});
	
	