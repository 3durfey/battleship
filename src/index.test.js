import { createShip, createGameboard } from "./index";
/*
test("ship size test", () => {
  const ship = {
    hit: function hit() {
      if (this.numOfHits < this.length) this.numOfHits++;
      if (this.length === this.numOfHits) this.sunk = true;
    },
    length: 2,
    numOfHits: 0,
    sunk: false,
  };
  expect(createShip(2)).toEqual(ship);
});
*/
test("gameboard placement", () => {
  let board = [
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
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
  let ship = createShip(5);
  let boardObject = createGameboard();
  boardObject.addShip(ship, 0, 0, "y");
  expect(boardObject.board).toEqual(board);
});
