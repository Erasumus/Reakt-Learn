//index3.html

const btn = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');
/* Плохой метод
//////////////////// 
btn.onclick = function(){
    alert('click');
}; */

/* btn.addEventListener('click', () =>{
    alert("click");
});

btn.addEventListener('click', () =>{
    alert("second click");
});
 */
/* btn.addEventListener('mouseenter', (e) =>{
    console.log(e.target);
    e.target.remove();
});
 */

let i = 0;
const deleteElement = (e) => {
    i++;
    console.log(e.currentTarget); //но лучше e.target
    console.log(e.type);
    if(i==1){
        btn.removeEventListener('click', deleteElement);
    }
};


btn.forEach(btn =>{
    btn.addEventListener('click', deleteElement);
});
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
}); 