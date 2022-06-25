//NO index.html
"use stritct";

//1. Как работают функции
let num = 20;

showFirstMessage("Hello world");
function showFirstMessage(text){
    console.log(text);
    let num = 10; //Видимость разная
}

console.log(num);

//////////////////////////////////////
console.log(calc(4,3));

function calc (a, b){
    return (a + b);
}

///////////////////////////////////////
//1.1 Результат функций можно отдавать переменным
//Вывод через console.log
const anotherNum = ret();
console.log(anotherNum);

function ret(){
    let num = 50;
    return num;
}

///////////////////////////////////////
//1.1 Результат функций можно отдавать переменным
//Вывод непосредственно через функцию.

 const logger = function(){
     console.log("Hello");
 };

 logger();

//////////////////////////////////////
//1.2 Стрелочная функция
 const calculator = (a, b) => a + b;
 console.log(calculator(4,5));


//////////////////////////////////////
//1.2 Работа с символами
 const str = "test";
 const arr = [1,2,3];


//////////////////////////////////////
//1.2.1 Работа с символами - перевод в нижний регистр
console.log(str.toLowerCase()); 

//////////////////////////////////////
//1.2.2 Работа с символами - перевод в верхний регистр
console.log(str.toUpperCase());

//////////////////////////////////////
//1.2.3 Работа с символами - поиск индекса символа
const fruit = "Some fruit";
console.log(fruit.indexOf('f'));

//////////////////////////////////////
//1.2.1 Работа с символами - slice дословно вырезать символы
const logg = "Hello world";
console.log(logg.slice(6)); //index [start] , auto-end
console.log(logg.slice(6, 11)); //index [start] index [end]
console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11)); //Можно указать первый больше, нельзя отрицательный индекс

console.log(logg.substr(6, 3)); //Устарел (index [start], count letter)

//////////////////////////////////////
//1.3.1 Работа с числами - округление
const numround = 12.2;
console.log(Math.round(numround));

//////////////////////////////////////
//1.3.2 Работа с числами - парсинг в иной тип переменной
const parsepx = "12.2px";
console.log(parseInt(parsepx));
console.log(parseFloat(parsepx));


