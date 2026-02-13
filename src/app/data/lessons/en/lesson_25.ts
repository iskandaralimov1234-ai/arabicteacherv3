import { Lesson } from '../../types';

export const lesson25: Lesson = {
    id: 25,
    title: "Lesson 25: Negation (Laisa) & 'But' (Lākinna)",
    grammar: "Laisa (Is not), Lakinna (But)",
    theory: {
        sections: [
            {
                title: "⛔ The Verb of Negation 'Laisa' (لَيْسَ)",
                content: "**لَيْسَ** (Laisa) translates as 'Is not'. It is a verb that makes the predicate (Khabar) **Accusative** (Nasb — Fatha).\nIt works similarly to 'Kāna' (Was).",
                examples: [
                    { arabic: "الْبَيْتُ جَدِيدٌ", meaning: "The house is new" },
                    { arabic: "لَيْسَ الْبَيْتُ جَدِيدًا", meaning: "The house is NOT new (Jadidan - Fatha)" },
                    { arabic: "لَيْسَ الْمُدَرِّسُ كَبِيرًا", meaning: "The teacher is not old" }
                ]
            },
            {
                title: "🖇️ Construction with 'Bi' (بِـ)",
                content: "Often, the letter **بِـ** (Bi) acts as a preposition attached to the predicate of 'Laisa'. In this case, the word is in the **Genitive case** (Kasra). The meaning remains the same.",
                examples: [
                    { arabic: "لَيْسَ الْبَيْتُ بِجَدِيدٍ", meaning: "The house is not new (Bi-Jadidin)" },
                    { arabic: "أَ لَسْتَ بِمُهَنْدِسٍ؟", meaning: "Are you not an engineer?" }
                ]
            },
            {
                title: "☝️ 'But' (لَكِنَّ)",
                content: "**لَكِنَّ** (Lākinna) is a 'sister' of Inna. It translates as 'But' or 'However'.\nIt puts the following noun (or attached pronoun) into the **Accusative case** (Nasb — Fatha).",
                examples: [
                    { arabic: "الْبَيْتُ جَمِيلٌ لَكِنَّهُ صَغِيرٌ", meaning: "The house is beautiful, BUT it is small" },
                    { arabic: "أَنَا طَالِبٌ لَكِنَّ أَخِي طَبِيبٌ", meaning: "I am a student, BUT my brother is a doctor" }
                ]
            },
            {
                title: "💡 New Vocabulary",
                content: "Remember these antonyms:\n- **غَالٍ** (Ghālin) — Expensive ↔ **رَخِيصٌ** (Rakhīṣ) — Cheap\n- **ذَكِيٌّ** (Dhakīyy) — Smart ↔ **غَبِيٌّ** (Ghabīyy) — Stupid\n- **مُتَزَوِّجٌ** (Mutazawwij) — Married ↔ **أَعْزَبُ** (A'zab) — Single",
                examples: [
                    { arabic: "هَذَا الْقَلَمُ غَالٍ", meaning: "This pen is expensive" },
                    { arabic: "هُوَ ذَكِيٌّ جِدًّا", meaning: "He is very smart" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "25-1",
            type: "multiple-choice",
            question: "Which sentence is correct? (Laisa without Bi)",
            options: ["لَيْسَ الْبَيْتُ كَبِيرًا", "لَيْسَ الْبَيْتُ كَبِيرٌ", "لَيْسَ الْبَيْتُ كَبِيرٍ"],
            correctAnswer: "لَيْسَ الْبَيْتُ كَبِيرًا"
        },
        {
            id: "25-2",
            type: "multiple-choice",
            question: "Which sentence is correct? (Laisa with Bi)",
            options: ["لَيْسَ الْبَيْتُ بِكَبِيرًا", "لَيْسَ الْبَيْتُ بِكَبِيرٌ", "لَيْسَ الْبَيْتُ بِكَبِيرٍ"],
            correctAnswer: "لَيْسَ الْبَيْتُ بِكَبِيرٍ"
        },
        {
            id: "25-3",
            type: "word-scramble",
            question: "Arrange: 'Muhammad is a doctor but Zaid is a nurse'",
            arabic: "مُحَمَّدٌ طَبِيبٌ لَكِنَّ زَيْدًا مُمَرِّضٌ",
            scrambledWords: ["طَبِيبٌ", "لَكِنَّ", "مُحَمَّدٌ", "مُمَرِّضٌ", "زَيْدًا"],
            correctAnswer: "مُحَمَّدٌ طَبِيبٌ لَكِنَّ زَيْدًا مُمَرِّضٌ"
        },
        {
            id: "25-4",
            type: "matching",
            question: "Match antonyms",
            pairs: [
                { "arabic": "غَالٍ", "meaning": "Cheap" },
                { "arabic": "ذَكِيٌّ", "meaning": "Stupid" },
                { "arabic": "مُتَزَوِّجٌ", "meaning": "Single" },
                { "arabic": "كَبِيرٌ", "meaning": "Small" }
            ]
        },
        {
            id: "25-5",
            type: "multiple-choice",
            question: "How to say 'This book is cheap'?",
            options: ["هَذَا الْكِتَابُ رَخِيصٌ", "هَذَا الْكِتَابُ غَالٍ", "هَذَا الْكِتَابُ رَخِيصًا"],
            correctAnswer: "هَذَا الْكِتَابُ رَخِيصٌ"
        },
        {
            id: "25-6",
            type: "multiple-choice",
            question: "Form of 'Expensive' (Ghālin) without Al:",
            options: ["غَالِيٌ", "غَالٍ", "غَالِيًا"],
            correctAnswer: "غَالٍ"
        },
        {
            id: "25-7",
            type: "word-scramble",
            question: "Arrange: 'Are you not a student?'",
            arabic: "أَ لَسْتَ بِطَالِبٍ؟",
            scrambledWords: ["بِطَالِبٍ؟", "أَ", "لَسْتَ"],
            correctAnswer: "أَ لَسْتَ بِطَالِبٍ؟"
        },
        {
            id: "25-8",
            type: "multiple-choice",
            question: "'...but he is lazy'",
            options: ["لَكِنَّهُ كَسْلَانُ", "لَكِنَّهُ كَسْلَانٍ", "لَكِنَّهُ كَسْلَانٌ"],
            correctAnswer: "لَكِنَّهُ كَسْلَانُ"
        },
        {
            id: "25-9",
            type: "multiple-choice",
            question: "Translate: 'Zaid is not sick'",
            options: ["لَيْسَ زَيْدٌ مَرِيضًا", "لَيْسَ زَيْدًا مَرِيضٌ", "لَيْسَ زَيْدٌ مَرِيضٌ"],
            correctAnswer: "لَيْسَ زَيْدٌ مَرِيضًا"
        },
        {
            id: "25-10",
            type: "word-scramble",
            question: "Arrange: 'America is big is but it is far'",
            arabic: "أَمْرِيكَا كَبِيرَةٌ لَكِنَّهَا بَعِيدَةٌ",
            scrambledWords: ["لَكِنَّهَا", "أَمْرِيكَا", "بَعِيدَةٌ", "كَبِيرَةٌ"],
            correctAnswer: "أَمْرِيكَا كَبِيرَةٌ لَكِنَّهَا بَعِيدَةٌ"
        }
    ]
};
