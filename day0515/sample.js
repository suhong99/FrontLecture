let book = {
  title: "어린왕자",
  price: 150000,
};

let book2 = {
  title: "자바",
  price: 25000,
};

let bookList = [book, book2];

let sumPrice = 0;

for (let i = 0; i < bookList.length; i++) {
  let price = bookList[i].price;
  sumPrice += price;
}

console.log(sumPrice / bookList.length);
