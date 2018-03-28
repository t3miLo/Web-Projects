var prime = [];

function getSum(a, b){
  return a + b;
}

for (let j = 2; j <= 2000000; j++){
  prime.push(j);
}

prime = prime.filter((number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(prime.reduce(getSum));
// console.log(prime);
