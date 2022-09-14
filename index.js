// Requiring the module
const reader = require("xlsx");
const fs = require("fs");

// Reading our test file
const file = reader.readFile("./Copy of Questions .xlsx");

let data = [];

const sheets = file.SheetNames;

for (let i = 0; i < sheets.length; i++) {
  const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
  temp.forEach((res) => {
    data.push({
      question: res["Question "],
      firstAnswer: res["Answer 1"],
      secondAnswer: res["Answer 2"],
      thirdAnswer: res["Answer 3"],
      correctAnswer:
        res["Correct Answer"] == 1
          ? "A"
          : res["Correct Answer"] == 2
          ? "B"
          : res["Correct Answer"] == 3
          ? "C"
          : "",
    });
  });
}

data = JSON.stringify(data);
fs.writeFileSync("./questions.json", data);
// Printing data
// console.log(data);
