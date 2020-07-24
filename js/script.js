let root = document.documentElement;

document.body.onload = () => {
    drawCategories();

    let numberOfQuestions = 10;
    let categoryIndex = 10;
    let difficulty = "easy";
    let quizType = "multiple" // multiple or boolean
    let apiString = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${categoryIndex}&difficulty=${difficulty}&type=${quizType}`

    queryTriviaDB(apiString);
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

function makeQuiz(triviaObjects) {

}

function queryTriviaDB(url) {
    fetch(url).then(function (response) {
        response.json().then(function (data) {
            getAnswers(data.results);
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
        let item = document.createElement("button");
        item.addEventListener("click", () => {
            console.log(categories.indexOf(item.textContent));
            clearElement(categoryDiv.id);
            drawDifficultyScreen();
        });
        item.textContent = category;
        categoryDiv.appendChild(item);
    });
}

function drawDifficultyScreen(){
    const difficulties = ["easy", "medium", "hard"];
    difficulties.forEach(difficulty => {
        let button = document.createElement("button");
        button.addEventListener("click", () => {

        })
    });
}

function clearElement(element) {
    document.getElementById(element).innerText = "";
}
