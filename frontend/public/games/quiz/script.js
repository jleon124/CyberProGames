(function(){
    function buildQuiz(){
      const output = [];

      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];

          for(letter in currentQuestion.answers){

            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );

      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){

      const answerContainers = quizContainer.querySelectorAll('.answers');

      let numCorrect = 0;

      myQuestions.forEach( (currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;

          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });

      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}, <br/> play again?`;
      
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const restartButton = document.getElementById('restart');
    const myQuestions = [
      {
        question: "What is the mascot of Linux?",
        answers: {
          a: "A penguin",
          b: "A lion",
          c: "A fedora",
          d: 'A dragon'
        },
        correctAnswer: "a"
      },
      {
        question: "What year did Linux come out?",
        answers: {
          a: "1987",
          b: "1990",
          c: "1994",
          d: '1978'
        },
        correctAnswer: "c"
      },
      {
        question: "Which of the following is not a Linux based OS?",
        answers: {
          a: "Red Hat",
          b: "Ubuntu",
          c: "Kali",
          d: "Solaris"
        },
        correctAnswer: "d"
      }
    ];
  
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(currentSlide);

    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  (function(){
    function buildQuiz(){
      const output = [];

      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];

          for(letter in currentQuestion.answers){

            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );

      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){

      const answerContainers = quizContainer.querySelectorAll('.answers');

      let numCorrect = 0;

      myQuestions.forEach( (currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;

          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });

      previousButton.style.display = 'none';
      submitButton.style.display = 'none';
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}, <br/>reset to play again.`;
      
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
      // if(submitButton.addEventListener('click'))
      // {
      //   submitButton.style.display = 'none';
      // }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const myQuestions = [
      {
        question: "What is the mascot of Linux?",
        answers: {
          a: "A penguin",
          b: "A lion",
          c: "A fedora",
          d: 'A dragon'
        },
        correctAnswer: "a"
      },
      {
        question: "What year did Linux come out?",
        answers: {
          a: "1987",
          b: "1990",
          c: "1994",
          d: '1978'
        },
        correctAnswer: "c"
      },
      {
        question: "Which of the following is not a Linux based OS?",
        answers: {
          a: "Red Hat",
          b: "Ubuntu",
          c: "Kali",
          d: "Solaris"
        },
        correctAnswer: "d"
      },
      {
        question: "What is the Linux mascont's name?",
        answers: {
          a: "Linux",
          b: "Tux",
          c: "Bux",
          d: 'Little Guy'
        },
        correctAnswer: "b"
      },
      {
        question: "About how often does a new version of the Linux kernal get released?",
        answers: {
          a: "30 days",
          b: "66 days",
          c: "364 days",
          d: '49 days'
        },
        correctAnswer: "b"
      },
      {
        question: "What is the primary language that Linux is written in?",
        answers: {
          a: "Basic",
          b: "Assembly",
          c: "Javascript",
          d: 'C'
        },
        correctAnswer: "d"
      },
      {
        question: "Where has Linux not been used in??",
        answers: {
          a: "The New York Stock Exchange",
          b: "Space",
          c: "Hollywood",
          d: 'None of the above'
        },
        correctAnswer: "d"
      },
      {
        question: "True or False: Linux is a OS.",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "b"
      },
      {
        question: "What Is the most current (as of May 2023) of Linux?",
        answers: {
          a: "2.6",
          b: "7.5",
          c: "6.3",
          d: '3.2'
        },
        correctAnswer: "c"
      },
      {
        question: "True or False: Linux is open source.",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "a"
      }
    ];
  
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(currentSlide);

    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
