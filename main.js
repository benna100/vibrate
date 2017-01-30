console.log("hej");


// enable vibration support
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

if (navigator.vibrate) {
	// vibration API supported
    setTimeout((function() {
        navigator.vibrate(1000);
    }).bind(this), 2000);
}
