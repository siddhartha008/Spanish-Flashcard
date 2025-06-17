import React from "react";

const Flashcard = ({ question, answer, isFlipped, onFlip }) => {
  return (
    <div className="flashcard-container" onClick={onFlip}>
      <div className={`flashcard-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flashcard-front">{question}</div>
        <div className="flashcard-back">{answer}</div>
      </div>
    </div>
  );
};

export default Flashcard;
