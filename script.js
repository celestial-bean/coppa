
var emuSoundPlaying=false
var fortunateSonPlaying=false
var fortunateSon = new Audio("audio/fortunate.mp4")
var freeBird = new Audio("audio/freeBird.mp3");
    freeBird.volume=0.7
function fortunate(){
  if(!fortunateSonPlaying){
    fortunateSonPlaying=true
 fortunateSon.volume=.6
 fortunateSon.play()
    fortunateSon.onended = () => fortunateSonPlaying = false
  
}}
document.body.addEventListener("onmouseover",fortunate)

document.body.addEventListener("click",fortunate)

 function birdSound(stop=false){ 
 if (!emuSoundPlaying) {
    emuSoundPlaying = true;
    fortunateSon.pause()
    freeBird.play();
    freeBird.onended = () => {emuSoundPlaying = false;fortunateSon.play()};
   else if(stop){freeBird.pause();freeBird.currentTime=0;fortunate()}
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

