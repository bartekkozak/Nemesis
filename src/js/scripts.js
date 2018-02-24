$(document).ready(function(){
  
  // NAVIGATION HIDE ONCLICK
  
  $('.nav-link').click(function(){
    $(".menu").width(0);
    $(".menu-details").css("display","none");
  });

// SMOTH SCROLLING

  $("a[href^='#']").on('click', function(e) {

     e.preventDefault();

     $('html, body').animate({
         scrollTop: $(this.hash).offset().top - 119
       }, 900, function(){

         window.location.hash = this.hash;
       });
    });
    
    // SLIDSHOW
      
      $(".slideshow > div:gt(0)").hide();
    
    var slidesl = $('.slideitem').length;
    var d = "<li class=\"dot active-dot\">&bull;</li>";
    for (var i = 1; i < slidesl; i++) {
      d = d+"<li class=\"dot\">&bull;</li>";
    }	
    var dots = "<ul class=\"slider-dots\">" + d + "</ul\>";
    
    $(".slideshow").append(dots);
    var interval = setInterval(slide, 3000);
    
    function intslide(func) {
    	if (func == 'start') { 
     	interval = setInterval(slide, 3000);
    	} else {
    		clearInterval(interval);		
    		}
    }
    
    function slide() {
    		sact('next', 0, 500);
    }
    	
    function sact(a, ix, it) {
            var currentSlide = $('.current');
            var nextSlide = currentSlide.next('.slideitem');
            var prevSlide = currentSlide.prev('.slideitem');
    		    var reqSlide = $('.slideitem').eq(ix);
    
    		    var currentDot = $('.active-dot');
        	  var nextDot = currentDot.next();
        	  var prevDot = currentDot.prev();
    		    var reqDot = $('.dot').eq(ix);
    		
            if (nextSlide.length == 0) {
          		nextDot = $('.dot').first();
                nextSlide = $('.slideitem').first();
                }
    
            if (prevSlide.length == 0) {
          		prevDot = $('.dot').last();
                prevSlide = $('.slideitem').last();
                }
    			
    		if (a == 'next') {
    			var Slide = nextSlide;
    			var Dot = nextDot;
    			}
    			else if (a == 'prev') {
    				var Slide = prevSlide;
    				var Dot = prevDot;
    				}
    				else {
    					var Slide = reqSlide;
    					var Dot = reqDot;
    					}
    
            currentSlide.fadeOut(it).removeClass('current');
            Slide.fadeIn(it).addClass('current');
    
        	currentDot.removeClass('active-dot');
        	Dot.addClass('active-dot');
    }	
    
    $('.left-arrow').on('click', function(){
    		intslide('stop');						
    		sact('next', 0, 100);
    		intslide('start');						
    	});
    
    $('.right-arrow').on('click', function(){
    		intslide('stop');						
    		sact('prev', 0, 100);
    		intslide('start');						
    	});
    
    $('.dot').on('click', function(){
    		intslide('stop');
    		var index  = $(this).index();
    		sact('dot', index, 400);
    		intslide('start');						
    	});            
  });
  
// SIDE NAVIGATION
  
if (window.innerWidth < 800){
  function openNav() {
    document.querySelector(".menu").style.width = "100%";
    document.querySelector('.menu-details').style.display = "flex";
  }
  
  function closeNav() {
    document.querySelector(".menu").style.width = "0";
    document.querySelector('.menu-details').style.display = "none";
  }
  
  function openSearch() {
    document.querySelector(".search-form").style.width = "100%";
    document.querySelector('.search-details').style.display = "flex";
  }
  
  function closeSearch() {
    document.querySelector('.search-form').style.width = "0";
    document.querySelector('.search-details').style.display = "none";
  }
} else {
  function openNav() {
    document.querySelector(".menu").style.width = "40%";
    document.querySelector('.menu-details').style.display = "flex";
  }
  
  function closeNav() {
    document.querySelector(".menu").style.width = "0";
    document.querySelector('.menu-details').style.display = "none";
  }
  
  function openSearch() {
    document.querySelector(".search-form").style.width = "40%";
    document.querySelector('.search-details').style.display = "flex";
  }
  
  function closeSearch() {
    document.querySelector('.search-form').style.width = "0";
    document.querySelector('.search-details').style.display = "none";
  }
}

// MANUAL SLIDER

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}   
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex";  
}

// LOADER

function loaded() {
  document.querySelector('.loader').style.display = "none";
  document.querySelector('.content').style.visibility = "visible";
}

