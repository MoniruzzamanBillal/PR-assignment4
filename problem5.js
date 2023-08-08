function canPay(changeArray, totalDue) {
  let length = changeArray.length;
  if (length === 0) {
    return "You don't have any money";
  }

  let sum = 0;
  let i, j;

  for (i = 0; i < length; i++) {
    sum += changeArray[i];
  }

  if (sum >= totalDue) {
    return true;
  } else if (sum < totalDue) {
    return false;
  }
}

console.log(canPay([7, 4, 5], 10));
console.log(canPay([1, 3, 2], 10));
console.log(canPay([], 10));
