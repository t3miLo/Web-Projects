function myReplace(str, before, after) {
  let reg = new RegExp(/^[A-Z]/g); // check to see if "before" is capitalized
  if (reg.test(before)){ //if "before" is capitalized make "after" word capitalized awell
    let aCap = after.replace(/\b\w/g, l => l.toUpperCase());
    console.log(str.replace(before, aCap));
  }else {
      console.log(str.replace(before, after));
  }
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
