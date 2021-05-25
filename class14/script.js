let button = null;
let paragraph = null;
let missionAbort = null;

function init () {
    missionAbort = document.getElementById("abortMission");
    button = document.getElementById("liftoffButton");
    paragraph = document.querySelector("p");

    // Put your code for the exercises here.

    button.addEventListener("click", liftoff);

    missionAbort.addEventListener("mouseover", function(event) {
        let element = event.target;
        element.style.background = "red";
    })

    missionAbort.addEventListener("mouseout", function(event) {
        let element = event.target;
        element.style.background = "";
    })

    missionAbort.addEventListener("click", function(event) {
        console.log(window.confirm("Are you sure you want to abort the mission"));
    })
}

window.addEventListener("load", init);
// window.onload = init;

function liftoff() {
    paragraph.innerHTML = "Houston, we have lift off!";
}
// When the "Take off" button is clicked, 
// the text "The shuttle is on the ground" changes to 
// "Houston, we have lift off!". The "Take off" button has an id of "liftoffButton".

// When the user's mouse goes over the "Abort Mission" button, 
// the button's background turns red. The "Abort Mission" 
// button has an id of "abortMission".

// When the user's cursor leaves the Abort Mission button, 
// the button's background returns to its original state 
// (Hint: Setting the background color to the empty string, "", 
// will force it to revert to the default browser styles.)

// When the user clicks the Abort Mission button, make a confirmation window 
// that says Are you sure you want to abort the mission?. 
// If the user confirms that they want to abort, the text changes to 
// Mission aborted! Space shuttle returning home.