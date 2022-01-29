import utils from './utils'
import { Floor,Character,ToolsObjects } from "./models";
import platform from "../images/Free Pixel Art Forest/PNG/Background layers/florLayer.png";
import bground from "../images/Free Pixel Art Forest/bg1.png";
import mounions from "../images/Free Pixel Art Forest/PNG/Background layers/Layer_0003_6.png";
// import bricks from "../images/Free Pixel Art Forest/PNG/Background layers/Layer_0002_7.png";

const canvasContext = canvasItem.getContext('2d')
canvasItem.width = 1024
canvasItem.height = 576;
let toPlay = true;
let gravity = 1.5;
const keys = {
  rightKey: {
    isPresed: false
  },
  leftKey: {
    isPresed: false
  }
}
// class ToolsObjects {
//   constructor(x, y, dirctionX, dirctionY, img) {
//     this.position = {
//       x, y
//     }
//     this.movemenet = {
//       dirctionX,
//       dirctionY
//     }
//     this.img = img;
//     this.img.width = 10000;
//     this.img.hight = this.img.hight;
//   }
//   CreateTool() {
//     canvasContext.drawImage(this.img, 0, -850,2000,2400);
//   }
// }
// class Floor {
//   constructor(x, y, dirctionX, dirctionY, img) {
//     this.position = {
//       x, y
//     }
//     this.movemenet = {
//       dirctionX,
//       dirctionY
//     }
//     this.img = img;
//     this.width = this.img.width;
//     this.hight = this.img.hight;
//   }
//   CreateFloor() {
//     canvasContext.drawImage(this.img, this.position.x, this.position.y);
//   }
// }
// class Character {
//   constructor(x, y, width, hight, dirctionX, dirctionY, type) {
//     this.position = {
//       x, y
//     }
//     this.width = width;
//     this.hight = hight;
//     this.movemenet = {
//       dirctionX,
//       dirctionY
//     }
//     this.type = type
//   }
//   CreateCharcter() {
//     canvasContext.fillStyle = "red";
//     canvasContext.fillRect(this.position.x, this.position.y, this.width, this.hight);
//   }
//   Move() {
//     this.CreateCharcter();
//     this.position.y += this.movemenet.dirctionY;
//     this.position.x += this.movemenet.dirctionX;
//     if (this.position.y + this.hight + this.movemenet.dirctionY+300 <= canvasItem.height) {
//       this.movemenet.dirctionY += gravity;
//     }
//     else { this.movemenet.dirctionY = 0 }
//   }
// }

const toolsObjs = [
  new ToolsObjects(0, 0, 0, 0, utils.CreateImg(bground)),
  // new ToolsObjects(0, 459, 0, 20, CreateImg(mounions)),
  // new ToolsObjects(0, 459, 0, 20, CreateImg(bricks))
]
const imagee = utils.CreateImg(platform);
const flors = [
  new Floor(0, 459, 0, 20, imagee),
  new Floor(imagee.width, 459, 0, 20, imagee),
  new Floor(imagee.width * 2 + 200, 459, 0, 20, imagee),
]
const player = new Character(95, 200, 100, 100, 0, 20, "start");

// Animation Loop
const animate = () => {
  console.log("dgfd");
  let playAgain;
  setTimeout(() => {
    toPlay = false;
    playAgain = confirm("play again?");
    if (playAgain) {
      toPlay = true;
    }
  }, 1000000)
  if (toPlay) {
    requestAnimationFrame(animate);
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(0, 0, canvasItem.width, canvasItem.height)
    toolsObjs.forEach(obj => {
      obj.CreateTool(canvasContext)
    })
    flors.forEach(flor => {
      flor.CreateFloor(canvasContext)
    })
    player.Move(canvasContext);
    if (keys.rightKey.isPresed && player.position.x < 400) {
      player.movemenet.dirctionX = 5;
    }
    else if (keys.leftKey.isPresed && player.position.x > 10) {
      player.movemenet.dirctionX = -5;
    }
    else {
      player.movemenet.dirctionX = 0;
      flors.forEach(flor => {
        if (keys.rightKey.isPresed) {
          flor.position.x -= 5
        } else if (keys.leftKey.isPresed) {
          flor.position.x += 5
        }
      })
      toolsObjs.forEach(toolObj => {
        if (keys.rightKey.isPresed) {
          toolObj.position.x -= 2
        } else if (keys.leftKey.isPresed) {
          toolObj.position.x += 2
        }
      })
    }
    flors.forEach(flor => {
      if (player.position.y + player.hight <= flor.position.y
        && player.position.y + player.hight + player.movemenet.dirctionY >= flor.position.y
        && player.position.x + player.width >= flor.position.x
        && player.position.x <= flor.width + flor.position.x) {
        player.movemenet.dirctionY = 0
      }
    })
  }
}
function init() {
  // Event Listeners
  addEventListener('keydown', ({ key }) => { utils.KeysActions(key, keys, player, toPlay) });
  addEventListener('keyup', ({ key }) => { utils.KeysupActions(key, keys, player) });
  animate()
}

init()

// gameButton