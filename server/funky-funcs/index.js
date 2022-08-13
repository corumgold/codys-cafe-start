const intersection = (arr1, arr2) => {
  return arr1.reduce((acc, current) => {
    if (arr2.includes(current)) acc.push(current);
    return acc;
  }, []);
};

const flattenDeep = (array) => {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    if (Array.isArray(element)) {
      newArr.push(...flattenDeep(element));
    } else {
      newArr.push(element);
    }
  }

  return newArr;
};

function flipArguments(func) {
  const strFunc = func.toString();
  const newArgs = strFunc.slice(1, strFunc.indexOf(")")).split(", ").reverse();
  func.arguments = newArgs;
  return func;
}

const invert = (obj) => {
  const keys = Object.values(obj);
  const values = Object.keys(obj);
  let index = 0;
  return keys.reduce((acc, currKey) => {
    acc[currKey] = values[index];
    index++;
    return acc;
  }, {});
};

const camelCase = (str) => {
  const specChar = " _";
  let prevSpecChar = false;
  return str.split("").reduce((acc, curr) => {
    if (specChar.includes(curr)) {
      prevSpecChar = true;
    } else if (prevSpecChar && acc.length) {
      acc += curr.toUpperCase();
      prevSpecChar = false;
    } else {
      acc += curr.toLowerCase();
      prevSpecChar = false;
    }
    return acc;
  }, "");
};

camelCase("__hello_world_how_are_you");

module.exports = {
  intersection,
  flattenDeep,
  flipArguments,
  invert,
  camelCase,
};
