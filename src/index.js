module.exports = function check(str, config) {
  let string = str.split("");
  let stack = [];

  let lala = true;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < config.length; j++) {
      if (string[i] === config[j][0]) {
        if (config[j][0] === config[j][1]) {
          if (stack[stack.length - 1] !== string[i]) {
            stack.push(string[i]);
            break;
          } else {
            if (stack[stack.length - 1] === config[j][0]) {
              stack.pop(string[i]);
              break
            } else return false;
          }
        }
        stack.push(string[i]);
        break;
      } else if (string[i] === config[j][1]) {
        if (stack.length === 0) {
          return false;
        }
        if (stack[stack.length - 1] === config[j][0]) {
          stack.pop(string[i]);
        } else return false;
        break;
      }
    }
  }

  if (stack.length !== 0) {
    return false
  }
  return true
}