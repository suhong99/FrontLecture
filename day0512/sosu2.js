for (i = 2; i <= 100; i++) {
  for (j = 2; j < i; j++) {
    if (i % j === 0) {
      break;
    }
    if (j === i - 1) {
      console.log(i);
    }
  }
}
