console.log(test); //undefined

var test = "adb";
console.log(test); //adb
// console.log(test2); //ReferenceError: Cannot access 'test2' before initialization
// let test2=10;
let exam;
console.log(exam); //undefined

exam = "ABCD";
console.log(exam); //ABCD

let sample = "가나다라";
{
  //   console.log(sample);//ReferenceError: Cannot access 'sample' before initialization
  //밖에서 선언했어도 블록레벨 스코프 먼저 참조하기에 참조 에러가 뜸
  let sample = "ㅋㅋㅋ";
  console.log(sample);
}
