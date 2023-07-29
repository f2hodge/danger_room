const twoSum = (numList, targetSum) => {
  let in1 = 0;
  let in2 = 1;
  console.log(`index 1: ${in1}, index 2: ${in2}`);

  if (numList.length < 2) {
    console.log("The array is not long enough.");
    return [false];
  } else if (numList[in1] + numList[in2] === targetSum) {
    console.log("The first two array values work.");
    console.log(`index 1: ${numList[in1]}, index 2: ${numList[in2]}`);
    return [in1, in2];
  } else {
    in2++;
    console.log(`index 1: ${in1}, index 2: ${in2}`);
  }

  console.log("first two conditionals failed");

  let testSum = 0;
  let countA = 1;
  let countB = 1;

  // Loop A
  while (in1 < numList.length) {
    console.log(`Loop A: pass ${countA}`);
    countA = countA + 1;
    console.log(`index 1: ${numList[in1]}, index 2: ${numList[in2]}`);
    console.log(`the testSum is ${testSum}`);
    console.log(`Value 1: ${numList[in1]}, Value 2: ${numList[in2]}`);
    console.log(`index 1: ${numList[in1]}, index 2: ${numList[in2]}`);

    if (testSum !== targetSum) {
      console.log("testSum wasn't the target");
      // Loop B
      while (in2 < numList.length) {
        console.log(`Loop B: pass ${countB}`);
        countB++;

        in2++;
        testSum = numList[in1] + numList[in2];
        if (testSum === targetSum) {
          break;
        }
      }
    }
  }

  console.log(`Ans1 = ${in1} and Ans2 = ${in2}`);
  return [in1, in2];
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 8;

console.log("Numbers = " + numbers);
console.log("Target = " + target);
console.log(twoSum(numbers, target));
