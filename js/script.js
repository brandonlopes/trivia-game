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

let triviaQuestions = [];
let triviaScore = 0;

document.body.onload = () => {
    let form = document.getElementsByTagName('form')[0];

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let categoryID = '';
        categories.forEach(category => {
            if (form.elements[0].value === category.name) categoryID = category.id;
        });

        let numberOfQuestions = form.elements[2].value
        let triviaDifficulty = form.elements[1].value;
        let apiString = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${categoryID}&difficulty=${triviaDifficulty}`;

        queryTriviaDB(apiString).then(trivia => {
            trivia.results.forEach(result => {
                let answers = getPotentialAnswers(result);
                result.potentialAnswers = shuffleAnswers(answers);
                triviaQuestions.push(result);
            });
            drawQuestion(triviaQuestions[0]);
        });

    });

};

// ----------------------------------------------------------------------------------------- 

function drawQuestion(triviaObject) {
    let main = document.getElementsByTagName('main')[0];
    main.innerHTML = '';

    let question = document.createElement('p');
    question.innerHTML = triviaObject.question;
    main.appendChild(question);

    let answerContainer = document.createElement('div');
    answerContainer.className = 'answerContainer';

    let questionCount = triviaQuestions.indexOf(triviaObject);
    let questionCounter = document.createElement('p');
    questionCounter.classList.add('questionCount')
    questionCounter.innerText = `Question ${questionCount + 1} of ${triviaQuestions.length}`

    let nextQuestionButton = document.createElement('button');
    nextQuestionButton.innerText = 'Next Question';

    triviaObject.potentialAnswers.forEach(answer => {
        let answerButton = document.createElement('input');
        answerButton.setAttribute('type', 'radio');
        answerButton.name = triviaObject.question;
        answerButton.id = answer;

        let label = document.createElement('label');
        label.htmlFor = answerButton.id;
        label.innerHTML = answer;

        let answerDiv = document.createElement('div');
        answerDiv.appendChild(answerButton);
        answerDiv.appendChild(label);

        answerContainer.appendChild(answerDiv);
        main.appendChild(answerContainer);

        answerButton.addEventListener('click', () => {
            main.appendChild(nextQuestionButton);
        })


    })

    // ------------------------------------------------------------------------------------------------------------

    main.appendChild(questionCounter);

    nextQuestionButton.addEventListener('click', () => {
        let attemptedAnswer = document.querySelector(`input[name="${triviaObject.question}"]:checked`);
        if (attemptedAnswer.id === triviaObject.correct_answer) {
            alert('Correct! 👍');
            triviaScore++;
        } else {
            let correctAnswer = document.getElementById(triviaObject.correct_answer).parentElement;
            console.log(correctAnswer);
            correctAnswer.classList.add('correct');
            alert('Incorrect 👎');
        }

        if (questionCount === triviaQuestions.length - 1) {
            alert(`Your score:\n${triviaScore}/${triviaQuestions.length}`);
            main.innerHTML = '';
            window.location.reload();
        } else {
            drawQuestion(triviaQuestions[questionCount + 1]);
        }

    })

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

async function queryTriviaDB(url) {
    const response = await fetch(url);
    const trivia = await response.json();
    return trivia;
}