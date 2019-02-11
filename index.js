// Bootstrap Carousel
$('.carousel').carousel({
    interval: 500,
    pause:'hover',
    wrap: true
});

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("top-nav").style.top = "0";
  } else {
    document.getElementById("top-nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}