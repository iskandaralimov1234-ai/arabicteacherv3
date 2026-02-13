import { Lesson } from '../../types';

export const lesson26: Lesson = {
    id: 26,
    title: "Lesson 26: Comparatives & Numbers 11-20",
    grammar: "Comparatives & Numbers 11-20",
    theory: {
        sections: [
            {
                title: "📏 Comparative Adjectives (أَفْعَلُ مِن)",
                content: "To say 'Bigger than' or 'More beautiful than', we use the pattern **أَفْعَلُ مِن** (Af'alu min).\n- **أَطْوَلُ مِنْ** — Taller than\n- **أَجْمَلُ مِنْ** — More beautiful than\n- **أَصْغَرُ مِنْ** — Smaller than",
                examples: [
                    { arabic: "حَامِدٌ أَطْوَلُ مِنْ بِلَالٍ", meaning: "Hamid is taller than Bilal" },
                    { arabic: "هَذَا الْكِتَابُ أَسْهَلُ مِنْ ذَاكَ", meaning: "This book is easier than that one" },
                    { arabic: "آَمِنَةُ أَصْغَرُ مِنْ زَيْنَبَ", meaning: "Aminah is younger/smaller than Zainab" }
                ]
            },
            {
                title: "🏆 Superlative Degree",
                content: "The same pattern **أَفْعَلُ** is used for 'The most...' when followed by a noun in the Genitive case (as a Mudaf).\n- **أَحْسَنُ طَالِبٍ** — The best student\n- **أَكْبَرُ غُرْفَةٍ** — The biggest room",
                examples: [
                    { arabic: "مُحَمَّدٌ أَحْسَنُ طَالِبٍ فِي الْفَصْلِ", meaning: "Muhammad is the best student in the class" },
                    { arabic: "اللهُ أَكْبَرُ", meaning: "Allah is The Greatest" }
                ]
            },
            {
                title: "🔢 Numbers 11-20 (Part 1)",
                content: "Numbers from 11 to 19 consist of two parts, and both parts have a **Fatha** (are indeclinable).\nThe counted noun is **Singular** and **Accusative** (as Tamyiz).",
                examples: [
                    { arabic: "أَحَدَ عَشَرَ كَوْكَباً", meaning: "Eleven stars" },
                    { arabic: "تِسْعَةَ عَشَرَ طَالِباً", meaning: "Nineteen students" }
                ]
            },
            {
                title: "👥 People (Plurals Review)",
                content: "Many words referring to people take broken plurals.\n- **فَتًى** (Young man) ➡ **فِتْيَةٌ** (Young men)\n- **أَخٌ** (Brother) ➡ **إِخْوَةٌ** (Brothers)",
                examples: [
                    { arabic: "هَؤُلَاءِ إِخْوَتِي", meaning: "These are my brothers" },
                    { arabic: "هُمْ فِتْيَةٌ صِغَارٌ", meaning: "They are young men" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "26-1",
            type: "multiple-choice",
            question: "How to say 'Ahmad is taller than Ali'?",
            options: ["أَحْمَدُ طَوِيلٌ عَلِيٍّ", "أَحْمَدُ أَطْوَلُ مِنْ عَلِيٍّ", "أَحْمَدُ أَطْوَلَ مِنْ عَلِيٍّ"],
            correctAnswer: "أَحْمَدُ أَطْوَلُ مِنْ عَلِيٍّ"
        },
        {
            id: "26-2",
            type: "word-scramble",
            question: "Arrange: 'This car is more beautiful than that one'",
            arabic: "هَذِهِ السَّيَّارَةُ أَجْمَلُ مِنْ تِلْكَ",
            scrambledWords: ["أَجْمَلُ", "السَّيَّارَةُ", "هَذِهِ", "مِنْ", "تِلْكَ"],
            correctAnswer: "هَذِهِ السَّيَّارَةُ أَجْمَلُ مِنْ تِلْكَ"
        },
        {
            id: "26-3",
            type: "multiple-choice",
            question: "How to say 'The best house'?",
            options: ["أَحْسَنُ بَيْتٍ", "أَحْسَنُ بَيْتًا", "أَحْسَنُ الْبَيْتِ"],
            correctAnswer: "أَحْسَنُ بَيْتٍ"
        },
        {
            id: "26-4",
            type: "matching",
            question: "Match adjective and degree",
            pairs: [
                { "arabic": "كَبِيرٌ", "meaning": "Big" },
                { "arabic": "أَكْبَرُ", "meaning": "Bigger / Biggest" },
                { "arabic": "صَغِيرٌ", "meaning": "Small" },
                { "arabic": "أَصْغَرُ", "meaning": "Smaller / Smallest" }
            ]
        },
        {
            id: "26-5",
            type: "multiple-choice",
            question: "Select correct writing: '11 stars'",
            options: ["أَحَدَ عَشَرَ كَوْكَبٌ", "أَحَدَ عَشَرَ كَوْكَباً", "أَحَدُ عَشَرَ كَوْكَباً"],
            correctAnswer: "أَحَدَ عَشَرَ كَوْكَباً"
        },
        {
            id: "26-6",
            type: "multiple-choice",
            question: "'The Sun is bigger than the Moon'",
            options: ["الشَّمْسُ أَكْبَرُ مِنَ الْقَمَرِ", "الشَّمْسُ كَبِيرَةٌ مِنَ الْقَمَرِ", "الشَّمْسُ أَكْبَرُ الْقَمَرِ"],
            correctAnswer: "الشَّمْسُ أَكْبَرُ مِنَ الْقَمَرِ"
        },
        {
            id: "26-7",
            type: "word-scramble",
            question: "Arrange: 'I saw eleven stars'",
            arabic: "رَأَيْتُ أَحَدَ عَشَرَ كَوْكَباً",
            scrambledWords: ["كَوْكَباً", "عَشَرَ", "رَأَيْتُ", "أَحَدَ"],
            correctAnswer: "رَأَيْتُ أَحَدَ عَشَرَ كَوْكَباً"
        },
        {
            id: "26-8",
            type: "multiple-choice",
            question: "Plural of 'Fatā' (Young man):",
            options: ["فِتْيَةٌ", "فَتَيَاتٌ", "أَفْتِيَاءُ"],
            correctAnswer: "فِتْيَةٌ"
        },
        {
            id: "26-9",
            type: "multiple-choice",
            question: "'Who is the youngest student?'",
            options: ["مَنْ صَغِيرُ طَالِبٍ؟", "مَنْ أَصْغَرُ طَالِبٍ؟", "مَنْ أَصْغَرُ الطَّالِبِ؟"],
            correctAnswer: "مَنْ أَصْغَرُ طَالِبٍ؟"
        },
        {
            id: "26-10",
            type: "word-scramble",
            question: "Arrange: 'My handwriting is nicer than yours'",
            arabic: "خَطِّي أَجْمَلُ مِنْ خَطِّكَ",
            scrambledWords: ["خَطِّكَ", "أَجْمَلُ", "خَطِّي", "مِنْ"],
            correctAnswer: "خَطِّي أَجْمَلُ مِنْ خَطِّكَ"
        }
    ]
};
