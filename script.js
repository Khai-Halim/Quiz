let submitButton = document.querySelector('.btn>button');
let answerInputs = document.querySelectorAll('.answer input')
let questionP = document.querySelector('.question');
let answerSpans = document.querySelectorAll('.answer span');

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
        answer: ["split()", "filter()", "map()", "reduce()"]
    },
    {
        question: "What javascript function can return part of a string?",
        answer: ["slice()", "toUpperCase()", "split()", "indexOf()"]
    }
];

let questionNumber = 1;
let correctAmount;
let wrongAmount;

questionP.innerHTML = questions[0].question;

answerSpans[0].innerHTML = questions[0].answer[0];
answerSpans[1].innerHTML = questions[0].answer[1];
answerSpans[2].innerHTML = questions[0].answer[2];
answerSpans[3].innerHTML = questions[0].answer[3];

submitButton.addEventListener('click', function(){

    //check which button has been selected
    if(answerInputs[0].checked == true){
        console.log('right answer!');
     } else{
         console.log('wrong answer');
     }

     //TODO: increase score if correct and increase wrong answer amount if incorrect.

     shuffle();

     //initiate new question and answers
     questionP.innerHTML = questions[questionNumber].question;

     //TODO: change the hard coded numbers in answer[] to be pos variables.
    answerSpans[0].innerHTML = questions[questionNumber].answer[pos1];
    answerSpans[1].innerHTML = questions[questionNumber].answer[pos2];
    answerSpans[2].innerHTML = questions[questionNumber].answer[pos3];
    answerSpans[3].innerHTML = questions[questionNumber].answer[pos4];

    //uncheck the radio buttons
    for(let i=0; i<answerInputs.length; i++){
        answerInputs[i].checked = false;
    }

    
    //notify that quiz is complete
    if(questionNumber == 0){
        alert('quiz complete');
    }

    //display the next question and answers
    questionNumber++;

    if(questionNumber >= questions.length){
        questionNumber = 0;
    }
    
    
    
});

//Shuffles numbers
let pos1, pos2, pos3, pos4;

function shuffle(){
        pos1 = Math.floor(Math.random() * 4);
        pos2 = Math.floor(Math.random() * 4);
        while(pos2 == pos1){
            console.log(' 2 had to reroll cos it was the same');
            pos2 = Math.floor(Math.random() * 4);
        }
        pos3 = Math.floor(Math.random() * 4);
        while(pos3 == pos1 || pos3 == pos2){
            console.log(' 3 had to reroll cos it was the same');
            pos3 = Math.floor(Math.random() * 4);
        }
        pos4 = Math.floor(Math.random() * 4);
        while(pos4 == pos1 || pos4 == pos2 || pos4 == pos3){
            console.log(' 4 had to reroll cos it was the same');
            pos4 = Math.floor(Math.random() * 4);
        }
    
};



