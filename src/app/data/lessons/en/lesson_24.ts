import { Lesson } from '../../types';

export const lesson24: Lesson = {
    id: 24,
    title: "Lesson 24: Inna (Indeed) & its Sisters",
    grammar: "Inna (Indeed), Lalla (Maybe), Dhu (Possessor)",
    theory: {
        sections: [
            {
                title: "💎 'Inna' (Indeed/Verily)",
                content: "The particle **إِنَّ** (Inna) is used for emphasis and translates as 'Indeed', 'Verily', or 'Certainly'.\nIt changes the case of the subject (Mubtada) to **Accusative** (Nasb — Fatha).",
                examples: [
                    { arabic: "الْبَيْتُ جَمِيلٌ", meaning: "The house is beautiful (Damma)" },
                    { arabic: "إِنَّ الْبَيْتَ جَمِيلٌ", meaning: "Indeed, the house is beautiful (Fatha)" },
                    { arabic: "إِنَّ اللهَ غَفُورٌ", meaning: "Indeed, Allah is Forgiving" }
                ]
            },
            {
                title: "🤔 'Lalla' (Maybe/Hopefully)",
                content: "**لَعَلَّ** (La'alla) is a 'sister' of Inna. It expresses hope or fear ('Maybe', 'Hopefully').\nIt also puts the subject in the **Accusative case** (Fatha).",
                examples: [
                    { arabic: "لَعَلَّ الْمُدَرِّسَ مَرِيضٌ", meaning: "Maybe the teacher is sick" },
                    { arabic: "لَعَلَّ الْإِمْتِحَانَ سَهْلٌ", meaning: "Hopefully the exam is easy" }
                ]
            },
            {
                title: "🎩 The Possessor (Dhu)",
                content: "The word **ذُو** (Dhu) means 'Possessor of' or 'Owner of'. It is always used as a Mudaf.\n- **ذُو مَالٍ** — Possessor of wealth (Wealthy)\n- **ذُو خُلُقٍ** — Possessor of character (Well-mannered)",
                examples: [
                    { arabic: "مُدِيرُنَا ذُو قَامَةٍ طَوِيلَةٍ", meaning: "Our director is tall (lit. possessor of tall stature)" },
                    { arabic: "هَذَا الطَّالِبُ ذُو خُلُقٍ حَسَنٍ", meaning: "This student has good character" }
                ]
            },
            {
                title: "🔢 Numbers 100 and 1000",
                content: "The numbers **مِائَةٌ** (Mi'atun — 100) and **أَلْفٌ** (Alfun — 1000) do not change gender.\nThe counted noun follows them in **Singular** and **Genitive** (as Mudaf Ilayhi).",
                examples: [
                    { arabic: "مِائَةُ رَجُلٍ", meaning: "100 men" },
                    { arabic: "مِائَةُ امْرَأَةٍ", meaning: "100 women" },
                    { arabic: "أَلْفُ دُولَارٍ", meaning: "1000 dollars" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "24-1",
            type: "multiple-choice",
            question: "Which sentence is grammatically correct?",
            options: ["إِنَّ الْبَيْتُ جَمِيلٌ", "إِنَّ الْبَيْتَ جَمِيلٌ", "إِنَّ الْبَيْتِ جَمِيلٌ"],
            correctAnswer: "إِنَّ الْبَيْتَ جَمِيلٌ"
        },
        {
            id: "24-2",
            type: "word-scramble",
            question: "Arrange: 'Maybe the exam is easy'",
            arabic: "لَعَلَّ الْإِمْتِحَانَ سَهْلٌ",
            scrambledWords: ["سَهْلٌ", "الْإِمْتِحَانَ", "لَعَلَّ"],
            correctAnswer: "لَعَلَّ الْإِمْتِحَانَ سَهْلٌ"
        },
        {
            id: "24-3",
            type: "multiple-choice",
            question: "How to say 'Wealthy' (Possessor of wealth)?",
            options: ["ذُو مَالٍ", "ذُو مَالًا", "ذُو مَالٌ"],
            correctAnswer: "ذُو مَالٍ"
        },
        {
            id: "24-4",
            type: "matching",
            question: "Match particle with meaning",
            pairs: [
                { "arabic": "إِنَّ", "meaning": "Indeed / Verily" },
                { "arabic": "لَعَلَّ", "meaning": "Maybe / Hopefully" },
                { "arabic": "ذُو", "meaning": "Possessor of" },
                { "arabic": "أَلْفٌ", "meaning": "Thousand" }
            ]
        },
        {
            id: "24-5",
            type: "multiple-choice",
            question: "Select correct counted noun: '100 books'",
            options: ["مِائَةُ كُتُبٍ", "مِائَةُ كِتَابٍ", "مِائَةُ كِتَابًا"],
            correctAnswer: "مِائَةُ كِتَابٍ"
        },
        {
            id: "24-6",
            type: "multiple-choice",
            question: "'Zaid is hungry'. Add 'Inna':",
            options: ["إِنَّ زَيْدٌ جَوْعَانُ", "إِنَّ زَيْدًا جَوْعَانُ", "إِنَّ زَيْدٍ جَوْعَانُ"],
            correctAnswer: "إِنَّ زَيْدًا جَوْعَانُ"
        },
        {
            id: "24-7",
            type: "word-scramble",
            question: "Arrange: 'Indeed Allah is with us'",
            arabic: "إِنَّ اللهَ مَعَنَا",
            scrambledWords: ["مَعَنَا", "اللهَ", "إِنَّ"],
            correctAnswer: "إِنَّ اللهَ مَعَنَا"
        },
        {
            id: "24-8",
            type: "multiple-choice",
            question: "This shirt is 'expensive' (Ghalin):",
            options: ["غَالِيٌ", "غَالٍ", "غَالِيًا"],
            correctAnswer: "غَالٍ"
        },
        {
            id: "24-9",
            type: "multiple-choice",
            question: "'Or' in a question: 'Are you a doctor OR an engineer?'",
            options: ["أَ طَبِيبٌ أَنْتَ أَمْ مُهَنْدِسٌ؟", "أَ طَبِيبٌ أَنْتَ أَوْ مُهَنْدِسٌ؟"],
            correctAnswer: "أَ طَبِيبٌ أَنْتَ أَمْ مُهَنْدِسٌ؟"
        },
        {
            id: "24-10",
            type: "word-scramble",
            question: "Arrange: 'This shirt has short sleeves'",
            arabic: "هَذَا الْقَمِيصُ ذُو كُمٍّ قَصِيرٍ",
            scrambledWords: ["كُمٍّ", "هَذَا", "ذُو", "قَصِيرٍ", "الْقَمِيصُ"],
            correctAnswer: "هَذَا الْقَمِيصُ ذُو كُمٍّ قَصِيرٍ"
        }
    ]
};
