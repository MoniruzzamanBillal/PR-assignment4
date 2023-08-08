function cubeNumber(number) {
  const type1 = typeof number;
  if (type1 !== "number") {
    return "Please enter a number!! ";
  }
  const result = Math.pow(number, 3);
  return result;
}

console.log(cubeNumber(2));
console.log(cubeNumber(3));
console.log(cubeNumber(4));
console.log(cubeNumber(0));
