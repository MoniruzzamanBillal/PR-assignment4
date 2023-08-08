function sortMaker(arr) {
  let ele1 = arr[0];
  let ele2 = arr[1];

  if (ele1 < 0 || ele2 < 0) {
    return "Invalid Input";
  } else if (ele1 === ele2) {
    return "equal";
  } else if (ele1 < ele2) {
    let temp = ele1;
    ele1 = ele2;
    ele2 = temp;
  }

  return [ele1, ele2];
}

console.log(sortMaker([8, 4]));
console.log("");
console.log(sortMaker([2, 4]));
console.log("");

console.log(sortMaker([2, 2]));
console.log("");

console.log(sortMaker([2, -2]));
console.log(sortMaker([2, 0]));
console.log(sortMaker([2, 50]));
