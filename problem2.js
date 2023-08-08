function matchFinder(string1, string2) {
  if (!string1 || !string2) {
    return "Enter strings";
  }

  let i, j, k;
  let cou = 0;
  let len1 = string1.length;
  let len2 = string2.length;

  for (i = 0; i < len1; i++) {
    if (string2[0] === string1[i]) {
      cou = 1;
      for (j = 1, k = i + 1; j < len2; j++, k++) {
        if (string2[j] === string1[k]) {
          cou++;
        }
      }

      if (cou === len2) {
        return true;
      }
    }
  }

  return false;
}

console.log(matchFinder("John Doe", "ohn"));
console.log(matchFinder("JavaScript", "Code"));
console.log(matchFinder("Hello", ""));
console.log(matchFinder("Hello", "World"));
console.log(matchFinder("", "abc"));
console.log(matchFinder("Peter Parker", "Pet"));
console.log(matchFinder("", ""));
