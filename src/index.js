function createShip(length) {
  return {
    length: length,
    numOfHits: 0,
    sunk: false,
  };
}

let ship1 = createShip(3);
