var list = [];
var squareSum = 0
var sumSquare = 0

function rangeOfNumbers(low, high){
  for(let i = low; i <= high; i++){
    list.push(i);
  }
  for (let i = 0; i < list.length; i++){
  squareSum = squareSum + Math.pow(list[i], 2);
  sumSquare = sumSquare + list[i];
}
console.log(Math.pow(sumSquare, 2) - squareSum);
}


rangeOfNumbers(1, 100);
