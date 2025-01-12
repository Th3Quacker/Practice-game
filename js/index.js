const canvas = document.getElementById("WHAT");
const ctx = canvas.getContext("2d");
var CANVAS_WIDTH = canvas.width = window.innerWidth;
var CANVAS_HEIGHT = canvas.height = window.innerHeight;
var gameStarted = false;
var startButton = {
  x: 100,
  y: 100,
  width: 100,
  height: 100,
}
window.addEventListener('click', e =>{
  if (!gameStarted) {
    if (e.x > startButton.x && e.x < startButton.x + startButton.width && e.y > startButton.y && e.y < startButton.y + startButton.height) {
      gameStarted = true
    }
  }
})
function ani(){
  if(gameStarted){
  }else{
    ctx.fillRect(startButton.x, startButton.y, startButton.width, startButton.height);
  }
  requestAnimationFrame(ani);
}
ani();
