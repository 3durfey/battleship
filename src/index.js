//imports for creating objects
import {
  createShip,
  createGameboard,
  createPlayer,
} from "./factoryFunctions.js";

import "./style.css";

//game variables used in gameplay
let turnName = [2];

function game() {}
// Carrier (occupies 5 spaces), Battleship (4), Cruiser (3), Submarine (3), and Destroyer (2).

//logic to place AI(computer) ships
const carrierP1 = createShip(5);
const battleshipP1 = createShip(4);
const cruiserP1 = createShip(3);
const submarineP1 = createShip(3);
const destroyerP1 = createShip(2);
const shipsP1 = {
  carrierP1,
  battleshipP1,
  cruiserP1,
  submarineP1,
  destroyerP1,
};
function getCoordinates() {}
let gameboardP1 = createGameboard();
function placeAIShips() {
  for (let x = 0; x < shipsP1.length; x++) {
    get;
    gameboardP1.addShip(shipsP1[x], x, y, direction);
  }
}

const carrierP2 = createShip(5);
const battleshipP2 = createShip(4);
const cruiserP2 = createShip(3);
const submarineP2 = createShip(3);
const destroyerP2 = createShip(2);
const shipsP2 = {
  carrierP2,
  battleshipP2,
  cruiserP2,
  submarineP2,
  destroyerP2,
};
let gameboardP2 = createGameboard();

gameboardP2.addShip(carrierP2, 0, 0, "x");
gameboardP2.addShip(battleshipP2, 0, 3, "x");
gameboardP2.addShip(battleshipP2, 6, 3, "y");

printBoard(gameboardP2);

function printBoard(gameboard) {
  let str = "";
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      str += gameboard.board[x][y];
    }
    console.log(str);
    str = "";
  }
}
