const decodeTheRing = function (s, p) {

  let regexPattern = "^"; // The pattern must match the entire message

  // Loop through the decoder key to translate it into a regular expression
  for (let i = 0; i < p.length; i++) {
    let char = p[i];
    if (char === '*') {
      regexPattern += ".*"; // * can match any sequence of characters, including none
    } else if (char === '?') {
      regexPattern += "."; // ? matches exactly one character
    } else {
      regexPattern += char; // Regular characters should match themselves
    }
  }

  regexPattern += "$"; // The pattern must match the entire message

  // Create a regular expression object with the generated pattern
  let regex = new RegExp(regexPattern);

  return regex.test(s);

};

module.exports = decodeTheRing;