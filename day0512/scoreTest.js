var name = "홍길동";

function sample() {
  var addr = "서울강남구";
  console.log(name + " : " + addr);
}
for (i = 0; i < 1; i++) {
  var job = "프론트엔드";
  let sex = "남자";
}

if (true) {
  var hobby = "롤";
  let id = "suhong99";
}

sample();
// console.log(name + " : " + addr);//error
console.log(job); //프론트엔드
console.log(hobby); //롤
// console.log(sex); //ReferenceError: sex is not defined
// console.log(id);//ReferenceError: id is not defined
