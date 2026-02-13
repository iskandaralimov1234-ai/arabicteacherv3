import { Lesson } from '../../types';

export const lesson28: Lesson = {
    id: 28,
    title: "Lesson 28: Verbal Sentence (Doer & Object)",
    grammar: "Verbal Sentence: Subject & Object",
    theory: {
        sections: [
            {
                title: "🎬 The Verbal Sentence (Jumla Fi'liyya)",
                content: "A verbal sentence starts with a verb.\nIt consists of:\n1. **Fi'l** (Verb)\n2. **Fa'il** (Doer/Subject) — always Marfu' (Damma)\n3. **Maf'ul Bihi** (Object of action) — always Mansub (Fatha)",
                examples: [
                    { arabic: "ضَرَبَ حَامِدٌ مَحْمُودًا", meaning: "Hamid (subject) hit Mahmud (object)" },
                    { arabic: "شَرِبَ الْوَلَدُ الْمَاءَ", meaning: "The boy drank the water" }
                ]
            },
            {
                title: "❓ Question Words",
                content: "**مَتَى** (Matā) — 'When?' (for past and future)\n**أَيْنَ** (Ayna) — 'Where?'",
                examples: [
                    { arabic: "مَتَى ذَهَبْتَ إِلَى الْمَدْرَسَةِ؟", meaning: "When did you go to school?" },
                    { arabic: "أَيْنَ ذَهَبَ بِلَالٌ؟", meaning: "Where did Bilal go?" }
                ]
            },
            {
                title: "🔄 Transitive & Intransitive Verbs",
                content: "Verbs that need an object (Who? What?) are called **Transitive** (Muta'addi).\nVerbs that do not need an object (like 'sat', 'went out') are called **Intransitive** (Lazim).",
                examples: [
                    { arabic: "كَتَبَ الطَّالِبُ الدَّرْسَ", meaning: "The student wrote the lesson (Transitive)" },
                    { arabic: "خَرَجَ الْمُدَرِّسُ", meaning: "The teacher went out (Intransitive)" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "28-1",
            type: "multiple-choice",
            question: "Identify the Object (Maf'ul) in: 'The student opened the door'",
            options: ["فَتَحَ", "الطَّالِبُ", "الْبَابَ"],
            correctAnswer: "الْبَابَ"
        },
        {
            id: "28-2",
            type: "word-scramble",
            question: "Arrange: 'The boy ate the bread'",
            arabic: "أَكَلَ الْوَلَدُ الْخُبْزَ",
            scrambledWords: ["الْخُبْزَ", "أَكَلَ", "الْوَلَدُ"],
            correctAnswer: "أَكَلَ الْوَلَدُ الْخُبْزَ"
        },
        {
            id: "28-3",
            type: "multiple-choice",
            question: "Choose correct object form: 'I saw the teacher'",
            options: ["رَأَيْتُ الْمُدَرِّسُ", "رَأَيْتُ الْمُدَرِّسَ", "رَأَيْتُ الْمُدَرِّسِ"],
            correctAnswer: "رَأَيْتُ الْمُدَرِّسَ"
        },
        {
            id: "28-4",
            type: "matching",
            question: "Match term and definition",
            pairs: [
                { "arabic": "الْفَاعِلُ", "meaning": "Doer / Subject" },
                { "arabic": "الْمَفْعُولُ بِهِ", "meaning": "Object / Receiver" },
                { "arabic": "دَخَلَ", "meaning": "Entered (Intransitive often)" },
                { "arabic": "ضَرَبَ", "meaning": "Hit (Transitive)" }
            ]
        },
        {
            id: "28-5",
            type: "multiple-choice",
            question: "How to say 'Hamid hit Bilal'?",
            options: ["ضَرَبَ حَامِدٌ بِلَالٍ", "ضَرَبَ حَامِدٌ بِلَالًا", "ضَرَبَ حَامِدًا بِلَالٌ"],
            correctAnswer: "ضَرَبَ حَامِدٌ بِلَالًا"
        },
        {
            id: "28-6",
            type: "multiple-choice",
            question: "Translate: 'When did you return?'",
            options: ["مَتَى رَجَعْتَ؟", "أَيْنَ رَجَعْتَ؟", "مَا رَجَعْتَ؟"],
            correctAnswer: "مَتَى رَجَعْتَ؟"
        },
        {
            id: "28-7",
            type: "word-scramble",
            question: "Arrange: 'Ibrahim wrote the lesson'",
            arabic: "كَتَبَ إِبْرَاهِيمُ الدَّرْسَ",
            scrambledWords: ["الدَّرْسَ", "كَتَبَ", "إِبْرَاهِيمُ"],
            correctAnswer: "كَتَبَ إِبْرَاهِيمُ الدَّرْسَ"
        },
        {
            id: "28-8",
            type: "multiple-choice",
            question: "What case is the Doer (Fa'il)?",
            options: ["Fatha (a)", "Kasra (i)", "Damma (u)"],
            correctAnswer: "Damma (u)"
        },
        {
            id: "28-9",
            type: "multiple-choice",
            question: "'Who broke the pen?' (Man kasara al-qalam...)",
            options: ["مَنْ كَسَرَ الْقَلَمَ؟", "مَنْ كَسَرَ الْقَلَمُ؟", "مَنْ كَسَرَ الْقَلَمِ؟"],
            correctAnswer: "مَنْ كَسَرَ الْقَلَمَ؟"
        },
        {
            id: "28-10",
            type: "word-scramble",
            question: "Arrange: 'The man killed the snake'",
            arabic: "قَتَلَ الرَّجُلُ الْحَيَّةَ",
            scrambledWords: ["الْحَيَّةَ", "قَتَلَ", "الرَّجُلُ"],
            correctAnswer: "قَتَلَ الرَّجُلُ الْحَيَّةَ"
        }
    ]
};
