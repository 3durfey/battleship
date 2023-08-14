/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./src/factoryFunctions.js":
/*!*********************************!*\
  !*** ./src/factoryFunctions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGameboard\": () => (/* binding */ createGameboard),\n/* harmony export */   \"createPlayer\": () => (/* binding */ createPlayer),\n/* harmony export */   \"createShip\": () => (/* binding */ createShip)\n/* harmony export */ });\n//factory function for creating ships\nfunction createShip(inputLength) {\n  function hit() {\n    if (this.numOfHits < this.length) this.numOfHits++;\n    if (this.length === this.numOfHits) this.sunk = true;\n  }\n\n  let length = inputLength;\n  let numOfHits = 0;\n  let sunk = false;\n\n  return { length, numOfHits, sunk, hit };\n}\n//factory function for creating board\nfunction createGameboard() {\n  let shipArray = [];\n  let board = [\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n  ];\n  function addShip(ship, xStart, yStart, direction) {\n    let valid = true;\n    let origionalX = xStart;\n    let origionalY = yStart;\n\n    for (let x = 0; x < ship.length; x++) {\n      if (\n        this.board[xStart][yStart] !== 0 &&\n        this.board[xStart][yStart] !== \"x\"\n      )\n        valid = false;\n      if (direction === \"x\") xStart++;\n      else yStart++;\n    }\n    if (valid === true) {\n      shipArray.push(ship);\n      for (let x = 0; x < ship.length; x++) {\n        this.board[origionalX][origionalY] = shipArray.length;\n        if (direction === \"x\") origionalX++;\n        else origionalY++;\n      }\n      return true;\n    } else return false;\n  }\n  function allSunk() {\n    for (let x = 0; x < shipArray.length; x++) {\n      if (shipArray[x].sunk === false) return false;\n    }\n    return true;\n  }\n  function receiveAttack(x, y) {\n    if (Number.isInteger(this.board[x][y]) && this.board[x][y] !== 0) {\n      shipArray[this.board[x][y] - 1].hit();\n      let tempShip = this.board[x][y];\n      this.board[x][y] = \"H\";\n      console.log(shipArray[tempShip - 1]);\n    } else if (this.board[x][y] === \"M\" || this.board[x][y] === \"H\")\n      return false;\n    else this.board[x][y] = \"M\";\n    return true;\n  }\n  return { board, addShip, receiveAttack, shipArray, allSunk };\n}\n//factory function for players in games\nfunction createPlayer(name, ai, gameboard) {\n  let apponentBoard = gameboard;\n  let userName = name;\n  let isAI = ai;\n  function setName(input) {\n    userName = input;\n    return userName;\n  }\n  function turn(x, y) {\n    if (isAI) {\n      do {\n        x = Math.floor(Math.random() * 10);\n        y = Math.floor(Math.random() * 10);\n      } while (!apponentBoard.receiveAttack(x, y));\n    } else {\n      return apponentBoard.receiveAttack(x, y);\n    }\n    return true;\n  }\n  return { userName, turn, setName };\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/factoryFunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factoryFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factoryFunctions.js */ \"./src/factoryFunctions.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n//imports for creating objects\n\n\n\nfunction game() {}\n// Carrier (occupies 5 spaces), Battleship (4), Cruiser (3), Submarine (3), and Destroyer (2).\n\n//logic to place AI(computer) ships\nconst carrierP1 = (0,_factoryFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createShip)(5);\nconst battleshipP1 = (0,_factoryFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createShip)(4);\nconst cruiserP1 = (0,_factoryFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createShip)(3);\nconst submarineP1 = (0,_factoryFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createShip)(3);\nconst destroyerP1 = (0,_factoryFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createShip)(2);\nconst shipsP1 = {\n  carrierP1,\n  battleshipP1,\n  cruiserP1,\n  submarineP1,\n  destroyerP1,\n};\nfunction getCoordinates() {}\n\nlet gameboardP1 = (0,_factoryFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createGameboard)();\n\nfunction placeAIShips() {\n  for (let x = 0; x < shipsP1.length; x++) {\n    gameboardP1.addShip(shipsP1[x], x, y, direction);\n  }\n}\n\nconst carrier = (0,_factoryFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createShip)(5);\nconst battleship = (0,_factoryFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createShip)(4);\nconst cruiser = (0,_factoryFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createShip)(3);\nconst submarine = (0,_factoryFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createShip)(3);\nconst destroyer = (0,_factoryFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createShip)(2);\nconst ships = {\n  carrier,\n  battleship,\n  cruiser,\n  submarine,\n  destroyer,\n};\nlet gameboardP2 = (0,_factoryFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createGameboard)();\n\ngameboardP2.addShip(carrier, 0, 0, \"x\");\ngameboardP2.addShip(battleship, 0, 3, \"x\");\ngameboardP2.addShip(battleship, 6, 3, \"y\");\n\nprintBoard(gameboardP2);\n\nfunction printBoard(gameboard) {\n  let str = \"\";\n  for (let x = 0; x < 10; x++) {\n    for (let y = 0; y < 10; y++) {\n      str += gameboard.board[x][y];\n    }\n    str = \"\";\n  }\n}\n\nconst mainContainer = document.getElementById(\"gameboard1\");\n\nturnName.push((0,_factoryFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createPlayer)(\"user\", false, gameboardP2));\nmainContainer.innerHTML = \" \";\npopulateGameboard();\n\nfunction populateGameboard() {\n  const gameboardHolder = document.getElementById(\"gameboardHolder\");\n\n  const pieceHolder = document.createElement(\"div\");\n  pieceHolder.classList.add(\"pieceHolder\");\n  mainContainer.appendChild(pieceHolder);\n\n  const carrier = document.createElement(\"div\");\n  carrier.classList.add(\"carrier\");\n  carrier.id = \"carrier\";\n  carrier.setAttribute(\"draggable\", true);\n  pieceHolder.appendChild(carrier);\n  carrier.ondragstart = drag;\n  carrier.ondragover = allowDrop;\n\n  const cruiser = document.createElement(\"div\");\n  cruiser.classList.add(\"cruiser\");\n  cruiser.id = \"cruiser\";\n  pieceHolder.appendChild(cruiser);\n  cruiser.setAttribute(\"draggable\", true);\n  cruiser.ondragstart = drag;\n  cruiser.ondragover = allowDrop;\n\n  const sub = document.createElement(\"div\");\n  sub.classList.add(\"sub\");\n  sub.id = \"sub\";\n  pieceHolder.appendChild(sub);\n  sub.setAttribute(\"draggable\", true);\n  sub.ondragstart = drag;\n  sub.ondragover = allowDrop;\n\n  const battleship = document.createElement(\"div\");\n  battleship.classList.add(\"battleship\");\n  battleship.id = \"battleship\";\n  pieceHolder.appendChild(battleship);\n  battleship.setAttribute(\"draggable\", true);\n  battleship.ondragstart = drag;\n  battleship.ondragover = allowDrop;\n\n  const destroyer = document.createElement(\"div\");\n  destroyer.classList.add(\"destroyer\");\n  destroyer.id = \"destroyer\";\n  pieceHolder.appendChild(destroyer);\n  destroyer.setAttribute(\"draggable\", true);\n  destroyer.ondragstart = drag;\n  destroyer.ondragover = allowDrop;\n\n  const rotateButton = document.createElement(\"button\");\n  rotateButton.addEventListener(\"click\", () => {\n    if (pieceHolder.style.flexDirection === \"row\") {\n      pieceHolder.style.flexDirection = \"column\";\n    } else {\n      pieceHolder.style.flexDirection === \"column\";\n    }\n  });\n  rotateButton.innerHTML = \"Rotate\";\n  pieceHolder.appendChild(rotateButton);\n\n  function allowDrop(ev) {\n    ev.preventDefault();\n  }\n\n  function drag(ev) {\n    ev.dataTransfer.setData(\"text\", ev.target.id);\n  }\n\n  function drop(ev) {\n    ev.preventDefault();\n    var data = ev.dataTransfer.getData(\"text\");\n    const arrayNames = [\n      \"carrier\",\n      \"battleship\",\n      \"cruiser\",\n      \"submarine\",\n      \"destroyer\",\n    ];\n    for (let x = 0; x < arrayNames.length - 1; x++) {\n      if (data === arrayNames[x]) {\n        console.log(\"match\");\n        console.log(arrayNames[x] + \" \" + data);\n        break;\n      } else console.log(\"noMatch\");\n    }\n    ev.target.appendChild(document.getElementById(data));\n  }\n\n  for (let x = 0; x < 100; x++) {\n    let square = document.createElement(\"div\");\n    square.classList.add(\"squares\");\n    square.setAttribute(\"id\", `${x}`);\n    square.ondrop = drop;\n    square.ondragover = allowDrop;\n    gameboardHolder.appendChild(square);\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;