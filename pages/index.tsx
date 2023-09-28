import { useEffect, useState } from "react";
import { Box, Heading, Divider } from "@chakra-ui/react";
import { AnswerObject, QuestionProps } from "@/ineterfaces";
import { getQuestionList } from "@/lib/helper";
import { Difficulty, totalQuestions } from "@/lib/constant";
import Appbutton from "@/components/Appbutton";
import Appspinner from "@/components/Appspinner";
import Questioncard from "@/components/QuestionCard";

const Triviahome: React.FC = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [questions, setQuestions] = useState<QuestionProps[]>([]);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionListing = await getQuestionList(
        totalQuestions,
        Difficulty.HARD
      );
      setQuestions(questionListing);
      setLoading(false);
    };
    fetchQuestions();
  }, []);

  const startQuizGame = (): void => {
    setStartQuiz(true);
  };

  const checkAnswer = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (gameOver) return;
    const choosedAnswer = e.currentTarget.innerText;
    const correct = questions[questionNumber]?.correct_answer === choosedAnswer;
    if (correct) setScore((previous) => previous + 1);
    if (userAnswer.length !== questionNumber) {
      // Use !== for strict comparison
      if (!correct) setScore((previous) => previous - 1);
      const lastIndex = userAnswer.length - 1;
      if (lastIndex >= 0) {
        userAnswer.splice(lastIndex, 1);
        const answerObject = {
          question: questions[questionNumber]?.question,
          answer: choosedAnswer,
          correct,
          correctAnswer: questions[questionNumber]?.correct_answer,
        };
        setUserAnswer((previous) => [...previous, answerObject]);
      }
      return;
    }
    const answerObject = {
      question: questions[questionNumber]?.question,
      answer: choosedAnswer,
      correct,
      correctAnswer: questions[questionNumber]?.correct_answer,
    };
    setUserAnswer((previous) => [...previous, answerObject]);
    const nextQuestion = questionNumber + 1;
    if (totalQuestions === nextQuestion) {
      setGameOver(true);
    }
    setQuestionNumber(nextQuestion);
  };

  const replayQuiz = (): void => {
    setStartQuiz(false);
    setGameOver(false);
    setQuestionNumber(0);
    setScore(0);
    setUserAnswer([]);
  };

  return (
    <>
      <div className="App">
        {userAnswer.length === questionNumber &&
        !gameOver &&
        !loading &&
        !startQuiz ? (
          <>
            <div className="greeting-box">
              <Box boxShadow="base" p="6" rounded="md" bg="white" maxW="560px">
                <Heading as="h1" size="lg" mb={2}>
                  Welcome to Quiz Application
                </Heading>
                <p>
                  You will be presented with {totalQuestions} questions which
                  can be answered true or false. All the best!
                </p>
                <Appbutton
                  colorScheme="purple"
                  variant="solid"
                  onClick={startQuizGame}
                  value="Start Quiz Game"
                />
              </Box>
            </div>
          </>
        ) : null}
        {loading && (
          <div className="app-spinner">
            <Appspinner
              speed="0.65s"
              emptyColor="gray.200"
              color="purple"
              size="lg"
              thickness="5px"
            />
          </div>
        )}
        {!loading && !gameOver && startQuiz && (
          <Box boxShadow="base" p="6" rounded="md" bg="white" maxW="800px">
            <Questioncard
              questions={questions[questionNumber].question}
              category={questions[questionNumber].category}
              callback={checkAnswer}
              totalQuestions={totalQuestions}
              questionNumber={questionNumber}
            />
          </Box>
        )}
        {gameOver && (
          <>
            <Box boxShadow="base" p="6" rounded="md" bg="white" maxW="560px">
              <Box mb={4}>
                <Box fontWeight="bold" as="h3" fontSize="4xl">
                  Game Over!
                </Box>
                <Box as="h3" fontSize="xl">
                  Your score is {score}/{totalQuestions}.
                </Box>
              </Box>
              <Divider />
              {userAnswer.map((answer, index) => (
                <Box key={index}>
                  <div className="answer-list">
                    <Box fontSize="md" fontWeight="bold">
                      Q: {answer.question}
                    </Box>
                    <ul>
                      <li>You answered: {answer.answer}</li>
                      <li>Correct answer: {answer.correctAnswer}</li>
                    </ul>
                  </div>
                </Box>
              ))}
              <Appbutton
                colorScheme="purple"
                variant="solid"
                onClick={replayQuiz}
                value="Replay Quiz"
                width="full"
              />
            </Box>
          </>
        )}
      </div>
    </>
  );
};

export default Triviahome;
