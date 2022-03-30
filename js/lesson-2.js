"use strict";

if (4==9)
    { console.log('OK!'); }
else
    { console.log('Error'); }

const num = 50;
(num === 50) ? console.log('Ok!') : console.log('Error');

switch (num){
    case 49:
        console.log('Рядом');
        break;
    case 50:
        console.log('В точку');
        break;
    default: 
        console.log('Не в этот раз');
        break;
}

