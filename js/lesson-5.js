"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(text){
        console.log(text);
    }
};

options.makeTest(`Привет ${options.name}`);

// console.log(options.name);

// // delete options.name;

// console.log(options);

console.log(Object.keys(options).length);

// for (let key in options) {
//     if (typeof(options[key]) === 'object'){
//         for(let i in options[key]){
//             console.log(`Свойство ${key}, содержащий ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

// console.log(counter);

