function countElementArray(arrSearch, arrHastack) {
  const newObj = {};
  arrHastack.forEach((val) => {
    newObj[val] = newObj[val] === undefined ? 1 : 2;
  });

  const newArr = [];
  arrSearch.forEach((value) => {
    newArr.push(newObj[value] ?? 0);
  });

  return newArr;
}

let input = ["xc", "dz", "bbb", "dz"];
let query = ["bbb", "ac", "dz"];

console.log(countElementArray(query, input));
