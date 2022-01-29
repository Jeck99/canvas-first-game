/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/Free Pixel Art Forest/PNG/Background layers/Layer_0003_6.png":
/*!*********************************************************************************!*\
  !*** ./src/images/Free Pixel Art Forest/PNG/Background layers/Layer_0003_6.png ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b399e1a0316558b00fdca05b935b173e.png");

/***/ }),

/***/ "./src/images/Free Pixel Art Forest/PNG/Background layers/florLayer.png":
/*!******************************************************************************!*\
  !*** ./src/images/Free Pixel Art Forest/PNG/Background layers/florLayer.png ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0094ec54a4b3f9496838f47b2d8f6652.png");

/***/ }),

/***/ "./src/images/Free Pixel Art Forest/bg1.png":
/*!**************************************************!*\
  !*** ./src/images/Free Pixel Art Forest/bg1.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "291c8dd2a741bb4cedd6affb16928f04.png");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./src/js/models.js");
/* harmony import */ var _images_Free_Pixel_Art_Forest_PNG_Background_layers_florLayer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Free Pixel Art Forest/PNG/Background layers/florLayer.png */ "./src/images/Free Pixel Art Forest/PNG/Background layers/florLayer.png");
/* harmony import */ var _images_Free_Pixel_Art_Forest_bg1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Free Pixel Art Forest/bg1.png */ "./src/images/Free Pixel Art Forest/bg1.png");
/* harmony import */ var _images_Free_Pixel_Art_Forest_PNG_Background_layers_Layer_0003_6_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Free Pixel Art Forest/PNG/Background layers/Layer_0003_6.png */ "./src/images/Free Pixel Art Forest/PNG/Background layers/Layer_0003_6.png");




 // import bricks from "../images/Free Pixel Art Forest/PNG/Background layers/Layer_0002_7.png";

var canvasContext = canvasItem.getContext('2d');
canvasItem.width = 1024;
canvasItem.height = 576;
var toPlay = true;
var gravity = 1.5;
var keys = {
  rightKey: {
    isPresed: false
  },
  leftKey: {
    isPresed: false
  }
}; // class ToolsObjects {
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

var toolsObjs = [new _models__WEBPACK_IMPORTED_MODULE_1__["ToolsObjects"](0, 0, 0, 0, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].CreateImg(_images_Free_Pixel_Art_Forest_bg1_png__WEBPACK_IMPORTED_MODULE_3__["default"])) // new ToolsObjects(0, 459, 0, 20, CreateImg(mounions)),
// new ToolsObjects(0, 459, 0, 20, CreateImg(bricks))
];
var imagee = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].CreateImg(_images_Free_Pixel_Art_Forest_PNG_Background_layers_florLayer_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var flors = [new _models__WEBPACK_IMPORTED_MODULE_1__["Floor"](0, 459, 0, 20, imagee), new _models__WEBPACK_IMPORTED_MODULE_1__["Floor"](imagee.width, 459, 0, 20, imagee), new _models__WEBPACK_IMPORTED_MODULE_1__["Floor"](imagee.width * 2 + 200, 459, 0, 20, imagee)];
var player = new _models__WEBPACK_IMPORTED_MODULE_1__["Character"](95, 200, 100, 100, 0, 20, "start"); // Animation Loop

var animate = function animate() {
  console.log("dgfd");
  var playAgain;
  setTimeout(function () {
    toPlay = false;
    playAgain = confirm("play again?");

    if (playAgain) {
      toPlay = true;
    }
  }, 1000000);

  if (toPlay) {
    requestAnimationFrame(animate);
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(0, 0, canvasItem.width, canvasItem.height);
    toolsObjs.forEach(function (obj) {
      obj.CreateTool(canvasContext);
    });
    flors.forEach(function (flor) {
      flor.CreateFloor(canvasContext);
    });
    player.Move(canvasContext);

    if (keys.rightKey.isPresed && player.position.x < 400) {
      player.movemenet.dirctionX = 5;
    } else if (keys.leftKey.isPresed && player.position.x > 10) {
      player.movemenet.dirctionX = -5;
    } else {
      player.movemenet.dirctionX = 0;
      flors.forEach(function (flor) {
        if (keys.rightKey.isPresed) {
          flor.position.x -= 5;
        } else if (keys.leftKey.isPresed) {
          flor.position.x += 5;
        }
      });
      toolsObjs.forEach(function (toolObj) {
        if (keys.rightKey.isPresed) {
          toolObj.position.x -= 2;
        } else if (keys.leftKey.isPresed) {
          toolObj.position.x += 2;
        }
      });
    }

    flors.forEach(function (flor) {
      if (player.position.y + player.hight <= flor.position.y && player.position.y + player.hight + player.movemenet.dirctionY >= flor.position.y && player.position.x + player.width >= flor.position.x && player.position.x <= flor.width + flor.position.x) {
        player.movemenet.dirctionY = 0;
      }
    });
  }
};

function init() {
  // Event Listeners
  addEventListener('keydown', function (_ref) {
    var key = _ref.key;
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].KeysActions(key, keys, player, toPlay);
  });
  addEventListener('keyup', function (_ref2) {
    var key = _ref2.key;
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].KeysupActions(key, keys, player);
  });
  animate();
}

