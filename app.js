// DOM Elements
const homeElement = document.getElementById('home');
const quizElement = document.getElementById('quiz');
const endElement = document.getElementById('end');
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const feedbackElement = document.getElementById('feedback');
const feedbackTextElement = document.getElementById('feedback-text');
const questionCounterElement = document.getElementById('question-counter');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const restartButton = document.getElementById('restart-btn');
const homeButton = document.getElementById('home-btn');
const progressBarElement = document.getElementById('progress-bar');

// Quiz variables
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Event Listeners
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
restartButton.addEventListener('click', startQuiz);
homeButton.addEventListener('click', goToHome);

// Functions
function startQuiz() {
    homeElement.classList.add('hide');
    endElement.classList.add('hide');
    quizElement.classList.remove('hide');
    
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.innerText = score;
    
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        updateProgressBar();
    } else {
        showEndScreen();
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    questionCounterElement.innerText = `${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
    
    // Shuffle the answers
    const shuffledAnswers = [...question.answers].sort(() => Math.random() - 0.5);
    
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = `
            <span class="answer-letter">
                <i class="fas fa-circle"></i>
            </span>
            <span class="answer-text">${answer.text}</span>
        `;
        button.classList.add('btn', 'answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    feedbackElement.classList.add('hide');
    feedbackElement.classList.remove('correct', 'wrong');
    
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target.closest('.answer-btn');
    if (!selectedButton) return;
    
    const correct = selectedButton.dataset.correct;
    
    // Display feedback
    feedbackElement.classList.remove('hide');
    
    if (correct) {
        feedbackElement.classList.add('correct');
        feedbackTextElement.innerText = shuffledQuestions[currentQuestionIndex].explanation;
        score += 10;
        scoreElement.innerText = score;
        
        // Change icon to check
        const icon = selectedButton.querySelector('.answer-letter i');
        icon.className = 'fas fa-check-circle';
    } else {
        feedbackElement.classList.add('wrong');
        feedbackTextElement.innerText = `Incorrect. ${shuffledQuestions[currentQuestionIndex].explanation}`;
        
        // Change icon to x
        const icon = selectedButton.querySelector('.answer-letter i');
        icon.className = 'fas fa-times-circle';
    }
    
    // Disable all answer buttons after selection
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        setStatusClass(button, button.dataset.correct);
        
        // Show correct answers with check icon
        if (button.dataset.correct) {
            const icon = button.querySelector('.answer-letter i');
            icon.className = 'fas fa-check-circle';
        }
    });
    
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        nextButton.classList.remove('hide');
    } else {
        nextButton.innerHTML = 'Finish <i class="fas fa-flag-checkered"></i>';
        nextButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showEndScreen() {
    quizElement.classList.add('hide');
    endElement.classList.remove('hide');
    finalScoreElement.innerText = `Your score: ${score}/${shuffledQuestions.length * 10}`;
}

function goToHome() {
    endElement.classList.add('hide');
    homeElement.classList.remove('hide');
}

function updateProgressBar() {
    const progressPercentage = (currentQuestionIndex / shuffledQuestions.length) * 100;
    progressBarElement.style.width = `${progressPercentage}%`;
}

// Fix for the hover state on buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        button.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.boxShadow = 'none';
        button.style.transform = 'translateY(0)';
    });
}); 