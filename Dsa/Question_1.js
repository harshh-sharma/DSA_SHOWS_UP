// Count Number in digit 
let number = -12345;
let count = 0;

number = Math.abs(number);

if (number === 0) {
  count = 1;
} else {
  while (number) {
    count++;
    number = Math.floor(number / 10);
  }
}

console.log(count); // 5