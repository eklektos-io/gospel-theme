// *** MENU *** //

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
menuIcon.click(function () {
    menuIcon = !menuIcon
    if (menuIcon) { // Second click
        nav.css("background", "none");
        menuIconAnim.setDirection(-1);
        menuIconAnim.play();
        menu.fadeOut(400);
        window.removeEventListener('scroll', noScroll); // Enable scroll
    } else { // First click
        window.scrollTo(0, 0); // Scroll to top
        nav.delay(400).queue(function (next) {$(this).css("background", "linear-gradient(rgb(24,24,24), 95%, rgba(24, 24, 24, 0))"); next(); });
        menuIconAnim.setDirection(1);
        menuIconAnim.play();
        menu.fadeIn(400);
        window.addEventListener('scroll', noScroll); // Disable scroll
    };
});


// *** SERMON INDEX DROPDOWN *** //

var dropdownBtn = $("#dropdown-btn"); // Dropdown button
var dropdownMenu = $("#dropdown-menu"); // Dropdown menu

dropdownMenu.hide() // Hide dropdown menu

// Dropdown interaction
dropdownBtn.click(function () {
    dropdownBtn = !dropdownBtn
    if (dropdownBtn) { // Second click
        dropdownMenu.hide();
    } else { // First click
        dropdownMenu.show();
    };
});

// *** SERMON AUDIO & VIDEO TOGGLE *** //

var video = $("#video"); // Video
var audio = $("#audio"); // Audio
var videoBtn = $("#video-button"); // Video button
var audioBtn = $("#audio-button"); // Audio button

audio.hide() // Hide audio by default

// Show audio and hide video on click
audioBtn.click(function () {
    video.fadeOut(200);
    audio.fadeIn(200);
    audioBtn.removeClass("text-color").addClass("bg-color text-white");
    videoBtn.removeClass("text-white bg-color").addClass("text-color");
});

// Show video and hide audio on click
videoBtn.click(function () {
    audio.fadeOut(200);
    video.fadeIn(200);
    videoBtn.removeClass("text-color").addClass("bg-color text-white");
    audioBtn.removeClass("text-white bg-color").addClass("text-color");
});