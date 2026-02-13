import { Lesson } from '../../types';

export const lesson16: Lesson = {
    id: 16,
    title: "Lesson 16: Plural of Non-Rational Nouns",
    grammar: "Plural of Non-Rational Nouns",
    theory: {
        sections: [
            {
                title: "🧠 Rational vs. Non-Rational",
                content: "In Arabic, nouns are divided into:\n1. **Rational (العَاقِلُ):** Humans, Angels, Jinns.\n2. **Non-Rational (غَيْرُ العَاقِلِ):** Animals, objects, concepts.",
                examples: [
                    { arabic: "رَجُلٌ (man)", meaning: "Rational" },
                    { arabic: "قَلَمٌ (pen)", meaning: "Non-Rational" },
                    { arabic: "كِتَابٌ (book)", meaning: "Non-Rational" }
                ]
            },
            {
                title: "🌟 The Golden Rule of Non-Rational Plurals",
                content: "The plural of **non-rational** nouns is grammatically treated as **Singular Feminine** (She/It).\n\nThis means pronouns, adjectives, and demonstrative nouns referring to them will be in the Singular Feminine form (هِيَ, هَذِهِ).",
                examples: [
                    { arabic: "أَقْلَامٌ (pens)", meaning: "Treated as 'She' (Sing. Fem.)" },
                    { arabic: "كُتُبٌ (books)", meaning: "Treated as 'She'" },
                    { arabic: "سَيَّارَاتٌ (cars)", meaning: "Treated as 'She'" }
                ]
            },
            {
                title: "👉 Demonstratives: 'These' and 'Those'",
                content: "For plural non-rational nouns, we use:\n- **هَذِهِ** (Hadhihi) — These (lit. This fem.)\n- **تِلْكَ** (Tilka) — Those (lit. That fem.)",
                examples: [
                    { arabic: "هَذِهِ أَقْلَامٌ", meaning: "These are pens" },
                    { arabic: "تِلْكَ جِبَالٌ", meaning: "Those are mountains" },
                    { arabic: "هَذِهِ كُتُبٌ جَدِيدَةٌ", meaning: "These are new books" }
                ]
            },
            {
                title: "🎨 Description (Adjectives)",
                content: "Adjectives describing plural non-rational nouns must also be **Singular Feminine**.",
                examples: [
                    { arabic: "بُيُوتٌ كَبِيرَةٌ", meaning: "Big houses (lit. Houses big-fem.)" },
                    { arabic: "أَبْوَابٌ مَفْتُوحَةٌ", meaning: "Open doors" },
                    { arabic: "السَّيَّارَاتُ جَدِيدَةٌ", meaning: "The cars are new" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "16-1",
            type: "multiple-choice",
            question: "How to say 'These are pens'?",
            options: ["هَؤُلَاءِ أَقْلَامٌ", "هَذِهِ أَقْلَامٌ", "هَذَا أَقْلَامٌ"],
            correctAnswer: "هَذِهِ أَقْلَامٌ"
        },
        {
            id: "16-2",
            type: "multiple-choice",
            question: "Which pronoun replaces 'Books' (كُتُبٌ)?",
            options: ["هُمْ", "هُنَّ", "هِيَ"],
            correctAnswer: "هِيَ"
        },
        {
            id: "16-3",
            type: "word-scramble",
            question: "Arrange: 'These houses are big'",
            arabic: "هَذِهِ الْبُيُوتُ كَبِيرَةٌ",
            scrambledWords: ["كَبِيرَةٌ", "الْبُيُوتُ", "هَذِهِ"],
            correctAnswer: "هَذِهِ الْبُيُوتُ كَبِيرَةٌ"
        },
        {
            id: "16-4",
            type: "multiple-choice",
            question: "Choose the correct adjective: 'New pens'",
            options: ["أَقْلَامٌ جَدِيدَةٌ", "أَقْلَامٌ جُدُدٌ", "أَقْلَامٌ جَدِيدٌ"],
            correctAnswer: "أَقْلَامٌ جَدِيدَةٌ"
        },
        {
            id: "16-5",
            type: "matching",
            question: "Match noun with correct demonstrative",
            pairs: [
                { "arabic": "رِجَالٌ (men)", "meaning": "هَؤُلَاءِ" },
                { "arabic": "كُتُبٌ (books)", "meaning": "هَذِهِ" },
                { "arabic": "أَخَوَاتٌ (sisters)", "meaning": "هَؤُلَاءِ" },
                { "arabic": "أَقْلَامٌ (pens)", "meaning": "هَذِهِ" }
            ]
        },
        {
            id: "16-6",
            type: "multiple-choice",
            question: "How to say 'Those stars are beautiful'?",
            options: ["أُولَئِكَ النُّجُومُ جَمِيلَةٌ", "تِلْكَ النُّجُومُ جَمِيلَةٌ", "تِلْكَ النُّجُومُ جَمِيلَاتٌ"],
            correctAnswer: "تِلْكَ النُّجُومُ جَمِيلَةٌ"
        },
        {
            id: "16-7",
            type: "word-scramble",
            question: "Arrange: 'The doors of the mosque are open'",
            arabic: "أَبْوَابُ الْمَسْجِدِ مَفْتُوحَةٌ",
            scrambledWords: ["مَفْتُوحَةٌ", "أَبْوَابُ", "الْمَسْجِدِ"],
            correctAnswer: "أَبْوَابُ الْمَسْجِدِ مَفْتُوحَةٌ"
        },
        {
            id: "16-8",
            type: "multiple-choice",
            question: "Plural of 'Mosque' (مَسْجِدٌ):",
            options: ["مَسَاجِدُ", "مَسْجِدُونَ", "مَسَاجِيدٌ"],
            correctAnswer: "مَسَاجِدُ"
        },
        {
            id: "16-9",
            type: "multiple-choice",
            question: "'Where are these books? They are on the desk.'",
            options: ["أَيْنَ هَذِهِ الْكُتُبُ؟ هِيَ عَلَى الْمَكْتَبِ", "أَيْنَ هَؤُلَاءِ الْكُتُبُ؟ هُمْ عَلَى الْمَكْتَبِ"],
            correctAnswer: "أَيْنَ هَذِهِ الْكُتُبُ؟ هِيَ عَلَى الْمَكْتَبِ"
        },
        {
            id: "16-10",
            type: "word-scramble",
            question: "Arrange: 'These watches are expensive'",
            arabic: "هَذِهِ السَّاعَاتُ غَالِيَةٌ",
            scrambledWords: ["غَالِيَةٌ", "السَّاعَاتُ", "هَذِهِ"],
            correctAnswer: "هَذِهِ السَّاعَاتُ غَالِيَةٌ"
        }
    ]
};
