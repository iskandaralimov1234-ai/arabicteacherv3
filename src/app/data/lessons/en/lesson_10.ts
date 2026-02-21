import { Lesson } from '../../types';

export const lesson10: Lesson = {
    id: 10,
    title: "Lesson 10: الضَّمَائِرُ الْمُتَّصِلَةُ (Attached Pronouns)",
    grammar: "Possessive & Attached Pronouns (my, your, his, her)",
    theory: {
        sections: [
            {
                title: "📎 What are Attached Pronouns?",
                content: "In Arabic, possessive pronouns (my, your, etc.) are not separate words. They are attached to the end of a noun as suffixes.\n\nBasic suffixes for singular nouns:\n1. **«-ī»** (ـِي) — My\n2. **«-ka»** (ـكَ) — Your (masculine)\n3. **«-ki»** (ـكِ) — Your (feminine)\n4. **«-hu»** (ـهُ) — His\n5. **«-hā»** (ـهَا) — Her",
                examples: [
                    { arabic: "كِتَابِي", meaning: "Kitābī — My book" },
                    { arabic: "كِتَابُكَ", meaning: "Kitābuka — Your book (masc.)" },
                    { arabic: "كِتَابُكِ", meaning: "Kitābuki — Your book (fem.)" }
                ]
            },
            {
                title: "🙍‍♂️ Your (Masc.) vs Your (Fem.)",
                content: "The distinction between masculine and feminine is very important when addressing someone.\n- When speaking to a man, use **-ka** (ـكَ).\n- When speaking to a woman, use **-ki** (ـكِ).\n\nIn writing, they look the same (the letter Kaf), but the vowels (Fatha or Kasra) make the difference.",
                examples: [
                    { arabic: "أَيْنَ بَيْتُكَ يَا حَامِدُ؟", meaning: "Where is your house, O Hamid?" },
                    { arabic: "أَيْنَ بَيْتُكِ يَا آمِنَةُ؟", meaning: "Where is your house, O Amina?" },
                    { arabic: "مَا اسْمُكَ؟", meaning: "What is your name? (to a man)" },
                    { arabic: "مَا اسْمُكِ؟", meaning: "What is your name? (to a woman)" }
                ]
            },
            {
                title: "👤 Third Person: His and Her",
                content: "When talking about someone else:\n- **-hu** (ـهُ) for masculine.\n- **-hā** (ـهَا) for feminine.\n\nNote that the letter 'Ha' (ـه) at the end of a word without dots means 'his', while adding an Alif (ـهَا) makes it 'her'.",
                examples: [
                    { arabic: "اِسْمُهُ بِلَالٌ", meaning: "His name is Bilal" },
                    { arabic: "اِسْمُهَا زَيْنَبُ", meaning: "Her name is Zainab" },
                    { arabic: "أَبُوهَا تِاجِرٌ", meaning: "Her father is a merchant" },
                    { arabic: "أُمُّهُ طَبِيبَةٌ", meaning: "His mother is a doctor" }
                ]
            },
            {
                title: "🤫 The Special Rule for 'My' (-ī)",
                content: "When you add the suffix **«-ī»** (ـِي), it forces the letter before it to take a **Kasra** vowel, even if the word normally ends in a Dhamma.\n\nFor example:\n- Kitabu (book) + ī = **Kitābī** (my book).\n- Qalamu (pen) + ī = **Qalamī** (my pen).",
                examples: [
                    { arabic: "هَذَا كِتَابِي", meaning: "This is my book" },
                    { arabic: "هَذَا قَلَمِي", meaning: "This is my pen" },
                    { arabic: "أَنَا طَالِبٌ وَهَذَا مَكْتَبِي", meaning: "I am a student, and this is my desk" }
                ]
            },
            {
                title: "🏡 Pronouns with Family Words",
                content: "The words 'Father' (**أَبٌ**) and 'Brother' (**أَخٌ**) require an extra **Waw** (و) to be inserted before adding suffixes (except for 'my').",
                examples: [
                    { arabic: "أَبِي", meaning: "My father (no change)" },
                    { arabic: "أَبُوهُ", meaning: "His father (Waw added)" },
                    { arabic: "أَبُوكَ", meaning: "Your father (Waw added)" },
                    { arabic: "أَخُوهَا", meaning: "Her brother" },
                    { arabic: "أَخُوكِ", meaning: "Your brother (to fem.)" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "10-1",
            type: "multiple-choice",
            question: "How do you say 'Your name' when addressing a woman?",
            options: ["اِسْمُكَ", "اِسْمُكِ", "اِسْمُهَا"],
            correctAnswer: "اِسْمُكِ"
        },
        {
            id: "10-2",
            type: "multiple-choice",
            question: "Choose the correct suffix for 'His':",
            options: ["ـهَا", "ـكَ", "ـهُ"],
            correctAnswer: "ـهُ"
        },
        {
            id: "10-3",
            type: "word-scramble",
            question: "Arrange the phrase: 'This is my house'",
            arabic: "هَذَا بَيْتِي",
            scrambledWords: ["بَيْتِي", "هَذَا"],
            correctAnswer: "هَذَا بَيْتِي"
        },
        {
            id: "10-4",
            type: "multiple-choice",
            question: "What does 'أَخُوكَ' translate to?",
            options: ["My brother", "Your brother", "His brother"],
            correctAnswer: "Your brother"
        },
        {
            id: "10-5",
            type: "word-scramble",
            question: "Arrange: 'Her name is Fatima'",
            arabic: "اِسْمُهَا فَاطِمَةُ",
            scrambledWords: ["فَاطِمَةُ", "اِسْمُهَا"],
            correctAnswer: "اِسْمُهَا فَاطِمَةُ"
        },
        {
            id: "10-6",
            type: "multiple-choice",
            question: "Which letter is added between 'Abu' (father) and '-ka' (your)?",
            options: ["Alif", "Waw", "Ya"],
            correctAnswer: "Waw"
        },
        {
            id: "10-7",
            type: "multiple-choice",
            question: "Select the translation for 'His car':",
            options: ["سَيَّارَتُهَا", "سَيَّارَتُهُ", "سَيَّارَتِي"],
            correctAnswer: "سَيَّارَتُهُ"
        },
        {
            id: "10-8",
            type: "multiple-choice",
            question: "What is the vowel for the 'your' suffix when addressing a man?",
            options: ["Fatha (ـكَ)", "Kasra (ـكِ)", "Dhamma (ـكُ)"],
            correctAnswer: "Fatha (ـكَ)"
        },
        {
            id: "10-9",
            type: "word-scramble",
            question: "Arrange: 'My father is a merchant'",
            arabic: "أَبِي تَاجِرٌ",
            scrambledWords: ["تَاجِرٌ", "أَبِي"],
            correctAnswer: "أَبِي تَاجِرٌ"
        },
        {
            id: "10-10",
            type: "multiple-choice",
            question: "How to say 'A student (fem.), her name is Khadija'?",
            options: ["طَالِبَةٌ اِسْمُهَا خَدِيجَةُ", "طَالِبَةٌ اِسْمُهُ خَدِيجَةُ", "طَالِبٌ اِسْمُهَا خَدِيجَةُ"],
            correctAnswer: "طَالِبَةٌ اِسْمُهَا خَدِيجَةُ"
        }
    ]
};
