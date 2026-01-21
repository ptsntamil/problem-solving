function isValidAnagram(str1, str2) {
  let temp = {};
  for (let i=0; i< str1.length; i++) {
    if (temp[str1[i]]) {
      temp[str1[i]]++;
    } else {
      temp[str1[i]] = 1;
    }
  }
    
  for (let i=0; i<str2.length;i++) {
    if (temp[str1[i]] && temp[str1[i]] > 0) {
      temp[str1[i]]--;
    } else {
      return false;
    }
  }
  //console.log(temp)
  return true
}

console.log(isValidAnagram("zaz", "azz")) // true
console.log(isValidAnagram("az", "azz")) // false
console.log(isValidAnagram("anagram", "nagaram")) // true