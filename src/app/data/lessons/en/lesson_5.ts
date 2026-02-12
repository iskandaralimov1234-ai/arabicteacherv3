import { Lesson } from '../../types';

export const lesson5: Lesson = {
    id: 5,
    title: "Lesson 5: Genitive Construction (Idafa)",
    grammar: "Mudaf and Mudaf Ilaihi",
    theory: {
        text: "1. Idafa is a construction of two words to express possession: 'The book of the teacher'.\n2. FIRST WORD (Mudaf): The object possessed. It NEVER has the article (Al) and Tanween (-un). Ends with a single vowel (Kitabu).\n3. SECOND WORD (Mudaf Ilaihi): The possessor. It ALWAYS is in the genitive case (with kasra -i).\n\nImportant: The meaning of 'Al' is already 'built-in' to the first word through possession, so we don't say Al-Kitabu Muhammadin, but simply — Kitabu Muhammadin (since the book is already defined by the owner).",
        examples: [
            { arabic: "كِتَابُ مُحَمَّدٍ", meaning: "Kitabu Muhammadin — Muhammad's Book" },
            { arabic: "قَلَمُ الْمُدَرِّسِ", meaning: "Qalamu-l-mudarrisi — The Teacher's Pen" },
            { arabic: "بَيْتُ اللهِ", meaning: "Baytu Llāhi — The House of Allah" },
            { arabic: "ابْنُ خَالِدٍ فِي الْمَدْرَسَةِ", meaning: "Ibnu Khalidin fi-l-madrasati — Khalid's son is in the school" },
            { arabic: "أَيْنَ حَقِيبَةُ الْمُدَرِّسِ؟", meaning: "Ayna ḥaqībatu-l-mudarrisi? — Where is the teacher's bag?" }
        ]
    },
    tasks: [
        {
            id: "5-1",
            type: "multiple-choice",
            question: "In 'Kitabu Muhammadin', what is the ending of Muhammad?",
            options: ["Damma (-un)", "Fatha (-an)", "Kasra (-in)"],
            correctAnswer: "Kasra (-in)"
        },
        {
            id: "5-2",
            type: "multiple-choice",
            question: "Can the FIRST word in Idafa have the article 'Al'?",
            options: ["Yes", "No", "Sometimes"],
            correctAnswer: "No"
        },
        {
            id: "5-3",
            type: "word-scramble",
            question: "Assemble: 'The teacher's book'",
            arabic: "كِتَابُ الْمُدَرِّسِ",
            scrambledWords: ["الْمُدَرِّسِ", "كِتَابُ"],
            correctAnswer: "كِتَابُ الْمُدَرِّسِ"
        },
        {
            id: "5-4",
            type: "multiple-choice",
            question: "Translate 'Bintu Hamidin':",
            options: ["Hamid's son", "Hamid's daughter", "Hamid's house"],
            correctAnswer: "Hamid's daughter"
        },
        {
            id: "5-5",
            type: "word-scramble",
            question: "Assemble: 'The boy's name'",
            arabic: "اسْمُ الْوَلَدِ",
            scrambledWords: ["الْوَلَدِ", "اسْمُ"],
            correctAnswer: "اسْمُ الْوَلَدِ"
        }
    ]
};
