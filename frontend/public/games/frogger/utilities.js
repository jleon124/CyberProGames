function animate(){
    ctx3.clearRect(0,0,canvas.width, canvas.height);
    frogger.draw();
    frogger.update();
    handleObstacles();
    handleScoreBoard();
    requestAnimationFrame(animate);

    
}

animate();

window.addEventListener('keydown', function(e){

    keys = [];
    keys[e.keyCode] = true;
    if(keys[37] || keys[38] || keys[39] || keys[40]){
        frogger.jump();

    }

});

window.addEventListener('keyup', function(e){

    delete keys[e.keyCode];
    frogger.moving = false;
    console.log(frogger.x)
    console.log(frogger.y)
    //270
});


function scored(){
    score++;
    gameSpeed += 0.15;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
    askQuestion();
}

function handleScoreBoard(){
    ctx4.fillStyle = 'black';
    ctx4.strokeStyle = 'black';
    ctx4.font= '15px Verdana';
    ctx4.strokeText('Score', 265, 15);
    ctx4.font= '60px Verdana';
    ctx4.fillText(score,270, 65);
    ctx4.font= '15px Verdana';
    ctx4.strokeText('Deaths: '+ collisionCount, 150, 15);
    ctx4.strokeText('Game Speed: '+ gameSpeed.toFixed(1) ,450, 15);

}
function collision(first,second){
    return !(
        first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height ||
        first.y + first.height < second.y 
    );
}


function resetGame(){
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
    score = 0;
    collisionCount++;
    gameSpeed = 1;
}

function askQuestion() {
    const questions = [
        {
            question: "What is the data type of 5?",
            answer: "int"
        },
        {
            question: "What is the data type of 'banana'?",
            answer: "string"
        },
        {
            question: "True is what data type?",
            answer: "boolean"
        },
        {
            question: "False is what data type?",
            answer: "boolean"
        },{
            question: 'What is the data type of "5"?',
            answer: "boolean"
        }
    ];
    const randomIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[randomIndex];
    const userAnswer = prompt(selectedQuestion.question);

    if (userAnswer !== null && userAnswer.toLowerCase() === selectedQuestion.answer) {
        console.log("Correct! Your score is now " + score);
        moving = false;
    } else {
        score = 0;
        console.log("Incorrect. Your score is now " + score);
    }
}