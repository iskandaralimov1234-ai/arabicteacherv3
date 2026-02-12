export type TaskType = 'multiple-choice' | 'word-scramble' | 'translate';

export interface BaseTask {
    id: string;
    question: string;
    arabic?: string;
}

export interface MultipleChoiceTask extends BaseTask {
    type: 'multiple-choice';
    options: string[];
    correctAnswer: string;
}

export interface WordScrambleTask extends BaseTask {
    type: 'word-scramble';
    arabic: string;
    scrambledWords: string[];
    correctAnswer: string;
}

export interface TranslateTask extends BaseTask {
    type: 'translate';
    correctAnswer: string;
}

export type Task = MultipleChoiceTask | WordScrambleTask | TranslateTask;

export interface TheorySection {
    title: string;
    content: string; // Markdown supported
    examples?: { arabic: string; meaning: string }[];
}

export interface Lesson {
    id: number;
    title: string;
    grammar: string;
    theory: {
        text?: string; // Legacy linear text
        sections?: TheorySection[]; // New step-by-step sections
        examples?: { arabic: string; meaning: string }[]; // Legacy global examples
    };
    tasks: Task[];
}
