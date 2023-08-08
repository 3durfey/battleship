//factory function for creating ships
function createShip(inputLength) {
  function hit() {
    if (this.numOfHits < this.length) this.numOfHits++;
    if (this.length === this.numOfHits) this.sunk = true;
  }

  let length = inputLength;
  let numOfHits = 0;
  let sunk = false;

  return { length, numOfHits, sunk, hit };
}
//factory function for creating board
function createGameboard() {
  let shipArray = [];
  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  function addShip(ship, xStart, yStart, direction) {
    let valid = true;
    let origionalX = xStart;
    let origionalY = yStart;

    for (let x = 0; x < ship.length; x++) {
      if (
        this.board[xStart][yStart] !== 0 &&
        this.board[xStart][yStart] !== "x"
      )
        valid = false;
      if (direction === "x") xStart++;
      else yStart++;
    }
    if (valid === true) {
      shipArray.push(ship);
      for (let x = 0; x < ship.length; x++) {
        this.board[origionalX][origionalY] = shipArray.length;
        if (direction === "x") origionalX++;
        else origionalY++;
      }
      return true;
    } else return false;
  }
  function allSunk() {
    console.log(shipArray.length);
    for (let x = 0; x < shipArray.length; x++) {
      if (shipArray[x].sunk === false) return false;
    }
    return true;
  }
  function receiveAttack(x, y) {
    if (Number.isInteger(this.board[x][y]) && this.board[x][y] !== 0) {
      shipArray[this.board[x][y] - 1].hit();
      let tempShip = this.board[x][y];
      this.board[x][y] = "H";
      console.log(shipArray[tempShip - 1]);
    } else if (this.board[x][y] === "M" || this.board[x][y] === "H")
      return false;
    else this.board[x][y] = "M";
    return true;
  }
  return { board, addShip, receiveAttack, shipArray, allSunk };
}
//factory function for players in games
function createPlayer(name, ai, gameboard) {
  let apponentBoard = gameboard;
  let isAI = ai;
  function turn(x, y) {
    if (isAI) {
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      } while (!apponentBoard.receiveAttack(x, y));
    } else {
      return apponentBoard.receiveAttack(x, y);
    }
    return true;
  }
  return { name };
}

export { createShip, createGameboard, createPlayer };
