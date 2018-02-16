let m = "$"
const hundredInput = document.querySelector("#hundred");
const totalHundreds = document.querySelector("#totalHundreds");
let tHundreds = 0;


const fiftiesInput = document.querySelector("#fifties");
const totalFifties = document.querySelector("#bill50 > output");
let tFifties = 0;


const dubsInput = document.querySelector("#dubs");
const totalDubs = document.querySelector("#bill20 > output");
let tDubs = 0;

const tensInput = document.querySelector("#tens");
const totalTens = document.querySelector("#bill10 > output");
let tTens = 0;

const fivesInput = document.querySelector("#fives");
const totalFives = document.querySelector("#bill05 > output");
let tFives = 0;

const singlesInput = document.querySelector("#singles");
const totalSingles = document.querySelector("#bill01 > output");
let tSingles = 0;

const quatersInput = document.querySelector("#quaters");
const totalQuaters = document.querySelector("#coin25 > output");
let tQuaters = 0;

const dimesInput = document.querySelector("#dimes");
const totalDimes = document.querySelector("#coin10 > output");
let tDimes = 0;

const nicklesInput = document.querySelector("#nickles");
const totalNickles = document.querySelector("#coin05 > output");
let tNickles = 0;

const penniesInput = document.querySelector("#pennies");
const totalPennies = document.querySelector("#coin01 > output");
let tPennies = 0;

const totalCash = document.querySelector("#total > output");

const resetButton = document.querySelector("#reset")
// const reset = document.querySelector("#counters > input");

let tCash = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function getSum(a, b ){
  return a + b;
};

function resetAll(){
  var elements = document.getElementsByTagName("input");
  var outz = document.getElementsByTagName("output")
  for (var ii=0; ii < elements.length; ii++) {
    for (var i= 0; i < outz.length; i++){
      if (elements[ii].type === "text") {
        elements[ii].value = 0;
        outz[i].value = "$0.00";
        tCash = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        console.log(tCash);
      }
    }
  }
}

function red(bill, output, box){
  if (bill.match(/\D/gi)) {
    let setBox = document.getElementById(box);
    setBox.style.background = "red";
    output.value = "$0.00";
    output.style.color = "red";
    setBox.setCustomValidity("I expect an e-mail, darling!");
    // setTimeout(function(){ alert("Please Enter Only Numbers."); }, 500);

  }else {
    document.getElementById(box).style.background = "blue";
    output.style.color = "black";
  }

}

function cHundred(){
    const hundreds = hundredInput.value;
    const tHundreds = hundreds * 100;
    let format = tHundreds.toLocaleString('en-ENG', { style: 'currency', currency: 'USD' });
    totalHundreds.innerHTML = format;
    tCash.splice(0, 1, tHundreds);
    let toCash = tCash.reduce(getSum);
    let tFormat = toCash.toLocaleString("en-ENG", {style: "currency", currency: "USD"});
    totalCash.value = tFormat;
    red(hundreds, totalHundreds, "bill100");

};

function cFifties(){
    const fifties = fiftiesInput.value;
     tFifties = fifties * 50;
     let format = tFifties.toLocaleString('en-ENG', { style: 'currency', currency: 'USD' });
    totalFifties.value = format;
    tCash.splice(1, 2, tFifties);
    let toCash = tCash.reduce(getSum);
    let tFormat = toCash.toLocaleString("en-ENG", {style: "currency", currency: "USD"});
    totalCash.value = tFormat;
    red(fifties, totalFifties, "bill50");
};

function cDubs(){
    const dubs = dubsInput.value;
    tDubs = dubs * 20;
    let format = tDubs.toLocaleString('en-ENG', { style: 'currency', currency: 'USD' });
    totalDubs.value = format
    tCash.splice(2, 3, tDubs);
    let toCash = tCash.reduce(getSum);
    let tFormat = toCash.toLocaleString("en-ENG", {style: "currency", currency: "USD"});
    totalCash.value = tFormat;
    red(dubs, totalDubs, "bill20");
};

