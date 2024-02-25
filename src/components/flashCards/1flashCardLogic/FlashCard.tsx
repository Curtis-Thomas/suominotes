import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

interface FlashCardProps {
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correctAnswer: number;
  onNextQuestion: () => void;
}

function FlashCard({
  question,
  answer1,
  answer2,
  answer3,
  answer4,
  correctAnswer,
  onNextQuestion,
}: FlashCardProps) {
  const [UserAnswer, setUserAnswer] = useState<number | null>(null);
  const [ResultBoxColor, setResultBoxColor] = useState(" none");
  const [ResultBoxText, setResultBoxText] = useState("");
  const [NextQuestionBtn, setNextQuestionBtn] = useState("none");

  function checkAnswer() {
    if (UserAnswer === correctAnswer) {
      setResultBoxColor("green");
      setResultBoxText("Correct");
      setNextQuestionBtn("block");
      // console.log(ResultBoxColor);
      return "Correct";
    } else {
      setResultBoxColor("red");
      setResultBoxText("Incorrect");
      return "Incorrect";
    }
  }

  const handleCheckAnswerClick = () => {
    console.log(checkAnswer());
  };

  const handleButtonClick1 = () => {
    setUserAnswer(1);
  };
  const handleButtonClick2 = () => {
    setUserAnswer(2);
  };
  const handleButtonClick3 = () => {
    setUserAnswer(3);
  };
  const handleButtonClick4 = () => {
    setUserAnswer(4);
  };

  const handleNextQuestionClick = () => {
    setResultBoxColor("none");
    setResultBoxText("");
    setNextQuestionBtn("none");
    onNextQuestion();
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          // backgroundColor: "cyan",
        }}
      >
        <Typography variant="h4">{question}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          onClick={handleButtonClick1}
          sx={{ backgroundColor: "white", color: "black", width: "23%" }}
        >
          {answer1}
        </Button>
        <Button
          onClick={handleButtonClick2}
          sx={{
            backgroundColor: "white",
            color: "black",
            width: "23%",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
          }}
        >
          {answer2}
        </Button>
        <Button
          onClick={handleButtonClick3}
          sx={{
            backgroundColor: "white",
            color: "black",
            width: "23%",
            borderRight: "1px solid black",
          }}
        >
          {answer3}
        </Button>
        <Button
          onClick={handleButtonClick4}
          sx={{ backgroundColor: "white", color: "black", width: "23%" }}
        >
          {answer4}
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 5,
        }}
      >
        <Box
          sx={{
            width: "25%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
            }}
            onClick={handleCheckAnswerClick}
          >
            Check Answer
          </Button>
        </Box>

        <Box
          sx={{
            backgroundColor: ResultBoxColor,
            width: "25%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>{ResultBoxText}</Typography>
        </Box>
        <Box
          sx={{
            width: "25%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={handleNextQuestionClick}
            sx={{
              backgroundColor: "white",
              color: "black",
              display: NextQuestionBtn,
            }}
          >
            Next Question
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
export default FlashCard;
