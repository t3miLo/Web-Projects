
// function sumAll(arr) {
//   let newArr = arr;
//   let high = 0;
//   let low = 0;
//
//   high = Math.max(...newArr);
//   low = Math.min(...newArr);
//
//   let sum = low + high
//   for (let i = low+1; i < high; i++) {
//     sum = sum + i;
//     console.log(sum);
//   };
//
// };
//
// sumAll([1, 4]);

function sumAll(arr) {
  var newArr = arr;
  var high = 0;
  var low = 0;

  low = Math.min.apply(null, newArr);
  high = Math.max.apply(null, newArr);

  function getSum(a, b){
    return a + b;
  }

  var sum = low + high;
  var missing = []
  for (var i = low+1; i < high; i++) {
    missing.push(i);
  }
  console.log(sum + missing.reduce(getSum));
  console.log(missing);
}

sumAll([4, 1]);
