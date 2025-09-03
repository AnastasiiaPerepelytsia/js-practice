// 1

const userObj = {
  firstName: "Ann",
  lastName: "Jones",
  age: 20,
};

console.log(userObj);

// 2 -- метод об'єкта - це функція , яка є властивістю об'єкта.

function fullName() {
  return `${userObj.firstName} ${userObj.lastName}`;
}

console.log(fullName()); // ОКРЕМА ФУНКЦІЯ . НЕ МЕТОД
console.log(userObj);

// ________________________________________________________________

// function fullName() {
//   return `${userObj.firstName} ${userObj.lastName}`;
// }

// userObj.fullName = fullName;
// console.log(userObj.fullName()); // МЕТОД ОБ'ЄКТУ
// console.log(userObj);

// ________________________________________________________________

userObj.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(userObj.fullName()); // МЕТОД ОБ'ЄКТУ
console.log(userObj);

// ________________________________________________________________

// userObj = {
//   fullName() {
//     return `${userObj.firstName} ${userObj.lastName}`;
//   },
// };

// console.log(userObj.fullName()); // МЕТОД ОБ'ЄКТУ
// console.log(userObj);

// 3

function defUpperStr(text) {
  text = text || "default text";
  return text.toUpperCase();
}

console.log(defUpperStr("My text"));
console.log(defUpperStr());

// 4

function evenFn(n) {
  let arrey = [];

  for (let i = 2; i <= n; i += 2) {
    arrey.push(i);
  }
  console.log(arrey);
}

evenFn(10);
evenFn(15);
evenFn(20);

// 5

function weekFn(n) {
  switch (n) {
    case 1:
      console.log("Понеділок");
      break;

    case 2:
      console.log("Вівторок");
      break;

    case 3:
      console.log("Середа");
      break;

    case 4:
      console.log("Четвер");
      break;

    case 5:
      console.log("П'ятниця");
      break;

    case 6:
      console.log("Субота");
      break;

    case 7:
      console.log("Неділя");
      break;

    default:
      console.log(null);
  }
}

weekFn(1);

// 6

function ageClassification(n) {
  let message =
    n > 0 && n <= 24
      ? "Дитинство"
      : n > 24 && n <= 44
      ? "Молодість"
      : n > 44 && n <= 65
      ? "Зрілість"
      : n > 65 && n <= 75
      ? "Старість"
      : n > 75 && n <= 90
      ? "Довголіття"
      : n > 90 && n <= 122
      ? "Рекорд"
      : null;

  return message;
}

console.log("    -1 :", ageClassification(-1)); // -1 : null
console.log("     0 :", ageClassification(0)); // 0 : null
console.log("     1 :", ageClassification(1)); // 1 : Дитинство
console.log("    24 :", ageClassification(24)); // 24 : Дитинство
console.log(" 24.01 :", ageClassification(24.01)); // 24.01 : Молодість
console.log("    44 :", ageClassification(44)); // 44 : Молодість
console.log(" 44.01 :", ageClassification(44.01)); // 44.01 : Зрілість
console.log("    65 :", ageClassification(65)); // 65 : Зрілість

console.log("    -1 :", ageClassification(-1) === null); // -1 : null
console.log("     0 :", ageClassification(0) === null); // 0 : null
console.log("     1 :", ageClassification(1) === "Дитинство"); // 1 : Дитинство
console.log("    24 :", ageClassification(24) === "Дитинство"); // 24 : Дитинство
console.log(" 24.01 :", ageClassification(24.01) === "Молодість"); // 24.01 : Молодість

// 7

function oddFn(n) {
  let arrey2 = [];
  let i = 1;
  while (i <= n) {
    arrey2.push(i);
    i = i + 2;
  }
  console.log(arrey2);
}
oddFn(5);
oddFn(10);
oddFn(15);
oddFn(20);

// 8

function cbRandom(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1) + min));
}

function cbPow(num, pow) {
  console.log(Math.pow(num, pow));
}

function cbAdd(a, b) {
  console.log(a + b);
}

function mainFunc(a, b, callback) {
  if (typeof callback == "function") {
    callback(a, b);
  } else {
    console.log(false);
  }
}

mainFunc(2, 5, cbRandom);
mainFunc(2, 5, cbPow); // 32
mainFunc(2, 5, cbAdd); // 7
mainFunc(2, 5, "not a func"); // false
