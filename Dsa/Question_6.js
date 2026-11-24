// Second Largest Element

// Input:  [8, 8, 7, 6, 5]
// Output: 7


let arr = [8, 8, 7, 6, 5];
let secondLargest = -Infinity;
let largest = arr[0];

for(let i = 0 ; i < arr.length ; i++){
  if(largest < arr[i]){
    secondLargest = largest ;
    largest = arr[i];
  }else{
    if(arr[i] !== largest && secondLargest < arr[i] ){
      secondLargest = arr[i];
    }
  }
}
console.log(secondLargest);