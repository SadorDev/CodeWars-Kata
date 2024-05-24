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
Break down the code step by step:

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


### Kata 6
1. Check for a Negative Number: First, you need to check if the input number is negative. If it is, the task is straightforward: you return 0 because there are no natural numbers below a negative number that would meet your criteria.

2. Find Multiples of 3 and 5: For positive numbers, you'll want to go through each number starting from 1 up to (but not including) the input number. For each of these numbers, you'll check if it's a multiple of 3 or 5. Remember, a number is a multiple of another if the remainder of their division is zero.

3. Avoid Counting Duplicates: If a number is a multiple of both 3 and 5 (like 15, 30, etc.), you should only count it once. This step is naturally covered if you're adding up numbers that meet either condition without specifically segregating them into 'multiples of 3' and 'multiples of 5'.

4. Sum the Multiples: As you identify each number that is a multiple of 3 or 5, add it to a running total. This sum will start at 0 and grow as you find numbers that meet the criteria.

5. Return the Sum: After you've checked all numbers up to (but not including) the input number, return the total sum you've calculated.

#### In code: 

A function that takes one input (the threshold number)
A check right at the start of the function to return 0 if the input is negative.
A loop that starts from 1 and goes up to one less than the input number.
Within the loop, conditionals to check if the current number is a multiple of 3 or 5.
A running total that adds up these numbers.
Returning the total sum after the loop completes.

### Kata 7
Explanation:
```
Array.from({ length: b - a + 1 }, (_, index) => a + index):
```

We use Array.from() to create an array-like structure.
The first argument is an object with a length property representing the size of the array, which is calculated as b - a + 1 to ensure inclusivity.
The second argument is a mapping function that generates values for each index in the array. We use a + index to produce the sequence of integers.
{ _, index } in the mapping function:

The underscore (_) is a convention for a variable that is intentionally ignored. Here, we use it as a placeholder for the value that fill() would normally use.
index represents the current index of the array.


### Kata 8
So I learned about the `Math.min Math.max`methods which returns the largest of the numbers given as input
parameters


### Kata 9
1. Start by receiving two numbers as input.
2. Prepare a list to hold the numbers between the two provided numbers.
3. Look at each number starting from the first one to the second one, including both.
4. As you go through each number, add it to the list.
5. Once you've looked at all the numbers between the two provided ones, return the list containing all the numbers you found.

#### Using the for loop

- Start by preparing a place to keep your numbers: Imagine you have a basket that can hold numbers. This basket will eventually contain all the numbers from a to b, including both a and b.

- Begin at your starting number (a): Think of a as the first number you want to put in your basket. It's your starting point.

- Check if you've reached the last number (b): Before you put a number in the basket, check if you've gone past b. If a is less than or equal to b, you're still within your range, and you can proceed. This is like checking if there's still room in the basket for your next number.

  -Put the current number in the basket: If the current number is within the range (from step 3), add it to your basket. This is your way of saying, "This number is between a and b, so it belongs in my collection."

  -Move to the next number: After putting the current number in your basket, move to the next number. This is like stepping from one stone to the next across a stream. You're moving from your current number to the next number in line.

  -Repeat the process until you reach b: Keep repeating steps 3 to 5. Each time, you'll check if you're still within your range, put the number in your basket if you are, and then move to the next number. You keep doing this until you've reached b.

  -Once you've reached b, you've now considered all numbers from a to b, and your basket contains all these numbers.

  -Your basket is now full: At this point, your basket (the collection you've been adding numbers to) is complete. It contains all numbers from a to b, inclusive.


### Kata 14
Initially tried ```concat``` but ```concat``` merges two arrays together where ```join``` merges the elements 
of an array into a string
