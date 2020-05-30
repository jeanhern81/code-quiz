const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById
('question-container')

const shuffledQuestion, currentQuestionsIndx

startButton.addEventListener('click', startQuiz)


function startQuiz () {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion ()

};

function setNextQuestion () {



};

function selectAnswer () {




};


const question = [
{
    question: "for (var i = 0; i < letter.lenght; i++); is an example of what?",
    choices: ["array", "alerts", "for-loop", "console.log"],
    answer: "for-loop"






}


]