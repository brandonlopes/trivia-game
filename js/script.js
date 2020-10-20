
// let root = document.documentElement;

testData = [
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the defining characteristic of someone who is described as hirsute?",
        "correct_answer": "Hairy",
        "incorrect_answers": [
            "Rude",
            "Funny",
            "Tall"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which language is NOT Indo-European?",
        "correct_answer": "Hungarian",
        "incorrect_answers": [
            "Russian",
            "Greek",
            "Latvian"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the unit of currency in Laos?",
        "correct_answer": "Kip",
        "incorrect_answers": [
            "Ruble",
            "Konra",
            "Dollar"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "boolean",
        "difficulty": "easy",
        "question": "A scientific study on peanuts in bars found traces of over 100 unique specimens of urine.",
        "correct_answer": "False",
        "incorrect_answers": [
            "True"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which of these is the name of a Japanese system of alternative medicine, literally meaning &quot;finger pressure&quot;?",
        "correct_answer": "Shiatsu",
        "incorrect_answers": [
            "Ukiyo",
            "Majime",
            "Ikigai"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "boolean",
        "difficulty": "easy",
        "question": "On average, at least 1 person is killed by a drunk driver in the United States every hour.",
        "correct_answer": "True",
        "incorrect_answers": [
            "False"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What year was the RoboSapien toy robot released?",
        "correct_answer": "2004",
        "incorrect_answers": [
            "2000",
            "2001",
            "2006"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In a 1994 CBS interview, Microsoft co-founder Bill Gates performed what unusual trick on camera?",
        "correct_answer": "Jumping over an office chair",
        "incorrect_answers": [
            "Jumping backwards over a desk",
            "Standing on his head",
            "Typing on a keyboard during a handstand"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Terry Gilliam was an animator that worked with which British comedy group?",
        "correct_answer": "Monty Python",
        "incorrect_answers": [
            "The Goodies&lrm;",
            "The League of Gentlemen&lrm;",
            "The Penny Dreadfuls"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What is the most commonly used noun in the English language?",
        "correct_answer": "Time",
        "incorrect_answers": [
            "Home",
            "Water",
            "Man"
        ]
    }
];

testQuestion = [
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
    testData.forEach(question => {
        let potentialAnswers = shuffleAnswers(getPotentialAnswers(question));
        // console.log(question.question);
        // console.log(potentialAnswers);
    });
    let trivia = queryTriviaDB("https://opentdb.com/api.php?amount=10&category=9");
    console.log({trivia});
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
    return response.json();
    // fetch(url).then(function (response) {
    //     response.json().then(function (data) {
    //         console.log(data.results);
    //     });
    // });
}