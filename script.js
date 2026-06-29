let userScores = 0;
let compScores = 0;

let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

let ShowWinner = (userwin) => {
  if (userwin) {
    userScores++;
    userScore.innerText = userScores;
    console.log("you win !!");
    msg.innerText = "you win !!";
    msg.style.backgroundColor = "green";
  } else {
    compScores++;
    compScore.innerText = compScores;
    console.log("you lose!!");
    msg.innerText = "you  lose !!";
    msg.style.backgroundColor = "red";
  }
};

let gencompchoice = () => {
  let options = ["rock", "paper", "scissor"];
  let randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};
let drowgame = () => {
  msg.innerText = "Game was drow";
  msg.style.backgroundColor = "#2C3947";
};

let playgame = (userchoice) => {
  console.log("user choice = ", userchoice);

  const compchoice = gencompchoice();
  console.log("comp choice = ", compchoice);

  if (userchoice === compchoice) {
    drowgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    ShowWinner(userwin);
  }
};

box1.addEventListener("click", () => {
  playgame("rock");
});
box2.addEventListener("click", () => {
  playgame("paper");
});
box3.addEventListener("click", () => {
  playgame("scissor");
});
