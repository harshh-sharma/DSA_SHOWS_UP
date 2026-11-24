let nums = [10, 5, 20, 8, 15];

// Output: 20
let largest = nums[0];
for(let i = 1 ; i < nums.length ; i++){
  if(largest < nums[i]){
    largest = nums[i];
  }
}

console.log(largest);