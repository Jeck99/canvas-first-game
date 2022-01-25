import utils from './utils'

const canvasContext = canvasItem.getContext('2d')
canvasItem.width = innerWidth
canvasItem.height = innerHeight;

let gravity = 0.5;
const keys = {
  rightKey: {
    isPresed: false
  },
  leftKey: {
    isPresed: false
  }
}
class Floor {
  constructor(x, y, width, hight, dirctionX, dirctionY, type) {
    this.position = {
      x, y
    }
    this.width = width;
    this.hight = hight;
    this.movemenet = {
      dirctionX,
      dirctionY
    }
    this.type = type
  }
  CreateFloor() {
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(this.position.x, this.position.y, this.width, this.hight)
  }
}

class Character {
  constructor(x, y, width, hight, dirctionX, dirctionY, type) {
    this.position = {
      x, y
    }
    this.width = width;
    this.hight = hight;
    this.movemenet = {
      dirctionX,
      dirctionY
    }
    this.type = type
  }
  CreateCharcter() {
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(this.position.x, this.position.y, this.width, this.hight)
  }
  Move() {
    this.CreateCharcter();
    this.position.y += this.movemenet.dirctionY;
    this.position.x += this.movemenet.dirctionX;
    if (this.position.y + this.hight + this.movemenet.dirctionY <= canvasItem.height) {
      this.movemenet.dirctionY += gravity;
    }
    else { this.movemenet.dirctionY = 0 }
  }
}
const player = new Character(100, 100, 100, 100, 0, 20, "start");
const flor = new Floor(100, 100, 500, 100, 0, 20, "start");

// Animation Loop
const animate = () => {
  requestAnimationFrame(animate)
  canvasContext.clearRect(0, 0, canvasItem.width, canvasItem.height)
  flor.CreateFloor()
  player.Move();
  if (keys.rightKey.isPresed && player.position.x < 500) {
    player.movemenet.dirctionX = 5;
  }
  else if (keys.leftKey.isPresed && player.position.x > 10) {
    player.movemenet.dirctionX = -5;
  }
  else {
    player.movemenet.dirctionX = 0;
    if (keys.rightKey.isPresed) {
      flor.position.x -= 5
    } else if (keys.leftKey.isPresed){
      flor.position.x += 5
    }
  }
  if (player.position.y + player.hight <= flor.position.y
    && player.position.y + player.hight + player.movemenet.dirctionY >= flor.position.y
    && player.position.x + player.width >= flor.position.x
    && player.position.x <= flor.width + flor.position.x) {
    player.movemenet.dirctionY = 0
  }
}


// Event Listeners
addEventListener('keydown', ({ key }) => {
  switch (key) {
    case "ArrowLeft":
      keys.leftKey.isPresed = true;
      return console.log("left");
    case "ArrowUp":
      player.movemenet.dirctionY -= 20;
      return console.log("up");
    case "ArrowRight":
      keys.rightKey.isPresed = true;
      return console.log("right");
    case "ArrowDown":
      // player.movemenet.dirctionX -= 10;
      return console.log("down");
    default:
      break;
  }
})
addEventListener('keyup', ({ key }) => {
  switch (key) {
    case "ArrowLeft":
      keys.leftKey.isPresed = false;
      return console.log("left");
    case "ArrowUp":
      return console.log("up");
    case "ArrowRight":
      keys.rightKey.isPresed = false;
      return console.log("right");
    case "ArrowDown":
      return console.log("down");
    default:
      break;
  }
})

animate()