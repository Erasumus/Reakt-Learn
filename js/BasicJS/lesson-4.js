//NO index.html
"use strict";

//Отрабатывание фукнции в течении определенного времени
function first(){
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

first();
second();


//Работа с Callback
function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}

// learnJS('JavaScript', function(){
//     console.log('Я прошел этот урок!');
// });

function done(){
    console.log('я прошел этот урок!');
}

learnJS('Javascript', done);


