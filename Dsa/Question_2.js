// Reverse a number

let number = 12345;
let str = "";

while(number){
 
  str += Math.floor(number%10);
   number = Math.floor(number/10);
}

console.log(Number(str));

// different approch
let reverse = 0;

while(number){
  reverse = ((reverse * 10) + (number%10));
  number = Math.floor(number/10);
}

console.log(reverse);