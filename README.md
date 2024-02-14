# Daily CodeWars Challenges
 
 ### Kata 1
 This code defines a function called lovefunc that takes two parameters, flower1 and flower2. It then checks whether the remainder of dividing flower1 by 2 is equal to the negation of the remainder of dividing flower2 by 2. If the condition is true, the function returns true; otherwise, it returns false.

 ### Kata 2
 This code is concise and adheres to the principles discussed earlier. It uses the String.fromCharCode() method to convert the given number to its corresponding ASCII character. The console.log() statements help in debugging and verifying the results during testing. The test cases demonstrate how the function works with different inputs. Overall, your initial code is clear and suitable for the task at hand.

 **String Methods**

 ### Kata 3
 Can also be written:

 ```
 const stringToNumber = function(str) {
  return parseInt(str);
}
```

### Kata 4
break down the code step by step:

1. Lowercasing the Input:
```
const lowerCaseX = x.toLowerCase();
```
This line takes the input string x and converts it to lowercase using the toLowerCase() method. This ensures that the palindrome check is case-insensitive.

2.Removing Non-Alphanumeric Characters:
```
const aplhanumericX = lowerCaseX.replace(/[^a-z0-9]/g, "");
```
This line removes non-alphanumeric characters from the string. It uses the replace() method with a regular expression (/[^a-z0-9]/g) to replace anything that is not a lowercase letter or a digit with an empty string.

3. Reversing the String:
```
const reverseX = aplhanumericX.split("").reverse().join("");
```

This line reverses the string. It first splits the string into an array of characters using split(''), then reverses the array with reverse(), and finally joins the array back into a string with join('').

4. Checking for Palindrome:
```
  if (aplhanumericX === reverseX) {
    console.log(x + " is a palindrome");
    return true;
  } else {
    console.log(x + " is not a palindrome");
    return false;
  }
  ```
This if statement checks if the original string with non-alphanumeric characters removed (aplhanumericX) is equal to its reversed version (reverseX). If they are equal, it means the string is a palindrome.

If it's a palindrome, the function logs that the input is a palindrome and returns true.
If the original string and its reversed version are not equal, it means the string is not a palindrome.
The function logs that the input is not a palindrome and returns false.

So, the overall function takes an input string, performs the necessary transformations (lowercasing, removing non-alphanumeric characters, reversing), and then checks if the resulting string is a palindrome.


### Kata 8

So I learned about the ```Math.min Math.max```methods which returns the largest of the numbers given as input 
parameters
