arr = [1,5,7,9,10,17,21];
tar = 16;

function twoSum(arr, target) {
  let min = 0, max = arr.length - 1;
  while(min !== max) {
   
    let sum = arr[min] + arr[max];
    if (sum > target) {
      max --;
    } else if (sum<target) {
      min++
    } else {
      return true
    }
  }
  
  return false;
}

console.log(twoSum(arr, 16)) // True
console.log(twoSum(arr, 13)) // False
console.log(twoSum(arr, 22)) // true
console.log(twoSum(arr, 27)) // true


arr = [9,7,10,1,17,5,21];
tar = 16;

function twoSumUnOrdered(arr, target) {
  let temp = {};
  
  for (i=0;i<arr.length; i++) {
    let rem = target - arr[i];
    if (temp[rem]) {
      console.log(arr[i], rem) // 9,7 , 21,1 , 17,10
      return true
    } else {
      temp[arr[i]] = rem;  
    } 
  }
  console.log(-1,-1);
  return false
} 

console.log(twoSumUnOrdered(arr, 16)) // true
console.log(twoSumUnOrdered(arr, 13)) // false
console.log(twoSumUnOrdered(arr, 22)) // true
console.log(twoSumUnOrdered(arr, 27)) // false