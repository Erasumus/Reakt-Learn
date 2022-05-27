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

const str = prompt("", "");
//1.3. убираем разделители ввода пользователем [, ]
const products = str.split(", ");
//1.4. Сортировать по порядку (но сортирует строки)
products.sort();
//1.5. показываем весь массив вместе с выбранным разделителем [; ]
console.log(products.join('; '));
//1.6. Но можно указывать как именно сортировать если сделать callback
arr.sort(compareNum);
function compareNum(a, b){
    return a - b;
}
console.log(arr);

//////////////////////////////////////////////
//2. Работа с массивами пробег по элементам
//2.1. console.log(arr.length)
let massive1 = "[";
for (let i = 0; i < arr.length; i++) {
    massive1 += arr[i] + ", ";
}
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
arr.forEach(function (item, i, arr) {
    console.log(` [${i}] : ${item} значения массива: ${arr}`);
});

arr.forEach((item, i, arr) => {
    console.log(` [${i}] : ${item} значения массива: ${arr}`);
});

//Эдакое раскрытие Foreach (мне проще было его так разобрать)
function sliceFruit(fruit) {
    console.log("Разрезаю " + fruit + "!");
}

const fruits = ["🍎", "🍊", "🍋", "🍓", "🥝"];
fruits.forEach(sliceFruit);

//arr.map - изменение
//arr.every/some
//arr.filter - отфилтрровать
//arr.reduce
