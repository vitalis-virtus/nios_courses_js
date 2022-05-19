"use strict";

//1 task
const array1 = ["a", "b", "c"];
const array2 = [1, 2, 3];
const resultArray = [].concat(array1, array2);
console.log("task 1: ", resultArray);

//task 1
const array3 = ["a", "b", "c"];
array3.push(1);
array3.push(2);
array3.push(3);
console.log("task 2: ", array3);

//task 3
const array4 = [3, 4, 1, 2, 7];
//напишемо функцію, яка сортує масив методом бульки
const sortArrayBubble = (arr) => {
  const newArr = [...arr];
  for (let i = 0; i < newArr.length - 1; i++) {
    let wasSwap = false;
    for (let j = 0; j < newArr.length - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        const swap = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = swap;
        wasSwap = true;
      }
    }
    if (!wasSwap) break;
  }
  return newArr;
};
const sortedArray4 = sortArrayBubble(array4);
console.log("task 3: ", sortedArray4);

//taks 4
const data = [1, 2, 3];
const reverse = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
};
const reverseData = reverse(data);
console.log("task 4: ", reverseData);

//task 5
console.log("task 5: ", typeof null);
