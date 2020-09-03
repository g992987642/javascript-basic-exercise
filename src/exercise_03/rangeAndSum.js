export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const resultArray = [];
  if (start < end) {
    for (let i = start; i < end; i += 1) {
      resultArray.push(i);
    }
  } else {
    for (let i = start; i > end; i -= 1) {
      resultArray.push(i);
    }
  }
  return resultArray;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let result = 0;
  if (numbers === undefined || numbers === null) {
    return result;
  }
  function getResult(value) {
    result += value;
  }
  numbers.forEach(getResult);
  return result;
}
