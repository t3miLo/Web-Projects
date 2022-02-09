/* will search array to see if theres is a
 * not a matching number.
 * @param {arr1} arr1  array
 * @param {arr2} arr2  array
 *  */
function diffArray(arr1, arr2) {
  let newArr = [];
  // Looping through an array to find elements that don't exist in another array
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      // Pushing the elements unique to first to newArr
      newArr.push(first[i]);
    }
  }
}
onlyInFirst(arr1, arr2);
onlyInFirst(arr2, arr1);

console.log(newArr);

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
