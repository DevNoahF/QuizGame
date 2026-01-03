const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// Quiz questions
const quizData = [
    {
        question: "Qual é o maior planeta do nosso sistema solar?",
        answers: [ 
            { text: "Terra", correct: false },
            { text: "Júpiter", correct: true },
            { text: "Saturno", correct: false },
            { text: "Marte", correct: false },
        ],
    },
    {
        question: "Qual o elemento químico representado pelo símbolo *Au* na tabela periódica?", 
        answers: [
            { text: "Prata", correct: false },
            { text: "Ouro", correct: true },
            { text: "Alumínio", correct: false },
            { text: "Cobre", correct: false },
        ],
    },
    {
        question: "O que acontece quando ocorre um *Stack Overflow* em um programa?",
        answers: [
            { text: "O programa termina o processamento antes do esperado por falta de dados", correct: false },
            { text: "A memória reservada para a pilha de chamadas de funções é excedida, geralmente por uma recursão infinita", correct: true },
            { text: "O programa consome toda a memória RAM disponível no sistema", correct: false },
            { text: "O processador entra em um estado de sobrecarga, causando lentidão no sistema", correct: false },
        ],
    },
    {
        question: "Qual comando é utilizado para criar uma nova ramificação (branch) e mudar para ela simultaneamente?",
        answers: [
            { text: "git branch <nome-da-branch>", correct: false },
            { text: "git checkout <nome-da-branch>", correct: false },
            { text: "git switch -c <nome-da-branch>", correct: true },
            { text: "git merge <nome-da-branch>", correct: false },
        ],
    },
    {
        question: "Qual cláusula SQL é usada para filtrar os resultados de uma consulta baseada em uma condição específica?", 
        answers: [
            { text: "WHERE", correct: true },
            { text: "HAVING", correct: false },
            { text: "GROUP BY", correct: false },
            { text: "ORDER BY", correct: false },
        ],
    },
];

// quiz state variables
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizData.length;
maxScoreSpan.textContent = quizData.length;

// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    console.log("Quiz started");
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    showQuestion();
}
function showQuestion() {
    // reset state
    answersDisabled = false;

    const currentQuestion = quizData[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question; // define o texto da pergunta atual

    // limpa as respostas anteriores
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild);

    }

    //  todo: explain this in a second
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");

        // dataset é um objeto que permite armazenar dados personalizados em elementos HTML
        // aqui estamos armazenando se a resposta é correta ou não
        button.dataset.correct = answer.correct;

        button.addEventListener("click",selectAnswer);
        // appendChild adiciona o botão criado ao container de respostas
        answersContainer.appendChild(button);
    });
}

function selectAnswer(event){
    // otimização para evitar múltiplos cliques
    if(answersDisabled) return
    answersDisabled = true;
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true"; 

    // children retorna uma coleção ao vivo dos elementos filhos de um elemento pai
    Array.from(answersContainer.children).forEach((button) => {
        if(button.dataset.correct === "true" ){
            button.classList.add("correct");
        }else if(button === selectedButton && !isCorrect){
            button.classList.add("incorrect");
        }
    });

    if(isCorrect){
        score++;
        scoreSpan.textContent = score;
        
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if(currentQuestionIndex < quizData.length){
            showQuestion();
        }else{
            showResult();
        }
    }, 1000);
}

function showResult() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = score;

    const percentage = (score / quizData.length) * 100;

    if(percentage ===100){
        resultMessage.textContent = "Caramba! Voce acertou todas as perguntas, tu é o cara! :D";
    }else if(percentage >= 70){
        resultMessage.textContent = "Muito bom, voce se saiu bem! :D";
    }else if(percentage >= 40){
        resultMessage.textContent = "Voce passou, porem, poderia ter ido melhor. :(";
    }else{
        resultMessage.textContent = "Que pena, voce não se saiu bem dessa vez. Tente novamente! :(";
    }
}

function restartQuiz() {
    console.log("Quiz restarted");
    resultScreen.classList.remove("active");
    startQuiz();
}

