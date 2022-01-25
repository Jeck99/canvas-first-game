function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}
function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}
function CreateImg(imgSrc) {
  // const image = new Image(width,hight);
  const image = new Image();
  image.src = imgSrc;
  return image;
}
function KeysActions(key, keys, player,toPlay) {
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
        case " ":
        toPlay = true;
        return console.log("down:"+toPlay);
    default:
      break;
  };
}
function KeysupActions(key, keys, player) {
  switch (key) {
    case "ArrowLeft":
      keys.leftKey.isPresed = false;
      return console.log("left");
    case "ArrowUp":
      player.movemenet.dirctionY += 20;
      return console.log("up");
    case "ArrowRight":
      keys.rightKey.isPresed = false;
      return console.log("right");
    case "ArrowDown":
      return console.log("down");
    default:
      break;
  }
}
// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(0, 0, canvasItem.width, canvasItem.height)
  toolsObjs.forEach(obj => {
    obj.CreateTool()
  })
  flors.forEach(flor => {
    flor.CreateFloor()
  })
  player.Move();
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
export default {animate, CreateImg, KeysActions, KeysupActions, randomIntFromRange, randomColor, distance }
