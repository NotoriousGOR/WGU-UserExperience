$('[data-toggle="tooltip"]').tooltip()

// Bootstrap Carousel
$('.carousel').carousel({
    interval: 4500
});

$('.js-btn').eq(0).click(() => {
  $('html, body').animate({
    scrollTop: $('.page').eq(1).offset().top
  }, 300);
});

$('.js-btn').eq(1).click(() => {
  $('html, body').animate({
    scrollTop: $('.page').eq(2).offset().top
  }, 300);
});

$('.js-btn').eq(2).click(() => {
  $('html, body').animate({
    scrollTop: $('.page').eq(3).offset().top
  }, 300);
});

$('.js-btn').eq(3).click(() => {
  $('html, body').animate({
    scrollTop: $('.page').eq(4).offset().top
  }, 300);
});

$('.js-btn').eq(4).click(() => {
  $('html, body').animate({
    scrollTop: $('.page').eq(5).offset().top
  }, 300);
});

// side nav

$('.side-btn').eq(0).click(() => {
  $('html, body').animate({
    scrollTop: $('.page').eq(1).offset().top
  }, 300);
});

$('.side-btn').eq(1).click(() => {
  $('html, body').animate({
    scrollTop: $('.page').eq(2).offset().top
  }, 300);
});

$('.side-btn').eq(2).click(() => {
  $('html, body').animate({
    scrollTop: $('.page').eq(3).offset().top
  }, 300);
});

$('.side-btn').eq(3).click(() => {
  $('html, body').animate({
    scrollTop: $('.page').eq(4).offset().top
  }, 300);
});

$('.side-btn').eq(4).click(() => {
  $('html, body').animate({
    scrollTop: $('.page').eq(5).offset().top
  }, 300);
});

var myScrollFunc = function () {
  var y = window.scrollY;
  
  if (y >= 50) {
    document.getElementById("top-nav").className = "hide";
    document.getElementById("side-nav").className = "show";
  } else {
    document.getElementById("top-nav").className = "show";
    document.getElementById("side-nav").className = "hide";
  }
}

window.addEventListener("scroll", myScrollFunc);