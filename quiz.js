const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}
function showResults(){}
const myQuestions = [
    {
        question:	"Which one is not ECOWAS country?",
        answers: {
        a:	"Nigeria", 
        b: "Eritrea",
        c: "Ghana",
        d: "Liberia"
        },
        correctAnswer: "b"
    },
    
    
         { question: "Cautious is synonymous with?",
         answers: {
        a:"Carefulness",
        b: "Wariness",
        c: "Awareness",
        d: "Weariness"
         },
         correctAnswer: "a"
        },
     
    
        {question: "Who headed the panel that chose Abuja as the Capital of Nigeria?",
        answers: {
            a:	"Akinola Aguda",
            b: "Aminu Kano",
            c: "Jerome Udoji",
            d: "Gani Fawehinmi"
        },
        correctAnswer: "a"
        },
    
        {question: "What is the name of the Israeli Prime Minister that was shot dead on November 4, 1995?",
        answers: {
         a: "Benjamin Netanyahu",
         b: "Rabin Yitzhak",
         c: "Shimon Peres", 
         d: "Yasser Arafat"
        },
        correctAnswer: "b"
        },
     
        {question: "Who was the senate president when Bill Clinton visited Nigeria?",
         answers: {
             a: "Evan Ewerem",
             b: "Anyim Pius Anyim", 
             c: "Pius Okigbo", 
             d: "Ghali Na’Abba"
            },
        correctAnswer: "b"
     },
];

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
        
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  };
  
  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  };