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

const invert = (obj) => {};

const camelCase = (str) => {};

module.exports = {
  intersection,
  flattenDeep,
  flipArguments,
  invert,
  camelCase,
};
