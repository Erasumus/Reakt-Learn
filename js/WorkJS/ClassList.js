"use strict";

const btns = document.querySelectorAll("button"),
      wrapper = document.querySelector(".btn-block");
let activebtn;

btns.forEach((element, i) =>{
    element.classList.add("blue");

    if(element.classList.contains("blue")){
        element.classList.add("red");
        activebtn = document.querySelectorAll("button.red");
        element.classList.remove("blue");
    }

    if(i==7){
        element.classList.remove("blue");
    }
});


wrapper.addEventListener('click', (event)=>{
    const target = event.target;
    if(target && target.matches("button")){ //target.tagName("BUTTON");
        target.classList.toggle("red");
        target.classList.toggle("blue");   
    }
});

