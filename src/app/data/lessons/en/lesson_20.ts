import { Lesson } from '../../types';

export const lesson20: Lesson = {
    id: 20,
    title: "Lesson 20: Numbers 3-10 (Feminine)",
    grammar: "Numbers 3-10 with Feminine Nouns",
    theory: {
        sections: [
            {
                title: "🔢 Numbers 3-10 with Feminine Nouns",
                content: "We learned that with Masculine nouns, numbers 3-10 take a 'feminine' ending (with ة).\nWith **Feminine nouns**, it's the opposite: numbers take the 'masculine' form (WITHOUT ة)!\nThis is called 'Gender Polarity' in numbers.",
                examples: [
                    { arabic: "ثَلَاثُ طَالِبَاتٍ", meaning: "Three female students (Thalathu - no ة)" },
                    { arabic: "أَرْبَعُ سَيَّارَاتٍ", meaning: "Four cars (Arba'u - no ة)" },
                    { arabic: "عَشْرُ نِسَاءٍ", meaning: "Ten women ('Ashru - no ة)" }
                ]
            },
            {
                title: "📏 The Counted Noun Rule",
                content: "The counted noun (Ma'dūd) must be **Plural** and **Genitive** (Majrūr - Kasra/Tanwin Kasra).\nIt works like an Idafa: The Number is the Mudaf, and the Counted Noun is the Mudaf Ilayhi.",
                examples: [
                    { arabic: "خَمْسُ صَلَوَاتٍ", meaning: "Five prayers" },
                    { arabic: "سِتُّ مُمَرِّضَاتٍ", meaning: "Six nurses" }
                ]
            },
            {
                title: "🕵️ How to determine gender?",
                content: "To avoid mistakes, always look at the **Singular form** of the word.\nFor example, 'Gardens' (Hada'iq) is feminine because the singular is 'Hadiqa' (Garden). So the number will be without ة.",
                examples: [
                    { arabic: "هَذِهِ ثَلَاثُ حَدَائِقَ", meaning: "These are three gardens" },
                    { arabic: "تِسْعُ آيَاتٍ", meaning: "Nine verses (Singular 'Ayah' is fem.)" }
                ]
            },
            {
                title: "📝 Summary Table (3-10)",
                content: "- 3: **ثَلَاثُ**\n- 4: **أَرْبَعُ**\n- 5: **خَمْسُ**\n- 6: **سِتُّ**\n- 7: **سَبْعُ**\n- 8: **ثَمَانِي** (special form)\n- 9: **تِسْعُ**\n- 10: **عَشْرُ**",
                examples: [
                    { arabic: "فِي الْبَيْتِ ثَمَانِي غُرَفٍ", meaning: "In the house are eight rooms" },
                    { arabic: "عِنْدِي سَبْعُ بَنَاتٍ", meaning: "I have seven daughters" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "20-1",
            type: "multiple-choice",
            question: "Choose correct phrase: '3 female students'",
            options: ["ثَلَاثَةُ طَالِبَاتٍ", "ثَلَاثُ طَالِبَاتٍ", "ثَلَاثُ طَالِبَةٍ"],
            correctAnswer: "ثَلَاثُ طَالِبَاتٍ"
        },
        {
            id: "20-2",
            type: "word-scramble",
            question: "Arrange: 'Seven nights' (Layalin - pl. of Layla, fem.)",
            arabic: "سَبْعُ لَيَالٍ",
            scrambledWords: ["لَيَالٍ", "سَبْعُ"],
            correctAnswer: "سَبْعُ لَيَالٍ"
        },
        {
            id: "20-3",
            type: "multiple-choice",
            question: "«5 cars» (Sayyarah - fem.)",
            options: ["خَمْسَةُ سَيَّارَاتٍ", "خَمْسُ سَيَّارَاتٍ", "خَمْسُ سَيَّارَةٍ"],
            correctAnswer: "خَمْسُ سَيَّارَاتٍ"
        },
        {
            id: "20-4",
            type: "matching",
            question: "Match number and counted noun",
            pairs: [
                { "arabic": "ثَلَاثُ", "meaning": "Girls (Banat)" },
                { "arabic": "ثَلَاثَةُ", "meaning": "Boys (Awlad - masc!)" },
                { "arabic": "عَشْرُ", "meaning": "Women (Nisa')" },
                { "arabic": "عَشَرَةُ", "meaning": "Men (Rijal - masc!)" }
            ]
        },
        {
            id: "20-5",
            type: "multiple-choice",
            question: "What is the gender of 'Ghuraf' (Rooms)?",
            options: ["Masculine", "Feminine (sing. Ghurfa)", "Neuter"],
            correctAnswer: "Feminine (sing. Ghurfa)"
        },
        {
            id: "20-6",
            type: "multiple-choice",
            question: "How to write '8' for feminine counted noun?",
            options: ["ثَمَانِيَةُ", "ثَمَانِي", "ثَمَانٍ"],
            correctAnswer: "ثَمَانِي"
        },
        {
            id: "20-7",
            type: "word-scramble",
            question: "Arrange: 'He has four sisters'",
            arabic: "لَهُ أَرْبَعُ أَخَوَاتٍ",
            scrambledWords: ["أَخَوَاتٍ", "أَرْبَعُ", "لَهُ"],
            correctAnswer: "لَهُ أَرْبَعُ أَخَوَاتٍ"
        },
        {
            id: "20-8",
            type: "multiple-choice",
            question: "Select correct form: '6 hours' (Hour - Sa'ah)",
            options: ["سِتُّ سَاعَاتٍ", "سِتَّةُ سَاعَاتٍ", "سِتُّ سَاعَةٍ"],
            correctAnswer: "سِتُّ سَاعَاتٍ"
        },
        {
            id: "20-9",
            type: "multiple-choice",
            question: "«In the hospital are ten female doctors»",
            options: ["فِي الْمُسْتَشْفَى عَشَرَةُ طَبِيبَاتٍ", "فِي الْمُسْتَشْفَى عَشْرُ طَبِيبَاتٍ", "فِي الْمُسْتَشْفَى عَشْرُ أَطِبَّاءَ"],
            correctAnswer: "فِي الْمُسْتَشْفَى عَشْرُ طَبِيبَاتٍ"
        },
        {
            id: "20-10",
            type: "word-scramble",
            question: "Arrange: 'We read 9 verses'",
            arabic: "قَرَأْنَا تِسْعَ آيَاتٍ",
            scrambledWords: ["تِسْعَ", "آيَاتٍ", "قَرَأْنَا"],
            correctAnswer: "قَرَأْنَا تِسْعَ آيَاتٍ"
        }
    ]
};
