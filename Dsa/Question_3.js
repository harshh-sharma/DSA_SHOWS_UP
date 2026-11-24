// check number is palidrome or not

let number = 121;
let dup = number;
let rev = 0;
while(number){
  rev = ((rev*10) + Math.floor((number%10)));
  number = (Math.floor(number/10));
}

console.log(rev == dup);