import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type TriviaQuestion = {
  // Define the structure of a trivia question here
  // Modify this as per the actual structure of the response
  // For example, you might have fields like 'question', 'correct_answer', 'incorrect_answers', etc.
  // I'm using 'any' as a placeholder here.
  question: string;
};
type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TriviaQuestion[] | ErrorResponse>
) {
  try {
    // Make a GET request to the Open Trivia Database API
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean"
    );

    if (response.status === 200) {
      // Assuming the response data has a field 'results' that contains an array of trivia questions
      const triviaQuestions: TriviaQuestion[] = response.data.results;

      res.status(200).json(triviaQuestions);
    } else {
      res.status(response.status).json({
        error: "Failed to fetch data from the API",
      });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
}
