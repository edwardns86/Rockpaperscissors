import React, { useState } from "react";
import './App.css';
import ChoiceCard from "./components/ChoiceCard";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { CHOICES, getRoundOutcome } from "./utils"; //Cleaned out fucntions external to the
import ChoiceButtons from "./components/ChoiceButtons";

function SignIn(props) {
  return (
    <div>
      <NavigationBar />
      <input className="btn success-btn "placeholder="Enter Your Email To Play The Game" ></input> 
      <button onClick= {() => props.onSignIn(true)}>SIGN IN </button>

    </div>
  )

}


function Main(props) {
  const [isSignedIn, setSignIn] = useState([]);
  const [gameHistory, setGameHistory] = useState([]);
  const [prompt, setGamePrompt] = useState("ZIM ZAM ZEE!");
  const [previousWinner, setPreviousWinner] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);


  const onPlayerChoose = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);
    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];
    setGamePrompt(result);

    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
    if (result === "Victory!") {
      setPreviousWinner("You");
    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }
    console.log("result ", result, "comp choice ", compChoice)
    gameHistory.push(result);
    setGameHistory(gameHistory);
  };

  return (
    <div>
      <NavigationBar />
      <div className="App">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-4 themed-grid-col player-choice container">
              <ChoiceCard
                title="You"
                previousWinner={previousWinner}
                imgURL={playerChoice && playerChoice.url} />
            </div>
            <div className="col-2  my-auto container">
              <div>
                <h1>{prompt}</h1>
              </div>
              <ChoiceButtons
                onPlayerChoose={onPlayerChoose} />
            </div>
            <div className="col-4 computer-choice container">
              <ChoiceCard
                title="Computer"
                previousWinner={previousWinner}
                imgURL={computerChoice && computerChoice.url} />
            </div>
          </div>
          <div className="row text-align-center">
            <div className="col">
              <h4>Game Stats</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-3 guess-history">
              <h3>History</h3>
              <ul >
                {gameHistory.map(result => {
                  return <li >{result}</li>;
                })}
              </ul>
            </div>
            <div className="col-3 signout">
            <button onClick= {() => props.onSignIn(false)}>SIGN OUT </button>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </div>
  );
}

function App() {
  const [isSignedIn, setSignIn] = useState(false)
  return (
    <div>
      
      
      
      {isSignedIn && <Main 
      onSignIn = {setSignIn}
      />}
      {!isSignedIn && <SignIn 
      onSignIn = {setSignIn}
      />}


    </div>



  )

}

export default App;
