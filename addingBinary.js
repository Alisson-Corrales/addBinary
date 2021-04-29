"use strict";


//this holds the answer at the end
let sum = "";
//these two are going to be turned int binary numbers
//let termOne = 9; // should be 1001 in binary
let termOne = 3; // should be 1100 in binary
let termTwo = 10; //should be 1010 in binary

//two loops to run the numbers and return them as the binary numbers
//one loop to add them together and should be += into the sum variable 


let first = 0;
let second = 0;
let third = 0;
let fourth = 0;
let fifth = 0;

//makes termOne a binary #
for(let i = 0; i < 1; i++ ){
    let remainderOf8 = 0;
    let remainderOf4 = 0;
    let remainderOf2 = 0;
    let remainderOf1 = 0;

    //
    if(termOne < 8){
        remainderOf8 = 0;
    }else if(termOne >= 8)
    {remainderOf8 = 1}
    if(termOne < 8){
        termOne = termOne
    }else{termOne = termOne - 8}
    //
    if(termOne < 4){
        remainderOf4 = 0;
    }else if(termOne >= 4)
    {remainderOf4 = 1}
    if(termOne < 4){
        termOne = termOne
    }else{termOne = termOne - 4}
    //
    if(termOne < 2){
        remainderOf2 = 0;
    }else if(termOne >= 2)
    {remainderOf2 = 1}
    if(termOne < 2){
        termOne = termOne
    }else{termOne = termOne - 2}
    //
    if(termOne < 1){
        remainderOf1 = 0;
    }else if(termOne >= 1)
    {remainderOf1 = 1}



    //turns the first number into a 1 or a 0
    if(remainderOf8 >= 1 ){
        first = 1;
    }else if(remainderOf8 < 1 || remainderOf8 == 0){
        first = 0
    }
    //turns the second number into a 1 or a 0
    if(remainderOf4 >= 1){
        second = 1;
    }else if(remainderOf4 < 1 ||remainderOf4 == 0){
        second = 0
    }
    //turns the third number into a 1 or a 0
    if(remainderOf2 >= 1){
        third = 1;
    }else if(remainderOf2 < 1 || remainderOf2 == 0){
        third = 0
    }
    //turns the fourth number into a 1 or a 0
    if(remainderOf1 >= 1){
        fourth = 1;
    }else if(remainderOf1 < 1 || remainderOf1 == 0){
        fourth = 0
    }

    console.log(`${first} ${second} ${third} ${fourth}`)
}


//makes termTwo a binary #

console.log(sum)