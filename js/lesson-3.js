"use stritct";

let num = 20;

function showFirstMessage(text){
    console.log(text);
    let num = 10;

}

showFirstMessage("Hello world");
console.log(num);


function calc (a, b){
    return (a + b);
}

console.log(calc(4,3));

function ret(){
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

 const logger = function(){
     console.log("Hello");
 };

 logger();

 const calculator = (a, b) => a + b;
 console.log(calculator(4,5));

 const str = "test";
 const arr = [1,2,3];

console.log(str.toLowerCase());
console.log(str.toUpperCase());

const fruit = "Some fruit";
console.log(fruit.indexOf('q'));

const logg = "Hello world";
console.log(logg.slice(6)); //index [start] , auto-end
console.log(logg.slice(6, 11)); //index [start] index [end]
console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11)); //Можно указать первый больше, нельзя отрицательный индекс

console.log(logg.substr(6, 3)); //Устарел (index [start], count letter)

const numround = 12.2;
console.log(Math.round(numround));

const parsepx = "12.2px";
console.log(parseInt(parsepx));
console.log(parseFloat(parsepx));