function cTens(){
    const tens = tensInput.value;
     tTens = tens * 10;
     let format = tTens.toLocaleString('en-ENG', { style: 'currency', currency: 'USD' });
    totalTens.value = format;
    tCash.splice(3, 4, tTens);
    let toCash = tCash.reduce(getSum);
    let tFormat = toCash.toLocaleString("en-ENG", {style: "currency", currency: "USD"});
    totalCash.value = tFormat;
    red(tens, totalTens, "bill10");
  };
function cFives(){
    const fives = fivesInput.value;
     tFives = fives * 5;
     let format = tFives.toLocaleString('en-ENG', { style: 'currency', currency: 'USD' });
    totalFives.value = format;
    tCash.splice(4, 5, tFives);
    let toCash = tCash.reduce(getSum);
    let tFormat = toCash.toLocaleString("en-ENG", {style: "currency", currency: "USD"});
    totalCash.value = tFormat;
    red(fives, totalFives, "bill05");
  };

function cSingles(){
    const singles = singlesInput.value;
     tSingles = singles * 1;
     let format = tSingles.toLocaleString('en-ENG', { style: 'currency', currency: 'USD' });
    totalSingles.value = format;
    tCash.splice(5, 6, tSingles);
    let toCash = tCash.reduce(getSum);
    let tFormat = toCash.toLocaleString("en-ENG", {style: "currency", currency: "USD"});
    totalCash.value = tFormat;
    red(singles, totalSingles, "bill01");
  };

function cQuaters(){
    const quaters = quatersInput.value;
     tQuaters = quaters * .25;
     let format = tQuaters.toLocaleString('en-ENG', { style: 'currency', currency: 'USD' });
    totalQuaters.value = format;
    tCash.splice(6, 7, tQuaters);
    let toCash = tCash.reduce(getSum);
    let tFormat = toCash.toLocaleString("en-ENG", {style: "currency", currency: "USD"});
    totalCash.value = tFormat;
    red(quaters, totalQuaters, "coin25");
};

function cDimes(){
    const dimes = dimesInput.value;
     tDimes =  dimes * .10;
     let format = tDimes.toLocaleString('en-ENG', { style: 'currency', currency: 'USD' });
    totalDimes.value = format;
    tCash.splice(7, 8, tDimes);
    let toCash = tCash.reduce(getSum);
    let tFormat = toCash.toLocaleString("en-ENG", {style: "currency", currency: "USD"});
    totalCash.value = tFormat;
    red(dimes, totalDimes, "coin10");

  };
function cNickles(){
    const nickles = nicklesInput.value;
     tNickles =  nickles * .05;
     let format = tNickles.toLocaleString('en-ENG', { style: 'currency', currency: 'USD' });
    totalNickles.value = format;
    tCash.splice(8, 9, tNickles);
    let toCash = tCash.reduce(getSum);
    let tFormat = toCash.toLocaleString("en-ENG", {style: "currency", currency: "USD"});
    totalCash.value = tFormat;
    red(nickles, totalNickles, "coin05");
};

function cPennies(){
    const pennies = penniesInput.value;
    tPennies =  pennies * .01;
    let format = tPennies.toLocaleString('en-ENG', { style: 'currency', currency: 'USD' });
    totalPennies.value = format;
    tCash.splice(9, 10, tPennies);
    let toCash = tCash.reduce(getSum);
    let tFormat = toCash.toLocaleString("en-ENG", {style: "currency", currency: "USD"});
    totalCash.value = tFormat;
    red(pennies, totalPennies, "coin01");

};


function main(){
  hundred.addEventListener("input", cHundred);
  fifties.addEventListener("input", cFifties);
  dubs.addEventListener("input",cDubs);
  tens.addEventListener("input", cTens );
  fives.addEventListener("input", cFives);
  singles.addEventListener("input", cSingles);
  quaters.addEventListener("input", cQuaters);
  dimes.addEventListener("input", cDimes);
  nickles.addEventListener("input", cNickles);
  pennies.addEventListener("input", cPennies);
  resetButton.addEventListener("click", resetAll);

  // document.addEventListener("keyup", getTotal);
};

main();
