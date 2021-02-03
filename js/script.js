import * as draw from "./draw.js";

const categories = [
    { id: 9, name: 'General Knowledge' },
    { id: 10, name: 'Books' },
    { id: 11, name: 'Film' },
    { id: 12, name: 'Music' },
    { id: 13, name: 'Musicals & Theatres' },
    { id: 14, name: 'Television' },
    { id: 15, name: 'Video Games' },
    { id: 16, name: 'Board Games' },
    { id: 17, name: 'Science & Nature' },
    { id: 18, name: 'Computers' },
    { id: 19, name: 'Mathematics' },
    { id: 20, name: 'Mythology' },
    { id: 21, name: 'Sports' },
    { id: 22, name: 'Geography' },
    { id: 23, name: 'History' },
    { id: 24, name: 'Politics' },
    { id: 25, name: 'Art' },
    { id: 26, name: 'Celebrities' },
    { id: 27, name: 'Animals' },
    { id: 28, name: 'Vehicles' },
    { id: 29, name: 'Comics' },
    { id: 30, name: 'Gadgets' },
    { id: 31, name: 'Japanese Anime & Manga' },
    { id: 32, name: 'Cartoon & Animations' }];

const difficulties = ["easy", "medium", "hard"];

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
    let form = document.getElementsByTagName('form')[0];
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let categoryID = '';
        categories.forEach(category => {
            if (form.elements[0].value === category.name) categoryID = category.id;
        });

        let triviaDifficulty = form.elements[1].value;
        let apiString = `https://opentdb.com/api.php?amount=10&category=${categoryID}&difficulty=${triviaDifficulty}`;

        queryTriviaDB(apiString).then(trivia => {
            trivia.results.forEach(result => {
                console.log(result);
            });
        });
    });


};

// ----------------------------------------------------------------------------------------- 

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