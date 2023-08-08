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

  const result = `${street} , ${house} , ${society}`;
  return result;
}

// Test cases
const address1 = {
  street: 10,
  house: "15A",
  society: "Earth Perfect",
};

const address2 = { street: 10 };

console.log(findAddress(address1));
console.log(
  findAddress({
    street: 10,
    house: "15A",
    society: "Earth Perfect",
  })
);
