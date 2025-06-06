export default class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = {
            x: 100,
            y: 100
        }
        this.img = {
            left: new Image(),
            right: new Image(),
            idle: new Image(),
        }
          this.frame = 0;
    }
    addTex(){
        this.img.idle.src = "../textures/player/idle.png" 
        this.img.left.src = "../textures/player/run left.png" 
        this.img.right.src = "../textures/player/run right.png" 
    }
}