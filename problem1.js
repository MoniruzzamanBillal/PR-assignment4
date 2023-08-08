function cubeNumber(number) {
  const type1 = typeof number;

  if (type1 === "string") {
    return "Please enter number ";
  }

  const result = Math.pow(number, 3);
  return result;
}

const res = cubeNumber(4);

console.log(res);
