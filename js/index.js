"use strict";

// CountOccurences

function CountOccurences(str, substr) {
  return str.split(substr).length - 1;
}

//перевірка
// console.log(CountOccurences("azyxxzyzy", "zy"));
// console.log(CountOccurences("ababagalamaga", "ba"));

//_________________________________________________________________________________________________________//
// Storage

function storage() {
  let obj = {
    name: "",
    age: "",
  };
  return {
    setValue(valueName, value) {
      obj[valueName] = value;
    },
    getValue(valueName) {
      return obj[valueName] ? obj[valueName] : undefined;
    },
  };
}

//перевірка
const propsStorage = storage();
propsStorage.setValue("name", "Peter");
propsStorage.setValue("age", 30);
console.log(propsStorage.getValue("name"));
console.log(propsStorage.getValue("age"));
propsStorage.setValue("age", 31);
console.log(propsStorage.getValue("age"));

//_________________________________________________________________________________________________________//
// toDigitArray

function toDigitArray(number) {
  //змінюємо тип даних на string, перетвроємо все в масив, розвертаємо масив, перетворємо кожен елемент масиву назад в тип number
  return number
    .toString()
    .split("")
    .reverse()
    .map((element) => Number(element));
}

//перевірка
// console.log(toDigitArray(46156));

//_________________________________________________________________________________________________________//
// roundedRating

function calculateRoundedRating(number) {
  //округляємо до найближчого цілого числа
  const roundedNum = Math.round(number);
  //модуль різниці округленого і заданого чисел
  let diff = Math.abs(number - roundedNum);

  //точно визначаємо и округлене число повинно залишитись цілим, чи з "5" після коми
  if (roundedNum < number) {
    if (diff > 0.25) {
      return roundedNum + 0.5;
    } else return roundedNum;
  } else {
    if (diff > 0.25) {
      return roundedNum - 0.5;
    }
    return roundedNum;
  }
}

//перевірка
// console.log(calculateRoundedRating(3.666));
// console.log(calculateRoundedRating(1.92));
// console.log(calculateRoundedRating(4, 29));
// console.log(calculateRoundedRating(1));

//_________________________________________________________________________________________________________//
//countWords
function countWords(str) {
  //виключаємо початковий і кінцевий пробіли
  str = str.replace(/(^\s*)|(\s*$)/gi, "");
  //скорочуємо кілька пробілів до одного
  str = str.replace(/[ ]{2,}/gi, " ");
  return str.split(" ").length;
}

//перевірка
// console.log(countWords("   You  area programmer "));

//_________________________________________________________________________________________________________//
// extractYears
function extractYears(str) {
  //створюємо масив чотирьохзначних років
  const arr = str.match(/\D\d{4}\b/gi) || [];
  //фільтруємо і змінюємо тип всіх елементів з string на number
  return arr
    .filter((year) => Number(year) > 1899 && Number(year) < 2100)
    .map((yearInString) => Number(yearInString));
}

//перевірка
// console.log(
//   extractYears(
//     "Usually people who were born in 1995 can find they first job not later than in 2020 but also not earlier than in 2012. Number 11999 is not included in the result because it's too big. It is out of range between 1900 and 2099."
//   )
// );
