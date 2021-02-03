// export function drawTriviaForm(data) {
//     let content = document.getElementById("content");
//     let select = document.createElement("select");

//     data.forEach(element => {
//         let option = document.createElement("option");
//         option.textContent = element.name || element;
//         select.appendChild(option);
//         content.appendChild(select);
//     });
// }

export function drawQuiz(triviaData) {
    let question = document.createElement("p");
    console.log(triviaData.question);

    question.innerHTML = triviaData.question;
    let content = document.getElementById("content")
    content.appendChild(question);

    triviaData.potentialAnswers.forEach(answer => {
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

