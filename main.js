// JavaScript Code
document.getElementById("Magicbtn").addEventListener("click", Magic);
document.getElementById("QBox");

function Magic() {
  let randNum = Math.random();
  console.log(randNum);
  let Q = document.getElementById("QBox").value;

  if (Q === "Is JavaScript awesome?") {
    Answerid = "Of Course!";
  } else if (Q === "Does a magic 8 ball actually work?") {
    Answerid = "How dare your doubt me!";
  } else if (Q === "") {
    Answerid = "Please ask a question.";
  } else if (Q === " ") {
    Answerid = "Please ask a question.";
  } else if (Q === "What is the best game?") {
    Answerid = "TF2";
  } else if (Q === "What is the worst class in TF2?") {
    Answerid = "Spy is the worst class.";
  } else if (Q === "What does CSS stand for?") {
    Answerid = "Cascading Style Sheets";
  } else {
    if (randNum < 0.05) {
      Answerid = "It is decidedly so.";
    } else if (randNum < 0.1) {
      Answerid = "It is certain.";
    } else if (randNum < 0.15) {
      Answerid = "Without a doubt.";
    } else if (randNum < 0.2) {
      Answerid = "Most likely.";
    } else if (randNum < 0.25) {
      Answerid = "Yes definitely.";
    } else if (randNum < 0.3) {
      Answerid = "You may rely on it.";
    } else if (randNum < 0.35) {
      Answerid = "As I see it, yes.";
    } else if (randNum < 0.4) {
      Answerid = "Outlook good.";
    } else if (randNum < 0.45) {
      Answerid = "Yes.";
    } else if (randNum < 0.5) {
      Answerid = "Signs point to yes.";
    } else if (randNum < 0.55) {
      Answerid = "Reply hazy, try again.";
    } else if (randNum < 0.6) {
      Answerid = "Ask again later.";
    } else if (randNum < 0.65) {
      Answerid = "Better not tell you now.";
    } else if (randNum < 0.7) {
      Answerid = "Cannot predict now.";
    } else if (randNum < 0.75) {
      Answerid = "Concentrate and ask again.";
    } else if (randNum < 0.8) {
      Answerid = "Don't count on it.";
    } else if (randNum < 0.85) {
      Answerid = "My reply is no.";
    } else if (randNum < 0.9) {
      Answerid = "My sources say no.";
    } else if (randNum < 0.95) {
      Answerid = "Outlook not so good.";
    } else if (randNum < 1) {
      Answerid = "Very doubtful.";
    } else {
      Answerid = "TF2";
    }
  }
  let AEL = Answerid;
  document.getElementById("AEL").innerHTML = `Answer: ${AEL}`;
}
//Idea
//Have an if function surround another if function that holds all the preset answers, if it isn't a preset answer, go to the randNum part of the code.
