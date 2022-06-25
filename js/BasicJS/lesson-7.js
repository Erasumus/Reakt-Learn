//NO index.html
"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;
copy.a = 10;
console.log(copy);
console.log(obj);
 
////////////////////////////////
//Метод переноса данных объекта
function copyObj(mainObj){
    let objCopy={};
    let key;
    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }
    
    return objCopy;
}

const number = {
    a: 2,
    b: 5,
    c: { 
        x:5,
        y:4,
        z:2,
    }
};

const newNumbers = copyObj(number);
newNumbers.a = 4;
console.log(number);
console.log(newNumbers);

const add = {
  d: 16,
  e: 20,
};

//Соединение данных 1го объекта с 2м
console.log(Object.assign(number, add));

const clone = Object.assign({}, add);

clone.d = 20;
console.log(add);
console.log(clone);

//Массивы
const oldArray = ['a','b','c'];
const newArray = oldArray.slice();

newArray[1] = 'ads';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs];

console.log(internet);

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,3,4];
log(...num);


const Arrobj = {
    a: 5,
    b: 2,
};

const aArray = {...Arrobj};
console.log(aArray);
aArray.a = 10;
console.log(aArray);