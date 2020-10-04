module.exports = function reverse (n) {
  //return n.toString().split("").reverse().join("");
 return parseInt(String(n).split("").reverse().join(""), 10);
}
