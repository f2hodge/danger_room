// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // **First Solution might not be allowed to use .reverse
  // return str.split('').reverse().join('');
  /////////////////////////////////
  // **Second Solution using a decrimenting loop
  // let revStr = '';
  // for(let i = str.length - 1; i >= 0; i--) {
  //   revStr = revStr + str[i];
  // }
  // return revStr;
  ////////////////////////////////
  // **Third Solution using an incrementing loop
  // let revString = '';
  // for(let i = 0; i < str.length; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;
  ////////////////////////////////
  // **Fourth Solution using a for-of loop (ES6)
  // let reversalStr = '';
  // for(let char of str) {
  //   reversalStr = char + reversalStr;
  // }
  // return reversalStr;
  ///////////////////////////////
  // **Fifth Solution using high-order Array method forEach
  // let revStr = '';
  // str.split('').forEach(function(char) {
  //   revStr = char + revStr;
  // });
  // return revStr;
  /////////////////////////////
  // **Variant of Fifth Solution using arrow functions to simplify
  // let revStr = '';
  // str.split('').forEach((char) => revStr = char + revStr);
  // return revStr;
  ////////////////////////////
  // **Sixth Solution using .reduce high-order function
  // return str.split('').reduce(function(revStr, char) {
  //   return char + revStr;
  // }, '');
  ////////////////////////////
  // **Variant of Sixth Solution using .reduce high-order function most impressive with ES6
  return str.split('').reduce((revStr, char) => char + revStr, '');
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  // **Trying my own Solution before the walkthrough
  // let reversalStr = str.split('').reduce((revStr, char) => char + revStr, '');
  // if(reversalStr === str) {
  //   return true;
  // }
  // return false;
  /////////////////////////////////////
  // **First new solution
  const revStr = str.split('').reverse().join('');
  return revStr === str;
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  // **My attempt before code walkthrough (correct display but didn't return an int)
  // return int.toString().split('').reduce((reversal, char) => char + reversal, '');
  ///////////////////////////////
  // **REVISED My attempt
  // return parseInt(int.toString().split('').reduce((reversal, char) => char + reversal, ''));
  // **First Solution
  // const revString = int.toString().split('').reverse().join('');
  // return parseInt(revString);
  // **REVISED First Solution
  const revString = int.toString().split('').reverse().join('');
  return parseInt(revString) * Math.sign(int);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  // **First Solution will lowercase anything outside the first letter
  // let strArr = str.toLowerCase().split(' ');
  // for(let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }
  // return strArr.join(' ');
  ////////////////////////////////////////
  // **Second Solution using Map
  // return str.toLowerCase().split(' ').map((word) => {
  //   return word[0].toUpperCase() + word.substring(1);
  // }).join(' ');
  ////////////////////////////////////////
  // **Third Solution using regular expression
  return str.replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase();
  })
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  // **My attempt
  // let charMap = {};
  // let highNum = 0;
  // let highChar = '';

  // for(let char of str) {
  //   if(charMap[char] > 0) {
  //     charMap[char]++;
  //   } else {
  //     charMap[char] = 1;
  //   }

  //   if(charMap[char] > highNum) {
  //     highNum = charMap[char];
  //     highChar = char;
  //   }
  // }
  // return highChar;
  /////////////////////////////
  // **First Solution
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';
  str.split('').forEach(function(char) {
    if(charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }

    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  });

  return maxChar;
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz(numb) {
  // **My attempt
  let outArr = [];
  for(i = 1; i <= numb; i++) {
    if((i % 3 === 0) && (i % 5 === 0)) {
      outArr[i - 1] = "FizzBuzz";
    } else if(i % 3 === 0) {
      outArr[i - 1] = "Fizz";
    } else if(i % 5 === 0) {
      outArr[i - 1] = "Buzz";
    } else {
      outArr[i - 1] = i;
    }
  }
  return outArr;
}



// Call Function
const output = fizzBuzz(100);

// console.log(output);
// FizzBuzz display
for(thing of output) {
  console.log(thing);
}