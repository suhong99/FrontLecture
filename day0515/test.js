const birth = new Date();
birth.setFullYear(1994);
birth.setMonth(7);
birth.setDate(28);

console.log(birth);

const today = new Date();

console.log(birth.getTime());
console.log(today.getTime());
const calcTime = today.getTime() - birth.getTime();
console.log(calcTime);

console.log(calcTime / 1000 / 60 / 60 / 24 / 365);
