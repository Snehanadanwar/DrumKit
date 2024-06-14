// detect button press
for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click" , handle);
    function handle() {
        var btn = this.innerHTML;
        makeSound(btn);
        buttonAnimation(btn);
    }
}
// detect keyboard press 
document.addEventListener("keypress" , function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(btn) { 
    if(btn == "w") {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if(btn == "a") {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(btn == "s") {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if(btn == "d") {
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
    else if(btn == "j") {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if(btn == "k") {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    else {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }

}
function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed") , 100
    });
}









//var audio = new Audio("sounds/tom-1.mp3");
//audio.play();