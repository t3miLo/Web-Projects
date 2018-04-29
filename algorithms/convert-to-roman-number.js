// convert number to roman
let roman = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
  100: "C",
  200: "C",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
  1000: "M",
  2000: "MM",
  3000: "MMM"
};

/** This will take the english number and split and convert
@param {n} num to string
@param {n.split} split to indivual string numbers
to find the key on the roman object**/
function convertToRoman(num) {
  if (num.toString().length === 1) {
    let r = roman[num];
    console.log(r);
  } else if (num.toString().length === 2) {
    let arr = Array.from(num.toString()).map(Number);
    let f = arr[0] + "0";
    let s = arr[1];
    let r = roman[f] + roman[s];
    console.log(r);
  } else if (num.toString().length === 3) {
    let arr = Array.from(num.toString()).map(Number);
    let f = arr[0] + "00";
    let s = arr[1] + "0";
    let t = arr[2];
    if (arr[1] == 0 && arr[2] == 0) {
      let r = roman[f];
      console.log(r);
    } else if (arr[1] == 0) {
      let r = roman[f] + roman[t];
      console.log(r);
    } else if (arr[2] == 0) {
      let r = roman[f] + roman[s];
      console.log(r);
    } else {
      console.log(roman[f] + roman[s] + roman[t]);
    }
  } else if (num.toString().length === 4) {
    let arr = Array.from(num.toString()).map(Number);
    let f = arr[0] + "000";
    let s = arr[1] + "00";
    let t = arr[2] + "0";
    let ff = arr[3];
    if (arr[1] == 0 && arr[2] == 0 && arr[3] == 0) {
      let r = roman[f];
      console.log(r);
    } else if (arr[1] == 0 && arr[2] == 0) {
      let r = roman[f] + roman[ff];
      console.log(r);
    } else if (arr[1] == 0 && arr[3] == 0) {
      let r = roman[f] + roman[t];
      console.log(r);
    } else if (arr[1] == 0) {
      let r = roman[f] + roman[t] + roman[ff];
      console.log(r);
    } else if (arr[2] == 0 && arr[3] == 0) {
      let r = roman[f] + roman[s];
      console.log(r);
    } else if (arr[2] == 0) {
      let r = roman[f] + roman[s] + roman[ff];
      console.log(r);
    } else if (arr[3] == 0) {
      let r = roman[f] + roman[s] + roman[t];
      console.log(r);
    } else {
      console.log(roman[f] + roman[s] + roman[t] + roman[ff]);
    }
  }
}
convertToRoman(1100);
