import React, { useState } from "react";
import flashcardsData from "../../data/data";
import Flashcard from "../Flashcard/Flashcard";

const FlashcardList = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [answerState, setAnswerState] = useState("");
  const [feedback, setFeedback] = useState(""); 
  const currQues = flashcardsData[currIndex];

const handleSubmit = (e) => {
  e.preventDefault();
  if (answerState.trim().toLowerCase() === currQues.answer.trim().toLowerCase()) {
    setFeedback("correct");
  } else {
    setFeedback("incorrect");
  }
};

  const goPrev = () => {
    if (currIndex > 0) {
      setCurrIndex(currIndex - 1);
      resetState(); 
    }
  };

  const goNext = () => {
    if (currIndex < flashcardsData.length - 1) { 
      setCurrIndex(currIndex + 1)
      resetState();
    }
  };


  const resetState = () => { 
    setIsFlipped(false);
    setAnswerState("");
    setFeedback("")
    
  }

  return (
    <div>
      <Flashcard
        question={currQues.question}
        answer={currQues.answer}
        isFlipped={isFlipped}
        onFlip={() => setIsFlipped((prev) => !prev)}
      />

<div className="formDiv">

<form onSubmit={handleSubmit}>
          <input className="formInput" placeholder="Type your answer" type="text" value ={answerState} onChange={(e) => setAnswerState(e.target.value)}>
          </input>
          <button type="submit">
            Submit
          </button>
          {feedback === "correct" && (
          <p className="correctFeedback"> Correct!</p>
        )}
        {feedback === "incorrect" && (
          <p className="incorrectFeedback">Try again!</p>
        )}
        </form>
        </div>
      
      <div className="navigation-buttons">
        <button onClick={goPrev} className={currIndex===0 ? "disabledNavButton" : "nav-button" }>
          Previa
        </button>
        <button onClick={goNext} className={currIndex===flashcardsData.length - 1 ? "disabledNavButton" : "nav-button"}>
          Próxima (Next)
        </button>
      </div>

  
    </div>
  );
};

export default FlashcardList;
