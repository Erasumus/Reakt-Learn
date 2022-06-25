//index.html
"use strict";

const soldier ={
    health: 100,
    armor: 50,
};

const human = {
    health: 100,
};

human.__proto__ = soldier;
console.log(human.armor);


console.log(typeof(Number(1)));
console.log(typeof(String(1)));
console.log(typeof(Boolean(1)));
console.log(typeof(!!"44"));

const fontSize = 14 + "px";
console.log(fontSize);

