export const CHOICES = {
    rock: {
      name: "rock",
      url: "https://i.imgur.com/4QCGZmm.png",
    },
    paper: {
      name: "paper",
      url: "https://i.imgur.com/tk7ly7F.png",
    },
    scissors: {
      name: "scissors",
      url: "https://i.imgur.com/3BHIcps.png"
    },
  };
  
  export const getRandomChoice = () => {
    var keys = Object.keys(CHOICES);
    return CHOICES[keys[(keys.length * Math.random()) << 0]];
  };
  
  export const getRoundOutcome = userChoice => {
    const computerChoice = getRandomChoice().name;
    let result;
  
    if (userChoice === "rock") {
      result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "paper") {
      result = computerChoice === "rock" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "scissors") {
      result = computerChoice === "paper" ? "Victory!" : "Defeat!";
    }
  
    if (userChoice === computerChoice) result = "It's A Tie!";
    return [result, computerChoice];
  };