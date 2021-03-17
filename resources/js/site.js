var lottie = require("lottie-web");

// Menu Icon Animation
var menuIconAnim = lottie.loadAnimation({
    container: document.getElementById('menu-icon'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/assets/site/menu-icon.json'
})

var menuIcon = $("#menu-icon"); // Menu Icon
var menu = $("#menu"); // Menu
var nav = $("#nav"); // Nav

menu.hide() // Hide menu

// Disable scroll function
function noScroll() {
    window.scrollTo(0, 0);
  }

// Menu interaction
$("#menu-icon").click(function () {
    menuIcon = !menuIcon
    if (menuIcon) { // Second click
        nav.css("background", "none");
        menuIconAnim.setDirection(-1);
        menuIconAnim.play();
        menu.fadeOut(400);
        window.removeEventListener('scroll', noScroll); // Enable scroll
    } else { // First click
        window.scrollTo(0, 0); // Scroll to top
        nav.delay(400).queue(function (next) {$(this).css("background", "linear-gradient(#181818, 95%, transparent)"); next(); });
        menuIconAnim.setDirection(1);
        menuIconAnim.play();
        menu.fadeIn(400);
        window.addEventListener('scroll', noScroll); // Disable scroll
    };
});

var video = $("#video");
var audio = $("#audio");
var videoBtn = $("#video-button");
var audioBtn = $("#audio-button");

audio.hide()

audioBtn.click(function () {
    video.fadeOut(200);
    audio.fadeIn(200);
    audioBtn.removeClass("text-color").addClass("bg-color text-white");
    videoBtn.removeClass("text-white bg-color").addClass("text-color");
});

videoBtn.click(function () {
    audio.fadeOut(200);
    video.fadeIn(200);
    videoBtn.removeClass("text-color").addClass("bg-color text-white");
    audioBtn.removeClass("text-white bg-color").addClass("text-color");
});