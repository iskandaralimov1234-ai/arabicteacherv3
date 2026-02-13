import { Lesson } from '../../types';

export const lesson22: Lesson = {
    id: 22,
    title: "Lesson 22: Diptotes (Part 2)",
    grammar: "Diptotes: Categories & Rules",
    theory: {
        sections: [
            {
                title: "🚫 Proper Nouns (Feminine & Special Masculine)",
                content: "The following names do not accept Tanwin (are Diptotes):\n1. **All Feminine Names**: Zainabu (زَيْنَبُ), Maryamu (مَرْيَمُ), Fatimatu (فَاطِمَةُ).\n2. **Masculine Names ending in ة**: Hamzatu (حَمْزَةُ), Usamatu (أُسَامَةُ), Talhatu (طَلْحَةُ).",
                examples: [
                    { arabic: "هَذِهِ زَيْنَبُ", meaning: "This is Zainab (not Zainabun)" },
                    { arabic: "كِتَابُ حَمْزَةَ", meaning: "Hamza's book (Genitive — Fatha!)" },
                    { arabic: "رَأَيْتُ أُسَامَةَ", meaning: "I saw Usama" }
                ]
            },
            {
                title: "😡 Adjectives ending in -ān",
                content: "Masculine adjectives ending in **-ān** (Alif-Nun) also do not accept Tanwin:\n- **غَضْبَانُ** (Ghadbānu) — Angry\n- **كَسْلَانُ** (Kaslānu) — Lazy\n- **جَوْعَانُ** (Jaw'ānu) — Hungry",
                examples: [
                    { arabic: "أَنَا جَوْعَانُ", meaning: "I am hungry" },
                    { arabic: "هُوَ كَسْلَانُ", meaning: "He is lazy" },
                    { arabic: "لِمَاذَا أَنْتَ غَضْبَانُ؟", meaning: "Why are you angry?" }
                ]
            },
            {
                title: "🌍 Non-Arabic Names & Cities",
                content: "Prophets' names (except a few like Muhammad, Salih, Shu'aib, Hud, Nuh, Lut) and city names are often Non-Arabic and do not accept Tanwin.",
                examples: [
                    { arabic: "إِبْرَاهِيمُ", meaning: "Ibrahim" },
                    { arabic: "يُوسُفُ", meaning: "Yusuf" },
                    { arabic: "لَنْدَنُ", meaning: "London" },
                    { arabic: "بَاكِسْتَانُ", meaning: "Pakistan" }
                ]
            },
            {
                title: "⚡ The Genitive Rule",
                content: "The main rule of Diptotes: **In the Genitive case** (after prepositions or in Idafa), they take a **FATHA** (a) instead of a Kasra (i).",
                examples: [
                    { arabic: "مِنْ مَكَّةَ", meaning: "From Makkah (Min Makkata)" },
                    { arabic: "إِلَى بَغْدَادَ", meaning: "To Baghdad (Ila Baghdada)" },
                    { arabic: "فِي مَسَاجِدَ كَثِيرَةٍ", meaning: "In many mosques (Fi masājida...)" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "22-1",
            type: "multiple-choice",
            question: "Which name is written correctly (without Tanwin)?",
            options: ["زَيْنَبٌ", "زَيْنَبُ", "زَيْنَبٍ"],
            correctAnswer: "زَيْنَبُ"
        },
        {
            id: "22-2",
            type: "multiple-choice",
            question: "Choose correct form: 'From Fatimah'",
            options: ["مِنْ فَاطِمَةِ", "مِنْ فَاطِمَةَ", "مِنْ فَاطِمَةٍ"],
            correctAnswer: "مِنْ فَاطِمَةَ"
        },
        {
            id: "22-3",
            type: "word-scramble",
            question: "Arrange: 'I am hungry'",
            arabic: "أَنَا جَوْعَانُ",
            scrambledWords: ["جَوْعَانُ", "أَنَا", "جَوْعَانٌ"],
            correctAnswer: "أَنَا جَوْعَانُ"
        },
        {
            id: "22-4",
            type: "matching",
            question: "Match name with category",
            pairs: [
                { "arabic": "حَمْزَةُ", "meaning": "Masc with ة" },
                { "arabic": "مَرْيَمُ", "meaning": "Feminine" },
                { "arabic": "وِلْيَمُ", "meaning": "Foreign (William)" },
                { "arabic": "أَحْمَدُ", "meaning": "Verb Weight (Af'alu)" }
            ]
        },
        {
            id: "22-5",
            type: "multiple-choice",
            question: "How to say 'In London'?",
            options: ["فِي لَنْدَنِ", "فِي لَنْدَنَ", "فِي لَنْدَنٍ"],
            correctAnswer: "فِي لَنْدَنَ"
        },
        {
            id: "22-6",
            type: "multiple-choice",
            question: "Translate: 'Lazy student'",
            options: ["طَالِبٌ كَسْلَانُ", "طَالِبٌ كَسْلَانٌ", "طَالِبٌ كَسْلَانِ"],
            correctAnswer: "طَالِبٌ كَسْلَانُ"
        },
        {
            id: "22-7",
            type: "word-scramble",
            question: "Arrange: 'Ibrahim's Book'",
            arabic: "كِتَابُ إِبْرَاهِيمَ",
            scrambledWords: ["إِبْرَاهِيمَ", "كِتَابُ", "إِبْرَاهِيمِ"],
            correctAnswer: "كِتَابُ إِبْرَاهِيمَ"
        },
        {
            id: "22-8",
            type: "multiple-choice",
            question: "Choose the name that TAKES Tanwin (Normal):",
            options: ["مُحَمَّدٌ", "يُوسُفُ", "فَاطِمَةُ"],
            correctAnswer: "مُحَمَّدٌ"
        },
        {
            id: "22-9",
            type: "multiple-choice",
            question: "'Why are you angry?'",
            options: ["لِمَاذَا أَنْتَ غَضْبَانُ؟", "لِمَاذَا أَنْتَ غَضْبَانٌ؟", "لِمَاذَا أَنْتَ غَضْبَانِ؟"],
            correctAnswer: "لِمَاذَا أَنْتَ غَضْبَانُ؟"
        },
        {
            id: "22-10",
            type: "word-scramble",
            question: "Arrange: 'We went to Makkah'",
            arabic: "ذَهَبْنَا إِلَى مَكَّةَ",
            scrambledWords: ["مَكَّةَ", "إِلَى", "ذَهَبْنَا"],
            correctAnswer: "ذَهَبْنَا إِلَى مَكَّةَ"
        }
    ]
};
