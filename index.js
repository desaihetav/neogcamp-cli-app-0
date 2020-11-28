var readlineSync = require("readline-sync");

var score = 0;

// input >> processing >> output
var userName = readlineSync.question("What's your name?\n");

console.log(`\nWelcome ${userName} to Do You Know Hetav?`);


// data of high score
var highScores = [
  {
    name: "Hetav",
    score: 10,
  },

  {
    name: "Richard",
    score: 9,
  },

  {
    name: "Jared",
    score: 8,
  },
]

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) { // branching
    console.log("\nYay, you got it right!");
    score = score + 2;

  } else {
    console.log("\nOops, you got it wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------\n")
}

// array of objects
var questions = [
  {
    question: "\nWhere do I live?\n",
    answer: "Surat"
  },
  {
    question: "\nIn which year was I born?\n",
    answer: "2000"
  },
  {
    question: "\nWhich is my favourite song?\n",
    answer: "Perfect"
  },
  {
    question: "\nWhich is my favourite TV series?\n",
    answer: "Silicon Valley"
  },
  {
    question: "\nWhich is my favourite dish?\n",
    answer: "Pizza"
  }
];

// loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Woohooo! You SCORED: ", score);

console.log("--------\nCheck out the top scores and send me a screenshot if you've beaten them!\n")

console.log("Name\t\tScore")
for(var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + "\t\t" + highScores[i].score);
}

console.log("\nThank you for taking the quiz!")