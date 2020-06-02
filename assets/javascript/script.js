const startButton = document.getElementById('start-btn')

const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random () - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    

}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    }else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    }
    
    function setStatusClass(element, correct) {
        clearStatusClass(element)
            if (correct) {
                element.classList.add('correct')
            } else {
                element.classList.add('wrong')
            }
        }
    
    function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
    }


const questions = [
{
    question: 'Which are the following is not a Comparison Operator?',
    answers: [
        { text: '===', correct: false },
        { text: '=>==', correct: true },
        { text: '!==', correct: false },
        { text: '<=', correct: false },
    ]
},

{
    question: 'Alerts, prompts, and confirms are an exmaple of?',
    answers: [
    { text:'JavaScript Popup Boxes', correct: true },
    { text: 'Console.Log', correct: false },
    { text: 'For Loops', correct: false},
    { text: 'Math.random', correct: false},
    ]
},

{
    question: "An array is closed in:",
    answers: [
        { text: 'Parantheses', correct: false },
        { text: 'Curly Braces', correct: false },
        { text: 'Square Brackets', correct: true },
        { text: 'Backward Slashes', correct: false },
        
    ]

},
]

    var timeEl = document.querySelector(".time");
    var mainEl = document.getElementById("main");
    var secondsLeft = 11;
    function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " Time\'s running out!";
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
            }
    }, 1000);
    }
    function sendMessage() {
        timeEl.textContent = "Time\'s Up! ";

    }
    setTime();

    