init(); // gameButton

/***/ }),

/***/ "./src/js/models.js":
/*!**************************!*\
  !*** ./src/js/models.js ***!
  \**************************/
/*! exports provided: ToolsObjects, Floor, Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsObjects", function() { return ToolsObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Floor", function() { return Floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ToolsObjects = /*#__PURE__*/function () {
  function ToolsObjects(x, y, dirctionX, dirctionY, img) {
    _classCallCheck(this, ToolsObjects);

    this.position = {
      x: x,
      y: y
    };
    this.movemenet = {
      dirctionX: dirctionX,
      dirctionY: dirctionY
    };
    this.img = img;
    this.width = this.img.width;
    this.hight = this.img.hight;
  }

  _createClass(ToolsObjects, [{
    key: "CreateTool",
    value: function CreateTool(canvasContext) {
      canvasContext.drawImage(this.img, this.position.x, this.position.y);
    }
  }]);

  return ToolsObjects;
}();
var Floor = /*#__PURE__*/function () {
  function Floor(x, y, dirctionX, dirctionY, img) {
    _classCallCheck(this, Floor);

    this.position = {
      x: x,
      y: y
    };
    this.movemenet = {
      dirctionX: dirctionX,
      dirctionY: dirctionY
    };
    this.img = img;
    this.width = this.img.width;
    this.hight = this.img.hight;
  }

  _createClass(Floor, [{
    key: "CreateFloor",
    value: function CreateFloor(canvasContext) {
      canvasContext.drawImage(this.img, this.position.x, this.position.y);
    }
  }]);

  return Floor;
}();
var Character = /*#__PURE__*/function () {
  function Character(x, y, width, hight, dirctionX, dirctionY, type) {
    _classCallCheck(this, Character);

    this.position = {
      x: x,
      y: y
    };
    this.width = width;
    this.hight = hight;
    this.movemenet = {
      dirctionX: dirctionX,
      dirctionY: dirctionY
    };
    this.type = type;
  }

  _createClass(Character, [{
    key: "CreateCharcter",
    value: function CreateCharcter(canvasContext) {
      canvasContext.fillStyle = "red";
      canvasContext.fillRect(this.position.x, this.position.y, this.width, this.hight);
    }
  }, {
    key: "Move",
    value: function Move(canvasContext) {
      this.CreateCharcter(canvasContext);
      this.position.y += this.movemenet.dirctionY;
      this.position.x += this.movemenet.dirctionX;

      if (this.position.y + this.hight + this.movemenet.dirctionY <= canvasItem.height) {
        this.movemenet.dirctionY += gravity;
      } else {
        this.movemenet.dirctionY = 0;
      }
    }
  }]);

  return Character;
}();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function CreateImg(imgSrc) {
  // const image = new Image(width,hight);
  var image = new Image();
  image.src = imgSrc;
  return image;
}

function KeysActions(key, keys, player, toPlay) {
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
      return console.log("down:" + toPlay);

    default:
      break;
  }

  ;
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
} // Animation Loop


function animate(canvasContext, flors, player, toolsObjs) {
  requestAnimationFrame(animate);
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(0, 0, canvasItem.width, canvasItem.height);
  toolsObjs.forEach(function (obj) {
    obj.CreateTool();
  });
  flors.forEach(function (flor) {
    flor.CreateFloor();
  });
  player.Move();

  if (keys.rightKey.isPresed && player.position.x < 400) {
    player.movemenet.dirctionX = 5;
  } else if (keys.leftKey.isPresed && player.position.x > 10) {
    player.movemenet.dirctionX = -5;
  } else {
    player.movemenet.dirctionX = 0;
    flors.forEach(function (flor) {
      if (keys.rightKey.isPresed) {
        flor.position.x -= 5;
      } else if (keys.leftKey.isPresed) {
        flor.position.x += 5;
      }
    });
    toolsObjs.forEach(function (toolObj) {
      if (keys.rightKey.isPresed) {
        toolObj.position.x -= 2;
      } else if (keys.leftKey.isPresed) {
        toolObj.position.x += 2;
      }
    });
  }

  flors.forEach(function (flor) {
    if (player.position.y + player.hight <= flor.position.y && player.position.y + player.hight + player.movemenet.dirctionY >= flor.position.y && player.position.x + player.width >= flor.position.x && player.position.x <= flor.width + flor.position.x) {
      player.movemenet.dirctionY = 0;
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  animate: animate,
  CreateImg: CreateImg,
  KeysActions: KeysActions,
  KeysupActions: KeysupActions
});

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map