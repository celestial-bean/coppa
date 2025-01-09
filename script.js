
var emuSoundPlaying=false
 var fortunateSon = new Audio("audio/fortunate.mp4")
 fortunateSon.volume=.7
 fortunateSon.play()

 function birdSound(){
 if (!emuSoundPlaying) {
    emuSoundPlaying = true;
    fortunateSon.pause()
    let sound = new Audio("audio/freeBird.mp3");
    sound.volume=0.7
    sound.play();
    sound.onended = () => {emuSoundPlaying = false;fortunateSon.play()};
  }
}

document.getElementById("emuBird").addEventListener("mouseover", () => {
 birdSound()
});

 document.getElementById("emuBird").addEventListener("click", () => {
   birdSound()
  });
 
// var val=Math.floor(Math.random()*50)
// console.log(val)
// if (val!=49){
// document.getElementById("kiwi").remove()
// }

