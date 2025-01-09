async function playChess() {
  let doc = document.createElement("script")
  let script = await fetch(
    "https://raw.githubusercontent.com/Logan-Garcia-inc/browser-Chess/refs/heads/main/script.js",
  )
  script = await script.text()
  doc.textContent = script
  document.body.append(doc)
}
document.querySelector(".chessButton").addEventListener("click", () => {
  playChess()
})
var emuSoundPlaying=false

document.getElementById("emuBird").addEventListener("mouseover", ()=>{

  let sound = new Audio("audio/freeBird.mp3");
  sound.play()
})

