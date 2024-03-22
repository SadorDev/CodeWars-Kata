/* KATA 1
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

/* KATA 2
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

/* KATA 3
8kyu

Convert a String to a Number!
*/

const stringToNumber = function (str) {
  let num = parseInt(str);
  console.log(num);
  return num;
};

// What other ways can I write this?

/* KATA 4
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

/* KATA 5
8kyu
Code as fast as you can! You need to double the integer and return it.
*/

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

/* KATA 6
6kyu
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the 
multiples of 3 or 5 below the number passed in.
Additionally, if the number is negative, return 0.
Note: If the number is a multiple of both 3 and 5, only count it once.
*/
function solution(number) {
  // Step 1: Check for a negative number and return 0 if the condition is true
  if (number <= 0) {
    return 0; // Return 0 immediately if the number is negative or 0
  }

  let sum = 0; // This will hold the sum of the multiples

  // Step 2 & 3: Find multiples of 3 and 5, avoiding duplicates by counting a number only once
  for (let i = 1; i < number; i++) {
    // If 'i' is divisible by 3 or 5, add it to the sum
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum; // Return the calculated sum
}

/* KATA 7
8kyu 
Complete the function that takes two integers (a, b, where a < b) and return 
an array of all integers between the input parameters, including them.
*/

const between1 = (a, b) => {
  return Array.from(a == b);
};

function between2(a, b) {
  // Create an array-like structure using Array.from() with a length equal to the range between a and b.
  // Use the fill() method to populate the array with placeholder values.
  // The second argument of fill() is not important in this case, as we will be mapping over the array.

  return Array.from({ length: b - a + 1 }, (_, index) => a + index);
}

/* KATA 8
8yu
Your task is to make two functions ( max and min, or maximum and minimum, etc., 
depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, 
and return the largest and lowest number in that list, respectively.
*/

const min = (list) => {
  return Math.min(...list);
};

const max = (list) => {
  return Math.max(...list);
};

/* KATA 9
8kyu
Complete the function that takes two integers (a, b, where a < b) and
return an array of all integers between the input parameters, including them
*/

const between = (a, b) => {
  let numbers = [];

  for (let i = a; i <= b; i++) {
    numbers.push(i);
  }

  return numbers;
};

/* KATA 10
/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:

Sam Harris => S.H
patrick feeney => P.F
*/
