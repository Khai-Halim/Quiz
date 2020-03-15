//DOM Variables
let submitButton = document.querySelector('.btn>button');
let answerInputs = document.querySelectorAll('.answer input')
let questionP = document.querySelector('.question');
let answerSpans = document.querySelectorAll('.answer span');
let scoreSpan = document.querySelector('#score');

//Global variables
let questionNumber = 0;
let score = 0;
let pos1, pos2, pos3, pos4; //These will randomize 

//Array of questions and answers
let questions = [
    {
        question: "What javascript function takes an array and returns a single value?",
        answer: ["reduce()", "map()", "filter()", "search()"]
    },
    {
        question: "What javascript function returns the index of a string inside a string and can also use regular expressions?",
        answer: ["search()", "indexOf()", "slice()", "toLowerCase()"]
    },
    {
        question: "What is a javascript function to turn a string into an array?",
        answer: ["split()", "filter()", "map()", "some()"]
    },
    {
        question: "What javascript function can return part of a string?",
        answer: ["slice()", "toUpperCase()", "split()", "indexOf()"]
    },
    {
        question: "What javascript function can change each item of an array and returns a new array?",
        answer: ["map()", "slice()", "split()", "reduce()"]
    }
];

//Display first question
shuffleAnswers();
changeQuestion();

submitButton.addEventListener('click', function(e){

    //check if quiz is complete and notify that it is.
    if(questionNumber == questions.length-1){
        alert('quiz complete');
    }
    //Alerts user if no answer has been chosen or else continues.
    if(answerInputs[0].checked == false && answerInputs[1].checked == false && answerInputs[2].checked == false && answerInputs[3].checked == false){
        alert("Please pick an answer");
    } else{
        updateScore();
        questionNumber++;
        resetQuiz();
        shuffleAnswers();
        changeQuestion();
     } 
});

//shuffles the position values.
function shuffleAnswers(){
        pos1 = Math.floor(Math.random() * 4);
        pos2 = Math.floor(Math.random() * 4);
        while(pos2 == pos1){
            pos2 = Math.floor(Math.random() * 4);
        }
        pos3 = Math.floor(Math.random() * 4);
        while(pos3 == pos1 || pos3 == pos2){
            pos3 = Math.floor(Math.random() * 4);
        }
        pos4 = Math.floor(Math.random() * 4);
        while(pos4 == pos1 || pos4 == pos2 || pos4 == pos3){
            pos4 = Math.floor(Math.random() * 4);
        }
    
};

function changeQuestion(){
    //initiate new question 
    questionP.innerHTML = questions[questionNumber].question;
    //instantiates new answers
    answerSpans[0].innerHTML = questions[questionNumber].answer[pos1];
    answerSpans[1].innerHTML = questions[questionNumber].answer[pos2];
    answerSpans[2].innerHTML = questions[questionNumber].answer[pos3];
    answerSpans[3].innerHTML = questions[questionNumber].answer[pos4];
    //uncheck the radio buttons
    for(let i=0; i<answerInputs.length; i++){
        answerInputs[i].checked = false;
    }
};

function resetQuiz(){
 //Resets the questions
 if(questionNumber >= questions.length){
    questionNumber = 0;
    score = 0;
}
};

function updateScore(){
    for(let i=0; i<4; i++){
        if(answerInputs[i].checked == true && answerInputs[i].nextElementSibling.innerHTML == questions[questionNumber].answer[0]){
            score++;
        }
    }
    scoreSpan.innerHTML = `${score} / ${questionNumber +1}`;
};

function checkQuizCompleted(){

}


