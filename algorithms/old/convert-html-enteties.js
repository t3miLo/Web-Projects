// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


function convertHTML(str) {
  let amp = RegExp(/[&]/g);
  let lthan = RegExp(/[<]/g);
  let gthan = RegExp(/[>]/g);
  let dQuote = RegExp(/[""]/g);
  let apost = RegExp(/['']/g);

  if (amp.test(str)) {
    return str.replace("&", "&amp;");
  }else if (lthan.test(str)){
    return str.replace("<", "&lt;");
  }else if (gthan.test(str)){
    return str.replace(">", "&gt;");
  }else if (dQuote.test(str)){
    return str.replace('"', "&quot;");
  }else if (apost.test(str)){
    return str.replace("'", "&apos;");
  }

  return str;

}

convertHTML("Dolce & Gabbana");
