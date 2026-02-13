import { Lesson } from '../../types';

export const lesson21: Lesson = {
    id: 21,
    title: "Lesson 21: My School (مَدْرَسَتِي)",
    grammar: "Diptotes (Part 1) & Nominal Sentences",
    theory: {
        sections: [
            {
                title: "🏫 Lesson Topic: My School",
                content: "In this lesson, we read a text about a school and learn to describe buildings, classrooms, and objects.\nPay attention to the use of attached pronouns (Our school, its doors) and adverbs of place (in front of, behind).",
                examples: [
                    { arabic: "هَذِهِ مَدْرَسَتِي", meaning: "This is my school" },
                    { arabic: "هِيَ قَرِيبَةٌ مِنَ الْمَسْجِدِ", meaning: "It is close to the mosque" },
                    { arabic: "أَبْوَابُهَا مَفْتُوحَةٌ", meaning: "Its doors are open" }
                ]
            },
            {
                title: "🚫 Words without Tanwin (Diptotes)",
                content: "In Arabic, there are words that **do not accept Tanwin** (un/an/in) and taking a **Fatha** (a) instead of a Kasra (i) in the Genitive case.\nThese words are called **Mamnū' min aṣ-ṣarf** (Diptotes).",
                examples: [
                    { arabic: "مَسَاجِدُ", meaning: "Mosques (not «Masājidun»)" },
                    { arabic: "مَدَارِسُ", meaning: "Schools (not «Madārisun»)" },
                    { arabic: "مَكَاتِبُ", meaning: "Desks / Offices" }
                ]
            },
            {
                title: "📏 Plural Formula (Mafā'il)",
                content: "Many plural words that have the form **مَفَاعِلُ** (Mafā'il) or **مَفَاعِيلُ** (Mafā'īl) are considered Diptotes.\nRemember: they end with a **single Damma**.",
                examples: [
                    { arabic: "مَنَادِيلُ", meaning: "Handkerchiefs / Napkins" },
                    { arabic: "مَفَاتِيحُ", meaning: "Keys" },
                    { arabic: "فَنَادِقُ", meaning: "Hotels" }
                ]
            },
            {
                title: "🎨 Colors (Masculine)",
                content: "Also, names of masculine colors following the pattern **أَفْعَلُ** (Af'alu) are Diptotes.",
                examples: [
                    { arabic: "أَحْمَرُ", meaning: "Red" },
                    { arabic: "أَبْيَضُ", meaning: "White" },
                    { arabic: "أَسْوَدُ", meaning: "Black" },
                    { arabic: "أَخْضَرُ", meaning: "Green" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "21-1",
            type: "multiple-choice",
            question: "How to say 'This is my school'?",
            options: ["هَذَا مَدْرَسَتِي", "هَذِهِ مَدْرَسَتِي", "تِلْكَ مَدْرَسَةٌ"],
            correctAnswer: "هَذِهِ مَدْرَسَتِي"
        },
        {
            id: "21-2",
            type: "multiple-choice",
            question: "Choose the correct plural form of 'Mosques' (no tanwin)",
            options: ["مَسَاجِدٌ", "مَسَاجِدُ", "مَسْجِدُونَ"],
            correctAnswer: "مَسَاجِدُ"
        },
        {
            id: "21-3",
            type: "word-scramble",
            question: "Arrange: 'Its doors are open now'",
            arabic: "أَبْوَابُهَا مَفْتُوحَةٌ الْآنَ",
            scrambledWords: ["الْآنَ", "مَفْتُوحَةٌ", "أَبْوَابُهَا"],
            correctAnswer: "أَبْوَابُهَا مَفْتُوحَةٌ الْآنَ"
        },
        {
            id: "21-4",
            type: "multiple-choice",
            question: "How to say 'Red' (masculine)?",
            options: ["أَحْمَرُ", "أَحْمَرٌ", "حَمْرَاءُ"],
            correctAnswer: "أَحْمَرُ"
        },
        {
            id: "21-5",
            type: "matching",
            question: "Match word and meaning",
            pairs: [
                { "arabic": "مَكَاتِبُ", "meaning": "Desks" },
                { "arabic": "كَرَاسِيُّ", "meaning": "Chairs" },
                { "arabic": "مَدَارِسُ", "meaning": "Schools" },
                { "arabic": "دَقَائِقُ", "meaning": "Minutes" }
            ]
        },
        {
            id: "21-6",
            type: "multiple-choice",
            question: "Choose the word that does NOT take Tanwin:",
            options: ["كِتَابٌ", "قَلَمٌ", "مَسَاجِدُ"],
            correctAnswer: "مَسَاجِدُ"
        },
        {
            id: "21-7",
            type: "word-scramble",
            question: "Arrange: 'There are many classrooms in the school'",
            arabic: "فِي الْمَدْرَسَةِ فُصُولٌ كَثِيرَةٌ",
            scrambledWords: ["كَثِيرَةٌ", "فُصُولٌ", "الْمَدْرَسَةِ", "فِي"],
            correctAnswer: "فِي الْمَدْرَسَةِ فُصُولٌ كَثِيرَةٌ"
        },
        {
            id: "21-8",
            type: "multiple-choice",
            question: "'Keys' in Arabic:",
            options: ["مِفْتَاحٌ", "مَفَاتِيحُ", "مَفَاتِيحٌ"],
            correctAnswer: "مَفَاتِيحُ"
        },
        {
            id: "21-9",
            type: "multiple-choice",
            question: "How to say 'Our school'?",
            options: ["مَدْرَسَتُنَا", "مَدْرَسَتُهُمْ", "مَدْرَسَتُكُمْ"],
            correctAnswer: "مَدْرَسَتُنَا"
        },
        {
            id: "21-10",
            type: "word-scramble",
            question: "Arrange: 'We have small gardens' (Gardens - hadā'iq, diptote)",
            arabic: "لَنَا حَدَائِقُ صَغِيرَةٌ",
            scrambledWords: ["صَغِيرَةٌ", "حَدَائِقُ", "لَنَا"],
            correctAnswer: "لَنَا حَدَائِقُ صَغِيرَةٌ"
        }
    ]
};
