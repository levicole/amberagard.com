$(document).ready(function(){
	
	$('div.item').hover(
		function () {
			$(this).find('div.text').stop(true, true).animate({ backgroundColor: "#0090c6" }, 1000);
		},
		function () {
			$(this).find('div.text').stop(true, true).animate({ backgroundColor: "#000000" }, 1000);
		}
	);	
	
	$('#slider, #slider2').anythingSlider({
	  // Appearance
	  width               : null,      // Override the default CSS width
	  height              : null,      // Override the default CSS height
	  resizeContents      : false,      // If true, solitary images/objects in the panel will expand to fit the viewport

	  // Navigation
	  startPanel          : 1,         // This sets the initial panel
	  hashTags            : false,      // Should links change the hashtag in the URL?
	  buildArrows         : true,      // If true, builds the forwards and backwards buttons
	  buildNavigation     : false,      // If true, buildsa list of anchor links to link to each panel
	  navigationFormatter : null,      // Details at the top of the file on this use (advanced use)
	  forwardText         : "&raquo;", // Link text used to move the slider forward (hidden by CSS, replaced with arrow image)
	  backText            : "&laquo;", // Link text used to move the slider back (hidden by CSS, replace with arrow image)

	  // Slideshow options
	  autoPlay            : false,      // This turns off the entire slideshow FUNCTIONALY, not just if it starts running or not
	  startStopped        : false,     // If autoPlay is on, this can force it to start stopped
	  pauseOnHover        : true,      // If true & the slideshow is active, the slideshow will pause on hover
	  resumeOnVideoEnd    : true,      // If true & the slideshow is active & a youtube video is playing, it will pause the autoplay until the video has completed
	  stopAtEnd           : false,     // If true & the slideshow is active, the slideshow will stop on the last page
	  playRtl             : false,     // If true, the slideshow will move right-to-left
	  startText           : "Start",   // Start button text
	  stopText            : "Stop",    // Stop button text
	  delay               : 3000,      // How long between slideshow transitions in AutoPlay mode (in milliseconds)
	  animationTime       : 600,       // How long the slideshow transition takes (in milliseconds)
	  easing              : "swing",    // Anything other than "linear" or "swing" requires the easing plugin
	  buildStartStop   : false
	});		

	$("li.slide1").filter(':not(.cloned)').find('a').colorbox({rel:'group1'});
	$("li.slide2").filter(':not(.cloned)').find('a').colorbox({rel:'group2'});
	$("li.slide3").filter(':not(.cloned)').find('a').colorbox({rel:'group3'});
	
	$('#house').ascensor({
		Direction:'x',
		Link: false,
		Navig: false,		
		PrevNext:false  
	}); 
	
	$('div.nivoSlider').nivoSlider({
        effect:'random', // Specify sets like: 'fold,fade,sliceDown'
        slices: 5, // For slice animations
        boxCols: 5, // For box animations
        boxRows: 5, // For box animations
        animSpeed: 1000, // Slide transition speed
        pauseTime: 5000, // How long each slide will show
        startSlide:0, // Set starting Slide (0 index)
        directionNav:false, // Next & Prev navigation
        directionNavHide:true, // Only show on hover
        controlNav:false, // 1,2,3... navigation
        controlNavThumbs:false, // Use thumbnails for Control Nav
        controlNavThumbsFromRel:false, // Use image rel for thumbs
        controlNavThumbsSearch: '.jpg', // Replace this with...
        controlNavThumbsReplace: '_thumb.jpg', // ...this in thumb Image src
        keyboardNav:true, // Use left & right arrows
        pauseOnHover:true, // Stop animation while hovering
        manualAdvance:false, // Force manual transitions
        captionOpacity:0.8, // Universal caption opacity
        prevText: 'Prev', // Prev directionNav text
        nextText: 'Next', // Next directionNav text
        beforeChange: function(){}, // Triggers before a slide transition
        afterChange: function(){}, // Triggers after a slide transition
        slideshowEnd: function(){}, // Triggers after all slides have been shown
        lastSlide: function(){}, // Triggers when last slide is shown
        afterLoad: function(){} // Triggers when slider has loaded
    });	
	
	$('div#house').show();
		
});