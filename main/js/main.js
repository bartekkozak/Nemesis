if($(document).ready(function(){$(".nav-link").click(function(){$(".menu").width(0),$(".menu-details").css("display","none")}),$("a[href^='#']").on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:$(this.hash).offset().top-119},900,function(){window.location.hash=this.hash})}),$(".slideshow > div:gt(0)").hide();for(var e=$(".slideitem").length,t='<li class="dot active-dot">&bull;</li>',l=1;l<e;l++)t+='<li class="dot">&bull;</li>';var n='<ul class="slider-dots">'+t+"</ul>";$(".slideshow").append(n);var s=setInterval(i,3e3);function o(e){"start"==e?s=setInterval(i,3e3):clearInterval(s)}function i(){d("next",0,500)}function d(e,t,l){var n=$(".current"),s=n.next(".slideitem"),o=n.prev(".slideitem"),i=$(".slideitem").eq(t),d=$(".active-dot"),c=d.next(),r=d.prev(),a=$(".dot").eq(t);if(0==s.length&&(c=$(".dot").first(),s=$(".slideitem").first()),0==o.length&&(r=$(".dot").last(),o=$(".slideitem").last()),"next"==e)var u=s,y=c;else if("prev"==e)u=o,y=r;else u=i,y=a;n.fadeOut(l).removeClass("current"),u.fadeIn(l).addClass("current"),d.removeClass("active-dot"),y.addClass("active-dot")}$(".left-arrow").on("click",function(){o("stop"),d("next",0,100),o("start")}),$(".right-arrow").on("click",function(){o("stop"),d("prev",0,100),o("start")}),$(".dot").on("click",function(){o("stop"),d("dot",$(this).index(),400),o("start")})}),window.innerWidth<800){function openNav(){document.querySelector(".menu").style.width="100%",document.querySelector(".menu-details").style.display="flex"}function closeNav(){document.querySelector(".menu").style.width="0",document.querySelector(".menu-details").style.display="none"}function openSearch(){document.querySelector(".search-form").style.width="100%",document.querySelector(".search-details").style.display="flex"}function closeSearch(){document.querySelector(".search-form").style.width="0",document.querySelector(".search-details").style.display="none"}}else{function openNav(){document.querySelector(".menu").style.width="40%",document.querySelector(".menu-details").style.display="flex"}function closeNav(){document.querySelector(".menu").style.width="0",document.querySelector(".menu-details").style.display="none"}function openSearch(){document.querySelector(".search-form").style.width="40%",document.querySelector(".search-details").style.display="flex"}function closeSearch(){document.querySelector(".search-form").style.width="0",document.querySelector(".search-details").style.display="none"}}var slideIndex=1;function plusDivs(e){showDivs(slideIndex+=e)}function showDivs(e){var t,l=document.getElementsByClassName("slide");for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),t=0;t<l.length;t++)l[t].style.display="none";l[slideIndex-1].style.display="flex"}function loaded(){document.querySelector(".loader").style.display="none",document.querySelector(".content").style.visibility="visible"}showDivs(slideIndex);