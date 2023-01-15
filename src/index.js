module.exports = function reverse (n) {
      let stringNumber = `${n}`
    if (n <= 0) {
        return stringNumber.split("").reverse().join("").slice(0,-1);
    }
    else return stringNumber.split("").reverse().join("");
}
