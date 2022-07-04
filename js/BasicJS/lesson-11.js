//index4.html
"use strict";
 console.log(document.head);
 console.log(document.documentElement); 
 console.log(document.body.childNodes);
 console.log(document.body.firstChild); //lastChild
 console.log(document.body.firstElementChild); //lastElementChild


 console.log(document.querySelector('#current').parentNode); //childNode учитывает и переноски
 console.log(document.querySelector('#current').parentElement); //childElement

 console.log(document.querySelector('[data-current="3"]').nextSibling); //prevSibling по объектам
 console.log(document.querySelector('[data-current="3"]').nextElementSibling); //prevElementSibling

for(let node of document.body.childNodes){
    if(node.nodeName == '#text'){
        continue;
    }
    console.log(node);
}
