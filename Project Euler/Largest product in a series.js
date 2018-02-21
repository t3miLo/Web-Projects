let series = "7731671765313306249192251196744265747423553491949349698352031277450632623957831801698480186947885184385861560789112949495459501737958331952853208805511125406987471585238630507156932909632952274430435576689664895044524452316173185640309871112172238311362229893423380308135336276614282806444486645238749303589072962904915604407723907138105158593079608667017242712188399879790879227492190169972088809377665727333001053367881220235421809751254540594752243525849077116705560136048395864467063244157221553975369781797784617406495514929086256932197846862248283972241375657056057490261407972968652414535100474821663704844031998900088952434506585412275886668811642717147992444292823086346567481391912316282458617866458359124566529476545682848912883142607690042242190226710556263211111093705442175069416589604080719840385096245544436298123098787992724428490918884580156166097919133875499200524063689912560717606058861164671094050775410022569831552000559357297257163626956188267042825248360082325753042075296350"

function getFactor(a, b){
  return a * b;
};

var seriesSplit = [];
let highestSum = 0

for (let i = 0; i < series.length; i++){
  let split = series.slice(i);
  seriesSplit = (split.match(/\d{1,13}/g));
  for (let ii = 0; ii < seriesSplit.length; ii++){
    let splitter = seriesSplit[ii].split("");
    let sum = splitter.reduce(getFactor);
    if (sum > highestSum){
      highestSum = sum;
      console.log(splitter);
      console.log(highestSum);
    }else{
    }
  }
};
