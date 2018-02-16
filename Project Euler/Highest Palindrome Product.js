
var results = [];


for (var i = 999; i >= 100; i--){
  for (var j = 999; j>= 100; j--){
    var product = i * j;
    var convert = product.toString();
    var check = convert.split("").reverse().join("");
    if(convert == check){
      results.push(check);
      break;
    }
  }
  console.log(results);
}
