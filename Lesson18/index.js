// 1

const myNum = 10;
const myStr = "some string";
const myBool = true;
const myArr = [1, 2, 3, 4, 5];
const myObj = {
  first: "First Name",
  last: "Last Name",
};

console.log(myNum);
console.log(myStr);
console.log(myBool);
console.log(myArr);
console.log(myObj);

// 2

// const decimal2 = `${myNum}.55`;   -- не орматування
// console.log(+decimal2);

// const decimal2 = myNum + 0.55;   -- не форматування
// console.log(decimal2);

const decimal2 = myNum.toFixed(2);
console.log(decimal2); // виводить не числом

// 3

let myBigInt = 123n;
myBigInt++;
console.log(myBigInt);
