import { Lesson } from '../../types';

export const lesson30: Lesson = {
    id: 30,
    title: "Lesson 30: Possessors (Dhu/Dhatu) & Weak Verbs",
    grammar: "Dhu/Dhatu & Weak Verbs Intro",
    theory: {
        sections: [
            {
                title: "🎩 Possessors: Dhu, Dhatu, Dhawu, Dhawatu",
                content: "We learned **ذُو** (Dhu) for singular masculine. Here is the full table of 'Possessor of':\n- Sing. Masc: **ذُو** (Dhu)\n- Sing. Fem: **ذَاتُ** (Dhatu)\n- Pl. Masc: **ذَوُو** (Dhawu)\n- Pl. Fem: **ذَوَاتُ** (Dhawatu)",
                examples: [
                    { arabic: "رَجُلٌ ذُو مَالٍ", meaning: "A wealthy man (possessor of wealth)" },
                    { arabic: "امْرَأَةٌ ذَاتُ جَمَالٍ", meaning: "A beautiful woman (possessor of beauty)" },
                    { arabic: "رِجَالٌ ذَوُو مَالٍ", meaning: "Wealthy men" }
                ]
            },
            {
                title: "🗣️ Weak Verbs (Ajwaf)",
                content: "Verbs where the middle root letter is weak (Alif, Waw, Ya) are called **Ajwaf** (Hollow).\nExamples: **قَالَ** (He said), **قَامَ** (He stood), **زَارَ** (He visited).\nThey undergo changes during conjugation.",
                examples: [
                    { arabic: "قَالَ الْمُدَرِّسُ", meaning: "The teacher said" },
                    { arabic: "زَارَ مُحَمَّدٌ صَدِيقَهُ", meaning: "Muhammad visited his friend" }
                ]
            },
            {
                title: "📣 Vocative (Ya)",
                content: "When calling a plural group:\n- **يَا إِخْوَةُ** (O Brothers!)\n- **يَا أَخَوَاتُ** (O Sisters!)\nThe word after 'Ya' loses Tanwin (becomes Marfu' without Tanwin).",
                examples: [
                    { arabic: "يَا أَوْلَادُ", meaning: "O children!" },
                    { arabic: "يَا رِجَالُ", meaning: "O men!" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "30-1",
            type: "multiple-choice",
            question: "How to say 'A woman with good character' (Dhatu khuluq)?",
            options: ["امْرَأَةٌ ذُو خُلُقٍ", "امْرَأَةٌ ذَاتُ خُلُقٍ", "امْرَأَةٌ ذَوَاتُ خُلُقٍ"],
            correctAnswer: "امْرَأَةٌ ذَاتُ خُلُقٍ"
        },
        {
            id: "30-2",
            type: "word-scramble",
            question: "Arrange: 'Students are possessors of knowledge'",
            arabic: "الطُّلَّابُ ذَوُو عِلْمٍ",
            scrambledWords: ["عِلْمٍ", "ذَوُو", "الطُّلَّابُ"],
            correctAnswer: "الطُّلَّابُ ذَوُو عِلْمٍ"
        },
        {
            id: "30-3",
            type: "multiple-choice",
            question: "Plural for 'Dhatu' (Possessor fem.):",
            options: ["ذَوَاءُ", "ذَوَاتُ", "ذَوَى"],
            correctAnswer: "ذَوَاتُ"
        },
        {
            id: "30-4",
            type: "matching",
            question: "Match Dhu form with gender/number",
            pairs: [
                { "arabic": "ذُو", "meaning": "Sing. Masc." },
                { "arabic": "ذَاتُ", "meaning": "Sing. Fem." },
                { "arabic": "ذَوُو", "meaning": "Pl. Masc." },
                { "arabic": "ذَوَاتُ", "meaning": "Pl. Fem." }
            ]
        },
        {
            id: "30-5",
            type: "multiple-choice",
            question: "Select an Ajwaf (Hollow) verb:",
            options: ["كَتَبَ", "قَالَ", "ذَهَبَ"],
            correctAnswer: "قَالَ"
        },
        {
            id: "30-6",
            type: "multiple-choice",
            question: "Correct vocative: 'O students!'",
            options: ["يَا طُلَّابًا", "يَا طُلَّابُ", "يَا طُلَّابِ"],
            correctAnswer: "يَا طُلَّابُ"
        },
        {
            id: "30-7",
            type: "word-scramble",
            question: "Arrange: 'Bilal said the truth'",
            arabic: "قَالَ بِلَالٌ الْحَقَّ",
            scrambledWords: ["الْحَقَّ", "قَالَ", "بِلَالٌ"],
            correctAnswer: "قَالَ بِلَالٌ الْحَقَّ"
        },
        {
            id: "30-8",
            type: "multiple-choice",
            question: "'Dhu' is always a...",
            options: ["Mudaf", "Mudaf Ilayhi", "Verb"],
            correctAnswer: "Mudaf"
        },
        {
            id: "30-9",
            type: "multiple-choice",
            question: "Translate: 'These gardens possess fruits'",
            options: ["هَذِهِ الْحَدَائِقُ ذَاتُ ثِمَارٍ", "هَذِهِ الْحَدَائِقُ ذَوَاتُ ثِمَارٍ", "هَذِهِ الْحَدَائِقُ ذُو ثِمَارٍ"],
            correctAnswer: "هَذِهِ الْحَدَائِقُ ذَوَاتُ ثِمَارٍ"
        },
        {
            id: "30-10",
            type: "word-scramble",
            question: "Arrange: 'My uncle visited Makkah'",
            arabic: "زَارَ عَمِّي مَكَّةَ",
            scrambledWords: ["مَكَّةَ", "عَمِّي", "زَارَ"],
            correctAnswer: "زَارَ عَمِّي مَكَّةَ"
        }
    ]
};
