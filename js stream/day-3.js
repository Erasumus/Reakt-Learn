"use strict";

var test = hero(2,1);

function hero(bullets, dragons){
    //Get Coding!
      return bullets/2 >= dragons;
    }
    
console.log(test);


////////////////////////////////////////////
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverseSeq = n => {
    let array = [];
    for(let i = 0; i <= n-1 ; i++){
      array.push(n-i);
        console.log(array);
    }

    return [array];
  };

  console.log(reverseSeq(5));

//   const reverseSeq = n => {
//     let arr = [];
//       for (let i=n; i>0; i--) {
//         arr.push(i);
//         } return arr;
//     };

// const reverseSeq = n => {
//     return Array(n).fill(0).map((e, i) => n - i );
//   };

// const reverseSeq = num => {
//     return new Array(num)
//         .fill()
//         .map((d, i) => i + 1)
//         .reverse()
//   };