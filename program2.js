const decodeTheRing = function (s, p) {

  let regexPattern = "^";

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

  regexPattern += "$";

  let regex = new RegExp(regexPattern);

  return regex.test(s);

};

module.exports = decodeTheRing;