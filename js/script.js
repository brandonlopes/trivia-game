import * as draw from "./draw.js";
import { categories } from "./trivia_data.js";

let testQuestion = [
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
        ],
    },
];

document.body.onload = () => {
    console.log(categories);
    draw.drawDifficultyScreen();
    queryTriviaDB("https://opentdb.com/api.php?amount=10&category=9").then(trivia => {
        trivia.results.forEach(result => {
            console.log(result.question);
        });
    });
};

// ----------------------------------------------------------------------------------------- 

function getTriviaUrl() {

}

function getPotentialAnswers(question) {
    let potentialAnswers = [];
    potentialAnswers = potentialAnswers.concat(question.incorrect_answers, question.correct_answer);
    return potentialAnswers;
};

function shuffleAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
}

function makeQuiz(triviaData) {
    triviaData.forEach((question, index) => {

    });
    drawQuiz(triviaData);
}

async function queryTriviaDB(url) {
    const response = await fetch(url);
    const trivia = await response.json();
    return trivia;
}