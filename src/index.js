module.exports = function check(str, config) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < config.length; j++) {
      if (str[i] === config[j][0]) {
        if (config[j][0] === config[j][1]) {
          if (stack[stack.length - 1] !== str[i]) {
            stack.push(str[i]);
            break;
          } else {
            if (stack[stack.length - 1] === config[j][0]) {
              stack.pop();
              break;
            } else
              return false;
          }
        }
        stack.push(str[i]);
        break;
      } else if (str[i] === config[j][1]) {
        if (stack[stack.length - 1] === config[j][0]) {
          stack.pop();
        } else return false;
      }
    }
  }
  return !stack.length
}