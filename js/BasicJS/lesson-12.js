//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

window.addEventListener("DOMContentLoaded", ()=>{
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (element)=>{
        element.preventDefault();

        console.log("touch");
        console.log(element.touches);
    });

    box.addEventListener('touchmove', (element)=>{
        element.preventDefault();

        console.log("move");
        console.log(element.targetTouches[0].pageX); //Отслеживает координату X
    });

    box.addEventListener('touchend', (element)=>{
        element.preventDefault();

        console.log("end");
    });
});


//touches
//touchesTarget
//changedTouches


//async
//defer