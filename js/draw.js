let categoryID = "";
let triviaDifficulty = "";
let amountOfQuestions = "";


export function drawTriviaForm() {
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
    let content = document.getElementById("content");
    let select = document.createElement("select");

    categories.forEach(category => {
        let option = document.createElement("option");

        option.addEventListener("click", () => {
            console.log( categories.indexOf(option.textContent) + 9);
        });

        option.textContent = category;
        select.appendChild(option);
        content.appendChild(select);
    });
}

export function drawDifficultyScreen() {
    const difficulties = ["easy", "medium", "hard"];
    let content = document.getElementById("content");

    difficulties.forEach(difficulty => {
        let button = document.createElement("button");
        button.textContent = difficulty;

        content.appendChild(button);
    });
}

export function drawQuestionAmountScreen(){
    let input = document.createElement("input");
    input.type = "number";
    let content = document.getElementById("content");
    content.appendChild(input)

}

export function drawQuiz(triviaData) {
    let apiString = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${categoryID}&difficulty=${triviaDifficulty}`;
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

