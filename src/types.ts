export type LessonType = 'notes' | 'quiz' | 'practice';

export interface MCQ {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface PracticeQuestion {
  title: string;
  description: string;
  initialCode: string;
  solution: string;
  hints: string[];
  difficulty?: Difficulty;
}

export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  content?: string; // Markdown for notes
  quiz?: MCQ[];
  practice?: PracticeQuestion;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface UserProgress {
  completedLessons: string[];
  quizScores: Record<string, number>;
}
