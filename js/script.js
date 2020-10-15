
let root = document.documentElement;


testData = [
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Where is the train station &quot;Llanfair&shy;pwllgwyngyll&shy;gogery&shy;chwyrn&shy;drobwll&shy;llan&shy;tysilio&shy;gogo&shy;goch&quot;?",
        "correct_answer": "Wales",
        "incorrect_answers": [
            "Moldova",
            "Czech Republic",
            "Denmark"
        ]
    },
];


document.body.onload = () => {
    getQuestions(testData);
    console.log(shuffleAnswers(testData[0].incorrect_answers));
}

// -----------------------------------------------------------------------------------------

function getQuestions(triviaObjects) {
    triviaObjects.forEach(trivia => {
        console.log(trivia.question);
    });
}

function getAnswers(triviaObjects) {
    triviaObjects.forEach(trivia => {
        console.log(`Correct Answer: ${trivia.correct_answer}`);
        console.log(`Incorrect Answers: ${trivia.incorrect_answers} `);

    });
}

function shuffleAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
}

function makeQuiz(triviaData) {
    let potentialAnswers = "";
    triviaData.forEach((question, index) => {
        potentialAnswers = question.incorrect_answers.concat(question.correct_answer);
        potentialAnswers = shuffleAnswers(potentialAnswers);
        triviaData[index].potentialAnswers = potentialAnswers;
    });
    // triviaData.potentialAnswers = potentialAnswers;
    drawQuiz(triviaData);
}



function queryTriviaDB(url) {
    fetch(url).then(function (response) {
        response.json().then(function (data) {
            makeQuiz(data.results);
        });
    });
}