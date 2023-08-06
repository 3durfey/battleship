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

function createGameboard() {
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
    this.board[xStart][yStart] = 3;

    for (let x = 0; x < ship.length; x++) {
      this.board[xStart][yStart] = 1;
      if (direction === "x") xStart++;
      else yStart++;
    }
  }
  return { board, addShip };
}
/*
let ship = createShip(3);
let board = createGameboard();

board.addShip(ship, 0, 0, "y");
let str = "";
for (let x = 0; x < 10; x++) {
  for (let y = 0; y < 10; y++) {
    str += board.board[x][y];
  }
  console.log(str);
  str = "";
}
*/
export { createShip, createGameboard };
