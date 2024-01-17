// given arrays of truck locations and customer locations,
// find the truck location that minimizes the total distance from customers to the truck
// distances are not straight line.  customers can not take diagonal paths to the truck.
// consequently, custome distance is the x + y distance to the truck
// the algorithm:
// for each truck position calulate the sum of distance to all customers
//
function tacoTruckPosition(truckPositions, customerPositions) {
  let optimumPosition = {};
  for (let i = 0; i < truckPositions.length; i++) {
    let sumDist = 0;
    for (let j = 0; j < customerPositions.length; j++) {
      sumDist +=
        Math.abs(truckPositions[i].x - customerPositions[j].x) +
        Math.abs(truckPositions[i].y - customerPositions[j].y);
    }
    console.log(i, truckPositions[i], sumDist);

    if (
      optimumPosition.index == undefined ||
      sumDist < optimumPosition.distance
    ) {
      optimumPosition.index = i;
      optimumPosition.distance = sumDist;
    }
  }
  return optimumPosition;
}

let truckPositions = [
  { x: 1, y: 7 },
  { x: 5, y: 7 },
  { x: 5, y: 3 },
  { x: 5, y: -4 },
];

let customerPositions = [
  { x: 5, y: 9 },
  { x: 8, y: 9 },
  { x: 8, y: 6 },
  { x: 8, y: 3 },
  { x: 8, y: 1 },
  { x: 8, y: -1 },
  { x: -10, y: -10 },
  { x: -9, y: -9 },
  { x: -8, y: -8 },
  { x: -4, y: -8 },
  { x: 0, y: -8 },
];

let position = tacoTruckPosition(truckPositions, customerPositions);
console.log(position, truckPositions[position.index]);
