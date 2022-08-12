const intersection = (arr1, arr2) => {
  return arr1.reduce((acc, current)=>{
    if(arr2.includes(current)) acc.push(current);
    return acc;
  }, [])
}

const flattenDeep = (arr) => {

}

const flipArguments = (func) => {

}

const invert = (obj) => {

}

const camelCase = (str) => {

}

module.exports = {
  intersection,
  flattenDeep,
  flipArguments,
  invert,
  camelCase
}
