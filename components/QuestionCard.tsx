import { QuestionCardProps } from "@/ineterfaces";
import { Box, Flex, Spacer, Heading } from "@chakra-ui/react";
import Appbutton from "./Appbutton";


const Questioncard: React.FC<QuestionCardProps> = ({
  questions,
  callback,
  category,
  totalQuestions,
  questionNumber,
}) => {
  return (
    <>
      <Box bg="white" w="700px" h="280px">
        <Box mb={6} fontSize="md" fontWeight="bold" textTransform="uppercase">
          Your progress: {questionNumber}/{totalQuestions}
        </Box>
        <Box fontSize="sm" mb={1}  textTransform="uppercase" color="purple.400" letterSpacing="2px">
          {category}
        </Box>
        <Heading as="h1" size="sm" w="100%" h="100px">
          <Box mb={10}>{questions}</Box>
        </Heading>

        <Flex direction="column" alignItems="center">
          <Box w="500px" mb={4}>
            <Appbutton
              colorScheme="blue"
              variant="outline"
              onClick={callback}
              value="True"
              width="full"
            />
          </Box>
          <Spacer />
          <Box w="500px" mb={4}>
            <Appbutton
              colorScheme="red"
              variant="outline"
              onClick={callback}
              value="False"
              width="full"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Questioncard;