export interface MCQ {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correct: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface Lesson {
  id: number;
  title: string;
  mcqs: MCQ[];
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  color: string;
  lessons: Lesson[];
}
