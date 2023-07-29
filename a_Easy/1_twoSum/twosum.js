const twoSum = (numList, targetSum) => {
  let inA = 0; // FUNCTIONAL ****************
  let inB = 1; // FUNCTIONAL ****************
  let testSum = numList[inA] + numList[inB]; // FUNCTIONAL ****************
  console.log(`index A: ${inA}, index B: ${inB}`);
  console.log(`value A: ${numList[inA]}, value B: ${numList[inB]}`);
  console.log(`testSum: ${testSum}`);
  console.log(' ... ');

  if (numList.length < 2) { // FUNCTIONAL ****************
    console.log("The array is not long enough.");
    return [false]; // FUNCTIONAL ****************
  } else if (testSum === targetSum) { // FUNCTIONAL ****************
    console.log("The first two array values work.");
    console.log(`index A: ${inA}, index B: ${inB}`);
    console.log(`value A: ${numList[inA]}, value B: ${numList[inB]}`);
    console.log(`testSum: ${testSum}`);
    console.log(' ... ');
    return [inA, inB]; // FUNCTIONAL ****************
  } else { // FUNCTIONAL ****************
    console.log("increment inB");
    inB++; // FUNCTIONAL ****************
    console.log(`index A: ${inA}, index B: ${inB}`);
    console.log(`value A: ${numList[inA]}, value B: ${numList[inB]}`);
    console.log(`testSum: ${testSum}`);
    console.log(' ... ');
  }

  console.log("Pre-LOOP two conditionals failed");
  console.log(' ... ');

  console.log("create counters A and B for loop passes");
  let countA = 1;
  console.log(`countA: ${countA}`);
  let countB = 1;
  console.log(`countB: ${countB}`);
  console.log(' ... ');

  console.log("begin Loop A(outside A)");
  console.log(' ... ');
  // Loop A
  while (inA < numList.length) {
    // Loop Tracking Block for While Loop A
    console.log("START: Loop A Tracking Block(inside A)");
    console.log(`Loop A: pass ${countA}`);
    console.log("increment countA");
    countA++;
    console.log(`countA: ${countA}`);
    console.log(' ... ');

    // Loop A advance the testSum before checking equivalence
    console.log("BEFORE A Loop IF");
    console.log("Advance testSum in A Loop"); // Advance testSumn A Loop
    testSum = numList[inA] + numList[inB]; // FUNCTIONAL ****************
    console.log(`index 1: ${numList[inA]}, index 2: ${numList[inB]}`);
    console.log(`the testSum is ${testSum}, target is ${targetSum}`);
    console.log(' ... ');

    if (testSum !== targetSum) { // FUNCTIONAL ****************
      console.log("IN A Loop IF");
      console.log("begin Loop B(outside B)");
      console.log(' ... ');
      // Loop B
      while (inB < numList.length) { // FUNCTIONAL ****************
        // Loop Tracking Block for While Loop B
        console.log("START: Loop B Tracking Block(inside B)");
        console.log(`Loop B: pass ${countB}`);
        console.log("increment countB");
        countB++;
        console.log(`Advance countB: ${countB}`);
        console.log(' ... ');

        console.log("increment B INDEX");
        inB++; // FUNCTIONAL ****************
        console.log("BEFORE B Loop IF ELSE");
        console.log("Advance testSum in B Loop") // Advance testSum B Loop
        testSum = numList[inA] + numList[inB]; // FUNCTIONAL ****************
        if (testSum === targetSum) { // FUNCTIONAL ****************
          console.log("IN B Loop IF");
          console.log(`SUCCESS: testSum ${testSum} IS targetSum ${targetSum}`);
          console.log(`Ans1 = ${inA} and Ans2 = ${in2}`);
          console.log(' ... ');
          return [inA, inB]; // FUNCTIONAL ****************
        } else {
          console.log("IN B Loop ELSE");
          console.log(`FAILURE: testSum ${testSum} NOT targetSum ${targetSum}`);
          console.log(' ... ');
        }
        console.log("AFTER B Loop IF ELSE");
        console.log(`Loop B: pass ${countB}`);
        console.log("END: Loop B Tracking Block(inside B)");
        console.log("CIRCLE: go to start of B Loop");
        console.log(' ... ');
      }
    } else {
      console.log("IN A Loop IF");
      console.log(`SUCCESS: testSum ${testSum} equals targetSum ${targetSum}`);
      console.log(`Ans1 = ${inA} and Ans2 = ${in2}`);
      console.log(' ... ');
      return [inA, inB]; // FUNCTIONAL ****************
    }
    console.log("AFTER B Loop CONTINUE A Loop");
    console.log(`index 1: ${numList[inA]}, index 2: ${numList[inB]}`);
    console.log(`the testSum is ${testSum}, target is ${targetSum}`);
    console.log(' ... ');
    console.log("increment A INDEX");
    inA++; // FUNCTIONAL ****************
    console.log("reset B INDEX to one ahead of A");
    inB = inA + 1; // FUNCTIONAL ****************
    console.log(`index 1: ${numList[inA]}, index 2: ${numList[inB]}`);
    console.log(`the testSum is ${testSum}, target is ${targetSum}`);
    console.log("END: Loop A Tracking Block(inside A)");
    console.log("CIRCLE: go to start of A Loop");
    console.log(' ... ');
  }

  testSum = numList[inA] + numList[inB]; // FUNCTIONAL ****************
  console.log("No Answer Found!!")
  console.log(`Final A = ${inA} and Final B = ${inB}`);
  console.log(`the testSum is ${testSum}, target is ${targetSum}`);
  console.log(' ... ');
  return [inA, inB]; // FUNCTIONAL ****************
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;

console.log("Numbers = " + numbers);
console.log("Target = " + target);
console.log(twoSum(numbers, target));
