const quizDB = [
  {
  question: "Q1: Which type of JavaScript language is ?",
  a: "Object-Oriented",
  b: "Object-Based",
  c: "Assembly-language",
  d: "High-level",
  ans: "ans2"
  },
  {
      question: "Q2: The function and  var are known as",
      a: "Keywords",
      b: "Data types",
      c: "Declaration statements",
      d: "Prototypes",
      ans: "ans3"
      },
      {
          question: "Q3: Who Developed javaScript ?",
          a: "Brendan Eich",
          b: "Mitchell Baker",
          c: "Douglas Crockford",
          d: "John Resig",
          ans: "ans1"
          },
          {
              question: "Q4:  Which of the following is a disadvantage of using JavaScript?",
              a: " Client-side JavaScript does not allow the reading or writing of files.",
              b: "JavaScript can not be used for Networking applications because there is no such support available.",
              c: "JavaScript doesn't have any multithreading or multiprocess capabilities",
              d: "All of the above.",
              ans: "ans4"
              },
              {
                  question: "Q5: Which one of the following is the correct way for calling the JavaScript code?",
                  a: "Preprocessor",
                  b: "Triggering Event",
                  c: "RMI",
                  d: "Function/Method",
                  ans: "ans4"
                  },
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
const innerDiv = document.getElementById('inner_div');
let questionCount = 0;
let score =0;
const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerHTML = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;


}

loadQuestion();

const getCheckedAnswer = () =>{
  let answer;
  answers.forEach((curAnsElem) => {
      if(curAnsElem.checked){
          answer = curAnsElem.id;
      }
  });
  return answer;
};
const diselectAll = () =>{
answers.forEach((curAnsElem) => curAnsElem.checked = false);
};


submit.addEventListener('click',() => {
  const checkedAnswer = getCheckedAnswer();
  console.log(checkedAnswer);
  if(checkedAnswer == quizDB[questionCount].ans){
      score++;
  };
  questionCount++;
  diselectAll();



  if(questionCount < quizDB.length){
      loadQuestion();
  }
  else{
      innerDiv.style.display = 'none';
      showScore.innerHTML = `
      <h3> your score ${score}/${quizDB.length} </h3>
      <button class="btn" onclick ="location.reload()"> play again </button>
      `;
      showScore.classList.remove('scoreArea')
  }
});