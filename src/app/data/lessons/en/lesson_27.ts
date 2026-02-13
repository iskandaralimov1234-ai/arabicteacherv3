import { Lesson } from '../../types';

export const lesson27: Lesson = {
    id: 27,
    title: "Lesson 27: 'Kāna' (Was) & Feminine Numbers 11-20",
    grammar: "Kana (Was), Feminine Numbers 11-20",
    theory: {
        sections: [
            {
                title: "⏳ The Verb 'Was' (كَانَ)",
                content: "**كَانَ** (Kāna) means 'He was' or 'It was'. It functions opposite to 'Inna'.\nThe Subject (Ism Kāna) remains in **Raf'** (Damma), while the Predicate (Khabar Kāna) becomes **Nasb** (Accusative — Fatha).",
                examples: [
                    { arabic: "الْبَيْتُ جَدِيدٌ", meaning: "The house is new" },
                    { arabic: "كَانَ الْبَيْتُ جَدِيدًا", meaning: "The house WAS new (Jadidan)" },
                    { arabic: "كَانَ الْمُدَرِّسُ مَرِيضًا", meaning: "The teacher was sick" }
                ]
            },
            {
                title: "🔢 Numbers 11-20 (Feminine)",
                content: "For feminine nouns, numbers 11 and 12 have special forms:\n- 11: **إِحْدَى عَشْرَةَ** (Iḥdā 'ashrata)\n- 12: **اِثْنَتَا عَشْرَةَ** (Ithnatā 'ashrata)\nFrom 13 to 19: The first part is Masculine (no ta marbuta), and the second part is Feminine (with ta marbuta).\nExample: **ثَلَاثَ عَشْرَةَ** (Thalātha (m) 'ashrata (f)).",
                examples: [
                    { arabic: "إِحْدَى عَشْرَةَ طَالِبَةً", meaning: "11 female students" },
                    { arabic: "اِثْنَتَا عَشْرَةَ سَيَّارَةً", meaning: "12 cars" },
                    { arabic: "خَمْسَ عَشْرَةَ دَقِيقَةً", meaning: "15 minutes" }
                ]
            },
            {
                title: "👩 Feminine Names & Diptotes",
                content: "Reminder: Feminine names (Fatima, Zainab) do not accept Tanwin.\nHowever, 3-letter names with a Sukun in the middle (Hind) can either take Tanwin (Hindun) or look like Diptotes (Hindu). In this course, we treat them as Diptotes mostly.",
                examples: [
                    { arabic: "رَأَيْتُ زَيْنَبَ", meaning: "I saw Zainab (Zainaba)" },
                    { arabic: "سَلَّمْتُ عَلَى هِنْدَ", meaning: "I greeted Hind (Hinda)" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "27-1",
            type: "multiple-choice",
            question: "How to say 'The lesson was easy'?",
            options: ["كَانَ الدَّرْسُ سَهْلٌ", "كَانَ الدَّرْسُ سَهْلًا", "كَانَ الدَّرْسَ سَهْلًا"],
            correctAnswer: "كَانَ الدَّرْسُ سَهْلًا"
        },
        {
            id: "27-2",
            type: "multiple-choice",
            question: "Choose the number for '11 cars' (Car - f.)",
            options: ["أَحَدَ عَشَرَ سَيَّارَةً", "إِحْدَى عَشْرَةَ سَيَّارَةً", "إِحْدَى عَشَرَ سَيَّارَةً"],
            correctAnswer: "إِحْدَى عَشْرَةَ سَيَّارَةً"
        },
        {
            id: "27-3",
            type: "word-scramble",
            question: "Arrange: 'Muhammad was a student'",
            arabic: "كَانَ مُحَمَّدٌ طَالِبًا",
            scrambledWords: ["مُحَمَّدٌ", "كَانَ", "طَالِبًا"],
            correctAnswer: "كَانَ مُحَمَّدٌ طَالِبًا"
        },
        {
            id: "27-4",
            type: "multiple-choice",
            question: "«15 minutes» (Minute - daqiqa, f.)",
            options: ["خَمْسَةَ عَشَرَ دَقِيقَةً", "خَمْسَ عَشْرَةَ دَقِيقَةً", "خَمْسَ عَشَرَ دَقِيقَةً"],
            correctAnswer: "خَمْسَ عَشْرَةَ دَقِيقَةً"
        },
        {
            id: "27-5",
            type: "matching",
            question: "Match number and gender (for counted noun)",
            pairs: [
                { "arabic": "أَحَدَ عَشَرَ", "meaning": "Masculine (11)" },
                { "arabic": "إِحْدَى عَشْرَةَ", "meaning": "Feminine (11)" },
                { "arabic": "تِسْعَةَ عَشَرَ", "meaning": "Masculine (19)" },
                { "arabic": "تِسْعَ عَشْرَةَ", "meaning": "Feminine (19)" }
            ]
        },
        {
            id: "27-6",
            type: "multiple-choice",
            question: "Ending of 'Zainab' after preposition 'Ila'?",
            options: ["إِلَى زَيْنَبِ", "إِلَى زَيْنَبَ", "إِلَى زَيْنَبٍ"],
            correctAnswer: "إِلَى زَيْنَبَ"
        },
        {
            id: "27-7",
            type: "word-scramble",
            question: "Arrange: 'The door was open'",
            arabic: "كَانَ الْبَابُ مَفْتُوحًا",
            scrambledWords: ["مَفْتُوحًا", "الْبَابُ", "كَانَ"],
            correctAnswer: "كَانَ الْبَابُ مَفْتُوحًا"
        },
        {
            id: "27-8",
            type: "multiple-choice",
            question: "«12 female students»",
            options: ["اِثْنَا عَشَرَ طَالِبَةً", "اِثْنَتَا عَشْرَةَ طَالِبَةً", "اِثْنَيْ عَشَرَ طَالِبَةً"],
            correctAnswer: "اِثْنَتَا عَشْرَةَ طَالِبَةً"
        },
        {
            id: "27-9",
            type: "multiple-choice",
            question: "What is the function of 'Kāna'?",
            options: ["Makes Khabar Mansub (Fatha)", "Makes Ism Mansub (Fatha)", "Does nothing"],
            correctAnswer: "Makes Khabar Mansub (Fatha)"
        },
        {
            id: "27-10",
            type: "word-scramble",
            question: "Arrange: 'The watch is expensive' (As-Sa'ah ghāliya)",
            arabic: "السَّاعَةُ غَالِيَةٌ",
            scrambledWords: ["غَالِيَةٌ", "السَّاعَةُ"],
            correctAnswer: "السَّاعَةُ غَالِيَةٌ"
        }
    ]
};
