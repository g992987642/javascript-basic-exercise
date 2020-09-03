export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  let result = 0;
  if (string === undefined || string === null) {
    return result;
  }
  if (prediction !== undefined) {
    for (let i = 0; i < string.length; i += 1) {
      if (prediction(string[i])) {
        result += 1;
      }
    }

    return result;
  }
  return string.length;
}
