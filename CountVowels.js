function countVowels(str) {
  // convert to lowercase to handle both uppercase and lowercase
  let vowels = "aeiou";
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("world"));     
console.log(countVowels("JAVASCRIPT"));
