//DOM Variables
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

//Global variables
let questionNumber = 0;
let correctAmount;
let wrongAmount;
let pos1, pos2, pos3, pos4; //These will randomize 

//Randomize pos variables
shuffle();

//Initiates first question and answers
questionP.innerHTML = questions[0].question;
answerSpans[0].innerHTML = questions[0].answer[pos1];
answerSpans[1].innerHTML = questions[0].answer[pos2];
answerSpans[2].innerHTML = questions[0].answer[pos3];
answerSpans[3].innerHTML = questions[0].answer[pos4];

submitButton.addEventListener('click', function(e){

    //TODO check if selected radio button sibling span has the same innerText as the correct answer which I have placed in first position of array.
    // if(answerInputs[0].checked.nextElementSibling == true){
    //     console.log('right answer!');
    //     console.log(e.target);
    //  } else{
    //      console.log('wrong answer');
    //  }

    //TODO: increase score if correct and increase wrong answer amount if incorrect.

    //notify that quiz is complete
    if(questionNumber == 3){
        alert('quiz complete');
    }

    //check if answer is correct or wrong
    console.log("For the question " + questions[questionNumber].question + " The right answer was: " + questions[questionNumber].answer[0]);

    //Alerts the user if no answer has been chosen
    if(answerInputs[0].checked == false && answerInputs[1].checked == false && answerInputs[2].checked == false && answerInputs[3].checked == false){
        alert("Please pick an answer");
    } else{
        //display the next question and answers
        questionNumber++;

            //Resets the questions
        if(questionNumber >= questions.length){
            questionNumber = 0;
        }

        console.log(questionNumber);

        //Randomize answer positions
        shuffle();

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
     } 
});

//shuffles the position values.
//TODO: Shorten this code.
function shuffle(){
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



