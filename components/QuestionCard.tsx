import { QuestionCardProps } from "@/ineterfaces";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
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
        <Box
          mb={6}
          fontSize="md"
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="5px"
        >
          your progress: {questionNumber}/{totalQuestions}
        </Box>
        <Box>{category}</Box>
        <Heading>
          <Box>{questions}</Box>
        </Heading>
        <Flex>
          <Box>
            <Button>HELLO</Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default QuestionCard;
