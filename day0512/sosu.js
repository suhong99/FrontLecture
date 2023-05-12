let answer = [2];

for (let i = 2; i <= 100; i++) {
  for (let j = 0; j < answer.length; j++) {
    if (i % answer[j] === 0) {
      break;
    }
    if (j === answer.length - 1) {
      answer.push(i);
      console.log(i);
    }
  }
}

console.log(answer);
