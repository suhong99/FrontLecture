const random = parseInt(Math.random() * 45) + 1;
// console.log(random);

const array = [];
for (let number = 1; number <= 45; number++) {
  array.push(number);
}

// const array = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
//   42, 43, 44, 45,
// ];
const answer = [];
for (let i = 0; i < 6; i++) {
  answer.push(...array.splice(parseInt(Math.random() * array.length), 1));
}

console.log(answer);
for (number in answer) {
  console.log(answer[number]);
}

// console.log(x.splice(1, 1));
// console.log(x);
