import Player from "./player.js";
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
var CANVAS_HEIGHT = canvas.height = window.innerHeight;
var CANVAS_WIDTH = canvas.width = window.innerWidth;
var player = new Player(10,10);
var ground = 300
var staggerFrame = 5;
var gameFrame = 0;
const controller = {
    w:{pressed:false},
    d:{pressed:false},
    a:{pressed:false},
    s:{pressed:false},
}
var playerMovement ={
    speed:{
        x: 0,
        y: 0,
    },
    acc: 0.1,
}
document.addEventListener("keydown", e =>{
    if(e.key == "w"){
        controller.w.pressed = true
    }
    if(e.key == "d"){
        controller.d.pressed = true
    }
    if(e.key == "a"){
        controller.a.pressed = true
    }
    if(e.key == "s"){
        controller.s.pressed = true
    }
    console.log(e.key)
})
document.addEventListener("keyup", e =>{
    if(e.key == "w"){
        controller.w.pressed = false
    }
    if(e.key == "d"){
        controller.d.pressed = false
    }
    if(e.key == "a"){
        controller.a.pressed = false
    }
    if(e.key == "s"){
        controller.s.pressed = false
    }
    console.log(e.key)
})
document.addEventListener("click", e=>{
    console.log(playerMovement.speed.x);
    console.log(playerMovement.speed.y);
})
player.addTex();
function ani(){
    //x-movement 
    if(controller.d.pressed == true){
        playerMovement.speed.x += playerMovement.acc
    }else{
        if(playerMovement.speed.x > 0){
            playerMovement.speed.x -= playerMovement.acc *2
        }
    }
    if(controller.a.pressed == true){
        playerMovement.speed.x -= playerMovement.acc
    }else{
        if(playerMovement.speed.x < 0){
            playerMovement.speed.x += playerMovement.acc *2
        }
    }
    //y-movement 
    if(controller.s.pressed == true){
        playerMovement.speed.y += playerMovement.acc
    }else{
        if(playerMovement.speed.y > 0){
            playerMovement.speed.y -= playerMovement.acc *2
        }
    }
    if(controller.w.pressed == true){
        playerMovement.speed.y -= playerMovement.acc
    }else{
        if(playerMovement.speed.y < 0){
            playerMovement.speed.y += playerMovement.acc *2
        }
    }
    //handles weird drift
    if(playerMovement.speed.x<0.1 && !(playerMovement.speed.x<0)){
        playerMovement.speed.x = 0;
    }
    if(playerMovement.speed.y<0.1 && !(playerMovement.speed.x<0)){
        playerMovement.speed.x = 0;
    }//X-border
    if(player.x <= 0){
        playerMovement.speed.x = -playerMovement.speed.x
    }
    if(player.x >= canvas.width-player.size.x){
        playerMovement.speed.x = -playerMovement.speed.x
    }
    //Y-border
    if(player.y <= 0){
        playerMovement.speed.y = -playerMovement.speed.y
    }
    if(player.y >= canvas.height-player.size.y){
        playerMovement.speed.y = -playerMovement.speed.y
    }
    //MOR SPED!!!
    player.x += playerMovement.speed.x
    player.y += playerMovement.speed.y
    //draw the thingss
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    player.frame ++;
    if(controller.a.pressed == true){
        ctx.fillRect(player.x,player.y,player.size.x,player.size.y)
    }else if(controller.d.pressed == true){
        ctx.fillRect(player.x,player.y,player.size.x,player.size.y)
    }else{
        ctx.fillRect(player.x,player.y,player.size.x,player.size.y)
    }
    gameFrame++
    requestAnimationFrame(ani);
}
ani();
