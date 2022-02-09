// Pig Latin takes the first consonant (or consonant cluster) of an English word,
// moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.


function translatePigLatin(str) {
  let vowel = new RegExp(/^[aeiou]/g);
  let two = new RegExp(/^[bcdfghjklmpqrstvwxyz]{2}/);
  if (vowel.test(str)) {
    let way = "way";
    console.log("first = " + str + way);
  } else if (two.test(str)) {
    let ay = "ay";
    let last = str.substr(2);
    let first = str.substr(0, 2);
    let combine = last + first + ay;
    console.log("2nd = " + combine);
  } else {
    let ay = "ay";
    let last = str.substr(1);
    let first = str.substr(0, 1);
    console.log(last + first + ay);
  }
}
translatePigLatin("cable");
