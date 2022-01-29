export class ToolsObjects {
  constructor(x, y, dirctionX, dirctionY, img) {
    this.position = {
      x, y
    }
    this.movemenet = {
      dirctionX,
      dirctionY
    }
    this.img = img;
    this.width = this.img.width;
    this.hight = this.img.hight;
  }
  CreateTool(canvasContext) {
    canvasContext.drawImage(this.img, this.position.x, this.position.y);
  }
}
export class Floor {
  constructor(x, y, dirctionX, dirctionY, img) {
    this.position = {
      x, y
    }
    this.movemenet = {
      dirctionX,
      dirctionY
    }
    this.img = img;
    this.width = this.img.width;
    this.hight = this.img.hight;
  }
  CreateFloor(canvasContext) {
    canvasContext.drawImage(this.img, this.position.x, this.position.y);
  }
}
export class Character {
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
  CreateCharcter(canvasContext) {
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(this.position.x, this.position.y, this.width, this.hight)
  }
  Move(canvasContext) {
    this.CreateCharcter(canvasContext);
    this.position.y += this.movemenet.dirctionY;
    this.position.x += this.movemenet.dirctionX;
    if (this.position.y + this.hight + this.movemenet.dirctionY <= canvasItem.height) {
      this.movemenet.dirctionY += gravity;
    }
    else { this.movemenet.dirctionY = 0 }
  }
}
