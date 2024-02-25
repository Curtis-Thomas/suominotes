import { Box } from "@mui/material";
import NavBar from "../navigation/navBar/NavBar";
import FlashCard from "./1flashCardLogic/FlashCard";

interface FlashCardProps {
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correctAnswer: number;
  onNextQuestion: () => void;
}
function FlashCardPageTemplate({
  question,
  answer1,
  answer2,
  answer3,
  answer4,
  correctAnswer,
  onNextQuestion,
}: FlashCardProps) {
  return (
    <Box>
      <NavBar route="/flashCardsDash" />
      <FlashCard
        question={question}
        answer1={answer1}
        answer2={answer2}
        answer3={answer3}
        answer4={answer4}
        correctAnswer={correctAnswer}
        onNextQuestion={onNextQuestion}
      />
    </Box>
  );
}

export default FlashCardPageTemplate;
