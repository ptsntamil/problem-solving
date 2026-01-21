function same(arr1, arr2) {
  //console.time("rr")
  if (arr1.length !== arr2.length) {
    return false
  }
  
  let temp = {};
  let square;
  for (let i=0; i<arr1.length; i++) {
      square = arr1[i] * arr1[i];
      if (temp[square]) {
          temp[square] = temp[square] + 1
      } else {
          temp[square] = 1;
      }
  //   temp  = temp + ( arr1[i] * arr1[i] - arr2[i])
  //   console.log(temp)
    // index = arr2.indexOf(arr1[i] * arr1[i]);
    // if( index === -1) {
    //   console.timeEnd("rr")
    //   return false;
    // }
    
    // arr2.splice(index ,1);
  }
  
  for (let i=0; i<arr2.length;i++) {
    if (temp[arr2[i]] && temp[arr2[i]] > 0) {
      temp[arr2[i]] = temp[arr2[i]] -1;
    } else {
      return false
    }
  }
  
  //console.timeEnd("rr")
  return true
}
  
console.log(same([3,4,4,0], [16,16,9,0])) // true
console.log(same([1,1], [1])) // false
console.log(same([1,2,4], [16,1,4])) // true