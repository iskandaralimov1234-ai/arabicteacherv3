import { Lesson } from '../../types';

export const lesson12: Lesson = {
    id: 12,
    title: "Lesson 12: أَنْتِ وَ الذَّهَبْتِ (Feminine Pronouns & Verbs)",
    grammar: "Feminine Pronouns & Feminine Past Tense Verbs",
    theory: {
        sections: [
            {
                title: "👩 The Pronoun 'You' (Fem.): أَنْتِ",
                content: "In previous lessons, we learned **أَنْتَ** (Anta) — 'You' for men. \nFor women, we use **أَنْتِ** (Anti) with a Kasra at the end.\n\nUse this when addressing one woman or girl.",
                examples: [
                    { arabic: "أَنْتِ مَرِيضَةٌ؟", meaning: "Are you sick? (to a woman)" },
                    { arabic: "أَنْتِ طَبِيبَةٌ؟", meaning: "Are you a doctor? (to a woman)" },
                    { arabic: "أَيْنَ أَنْتِ يَا مَرْيَمُ؟", meaning: "Where are you, O Maryam?" }
                ]
            },
            {
                title: "🔙 Past Tense: ذَهَبْتِ (You went - Fem.)",
                content: "When telling a woman 'You did something', we add the suffix **-ti** (ـتِ) to the end of the verb root.\n\nFor example:\n- ذَهَبْتَ (dhahabta) ➡️ You went (masc.)\n- **ذَهَبْتِ** (dhahabti) ➡️ You went (fem.)",
                examples: [
                    { arabic: "أَيْنَ ذَهَبْتِ يَا زَيْنَبُ؟", meaning: "Where did you go, O Zainab?" },
                    { arabic: "أَخَرَجْتِ مِنَ الْفَصْلِ؟", meaning: "Did you go out from the classroom?" },
                    { arabic: "أَجَلَسْتِ عَلَى الْكُرْسِيِّ؟", meaning: "Did you sit on the chair?" }
                ]
            },
            {
                title: "🔗 Feminine Relative Pronoun: الَّتِي (Which/Who)",
                content: "In Lesson 9, we learned **الَّذِي** (Which/Who — for masculine nouns).\nFor feminine nouns, we use **الَّتِي** (Allatī).",
                examples: [
                    { arabic: "الْبِنْتُ الَّتِي فِي الْفَصْلِ", meaning: "The girl who is in the class" },
                    { arabic: "السَّاعَةُ الَّتِي عَلَى الْمَكْتَبِ", meaning: "The watch which is on the desk (watch is fem.)" },
                    { arabic: "السَّيَّارَةُ الَّتِي خَرَجَتِ الآنَ", meaning: "The car which went out now" }
                ]
            },
            {
                title: "❓ Question Words",
                content: "In this lesson, we frequently use **لِمَنْ** (Li-man) — 'Whose/For whom' and **أَيْنَ** (Ayna) — 'Where' in contexts relating to females.",
                examples: [
                    { arabic: "لِمَنْ هَذِهِ السَّاعَةُ؟", meaning: "Whose is this watch?" },
                    { arabic: "أَهِيَ لَكِ يَا مَرْيَمُ؟", meaning: "Is it yours, O Maryam? (Using LA-KI)" },
                    { arabic: "أَيْنَ أُمُّكِ الآنَ؟", meaning: "Where is your mother now?" }
                ]
            },
            {
                title: "🏠 Feminine Objects",
                content: "Remember that if a word ends in 'Ta-Marbuta' (**ة**), it is almost always feminine. You must use **أَنْتِ**, **هِيَ**, and the relative pronoun **الَّتِي** when referring to it.",
                examples: [
                    { arabic: "الْمَدْرَسَةُ الَّتِي أَمَامَ الْمَسْجِدِ", meaning: "The school (fem.) which is in front of the mosque" },
                    { arabic: "هَذِهِ حَقِيبَتُكِ؟", meaning: "Is this your bag? (to a woman)" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "12-1",
            type: "multiple-choice",
            question: "How do you say 'You' to a woman?",
            options: ["أَنْتَ", "أَنْتِ", "أَنْتُ"],
            correctAnswer: "أَنْتِ"
        },
        {
            id: "12-2",
            type: "multiple-choice",
            question: "Choose the correct verb form: 'You went' (to a woman)",
            options: ["ذَهَبْتَ", "ذَهَبْتِ", "ذَهَبَتْ"],
            correctAnswer: "ذَهَبْتِ"
        },
        {
            id: "12-3",
            type: "word-scramble",
            question: "Arrange the phrase: 'Where did you go, O Maryam?'",
            arabic: "أَيْنَ ذَهَبْتِ يَا مَرْيَمُ؟",
            scrambledWords: ["مَرْيَمُ؟", "ذَهَبْتِ", "أَيْنَ", "يَا"],
            correctAnswer: "أَيْنَ ذَهَبْتِ يَا مَرْيَمُ؟"
        },
        {
            id: "12-4",
            type: "multiple-choice",
            question: "Which word means 'which' or 'who' (feminine)?",
            options: ["الَّذِي", "الَّتِي", "هَذِهِ"],
            correctAnswer: "الَّتِي"
        },
        {
            id: "12-5",
            type: "word-scramble",
            question: "Arrange: 'The girl who is in the class'",
            arabic: "الْبِنْتُ الَّتِي فِي الْفَصْلِ",
            scrambledWords: ["الْفَصْلِ", "فِي", "الَّتِي", "الْبِنْتُ"],
            correctAnswer: "الْبِنْتُ الَّتِي فِي الْفَصْلِ"
        },
        {
            id: "12-6",
            type: "multiple-choice",
            question: "How to say 'Your mother' when talking to a girl?",
            options: ["أُمُّكَ", "أُمُّكِ", "أُمُّهَا"],
            correctAnswer: "أُمُّكِ"
        },
        {
            id: "12-7",
            type: "multiple-choice",
            question: "Select the translation for 'Whose is this watch?'",
            options: ["لِمَنْ هَذِهِ السَّاعَةُ؟", "أَيْنَ هَذِهِ السَّاعَةُ؟", "مَنْ هَذِهِ السَّاعَةُ؟"],
            correctAnswer: "لِمَنْ هَذِهِ السَّاعَةُ؟"
        },
        {
            id: "12-8",
            type: "multiple-choice",
            question: "The vowel suffix for 'You' (fem.) in verbs like 'Dhahabti' is:",
            options: ["Fatha (ـتَ)", "Kasra (ـتِ)", "Sukun (ـتْ)"],
            correctAnswer: "Kasra (ـتِ)"
        },
        {
            id: "12-9",
            type: "word-scramble",
            question: "Arrange: 'Are you from Madinah?' (to a woman)",
            arabic: "أَأَنْتِ مِنَ الْمَدِينَةِ؟",
            scrambledWords: ["الْمَدِينَةِ؟", "مِنَ", "أَأَنْتِ"],
            correctAnswer: "أَأَنْتِ مِنَ الْمَدِينَةِ؟"
        },
        {
            id: "12-10",
            type: "multiple-choice",
            question: "Translate: 'السَّاعَةُ الَّتِي عَلَى الْمَكْتَبِ'",
            options: ["The watch which is on the desk", "The pen which is on the desk", "Your watch on the desk"],
            correctAnswer: "The watch which is on the desk"
        }
    ]
};
