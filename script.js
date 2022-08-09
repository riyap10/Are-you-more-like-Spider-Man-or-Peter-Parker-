/*Add your JavaScript here*/

var peterScore = 0;
var spiderScore = 0;

var numQuestions = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", spider);
q1a2.addEventListener("click", peter);

q2a1.addEventListener("click", spider);
q2a2.addEventListener("click", peter);

q3a1.addEventListener("click", peter);
q3a2.addEventListener("click", spider);

function peter() {
  peterScore += 1;
  numQuestions += 1;

  console.log("numQuestions = " + numQuestions + " peterScore = " + peterScore);


  if (numQuestions == 3) {
    console.log("The quiz is done!")

    updateResult();
  }
}

function spider() {
  spiderScore += 1;
  numQuestions += 1;

  console.log("numQuestions = " + numQuestions + " spiderScore = " + spiderScore);


  if (numQuestions == 3) {
    console.log("The quiz is done!")

    updateResult();
  }
}

function updateResult () {
  if (peterScore >= 2) {
  result.innerHTML = ("You are more like Peter Parker!");
  console.log("You are more like Peter Parker!");

  
} else if (spiderScore >= 2) {
  result.innerHTML = ("You are more like Spider-Man!");
  console.log("You are more like Spider-Man!");
  
}
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);

function disableQ1() {
  q1a1.disabled = true; 
  q1a2.disabled = true; 
}

function disableQ2() {
  q2a1.disabled = true; 
  q2a2.disabled = true; 
}

function disableQ3() {
  q3a1.disabled = true; 
  q3a2.disabled = true; 
}
