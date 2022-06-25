//NO index.html
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

let num2 = 50;
while (num2 <= 55){
    console.log(num);
    num2++;
}

do {
    console.log(num2);
    num2++;
}
while (num2 < 55);

for (let i = 1; i < 8; i++){
    if (i == 5){
        continue;
    }
    else if (i == 7){
        break;
    }
    console.log(num2);
    num2++;
}
