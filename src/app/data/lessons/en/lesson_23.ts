import { Lesson } from '../../types';

export const lesson23: Lesson = {
    id: 23,
    title: "Lesson 23: Diptote Exceptions (Book 1 Finale)",
    grammar: "Diptotes Exceptions (Kasra)",
    theory: {
        sections: [
            {
                title: "🏁 Conclusion of Book 1",
                content: "Congratulations! This is the final lesson of the first book of the Madinah Course.\nHere we will cover an important rule: when 'Diptote' words actually take a Kasra.",
                examples: [
                    { arabic: "الْحَمْدُ لِلَّهِ", meaning: "Praise be to Allah" },
                    { arabic: "أَتْمَمْنَا الْكِتَابَ الْأَوَّلَ", meaning: "We have finished the first book" }
                ]
            },
            {
                title: "⚠️ Exception 1: Article 'Al'",
                content: "Diptote words (Mamnū' min aṣ-ṣarf) take a **KASRA** in the Genitive case if the article **ال** (Al) is added to them.",
                examples: [
                    { arabic: "فِي مَسَاجِدَ", meaning: "In mosques (Fatha - no Al)" },
                    { arabic: "فِي الْمَسَاجِدِ", meaning: "In the mosques (Kasra - has Al)" },
                    { arabic: "بِالْأَقْلَامِ", meaning: "With pens (Kasra - has Al)" }
                ]
            },
            {
                title: "⚠️ Exception 2: Being a Mudaf",
                content: "If a Diptote becomes a **Mudaf** (the first word of Idafa), it also takes a **KASRA** in the Genitive case.",
                examples: [
                    { arabic: "فِي مَسَاجِدِ الْمَدِينَةِ", meaning: "In the mosques of the city (Kasra - Mudaf)" },
                    { arabic: "بِمَفَاتِيحِ الْبَيْتِ", meaning: "With the keys of the house (Kasra - Mudaf)" }
                ]
            },
            {
                title: "📝 General Review",
                content: "We have learned:\n- Sun and Moon Letters\n- Cases (Raf', Nasb, Jarr)\n- Idafa\n- Past Tense Verb\n- Plurals (Sound and Broken)\n- Diptotes",
                examples: [
                    { arabic: "ذَهَبَ الطَّالِبُ إِلَى الْمَدْرَسَةِ", meaning: "The student went to the school" },
                    { arabic: "كِتَابُ مُحَمَّدٍ جَدِيدٌ", meaning: "Muhammad's book is new" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "23-1",
            type: "multiple-choice",
            question: "Choose the correct ending: 'In mosques' (without Al)",
            options: ["فِي مَسَاجِدِ", "فِي مَسَاجِدَ", "فِي مَسَاجِدٍ"],
            correctAnswer: "فِي مَسَاجِدَ"
        },
        {
            id: "23-2",
            type: "multiple-choice",
            question: "Choose the correct ending: 'In the mosques of the city' (Mudaf)",
            options: ["فِي مَسَاجِدِ الْمَدِينَةِ", "فِي مَسَاجِدَ الْمَدِينَةِ", "فِي مَسَاجِدُ الْمَدِينَةِ"],
            correctAnswer: "فِي مَسَاجِدِ الْمَدِينَةِ"
        },
        {
            id: "23-3",
            type: "word-scramble",
            question: "Arrange: 'In the schools' (with Al)",
            arabic: "فِي الْمَدَارِسِ",
            scrambledWords: ["الْمَدَارِسِ", "فِي", "الْمَدَارِسَ"],
            correctAnswer: "فِي الْمَدَارِسِ"
        },
        {
            id: "23-4",
            type: "multiple-choice",
            question: "Which word takes Kasra?",
            options: ["عَلَى مَكْتَبِ الْمُدَرِّسِ", "عَلَى مَكْتَبَ الْمُدَرِّسِ", "عَلَى مَكْتَبُ الْمُدَرِّسِ"],
            correctAnswer: "عَلَى مَكْتَبِ الْمُدَرِّسِ"
        },
        {
            id: "23-5",
            type: "matching",
            question: "Match rule and example",
            pairs: [
                { "arabic": "فِي مَسَاجِدَ", "meaning": "No Al & Not Mudaf (Fatha)" },
                { "arabic": "فِي الْمَسَاجِدِ", "meaning": "With Al (Kasra)" },
                { "arabic": "فِي مَسَاجِدِكُمْ", "meaning": "Mudaf (Kasra)" },
                { "arabic": "مِنْ مَكَّةَ", "meaning": "Diptote Name (Fatha)" }
            ]
        },
        {
            id: "23-6",
            type: "multiple-choice",
            question: "How to say 'With the keys' (with Al)?",
            options: ["بِالْمَفَاتِيحَ", "بِالْمَفَاتِيحِ", "بِالْمَفَاتِيحُ"],
            correctAnswer: "بِالْمَفَاتِيحِ"
        },
        {
            id: "23-7",
            type: "word-scramble",
            question: "Arrange: 'We prayed in big mosques'",
            arabic: "صَلَّيْنَا فِي مَسَاجِدَ كَبِيرَةٍ",
            scrambledWords: ["كَبِيرَةٍ", "مَسَاجِدَ", "فِي", "صَلَّيْنَا"],
            correctAnswer: "صَلَّيْنَا فِي مَسَاجِدَ كَبِيرَةٍ"
        },
        {
            id: "23-8",
            type: "multiple-choice",
            question: "Why does 'Kabiratin' have Kasra in 'Fi masajida kabiratin'?",
            options: ["Because it's a Na'at (description) for 'Masajida' (which is Majrur)", "Because it's an error", "Na'at always has Kasra"],
            correctAnswer: "Because it's a Na'at (description) for 'Masajida' (which is Majrur)"
        },
        {
            id: "23-9",
            type: "multiple-choice",
            question: "Translate: 'In the White House' (Al-Bayt Al-Abyad)",
            options: ["فِي الْبَيْتِ الْأَبْيَضِ", "فِي الْبَيْتِ الْأَبْيَضَ", "فِي الْبَيْتِ أَبْيَضِ"],
            correctAnswer: "فِي الْبَيْتِ الْأَبْيَضِ"
        },
        {
            id: "23-10",
            type: "word-scramble",
            question: "Arrange: 'Praise be to Allah, Lord of the Worlds'",
            arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            scrambledWords: ["رَبِّ", "الْعَالَمِينَ", "لِلَّهِ", "الْحَمْدُ"],
            correctAnswer: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ"
        }
    ]
};
