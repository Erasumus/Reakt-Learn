"use strict";

//Первая задачка
let flower1 = 1;
let flower2 = 2;


function flower(){
    var OddOrEven = Boolean((flower2+flower1) % 2);
    return !OddOrEven;
}

var flower3 = Boolean(flower());
console.log(flower3);

//Вторая задачка
var text = "1";
let number = 3;

function repeatText(text, number){
    var test = "";
    for (let i = 0; i < number; i++){
        test = test + text;
    }
    return test;   
}

console.log(repeatText(text, number));
