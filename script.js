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
        question: "What string function takes an index number as an argument and returns the character at that index or undefined if no character?",
        answer: ["charAt()", "search()", "indexOf()", "trim()"]
    },
    {
        question: "What string function takes a start index and an end index as arguments and returns the part of the string between those index's?",
        answer: ["slice()", "indexOf()", "charAt()", "every()"]
    },
    {
        question: "What function takes away the white space around a string?",
        answer: ["trim()", "filter()", "split()", "length"]
    },
    {
        question: "What function takes a number as the argument and repeats the string that many times?",
        answer: ["repeat()", "replace()", "split()", "some()"]
    },
    {
        question: "What string function takes a string to change and a string to change to as arguments. It returns a new string with the changes?",
        answer: ["replace()", "slice()", "split()", "reduce()"]
    },
    {
        question: "What string function returns a new string in lowercase?",
        answer: ["toLowerCase()", "lowerCase()", "toUpperCase()", "changeCase()"]
    },
    {
        question: "What string function returns a new string in uppercase?",
        answer: ["toUpperCase()", "upperCase()", "charAt()", "every()"]
    },
    {
        question: "What string/array function takes a string and an index from where to search left to right as arguments and returns the index of that string or returns -1 if not found?",
        answer: ["indexOf()", "filter()", "split()", "length"]
    },
    {
        question: "What string/array function takes a string as an argument and returns the index of the last occurance",
        answer: ["lastIndexOf", "indexOf()", "endIndex()", "toLastIndex()"]
    },
    {
        question: "What string function takes a string or regular expression as an argument and returns the index of that string or returns -1 if not found.",
        answer: ["search", "find()", "indexOf()", "reduce()"]
    },
    {
        question: "What string function takes a string as an argument and returns all instances of that string in an array?",
        answer: ["match()", "search()", "indexOf()", "Array.from()"]
    },
    {
        question: "What string function cuts a string and returns the sliced parts into an array? The argument decides where to cut?",
        answer: ["split()", "slice()", "splice()", "dice()"]
    },
    {
        question: "What function takes a string as an argument and checks whether the string or array contains that string? It returns true or false",
        answer: ["includes()", "contains()", "split()", "length"]
    },
    {
        question: "What function takes a string as an argument and checks if the that string exists at the start of a string?",
        answer: ["startsWith()", "beginsWith()", "split()", "some()"]
    },
    {
        question: "What function takes a string as an argument and checks if the that string exists at the end of a string?",
        answer: ["endsWith()", "lastWord()", "lastIndexOf()", "reduce()"]
    },
    {
        question: "What function counts the amount of index's a string or an array contains and returns that number?",
        answer: ["length", "count()", "endsWith()", "map()"]
    },
    {
        question: "What array function can do something for each item of an array an even change an item in an array and returns a new array?",
        answer: ["map()", "forEach()", "change()", "filter()"]
    },
    {
        question: "What array function returns a new array which contains only the items that pass the given condition?",
        answer: ["filter()", "map()", "reduce()", "forEach()"]
    },
    {
        question: "What array function takes the first value of an array and changes it depending on the other values of the array and how they are said to affect it? It returns a single value?",
        answer: ["reduce()", "filter()", "split()", "length"]
    },
    {
        question: "What array function takes the last value of an array and changes it depending on the other values of the array and how they are said to affect it? It returns a single value?",
        answer: ["reduceRight()", "replace()", "split()", "some()"]
    },
    {
        question: "What array function runs given code for each item in an array?",
        answer: ["forEach()", "slice()", "split()", "reduce()"]
    },
    {
        question: "What array function returns true or false depending on whether or not all items in the array pass the said condition?",
        answer: ["every()", "lowerCase()", "toUpperCase()", "changeCase()"]
    },
    {
        question: "What array function returns true or false depending on whether or not at least one item in the array pass the said condition?",
        answer: ["some()", "upperCase()", "charAt()", "every()"]
    },
    {
        question: "What function joins two arrays together and returns an array",
        answer: ["concat()", "filter()", "split()", "length"]
    },
    {
        question: "What array function takes a string/number as an argument and returns that value if it exists in the array.",
        answer: ["find()", "match()", "check()", "search()"]
    },
    {
        question: "What array function turns an array into a string? The argument decides what to put between each item.",
        answer: ["join()", "search()", "indexOf()", "reduce()"]
    },
    {
        question: "What array function can cut out part of an array and even insert an item in an array. The original array is affected and will be missing the part that was cut.",
        answer: ["splice()", "slice()", "cut()", "chop()"]
    },
    {
        question: "What array function reverses all items in the array and actually changes the original array.",
        answer: ["reverse()", "slice()", "splice()", "backwards()"]
    },
    {
        question: "What array function sorts an array in a said order such as lowest to highest or alphabetically? It changes the original array",
        answer: ["sort()", "order()", "split()", "change()"]
    },
    {
        question: "What function can change a set, node list or HTML collection into an array",
        answer: ["Array.from()", "beginsWith()", "split()", "some()"]
    },
    {
        question: "What function can change an array or a number into a string",
        answer: ["toString()", "lastWord()", "lastIndexOf()", "reduce()"]
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


