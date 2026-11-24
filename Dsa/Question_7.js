// Input:  [1, 1, 0, 0, 1, 1, 1, 0]
// Output: 3


let arr = [1, 1, 1, 0, 1, 1, 1, 1], count1 = 0, count2 = 0;

for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] == 1 && i !== arr.length - 1){
        count1++;
    }else{
      if(i == arr.length - 1 && arr[i] == 1){
        count1++;
      }
      if(count1 > count2){
          count2 = count1;
      }
        count1 = 0;
    }
}

console.log(count2)

// updated approch

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
        count1++;
        count2 = Math.max(count1, count2);
    } else {
        count1 = 0;
    }
}

console.log(count2); // 4