// alert("yes");

var noOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i =0;i<noOfDrumButtons;i++){


    //when clicked the fig, on sceeen
document.querySelectorAll("button")[i].addEventListener("click",function(){
    // // alert("i got clicked");
    var clickedButton =  this.innerHTML;
    //     console.log(this.style.color="white");

    makeSound(clickedButton);
    buttonAnimation(clickedButton);

    

});
}

//if pressed those keys through keboard.

document.addEventListener("keydown", (event)=>{
    makeSound(event.key);
    buttonAnimation(event.key)
});




function makeSound(key){
    switch(key){
        case "w" :
            var audio = new Audio('sounds/tom-1.mp3');
audio.play();
        break;
        case "a" :
            var audio = new Audio('sounds/tom-2.mp3');
audio.play();
        break;
        case "s" :
            var audio = new Audio('sounds/tom-3.mp3');
audio.play();
        break;
        case "d" :
            var audio = new Audio('sounds/tom-4.mp3');
audio.play();
        break;
        case "j" :
            var audio = new Audio('sounds/snare.mp3');
audio.play();
        break;
        case "k" :
            var audio = new Audio('sounds/crash.mp3');
audio.play();
        break;
        case "l" :
            var audio = new Audio('sounds/kick-bass.mp3');
audio.play();
        break;

        default:console.log("wrong move");
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
activeButton.classList.remove("pressed");
    },100)
}
