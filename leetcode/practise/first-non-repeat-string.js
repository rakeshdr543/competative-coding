/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(str) {
    for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return i;
    }
  }
  return -1;
};