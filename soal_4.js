const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

let result1 = 0;
let result2 = 0;
matrix.forEach((value, key) => {
  result1 += value[key];
  result2 += value[matrix.length - 1 - key];
});

console.log(result1 - result2);
