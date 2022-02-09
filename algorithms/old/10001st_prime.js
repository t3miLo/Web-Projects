// have to put length down by 1 of the location
//im looking for, and index is  1 less after that.
// so 10001, would add primes length to 10,000
var prime = [];

for (let j = 2; j <= 1000000; j++){
  prime.push(j);
}

prime = prime.filter((number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(prime[10000]);
