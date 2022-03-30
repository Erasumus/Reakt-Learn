"use strict";

let number1 = 5;
const leftzorderWidth = 1;

number1 = 10;
// console.log(number);

 const obj = {
     age: 50,
     name: "John",
     isMarried: false
 }; 

// console.log(obj.name);


let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];

// console.log(arr[1]);

// console.log(number2);
 var number2 = 10;

 {
    let number3 = 5;
    const number4 = 10;

    // console.log(number4);
 }


//  alert('Hello');

//  const result = confirm("are you here");
//  console.log(result);

// const answer2 = prompt("Вам есть 18?", "18");
//+для вывода в число  const answer2 = +prompt("Вам есть 18?", "18");
//  console.log(answer2);
//  console.log(typeof(answer2));

const answers = [];
answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваше фамилия?', '');
answers[2] = prompt('Сколько лет?', '');

document.write(answers);

// console.log(number3);
// console.log(number4);

// console.log(something);
const category = 'toys';
let item = 1;
console.log(`ссылка/${category}/${item}`);

const user = "Ivan";
alert(`Привет, ${user}`);

console.log('arr' + "- object");
console.log(5 + +"3");

let incr = 11,
    decr = 11;
// console.log(incr++);
// console.log(decr--);
console.log(++incr);
console.log(--decr);

console.log(5%2);