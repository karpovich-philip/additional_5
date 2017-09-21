module.exports = function check(str, bracketsConfig) {
  var string = str.split("");
  var array = [];

  for (var i = 0; i < bracketsConfig.length; i++) {
    for (var j = 0; j < bracketsConfig[i].length; j++) {
      array.push(bracketsConfig[i][j])
    }
  }
}
