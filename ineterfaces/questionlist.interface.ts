export default interface QuestionProps {
  questions: string;
  category: string;
  totalQuestions?: number;
  questionNumber?: number;
  correctAnswer: string;
  callback: Function;
}
