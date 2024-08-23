const string = "NEGIE1";
const splitString = string.split("");

let reverseWord = "";
splitString.forEach((value) => {
  if (isNaN(value)) {
    reverseWord = value + reverseWord;
  } else {
    reverseWord = reverseWord + value;
  }
});

console.log(reverseWord);
