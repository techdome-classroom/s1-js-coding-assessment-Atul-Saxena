const decodeTheRing = function (s, p) {

  let regexPattern = "^";

  for (let i = 0; i < p.length; i++) {
    let char = p[i];
    if (char === '*') {
      regexPattern += ".*";
    } else if (char === '?') {
      regexPattern += ".";
    } else {
      regexPattern += char;
    }
  }

  regexPattern += "$";

  let regex = new RegExp(regexPattern);

  return regex.test(s);

};

module.exports = decodeTheRing;