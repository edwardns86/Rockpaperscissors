import React from 'react'
const DEFAULT_IMG =
  "https://media.giphy.com/media/Qw260AJ1dbF9npeYRM/giphy.gif";

export default function ChoiceCard(props) {
    const won = props.title === props.previousWinner;
    let className=null
    const hasPreviousGame = 
      props.previousWinner === "Computer" || props.previousWinner === "You";
    if (hasPreviousGame) {
      className = won ? "winner" : "loser";
    }
  
    let prompt;
    if (won) {
      prompt = "Winner";
      className = won ? "winner" : "loser";
    } else if (props.previousWinner === "Tie") {
      prompt = "Tied Try Again";
      className = "tie"
    } else if (props.previousWinner === null) {
      prompt = "Start Playing";
    } else {
      prompt = "Loser";
    }
  
    return (
      <div className={`choice-card ${className}`}>
        <h1>{props.title}</h1>
        <img className={"cardimg"} src={props.imgURL || DEFAULT_IMG} alt={props.title} />
        <h3>{prompt}</h3>
      </div>
    );
  }


