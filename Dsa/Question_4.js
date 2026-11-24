let a = 12, b = 18;
let smallerNumber = a > b ? b : a;
let divisor = 0;

for(let i = 1 ; i < smallerNumber ; i++){
  if((a%i == 0) && (b%i == 0) && divisor < i){
    divisor = i;
  }
}

console.log(divisor)