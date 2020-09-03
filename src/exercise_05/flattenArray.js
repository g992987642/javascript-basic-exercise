export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.


  if (array === undefined || array === null) {
    throw Error('Flatten undefined or null array');
  }
  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    if (!Array.isArray(array[i])) {
      result.push(array[i]);
    } else {
      const temp = array[i];
      for (let n = 0; n < temp.length; n += 1) {
        result.push(temp[n]);
      }
    }
  }
  return result;
}
