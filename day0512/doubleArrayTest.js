let doubleArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

for (let i = 0; i < doubleArray.length; i++) {
  let subArray = doubleArray[i];
  for (let j = 0; j < subArray.length; j++) {
    console.log(subArray[j]);
  }
  console.log("---------------");
}
