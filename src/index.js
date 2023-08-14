//imports for creating objects
import {
  createShip,
  createGameboard,
  createPlayer,
} from "./factoryFunctions.js";
import "./style.css";

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
    gameboardP1.addShip(shipsP1[x], x, y, direction);
  }
}

const carrier = createShip(5);
const battleship = createShip(4);
const cruiser = createShip(3);
const submarine = createShip(3);
const destroyer = createShip(2);
const ships = {
  carrier,
  battleship,
  cruiser,
  submarine,
  destroyer,
};
let gameboardP2 = createGameboard();

gameboardP2.addShip(carrier, 0, 0, "x");
gameboardP2.addShip(battleship, 0, 3, "x");
gameboardP2.addShip(battleship, 6, 3, "y");

printBoard(gameboardP2);

function printBoard(gameboard) {
  let str = "";
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      str += gameboard.board[x][y];
    }
    str = "";
  }
}

const mainContainer = document.getElementById("gameboard1");

turnName.push(createPlayer("user", false, gameboardP2));
mainContainer.innerHTML = " ";
populateGameboard();

function populateGameboard() {
  const gameboardHolder = document.getElementById("gameboardHolder");

  const pieceHolder = document.createElement("div");
  pieceHolder.classList.add("pieceHolder");
  mainContainer.appendChild(pieceHolder);

  const carrier = document.createElement("div");
  carrier.classList.add("carrier");
  carrier.id = "carrier";
  carrier.setAttribute("draggable", true);
  pieceHolder.appendChild(carrier);
  carrier.ondragstart = drag;
  carrier.ondragover = allowDrop;

  const cruiser = document.createElement("div");
  cruiser.classList.add("cruiser");
  cruiser.id = "cruiser";
  pieceHolder.appendChild(cruiser);
  cruiser.setAttribute("draggable", true);
  cruiser.ondragstart = drag;
  cruiser.ondragover = allowDrop;

  const sub = document.createElement("div");
  sub.classList.add("sub");
  sub.id = "sub";
  pieceHolder.appendChild(sub);
  sub.setAttribute("draggable", true);
  sub.ondragstart = drag;
  sub.ondragover = allowDrop;

  const battleship = document.createElement("div");
  battleship.classList.add("battleship");
  battleship.id = "battleship";
  pieceHolder.appendChild(battleship);
  battleship.setAttribute("draggable", true);
  battleship.ondragstart = drag;
  battleship.ondragover = allowDrop;

  const destroyer = document.createElement("div");
  destroyer.classList.add("destroyer");
  destroyer.id = "destroyer";
  pieceHolder.appendChild(destroyer);
  destroyer.setAttribute("draggable", true);
  destroyer.ondragstart = drag;
  destroyer.ondragover = allowDrop;

  const rotateButton = document.createElement("button");
  rotateButton.addEventListener("click", () => {
    if (pieceHolder.style.flexDirection === "row") {
      pieceHolder.style.flexDirection = "column";
    } else {
      pieceHolder.style.flexDirection === "column";
    }
  });
  rotateButton.innerHTML = "Rotate";
  pieceHolder.appendChild(rotateButton);

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    const arrayNames = [
      "carrier",
      "battleship",
      "cruiser",
      "submarine",
      "destroyer",
    ];
    for (let x = 0; x < arrayNames.length - 1; x++) {
      if (data === arrayNames[x]) {
        console.log("match");
        console.log(arrayNames[x] + " " + data);
        break;
      } else console.log("noMatch");
    }
    ev.target.appendChild(document.getElementById(data));
  }

  for (let x = 0; x < 100; x++) {
    let square = document.createElement("div");
    square.classList.add("squares");
    square.setAttribute("id", `${x}`);
    square.ondrop = drop;
    square.ondragover = allowDrop;
    gameboardHolder.appendChild(square);
  }
}
