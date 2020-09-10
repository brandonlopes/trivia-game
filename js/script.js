let root = document.documentElement;
let numberOfQuestions = 10;
let categoryID = "";
let triviaDifficulty = "";

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
    drawCategories();
}


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

function shuffleAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
}

function queryTriviaDB(url) {
    fetch(url).then(function (response) {
        response.json().then(function (data) {
            makeQuiz(data.results);
        });
    });
}

// -----

function drawCategories() {
    const categories = [
        "General Knowledge",
        "Books",
        "Film",
        "Music",
        "Musicals & Theatres",
        "Television",
        "Video Games",
        "Board Games",
        "Science & Nature",
        "Computers",
        "Mathematics",
        "Mythology",
        "Sports",
        "Geography",
        "History",
        "Politics",
        "Art",
        "Celebrities",
        "Animals",
        "Vehicles",
        "Comics",
        "Gadgets",
        "Japanese Anime & Manga",
        "Cartoon & Animations"
    ]
    let categoryDiv = document.getElementById("categories");

    categories.forEach(category => {
        let button = document.createElement("button");

        button.addEventListener("click", () => {
            categoryID = categories.indexOf(button.textContent) + 9;
            categoryDiv.innerText = "";
            drawDifficultyScreen();
        });

        button.textContent = category;
        categoryDiv.appendChild(button);
    });
}

function drawDifficultyScreen() {
    const difficulties = ["easy", "medium", "hard"];
    let categories = document.getElementById("categories");

    difficulties.forEach(difficulty => {
        let button = document.createElement("button");
        button.textContent = difficulty;

        button.addEventListener("click", () => {
            triviaDifficulty = difficulties.find(element => difficulty === button.textContent);
            categories.remove();
            makeQuiz(testData);
        });

        categories.appendChild(button);
    });
}

function drawQuiz(triviaData) {
    let apiString = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${categoryID}&difficulty=${triviaDifficulty}`;
    // queryTriviaDB(apiString);
    let question = document.createElement("p");
    console.log(triviaData[0].question);
    
    question.innerHTML = triviaData[0].question;
    let content = document.getElementById("content")
    content.appendChild(question);
    
    triviaData[0].potentialAnswers.forEach(answer => {
        console.log(answer);
        
        let answers = document.createElement("input");
        let label = document.createElement("label");
        answers.type = "radio"
        answers.name = "answers"
        answers.id = answer;
        label.htmlFor = answer;
        label.appendChild(document.createTextNode(answer));

        let answerDiv = document.createElement("div");
        answerDiv.appendChild(answers);
        answerDiv.appendChild(label);
        content.appendChild(answerDiv);
    });
    
    
}
