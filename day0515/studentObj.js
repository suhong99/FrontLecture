const student = function (name, kor, eng, his, math) {
  this.name = name;
  this.kor = kor;
  this.eng = eng;
  this.his = his;
  this.math = math;
  this.getSum = function () {
    return this.kor + this.eng + this.his + this.math;
  };
};
student.prototype.getSum = function () {
  return this.kor + this.eng + this.his + this.math;
};

student.prototype.getAvg = function () {
  return this.getSum() / 4;
};

const kim = new student("김춘추", 90, 80, 70, 100);
const lee = new student("이순신", 90, 60, 50, 60);
const choi = new student("최영", 80, 80, 80, 100);

const studentList = [kim, lee, choi];

for (let i = 0; i < studentList.length; i++) {
  console.log(studentList[i].name);
  console.log(studentList[i].getSum());
  console.log(studentList[i].getAvg());
}
