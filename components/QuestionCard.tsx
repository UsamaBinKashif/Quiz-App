import { QuestionCardProps } from "@/ineterfaces";
import { Box } from "@chakra-ui/react";
const QuestionCard: React.FC<QuestionCardProps> = ({
  questions,
  callback,
  category,
  totalQuestions,
  questionNumber,
}) => {
  return (
    <>
      <Box bg="white" width="100%">
        <Box mb={6} fontSize="md" fontWeight="bold">
          your progress: {questionNumber}/{totalQuestions}
        </Box>
      </Box>
    </>
  );
};
export default QuestionCard;
