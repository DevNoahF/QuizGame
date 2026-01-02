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
        answers: [ // Corrigido de 'asnswers'
            { text: "Terra", correct: false },
            { text: "Júpiter", correct: true },
            { text: "Saturno", correct: false },
            { text: "Marte", correct: false },
        ],
    },
    {
        question: "Qual o elemento químico representado pelo símbolo *Au* na tabela periódica?", // Adicionada vírgula
        answers: [
            { text: "Prata", correct: false },
            { text: "Ouro", correct: true },
            { text: "Alumínio", correct: false },
            { text: "Cobre", correct: false },
        ],
    },
    {
        question: "O que acontece quando ocorre um *Stack Overflow* em um programa?", // Adicionada vírgula
        answers: [
            { text: "O programa termina o processamento antes do esperado por falta de dados", correct: false },
            { text: "A memória reservada para a pilha de chamadas de funções é excedida, geralmente por uma recursão infinita", correct: true },
            { text: "O programa consome toda a memória RAM disponível no sistema", correct: false },
            { text: "O processador entra em um estado de sobrecarga, causando lentidão no sistema", correct: false },
        ],
    },
    {
        question: "Qual comando é utilizado para criar uma nova ramificação (branch) e mudar para ela simultaneamente?", // Adicionada vírgula
        answers: [
            { text: "git branch <nome-da-branch>", correct: false },
            { text: "git checkout <nome-da-branch>", correct: false },
            { text: "git switch -c <nome-da-branch>", correct: true },
            { text: "git merge <nome-da-branch>", correct: false },
        ],
    },
    {
        question: "Qual cláusula SQL é usada para filtrar os resultados de uma consulta baseada em uma condição específica?", // Adicionada vírgula
        answers: [
            { text: "WHERE", correct: true },
            { text: "HAVING", correct: false },
            { text: "GROUP BY", correct: false },
            { text: "ORDER BY", correct: false },
        ],
    },
];