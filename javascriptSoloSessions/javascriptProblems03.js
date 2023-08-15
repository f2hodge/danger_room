// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll() {}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(targ) {
    const floor1 = 1;
    let possiblePrime = targ;
    let divisor = possiblePrime -1;
    let primeArr = [];
    for(t = targ; t > 0; t--){
        for(i = t -1; i > 1; i--) {
            console.log(`INNER t: ${t} i: ${i}`);
            if(t % i === 0) {
                console.log(`INNER was evenly divisible by ${i}`);
                break;
            } else {
                console.log(`INNER was not evenly divisible by ${i}`);
            }
            if(i === 2) {
                console.log("t ************INNER************* 2");
                console.log(`INNER t: ${t} i: ${i}`);
            }
        }
        console.log(`OUTER end of loop t: ${t} i: ${i}`);
    }
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy() {}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight() {}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters() {}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums() {}

// Call Function
const output = sumAllPrimes(15);

console.log(output);