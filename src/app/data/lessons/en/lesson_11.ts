import { Lesson } from '../../types';

export const lesson11: Lesson = {
    id: 11,
    title: "Lesson 11: فِيها وَ فِيهِ (Prepositions with Attached Pronouns)",
    grammar: "Prepositions with Attached Pronouns",
    theory: {
        sections: [
            {
                title: "🤝 Prepositions + Pronouns",
                content: "In Arabic, prepositions can be combined with attached pronouns just like nouns. This is used to indicate location, possession, or relationship.",
                examples: [
                    { arabic: "فِي + هِ = فِيهِ", meaning: "Fīhi — In it / In him" },
                    { arabic: "لَ + كَ = لَكَ", meaning: "Laka — To you / You have" },
                    { arabic: "مَعَ + هَا = مَعَهَا", meaning: "Ma’ahā — With her" }
                ]
            },
            {
                title: "🔄 Changing «-hu» to «-hi» (Harmony Rule)",
                content: "If a preposition ends with the sound **«ī»** or the letter **Ya** (like فِي — 'fī' or بِ — 'bi'), the following pronoun 'his' changes its vowel from Dhamma to Kasra for smoother pronunciation.\n\nIt was: *Fī-hu* ➡️ Became: **Fī-hi** (فِيهِ).\nThis applies only to the masculine singular pronoun.",
                examples: [
                    { arabic: "فِيهِ", meaning: "In him / In it (Fīhi)" },
                    { arabic: "بِهِ", meaning: "With it / By it (Bihi)" },
                    { arabic: "فِيهَا", meaning: "In her / In it (Here 'hā' remains unchanged - Fīhā)" }
                ]
            },
            {
                title: "📦 Masculine vs Feminine Objects",
                content: "Arabic has no 'it' (neutral gender). All objects are either masculine or feminine.\n- For a house (**بَيْتٌ** - masc.), use **فِيهِ** (in it).\n- For a room (**غُرْفَةٌ** - fem.), use **فِيهَا** (in it).",
                examples: [
                    { arabic: "الْبَيْتُ جَمِيلٌ، فِيهِ حَدِيقَةٌ", meaning: "The house is beautiful, in it is a garden" },
                    { arabic: "الْغُرْفَةُ جَمِيلَةٌ، فِيهَا نَافِذَةٌ", meaning: "The room is beautiful, in it is a window" }
                ]
            },
            {
                title: "👥 Preposition مَعَ (Ma’a) — 'With'",
                content: "The preposition **مَعَ** indicates being together with someone at a specific moment.\n\n- **مَعِي** — with me\n- **مَعَهُ** — with him\n- **مَعَكَ** — with you",
                examples: [
                    { arabic: "أَيْنَ بِلَالٌ؟ مَعَهُ الْمُدَرِّسُ", meaning: "Where is Bilal? With him is the teacher" },
                    { arabic: "مَنْ مَعَكَ يَا مَحْمُودُ؟ مَعِي زَمِيلِي", meaning: "Who is with you, O Mahmoud? With me is my colleague" }
                ]
            },
            {
                title: "🎁 Preposition لِـ (Li) — Possession",
                content: "When the preposition **لِـ** (to/belongs to) combines with pronouns (except 'my'), it changes its vowel to Fatha: **La** (**لَـ**).\n\n- **لِي** (Lī) — I have (exception, stays Kasra)\n- **لَهُ** (Lahu) — He has\n- **لَكَ** (Laka) — You have",
                examples: [
                    { arabic: "لِي أُخْتٌ وَاحِدَةٌ", meaning: "I have one sister" },
                    { arabic: "لَكَ سَيَّارَةٌ جَمِيلَةٌ", meaning: "You have a beautiful car" },
                    { arabic: "لَهُ خَمْسَةُ أَبْنَاءٍ", meaning: "He has five sons" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "11-1",
            type: "multiple-choice",
            question: "How do you correctly write 'In it' (masculine)?",
            options: ["فِيهُ", "فِيهِ", "فِي هُ"],
            correctAnswer: "فِيهِ"
        },
        {
            id: "11-2",
            type: "multiple-choice",
            question: "How to say 'In it' when referring to a car (feminine)?",
            options: ["فِيهِ", "مَعَهَا", "فِيهَا"],
            correctAnswer: "فِيهَا"
        },
        {
            id: "11-3",
            type: "word-scramble",
            question: "Arrange the phrase: 'In it (house) is a desk'",
            arabic: "فِيهِ مَكْتَبٌ",
            scrambledWords: ["مَكْتَبٌ", "فِيهِ"],
            correctAnswer: "فِيهِ مَكْتَبٌ"
        },
        {
            id: "11-4",
            type: "multiple-choice",
            question: "Translate: 'I have a brother'",
            options: ["مَعِي أَخٌ", "لِي أَخٌ", "عِنْدِي أَخٌ"],
            correctAnswer: "لِي أَخٌ"
        },
        {
            id: "11-5",
            type: "word-scramble",
            question: "Arrange: 'With him is his colleague'",
            arabic: "مَعَهُ زَمِيلُهُ",
            scrambledWords: ["زَمِيلُهُ", "مَعَهُ"],
            correctAnswer: "مَعَهُ زَمِيلُهُ"
        },
        {
            id: "11-6",
            type: "multiple-choice",
            question: "What is the vowel on the suffix '-hu' in the word 'Ma-’ahu'?",
            options: ["Kasra", "Dhamma", "Sukun"],
            correctAnswer: "Dhamma"
        },
        {
            id: "11-7",
            type: "multiple-choice",
            question: "Choose the translation for: 'She has a small daughter'",
            options: ["لَهُ بِنْتٌ صَغِيرَةٌ", "لَهَا بِنْتٌ صَغِيرَةٌ", "فِيهَا بِنْتٌ صَغِيرَةٌ"],
            correctAnswer: "لَهَا بِنْتٌ صَغِيرَةٌ"
        },
        {
            id: "11-8",
            type: "multiple-choice",
            question: "What does 'Laka' (لَكَ) mean?",
            options: ["For him", "You have", "With me"],
            correctAnswer: "You have"
        },
        {
            id: "11-9",
            type: "word-scramble",
            question: "Arrange: 'In it (room) is a chair'",
            arabic: "فِيهَا كُرْسِيٌّ",
            scrambledWords: ["كُرْسِيٌّ", "فِيهَا"],
            correctAnswer: "فِيهَا كُرْسِيٌّ"
        },
        {
            id: "11-10",
            type: "multiple-choice",
            question: "How do you translate 'Ma-’ī' (مَعِي)?",
            options: ["I have", "Inside me", "With me"],
            correctAnswer: "With me"
        }
    ]
};
