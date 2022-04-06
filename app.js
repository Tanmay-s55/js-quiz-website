const quizQues = [
    {
        question: "Q1: Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<js>",
        c: "<scripting>",
        d: "<javascript>",
        ans: "ans1"
    },
    {
        question: "Q2:Which of the following keywords is used to define a variable in Javascript?",
        a: "var",
        b: "let",
        c: "Both A and B",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q3: Which of the following is a JavaScript framework?",
        a: "Spring",
        b: "Flask",
        c: "Bootstrap",
        d: "React",
        ans: "ans4"
    },
    {
        question: "Q4: How do we write a comment in javascript?",
        a: "#",
        b: "//",
        c: "$$",
        d: "!-- --",
        ans: "ans2"
    }
];

const emoji = ['😵‍💫','😕','😀','😎'];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#score');

let questionCount = 0;
let score = 0;
const loadQuestions = () => {

    const currQues = quizQues[questionCount];
    question.innerText =  currQues.question;
    option1.innerText = currQues.a;
    option2.innerText = currQues.b;
    option3.innerText = currQues.c;
    option4.innerText = currQues.d;
}

loadQuestions();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((currentAns) => {
        if(currentAns.checked){
            answer = currentAns.id;
        }
    })
    return answer;
}
submit.addEventListener('click', () => {
    const checkedAns = getCheckAnswer();
    const ansId = quizQues[questionCount].ans;
    if(checkedAns == ansId)
        score++;

    questionCount++;

    if(questionCount < quizQues.length){
        loadQuestions();
    } else {
        showScore.innerHTML = `
        <h3>Your scored ${score}/${quizQues.length} ${emoji[score-1]}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('showScore');
    }
});

