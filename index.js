"use strict";

// isEmpty

const isEmpty = (object) => {
  for (const key in object) {
    //проходимося циклом for...in в об'єкті
    return object[key] === null ||
      isNaN(object[key]) ||
      object[key] === undefined ||
      object[key] === ""
      ? true // якщо хоч одна умова виконується, тобто значення ключа рівне пустому значенні, повертаємо true
      : false; // значення всіх ключів не відповідають пустим значенням, які задані в умові задачі, повертаємо false
  }
  return true; // в об'єкта взагалі відсутні ключі, отже він пусти, повертаємо true
};

// // перевірка
// const data = { a: 1, b: undefined };
// const data2 = { a: undefined };
// console.log(isEmpty(data)); // false
// console.log(isEmpty(data2)); // true

//_________________________________________________________________________________________________________//

// isEqualDeep

// перший найспростіший спосіб
// const isEqualDeep = (obj1, obj2) =>
//   JSON.stringify(obj1) === JSON.stringify(obj2);

const isEqualDeep = (obj1, obj2) => {
  // отримуємо масив значмень кожного з об'єктів
  const props1 = Object.getOwnPropertyNames(obj1);
  const props2 = Object.getOwnPropertyNames(obj2);

  if (props1.length !== props2.length) {
    return false; // якщо масиви мають різну довжину, то обєкти вже не рівні між собою
  }

  for (let i = 0; i < props1.length; i += 1) {
    const prop = props1[i];
    //якщо є вкладені масиви, то треба зробити ще глибгу перевірку
    const bothAreObjects =
      typeof obj1[prop] === "object" && typeof obj2[prop] === "object";

    if (
      (!bothAreObjects && obj1[prop] !== obj2[prop]) || // умова, коли обидва значення ключів не є об'єктами
      (bothAreObjects && !isEqualDeep(obj1[prop], obj2[prop])) // перевіряємо, коли обидва значення ключів є об'єктами, при цьому рекурсивно викла=икаємо функцію isEqualDeep
    ) {
      return false;
    }
  }

  return true;
};

// також можна використати бібліотеку lodash

// // перевірка
// const data = { a: 1, b: { c: 1 } };
// const data2 = { a: 1, b: { c: 1 } };
// const data3 = { a: 1, b: { c: 2 } };
// console.log(isEqualDeep(data, data2)); // true
// console.log(isEqualDeep(data, data3)); // false

//_________________________________________________________________________________________________________//

// intersection

const intersection = (firstObject, secondObject) => {
  const newObj = {}; //створюємо новий пустий масив, в який ми будемо додавати значення, які перетинаються
  for (const key in firstObject) {
    // якщо firstObject і secondObject будуть мати вкладені масиви, то їх також потрібно перевірити, для цього використаємо функцію isEqualDeep із попреднього завдання
    const bothAreObjects =
      typeof firstObject[key] === "object" &&
      typeof secondObject[key] === "object";
    if (bothAreObjects && isEqualDeep(firstObject[key], secondObject[key])) {
      newObj[key] = firstObject[key]; //якщо масиви будуть рівними, то ми додаємо їх в масив newObj
    } else {
      if (firstObject[key] === secondObject[key]) {
        newObj[key] = firstObject[key]; // якщо значення для однакових ключів будуть рівними, то ми додамо їх в наш масив newObj
      }
    }
  }
  return newObj; //повертаємо масив зі значеннями перетинів
};

// // перевірка
// const data = { a: 1, b: 2 };
// const data2 = { c: 1, b: 2 };
// console.log(intersection(data, data2)); // { b: 2 }
