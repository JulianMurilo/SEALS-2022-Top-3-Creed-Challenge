// Julian Murillo
// jdawg.chapulin@gmail.com
// Add a button somewhere, when you click on it, some animation should occur an infinite amount of times.There should be another button to stop the animation (optional: play/stop button or toggle). Create a javascript function that runs whenever you click the button.


// First we create two functions, one for when the button is playing, and the other one is when it is stopped. 
// We use query selector to specifically call out my CSS div and say that we are going to manually change the properties though this Function. We manually type out the values that the function will replace, bu changing each of the divs animation values. 
function play() {
    document.querySelector("div").style.setProperty (
        "animation-name", "example"
    )
    document.querySelector("div").style.setProperty (
        "animation-duration", "1s"
    )
    document.querySelector("div").style.setProperty (
        "animation-iteration-count", "infinite"
    )
}

function stop() {
    document.querySelector("div").style.setProperty (
        "animation-name", "example"
    )
    document.querySelector("div").style.setProperty (
        "animation-duration", "1s"
    )
    document.querySelector("div").style.setProperty (
        "animation-iteration-count", "1"
    )
}