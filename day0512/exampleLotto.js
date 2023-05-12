const answer = [];
while (answer.length < 6) {
  let newNum = parseInt(Math.random() * 45 + 1);
  if (!answer.includes(newNum)) {
    answer.push(newNum);
  }
}
console.log(answer);
