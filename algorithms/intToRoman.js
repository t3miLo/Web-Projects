var intToRoman = function(s) {
  const romanNum = [
    {
      key: 1000,
      value:"M"
    },
    {
      key: 900,
      value:"CM",
    },
    {
      key:500,
      value:"D",
    },
    {
      key:400,
      value:"CD",
    },
    {
      key: 100,
      value:"C",
    },
    {
      key:90,
      value:"XC",
    },
    {
      key: 50,
      value:"L",
    },
    {
      key:40,
      value:"XL",
    },
    {
      key:10,
      value:"X",
    },
    {
      key:9,
      value:"IX",
    },
    {
      key:5,
      value:"V",
    },
    {
      key:4,
      value:"IV",
    },
    {
      key: 1,
      value:"I",
    }
  ]

  let roman = ''

  for (let i = 0; i < romanNum.length; i += 1) {
    while(s >= romanNum[i].key) {
      s -= romanNum[i].key
      roman = `${roman}${romanNum[i].value}`
    }

  }
  return roman
};

console.log(intToRoman(3))
console.log(intToRoman(58))
console.log(intToRoman(1994))
