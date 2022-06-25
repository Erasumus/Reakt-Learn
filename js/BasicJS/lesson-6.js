//NO index.html
"use strict";
//////////////////////////////////////////////
//1. Работа с массивами - добавление/удаление
const arr = [1, 2, 3, 6, 8];
console.log(arr);

//1.1. удаление элемента в конце массива
arr.pop();
console.log(arr);

//1.2. добавление элемента в конце массива
arr.push(10);
console.log(arr);

const str = "ds, da, dd";
//1.3. убираем разделители ввода пользователем [, ]
const products = str.split(", ");
console.log(products);
//1.4. Сортировать по порядку (но сортирует строки)
products.sort();
//1.5. показываем весь массив вместе с выбранным разделителем [; ]
console.log(products.join('; '));
//1.6. Но можно указывать как именно сортировать если сделать callback
const sortarr = [4,9,8,7]
sortarr.sort(compareNum);
function compareNum(a, b){
    return a - b;
}
console.log(sortarr);

//////////////////////////////////////////////
//2. Работа с массивами пробег по элементам
//2.1. console.log(arr.length)
const massivelength = ["a", "b", "c", "d"];
let massive1 = "[";
for (let i = 0; i < massivelength.length; i++) {
    massive1 += massivelength[i] + ", ";
}
console.log(massivelength);
console.log(massive1 + "]");

//если мы добавляем в какой-та сотый элемент, то массив создает пустые элементы
//arr[99] = 0;
console.log(arr.length);
console.log(arr);

//2.2. value(name) of arr
let massive2 = "[";
for (let value of arr) {
    massive2 += value + ", ";
}
console.log(massive2 + "]");

//2,3 Foreach метод (важное)
const fruits = ["🍎", "🍊", "🍋", "🍓", "🥝"];
fruits.forEach(function (item, i, fruits) {
    console.log(` [${i}] : ${item} значения массива: ${fruits}`);
});

fruits.forEach((item, i, fruits) => {
    console.log(` [${i}] : ${item} значения массива: ${fruits}`);
});

//Эдакое раскрытие Foreach (мне проще было его так разобрать)
function sliceFruit(fruit) {
    console.log("Разрезаю " + fruit + "!");
}

fruits.forEach(sliceFruit);

//arr.map - изменение
//arr.every/some
//arr.filter - отфилтрровать
//arr.reduce
