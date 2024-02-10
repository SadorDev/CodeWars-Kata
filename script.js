/* Kata 1
8kyu

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't
*/
const lovefunc = (flower1, flower2) => {
  if (flower1 % 2 == !(flower2 % 2)) {
    return true;
  } else {
    return false;
  }
};

/* Kata 2
8kyu 

Write a function which takes a number and returns the corresponding ASCII char for that value.
Example:
65 --> 'A'
97 --> 'a'
48 --> '0
*/
const getChar = (c) => {
  const string = String.fromCharCode(c);
  return string;
};

console.log(getChar(43));
console.log(getChar(21));
console.log(getChar(58));

/* Kata 3
8kyu

Convert a String to a Number!
*/

const stringToNumber = function (str) {
  let num = parseInt(str);
  console.log(num);
  return num;
};

// What other ways can I write this?

/* Kata 4
8yu
Write a function that checks if a given string (case insensitive) is a palindrome.
A palindrome is a word, number, phrase, or other sequence of symbols that reads 
the same backwards as forwards, such as madam or racecar.
*/

function isPalindrome(x) {
  const lowerCaseX = x.toLowerCase();
  const aplhanumericX = lowerCaseX.replace(/[^a-z0-9]/g, "");
  const reverseX = aplhanumericX.split("").reverse().join("");

  if (aplhanumericX === reverseX) {
    console.log(x + " is a palindrome");
    return true;
  } else {
    console.log(x + " is not a palindrome");
    return false;
  }
}

isPalindrome("A man, a plan, a canal, Panama");
isPalindrome("A man, a plan, a canal, orange");
