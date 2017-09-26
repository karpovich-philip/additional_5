module.exports = function check(str, bracketsConfig) {
  let string = str.split("");
  let array = [];

  let i = 0;
  let strlen = str.length

  while (strlen > 0) {
    let arrStack = [];
    let arrStackRev = [];
    for (i; i < str.length; i++) {
      if (string[i] === '(' || string[i] === '{' || string[i] === '[' || string[i] === '|') {
        arrStack.push(string[i]);
        strlen--;
      } else break
    }

    if (arrStack.length === 0) {return false}

    arrStackRev = arrStack.map(function (x) {
      if (x === '(') {return ')'}
      else if (x === '{') {return '}'}
      else if (x === '[') {return ']'}
      else if (x === '|') {return '|'}
    });

    arrStackRev = arrStackRev.reverse();

    for (let j = 0; j < arrStackRev.length; i++,j++) {
      if (string[i] === arrStackRev[j]) {
        strlen--;
      }
      else return false;
    }
  }
  return true;
}
