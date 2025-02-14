let start = document.getElementById("start")
let result = document.getElementById("result")
let main = document.getElementById("main")

let allQuestions = [
    {
        questions: "2+2",
        correct: 4,
        answers: [4, 22, 44, 5]
    },
    {
        questions: "2+2*2",
        correct: 6,
        answers: [6, 22, 44, 55]
    }
];
let current = 0;
let correct = 0;
start.addEventListener("click", startProgram);
function startProgram(){
    start.classList.add('close');
    result.classList.add('close');
    main.classList.remove('close');
    generateQuestions();
}
console.log(allQuestions[current].answers)

function generateQuestions(){
    let question = allQuestions[current].questions;
    main.innerHTML = `<h1>${question}</h1>`

    let answers = allQuestions[current].answers;
    let btn_block = "";

    for (let i of answers) {
        btn_block += `<button onclick="checkQuestion('${i}')">${i}</button>`
    }

    main.innerHTML += `<nav>${btn_block}</nav>`
}

function checkQuestion(answer) {
    let cor = allQuestions[current].correct;
    if (answer == cor){
        correct += 1
    }
    current += 1
    if (allQuestions.length > current){
        generateQuestions()
    } else {
        stopQuiz()
    }
} 

function stopQuiz() {
    start.classList.remove("close");
    result.classList.remove("close");
    main.classList.add("close");
    result.innerHTML = `Решено! ${correct}/${allQuestions.length}`;
    current = 0
    correct = 0
}











