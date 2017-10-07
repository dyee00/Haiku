console.log("JS file works!");


// ==== Modal ====

$(".espresso").click(function() { 	// Modal Open
	$("#modal-espresso").fadeIn("#modal-show");
});

$(".modal-close").click(function(event) {  // Modal Close
	$("#modal-espresso").fadeOut("#modal-show");
});


$(".cappuccino").click(function() {   // Modal Open
	$("#modal-cappuccino").fadeIn("#modal-show");
});

$(".modal-close").click(function(event) { // Modal Close
	$("#modal-cappuccino").fadeOut("#modal-show");
});


$(".cafe-latte").click(function() {   // Modal Open 	
	$("#modal-cafe-latte").fadeIn("#modal-show");
});

$(".modal-close").click(function(event) { // Modal Close
	$("#modal-cafe-latte").fadeOut("#modal-show");
});


$(".flat-white").click(function() {   // Modal Open 	
	$("#modal-flat-white").fadeIn("#modal-show");
});

$(".modal-close").click(function(event) { // Modal Close
	$("#modal-flat-white").fadeOut("#modal-show");
});


$(".americano").click(function() {  // Modal Open 	
	$("#modal-americano").fadeIn("#modal-show");
});

$(".modal-close").click(function(event) { // Modal Close
	$("#modal-americano").fadeOut("#modal-show");
});


$(".red-eye").click(function() {   // Modal Open
	$("#modal-red-eye").fadeIn("#modal-show");
});

$(".modal-close").click(function(event) { // Modal Close
	$("#modal-red-eye").fadeOut("#modal-show");
});


$(".macchiato").click(function() {  // Modal Open 	
	$("#modal-macchiato").fadeIn("#modal-show");
});

$(".modal-close").click(function(event) { // Modal Close
	$("#modal-macchiato").fadeOut("#modal-show");
});


$(".cortado").click(function() {  // Modal Open 	
	$("#modal-cortado").fadeIn("#modal-show");
});

$(".modal-close").click(function(event) { // Modal Close
	$("#modal-cortado").fadeOut("#modal-show");
});


$(".mocha").click(function() {  // Modal Open 	
	$("#modal-mocha").fadeIn("#modal-show");
});

$(".modal-close").click(function(event) { // Modal Close
	$("#modal-mocha").fadeOut("#modal-show");
});


// ==== Button - pervious/next ====

var pageIndex = 1;
// hidePages(pageIndex);

function plusSlides(n) {
  showPages(pageIndex += n);
}

function showPages(n) {
  var i;
  var pages = document.getElementsByClassName("page");

  if (n > pages.length) {pageIndex = 1}    
  if (n < 1) {pageIndex = pages.length}
  for (i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";  
  }

  pages[pageIndex-1].style.display = "block";

}

// KEYPRESS 

// jQuery key codes: 27 = escape key, 
// 37 = previous slide, 39 = next slide 

// JQuery - left & right arrows to navigate to next slides

$(document).keydown(function (event) {
  if (event.keyCode == 37) {
    $(plusSlides(-1)).click(); //on left arrow, click prev 
  } else if (event.keyCode == 39) {
    $(plusSlides(1)).click(); //on right arrow, click next
  }
});


// Gestures - Hammer.min.js - left & right swipes to navigate to next slides



// jQuery Escape to exit modal screen

$(document).keyup(function(event) {
if (event.keyCode == 27) { 
   esp.style.display = "none";
   cap.style.display = "none";
   cl.style.display = "none";
   fl.style.display = "none";
   amer.style.display = "none";
   re.style.display = "none";
   mac.style.display = "none";
   cor.style.display = "none";
   // moc.style.display = "none";
}
});

// ==== javascript closes modal on background click ====

var esp = document.getElementById("modal-espresso");
var cap = document.getElementById("modal-cappuccino");
var cl = document.getElementById("modal-cafe-latte"); 
var fl = document.getElementById("modal-flat-white"); 
var amer = document.getElementById("modal-americano");
var re = document.getElementById("modal-red-eye"); 
var mac = document.getElementById("modal-macchiato");
var cor = document.getElementById("modal-cortado"); 
var moc = document.getElementById("modal-mocha");

window.onclick = function(event) {
    if (event.target == esp) {
        esp.style.display = "none";
    } else if (event.target == cap) {
        cap.style.display = "none";
    } else if (event.target == cl) {
        cl.style.display = "none";
    } else if (event.target == fl) {
        fl.style.display = "none";
    } else if (event.target == amer) {
        amer.style.display = "none";
    } else if (event.target == re) {
        re.style.display = "none";
    } else if (event.target == mac) {
        mac.style.display = "none";
    } else if (event.target == cor) {
        cor.style.display = "none";
    } else if (event.target == moc) {
        moc.style.display = "none";
    } 
}


// ==== freezes body scroll when modal is opened 


$("#modal-espresso").on("fadeIn", function () {
  $("body").addClass("#modal-open");
}).on("fadeOut", function () {
  $("body").removeClass("#modal-open")
});












