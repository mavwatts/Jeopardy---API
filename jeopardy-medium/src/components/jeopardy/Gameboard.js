import React from "react";
import AnswerForm from "./AnswerForm.js";


function Gameboard(props) {
    const category = props.data.category && props.data.category.title;

  return (
    <div className="Gameboard">
      <h2>{category}</h2>
      <h3>${props.data.value}</h3>
      <div className="clue">{props.data.question}</div>
      <AnswerForm checkAnswer={props.checkAnswer} />
      <div className="score">Your winnings: {props.score}</div>
    </div>
  );
}

export default Gameboard;
