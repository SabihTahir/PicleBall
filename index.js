'use strict';


// Questions Section
let qArrow = document.querySelector('.qArrow');
let answerBox = document.querySelector('.answer-box');
let question_Box = document.querySelector('.question-box');

const questionBox = () => {
  answerBox.classList.toggle('d-none');
  question_Box.classList.toggle('rounded-4'); 
  question_Box.classList.toggle('rounded-top-4');
  qArrow.classList.toggle("fa-long-arrow-up");
  qArrow.classList.toggle("fa-long-arrow-down");
};

