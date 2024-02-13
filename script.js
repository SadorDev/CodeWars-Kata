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

/* Kata 5
8kyu
Code as fast as you can! You need to double the integer and return it.
*/

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i *2;
}

/* Kata 6
6kyu
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the 
multiples of 3 or 5 below the number passed in.
Additionally, if the number is negative, return 0.
Note: If the number is a multiple of both 3 and 5, only count it once.
*/

const solution = (number) => {
  
} 

/* Kata 7
Complete the function that takes two integers (a, b, where a < b) and return 
an array of all integers between the input parameters, including them.
8kyu 
*/

const between = (a, b) => {
  
}