import { useState, useEffect } from "react";

import { Box } from "@mui/material";
import FlashCardPageTemplate from "../FlashCardPageTemplate";

function FlashCardAnimals() {
  const [Question, setQuestion] = useState(" Question");
  const [Answer1, setAnswer1] = useState("Answer 1");
  const [Answer2, setAnswer2] = useState("Answer 2");
  const [Answer3, setAnswer3] = useState("Answer 3");
  const [Answer4, setAnswer4] = useState("Answer 4");
  const [CorrectAnswer, setCorrectAnswer] = useState(1);

  function setQuestion1() {
    setQuestion("What is a Kissa?");
    setAnswer1("A cat");
    setAnswer2("A dog");
    setAnswer3("A rabbit");
    setAnswer4("A bird");
    setCorrectAnswer(1);
  }

  function setQuestion2() {
    setQuestion("What is a Koira?");
    setAnswer1("A cat");
    setAnswer2("A dog");
    setAnswer3("A rabbit");
    setAnswer4("A bird");
    setCorrectAnswer(2);
  }

  function setQuestion3() {
    setQuestion("What is a Kani?");
    setAnswer1("A cat");
    setAnswer2("A dog");
    setAnswer3("A rabbit");
    setAnswer4("A bird");
    setCorrectAnswer(3);
  }

  function setQuestion4() {
    setQuestion("What is a Lintu?");
    setAnswer1("A cat");
    setAnswer2("A dog");
    setAnswer3("A rabbit");
    setAnswer4("A bird");
    setCorrectAnswer(4);
  }

  useEffect(() => {
    setQuestion1();
  }, []);

  function onNextQuestion() {
    if (Question === "What is a Kissa?") {
      setQuestion2();
    } else if (Question === "What is a Koira?") {
      setQuestion3();
    } else if (Question === "What is a Kani?") {
      setQuestion4();
    } else if (Question === "What is a Lintu?") {
      setQuestion1();
    }
  }

  return (
    <Box>
      <FlashCardPageTemplate
        question={Question}
        answer1={Answer1}
        answer2={Answer2}
        answer3={Answer3}
        answer4={Answer4}
        correctAnswer={CorrectAnswer}
        onNextQuestion={onNextQuestion}
      />
    </Box>
  );
}

export default FlashCardAnimals;
