console.log("hej1");


// enable vibration support
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;




document.getElementsByClassName('bounce')[0].classList.add('animate');

if (navigator.vibrate) {
    // vibration API supported
    setTimeout((function() {
        navigator.vibrate(20);
    }).bind(this), 1250);

    setTimeout((function() {
        navigator.vibrate(20);
    }).bind(this), 1900);
}
