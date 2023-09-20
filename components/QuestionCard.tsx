import { QuestionCardProps } from "@/ineterfaces";
import { Box, Flex, Spacer, Heading } from "@chakra-ui/react";
import AppButton from "./AppButton";

const Questioncard: React.FC<QuestionCardProps> = ({
  questions,
  callback,
  category,
  totalQuestions,
  questionNumber,
}) => {
  return (
    <>
      <Box bg="white" w="100%">
        <Box mb={6} fontSize="md" fontWeight="bold" textTransform="uppercase">
          Your progress: {questionNumber}/{totalQuestions}
        </Box>
        <Box fontSize="sm" mb={1}>
          {category}
        </Box>
        <Heading as="h1" size="lg">
          <Box mb={6}>{questions}</Box>
        </Heading>

        <Flex direction="column">
          <Box w="100%" mb={4}>
            <AppButton
              colorScheme="blue"
              variant="solid"
              onClick={callback}
              value="True"
              width="full"
              className={""}
            />
          </Box>
          <Spacer />
          <Box w="100%" mb={4}>
            <AppButton
              colorScheme="red"
              variant="solid"
              onClick={callback}
              value="False"
              width="full"
              className={""}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Questioncard;
