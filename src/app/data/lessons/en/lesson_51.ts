import { Lesson } from '../../types';
export const lesson51: Lesson = {
    id: 51, title: "Lesson 51: Vocative (الدَّرْسُ الْحَادِي وَالْخَمْسُونَ - النِّدَاءُ)", grammar: "Vocative (Nidā')", theory: {
        sections: [
            { title: "📖 Description", content: "The vocative (النِّدَاءُ — Al-Nidā') is used to call someone. The most common particle is يَا. The called noun (مُنَادًى) can be Marfū' (definite with الـ or iḍāfa) or Manṣūb (indefinite or added)." },
            { title: "📝 Key Rules", content: "- يَا + proper name = Mabnī 'alā al-Ḍamm: يَا مُحَمَّدُ\\n- يَا + indefinite = Manṣūb: يَا طَالِبًا\\n- يَا + iḍāfa = Manṣūb: يَا عَبْدَ اللهِ\\n- يَا أَيُّهَا + definite noun: يَا أَيُّهَا النَّاسُ" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "يَا مُحَمَّدُ", meaning: "Yā Muḥammadu — O Muhammad! (proper name — Mabnī 'alā Ḍamm)" },
                    { arabic: "يَا طَالِبًا اجْتَهِدْ", meaning: "Yā ṭāliban ijtahid — O student, be diligent! (indefinite — Manṣūb)" },
                    { arabic: "يَا عَبْدَ اللهِ", meaning: "Yā 'abda Allāhi — O servant of Allah! (iḍāfa — Manṣūb)" },
                    { arabic: "يَا أَيُّهَا النَّاسُ", meaning: "Yā ayyuhā al-nāsu — O people! (with أَيُّهَا for definite nouns)" },
                    { arabic: "يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ", meaning: "Yā ayyatuhā al-nafsu al-muṭma'innatu — O tranquil soul!" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "نِدَاءٌ", meaning: "nidā'un — Vocative/Calling" }, { arabic: "مُنَادًى", meaning: "munādan — Called noun" },
                    { arabic: "يَا", meaning: "yā — O (vocative particle)" }, { arabic: "أَيُّهَا", meaning: "ayyuhā — O (for definite, m.)" },
                    { arabic: "أَيَّتُهَا", meaning: "ayyatuhā — O (for definite, f.)" }, { arabic: "عَبْدٌ", meaning: "'abdun — Servant" },
                    { arabic: "نَاسٌ", meaning: "nāsun — People" }, { arabic: "مُطْمَئِنٌّ", meaning: "muṭma'innun — Tranquil" }
                ]
            }
        ]
    }, tasks: [
        { id: "51-1", type: "multiple-choice", question: "The most common vocative particle is:", options: ["أَيُّهَا", "يَا", "هَيَّا", "وَا"], correctAnswer: "يَا" },
        { id: "51-2", type: "multiple-choice", question: "يَا + proper name results in:", options: ["Manṣūb", "Majrūr", "Mabnī 'alā Ḍamm (Marfū')", "Majzūm"], correctAnswer: "Mabnī 'alā Ḍamm (Marfū')" },
        { id: "51-3", type: "multiple-choice", question: "يَا + iḍāfa results in:", options: ["Marfū'", "Manṣūb", "Majrūr", "Unchanged"], correctAnswer: "Manṣūb" },
        { id: "51-4", type: "multiple-choice", question: "To call a definite noun with الـ, use:", options: ["يَا alone", "يَا أَيُّهَا", "يَا + noun", "هَلْ"], correctAnswer: "يَا أَيُّهَا" },
        { id: "51-5", type: "multiple-choice", question: "Translate: يَا مُحَمَّدُ", options: ["Muhammad!", "O Muhammad!", "Where is Muhammad?", "Muhammad came"], correctAnswer: "O Muhammad!" },
        { id: "51-6", type: "multiple-choice", question: "Translate: يَا أَيُّهَا النَّاسُ", options: ["The people", "O people!", "Some people", "Where are people?"], correctAnswer: "O people!" },
        { id: "51-7", type: "multiple-choice", question: "Translate: يَا عَبْدَ اللهِ", options: ["Servant of Allah", "O servant of Allah!", "Allah's servant came", "Where is the servant?"], correctAnswer: "O servant of Allah!" },
        { id: "51-8", type: "multiple-choice", question: "What does نِدَاءٌ mean?", options: ["Question", "Vocative/Calling", "Negation", "Emphasis"], correctAnswer: "Vocative/Calling" },
        { id: "51-9", type: "multiple-choice", question: "What does مُنَادًى mean?", options: ["Caller", "Called noun", "Vocative particle", "Response"], correctAnswer: "Called noun" },
        { id: "51-10", type: "multiple-choice", question: "What does عَبْدٌ mean?", options: ["Master", "Servant", "King", "Student"], correctAnswer: "Servant" }
    ]
};
