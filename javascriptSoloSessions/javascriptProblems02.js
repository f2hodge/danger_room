// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    // SOLUTION 1 - Return a single longest word
    // **My attempt
    // let senArr = sen.split(' ');
    // let wordLen = 0;
    // let targetWord = '';

    // for(word in senArr) {
    //     if(senArr[word].length > wordLen) {
    //         wordLen = senArr[word].length;
    //         targetWord = senArr[word];
    //     }
    // };
    // return targetWord;
    // SOLUTION 2 - Return an array and include multiple words if they have the same length
    // **My attempt
    // let senArr = sen.split(' ');
    // let wordLen = 0;
    // let targetWords = [];

    // for(word in senArr) {
    //     if(senArr[word].length > wordLen) {
    //         wordLen = senArr[word].length;
    //         // targetWords.push(senArr[word]);
    //     }
    // };
    // for(word in senArr) {
    //     if(senArr[word].length >= wordLen) {
    //         // wordLen = senArr[word].length;
    //         targetWords.push(senArr[word]);
    //     }
    // };
    // return targetWords;
    // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
    // **My attempt
    let senArr = sen.split(' ');
    let wordLen = 0;
    let targetWords = [];

    for(word in senArr) {
        if(senArr[word].length > wordLen) {
            wordLen = senArr[word].length;
        }
    };
    for(word in senArr) {
        if(senArr[word].length >= wordLen) {
            targetWords.push(senArr[word]);
        }
    };
    return targetWords.length > 1 ? targetWords : targetWords[0];
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
    // **My attempt 1
    // let chunked = [];
    // let chunk = [];
    // for(let i = 0; i < arr.length; i++) {
    //     if(chunk.length < len) {
    //         chunk.push(arr[i]);
    //     } else {
    //         chunked.push(chunk);
    //         chunk = [arr[i]];
    //     }
    // }
    // chunked.push(chunk)
    // return chunked;
    ///////////////////////
    // **My attempt 2
    chunked =[];
    iter = arr.length / len;
    for(i = 0; i < iter; i++) {
        if(arr.length) {
            chunked.push(arr.splice(0, len));
        }
    }
    return chunked;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);

console.log(output);