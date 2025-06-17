import React, { useState } from "react";
import flashcardsData from "../../data/data";
import Flashcard from "../Flashcard/Flashcard";

const FlashcardList = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const goPrev = () => {
    setIsFlipped(false);
    setCurrIndex((prev) => (prev > 0 ? prev - 1 : flashcardsData.length - 1));
  };

  const goNext = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * flashcardsData.length);
    } while (randomIndex === currIndex);
    setIsFlipped(false); // Reset to question side
    setCurrIndex(randomIndex);
  };

  const currQues = flashcardsData[currIndex];

  return (
    <div>
      <Flashcard
        question={currQues.question}
        answer={currQues.answer}
        isFlipped={isFlipped}
        onFlip={() => setIsFlipped((prev) => !prev)}
      />
      <div className="navigation-buttons">
        <button className="nav-button" onClick={goPrev}>
          Previa
        </button>
        <button className="nav-button" onClick={goNext}>
          Próxima (Next)
        </button>
      </div>
    </div>
  );
};

export default FlashcardList;
