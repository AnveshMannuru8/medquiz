import type { Question, QuestionId } from "../types";

const questionStore: Question[] = [
  {
    id: "q-demo-1",
    prompt: "A 24-year-old presents with fever and sore throat. Next step?",
    choices: ["CBC", "Rapid strep test", "CT neck", "Start antivirals"],
  },
  {
    id: "q-demo-2",
    prompt: "Most common cause of acute pancreatitis?",
    choices: ["Gallstones", "Alcohol", "Hypertriglyceridemia", "Scorpion venom"],
  },
];

function createQuestionId(): QuestionId {
  return `q_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export async function listQuestions(): Promise<Question[]> {
  return questionStore;
}

export async function getQuestion(questionId: string): Promise<Question> {
  const q = questionStore.find((x) => x.id === questionId);
  if (!q) {
    return {
      id: questionId,
      prompt: "Question not found in placeholder store.",
      choices: [],
    };
  }
  return q;
}

export async function createQuestion(input: { prompt: string; choices: string[] }): Promise<Question> {
  const q: Question = {
    id: createQuestionId(),
    prompt: input.prompt,
    choices: input.choices,
  };
  questionStore.unshift(q);
  return q;
}

