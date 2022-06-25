//index2.html
"use strict";

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    //Современное query
    hearts = document.querySelectorAll('.heart'),
    oneButton = document.querySelector('button'),
    wrapper = document.querySelector('.wrapper');

//Вывод в консоль
console.log(btns[1]);
console.log(circle[1]);
hearts.forEach(item => {
    console.log(item);
});
console.log(oneButton);

//Изменение style (инлайны)
box.style.cssText = 'background-color: blue; width: 500px';
btns[1].style.borderRadius = '100%';

/* 
for(let i = 0; i < hearts.length; i++){
    hearts[i].style.backgroundColor = 'blue';
} */
hearts.forEach(item =>{
    item.style.backgroundColor = 'blue';
});

//Работа с DOM
//Хотел узнать как генерировать несколько div
/////////////////////
const div = document.createElement('div');
//const text = document.createTextNode('тут был я');
div.classList.add('black');

//Добавление
document.body.append(div);
wrapper.append(div);
wrapper.prepend(div);

//Внутри 
div.innerHTML = "<h1>hello</h1>";
//div.textContent = "Hello"; //только текст
//div.insertAdjacentHTML("beforebegin", '<h2>hello</h2>');
//div.insertAdjacentHTML("beforeend", '<h2>hello</h2>');
//div.insertAdjacentHTML("afterbegin", '<h2>hello</h2>');
//div.insertAdjacentHTML("afterend", '<h2>hello</h2>');

//Еще манипуляции с добавлениями
//hearts[0].before(div);
//hearts[0].after(div);

//Удаление
circle[0].remove();

//Замещение
hearts[2].replaceWith(circle[0]); 




