function buildQuiz(){}

function showResults(){}

buildQuiz();
submitButton.addEventListener('click', showResults)


const theQuestions = [
{
    question: "Which of the following is not a web browser",
    answers: {
    a:"Opera",
    b:"Firefox",
    c:"Powershell"
    },
    correctAnswer: "c"
},

{
    question: "What is a GUI",
    answers: {
    a: "Good uniform idea",
    b: "Graphical user interface",
    c: "Geo united isle " 
    },
    correctAnswer: "c"
},

{
    question: "Which is not an operating system",
    answers: {
    a: "Google",
    b: "Windows",
    c: "IOS"
    },
    correctAnswer: "a"
}
]