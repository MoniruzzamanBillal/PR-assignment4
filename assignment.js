function cubeNumber(number) {
  const type1 = typeof number;
  if (type1 !== "number") {
    return "Please enter a number!! ";
  }
  const result = Math.pow(number, 3);
  return result;
}

function matchFinder(string1, string2) {
  if (!string1 || !string2) {
    return "Enter strings";
  }

  let i, j, k;
  let cou = 0;
  let len1 = string1.length;
  let len2 = string2.length;

  for (i = 0; i < len1; i++) {
    if (string2[0] === string1[i]) {
      cou = 1;
      for (j = 1, k = i + 1; j < len2; j++, k++) {
        if (string2[j] === string1[k]) {
          cou++;
        }
      }

      if (cou === len2) {
        return true;
      }
    }
  }

  return false;
}

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

function findAddress(obj) {
  let street, house, society;

  street = obj.street;
  house = obj.house;
  society = obj.society;

  if (street === undefined) {
    street = "__";
  }

  if (house === undefined) {
    house = "__";
  }

  if (society === undefined) {
    society = "__";
  }

  const result = `${street},${house},${society}`;
  return result;
}

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
