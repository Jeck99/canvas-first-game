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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var canvasContext = canvasItem.getContext('2d');
canvasItem.width = innerWidth;
canvasItem.height = innerHeight;
var gravity = 0.5;
var keys = {
  rightKey: {
    isPresed: false
  },
  leftKey: {
    isPresed: false
  }
};

var Floor = /*#__PURE__*/function () {
  function Floor(x, y, width, hight, dirctionX, dirctionY, type) {
    _classCallCheck(this, Floor);

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

  _createClass(Floor, [{
    key: "CreateFloor",
    value: function CreateFloor() {
      canvasContext.fillStyle = "black";
      canvasContext.fillRect(this.position.x, this.position.y, this.width, this.hight);
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
    value: function CreateCharcter() {
      canvasContext.fillStyle = "red";
      canvasContext.fillRect(this.position.x, this.position.y, this.width, this.hight);
    }
  }, {
    key: "Move",
    value: function Move() {
      this.CreateCharcter();
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

var player = new Character(100, 100, 100, 100, 0, 20, "start");
var flor = new Floor(100, 100, 500, 100, 0, 20, "start"); // Animation Loop

var animate = function animate() {
  requestAnimationFrame(animate);
  canvasContext.clearRect(0, 0, canvasItem.width, canvasItem.height);
  flor.CreateFloor();
  player.Move();

  if (keys.rightKey.isPresed && player.position.x < 500) {
    player.movemenet.dirctionX = 5;
  } else if (keys.leftKey.isPresed && player.position.x > 10) {
    player.movemenet.dirctionX = -5;
  } else {
    player.movemenet.dirctionX = 0;

    if (keys.rightKey.isPresed) {
      flor.position.x -= 5;
    } else if (keys.leftKey.isPresed) {
      flor.position.x += 5;
    }
  }

  if (player.position.y + player.hight <= flor.position.y && player.position.y + player.hight + player.movemenet.dirctionY >= flor.position.y && player.position.x + player.width >= flor.position.x && player.position.x <= flor.width + flor.position.x) {
    player.movemenet.dirctionY = 0;
  }
}; // Event Listeners


addEventListener('keydown', function (_ref) {
  var key = _ref.key;

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
});
addEventListener('keyup', function (_ref2) {
  var key = _ref2.key;

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
});
animate();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance
};

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map