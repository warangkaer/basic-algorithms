const sentence = "Saya sangat senang mengerjakan soal algoritma";

splitSentence = sentence.split(" ");

let tempWord = "";
let tempBiggestNumber = 0;
splitSentence.forEach((word) => {
  if (tempBiggestNumber < word.split("").length) {
    tempBiggestNumber = word.split("").length;
    tempWord = word;
  }
});

console.log(`${tempWord} : ${tempBiggestNumber}`);
