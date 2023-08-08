function cubeNumber(number) {
  const type1 = typeof number;

  if (type1 !== "number") {
    return "Please enter number as a parameter ";
  }

  const result = Math.pow(number, 3);
  return result;
}

const res = cubeNumber(2);

console.log(res);
