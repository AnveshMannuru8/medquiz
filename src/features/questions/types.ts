export type QuestionId = string;

export type Question = {
  id: QuestionId;
  prompt: string;
  choices: string[];
};

