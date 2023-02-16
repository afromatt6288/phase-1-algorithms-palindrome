function isPalindrome(word) {
  // Write your algorithm here
  wordArray = []
  wordArray = word.split("")
  console.log(wordArray)
  backwardWordArray = []
  backwardWordArray = [...wordArray].reverse()
  console.log(backwardWordArray)
  backwardWord = backwardWordArray.join("")
  console.log(backwardWord)
  if (word === backwardWord) {
    return true
  } else {
    return false
  }

}
console.log(isPalindrome(""))

/* 
  Add your pseudocode here
  word to array
  split word into characters
  reverse word array
  rejoin reversed word into backward word
  compare word and backward word
  return a true or false result
*/

/*
  Add written explanation of your solution here
  I create a word array.
  I used split to make that array contain the word with each character as it's own element.
  I created a backwardWord array
  I used reverse and the spread operator to populate that with the words letters in reverse order
  I used join to make the backwarWordArray into backwardWord
  I compared the word and backwardWord, and set it to give a true or a false using an if else statement
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
