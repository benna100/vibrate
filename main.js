console.log("hej");



if ("vibrate" in navigator) {
    setTimeout((function() {
        window.navigator.vibrate(200);
    }).bind(this), 2000);
}
