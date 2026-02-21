import { Lesson } from '../../types';
export const lesson53: Lesson = {
    id: 53, title: "Lesson 53: Verbs of Praise and Blame (الدَّرْسُ الثَّالِثُ وَالْخَمْسُونَ - نِعْمَ وَبِئْسَ)", grammar: "Praise and Blame (Ni'ma wa Bi'sa)", theory: {
        sections: [
            { title: "📖 Description", content: "نِعْمَ (Ni'ma — how excellent!) and بِئْسَ (Bi'sa — how bad!) are special verbs for praise and blame. Their 'subject' (فَاعِل) must be definite or preceded by مَا/مَنْ. They are followed by a specified noun (المَخْصُوصُ)." },
            { title: "📝 Key Rules", content: "- نِعْمَ + definite fā'il + مَخْصُوص → نِعْمَ الرَّجُلُ مُحَمَّدٌ (What an excellent man Muhammad is!)\\n- بِئْسَ + definite fā'il + مَخْصُوص → بِئْسَ الصِّفَةُ الْكَذِبُ (What a bad trait lying is!)\\n- مَا/مَنْ can replace the definite fā'il\\n- The مَخْصُوص is Marfū' (it is the true Mubtada', with the whole نِعْمَ phrase being its Khabar)" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "نِعْمَ الرَّجُلُ مُحَمَّدٌ", meaning: "Ni'ma al-rajulu Muḥammadun — What an excellent man Muhammad is!" },
                    { arabic: "بِئْسَ الصِّفَةُ الْكَذِبُ", meaning: "Bi'sa al-ṣifatu al-kadhibu — What a bad trait lying is!" },
                    { arabic: "نِعْمَ مَا صَنَعْتَ", meaning: "Ni'ma mā ṣana'ta — How excellent is what you did!" },
                    { arabic: "بِئْسَ مَنْ يَخُونُ أَمَانَتَهُ", meaning: "Bi'sa man yakhūnu amānatahu — How bad is the one who betrays his trust!" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "نِعْمَ", meaning: "ni'ma — How excellent!" }, { arabic: "بِئْسَ", meaning: "bi'sa — How bad!" },
                    { arabic: "مَخْصُوصٌ", meaning: "makhṣūṣun — Specified noun" }, { arabic: "مَدْحٌ", meaning: "madḥun — Praise" },
                    { arabic: "ذَمٌّ", meaning: "dhammun — Blame" }, { arabic: "كَذِبٌ", meaning: "kadhibun — Lying" },
                    { arabic: "صِدْقٌ", meaning: "ṣidqun — Truthfulness" }, { arabic: "أَمَانَةٌ", meaning: "amānatun — Trust" }
                ]
            }
        ]
    }, tasks: [
        { id: "53-1", type: "multiple-choice", question: "نِعْمَ is used for:", options: ["Blame", "Praise", "Question", "Negation"], correctAnswer: "Praise" },
        { id: "53-2", type: "multiple-choice", question: "بِئْسَ is used for:", options: ["Praise", "Blame", "Emphasis", "Command"], correctAnswer: "Blame" },
        { id: "53-3", type: "multiple-choice", question: "The fā'il of نِعْمَ/بِئْسَ must be:", options: ["Indefinite", "Definite or مَا/مَنْ", "Manṣūb", "Always plural"], correctAnswer: "Definite or مَا/مَنْ" },
        { id: "53-4", type: "multiple-choice", question: "The مَخْصُوص is in which state?", options: ["Manṣūb", "Majrūr", "Marfū'", "Majzūm"], correctAnswer: "Marfū'" },
        { id: "53-5", type: "multiple-choice", question: "Translate: نِعْمَ الرَّجُلُ مُحَمَّدٌ", options: ["Muhammad is a man", "What an excellent man Muhammad is!", "Muhammad came", "The man is Muhammad"], correctAnswer: "What an excellent man Muhammad is!" },
        { id: "53-6", type: "multiple-choice", question: "Translate: بِئْسَ الصِّفَةُ الْكَذِبُ", options: ["Lying is a trait", "What a bad trait lying is!", "The trait is lying", "Don't lie"], correctAnswer: "What a bad trait lying is!" },
        { id: "53-7", type: "multiple-choice", question: "Translate: نِعْمَ مَا صَنَعْتَ", options: ["What you made", "How excellent is what you did!", "You made something", "Make something good"], correctAnswer: "How excellent is what you did!" },
        { id: "53-8", type: "multiple-choice", question: "What does مَدْحٌ mean?", options: ["Blame", "Praise", "Question", "Statement"], correctAnswer: "Praise" },
        { id: "53-9", type: "multiple-choice", question: "What does كَذِبٌ mean?", options: ["Truth", "Lying", "Promise", "Trust"], correctAnswer: "Lying" },
        { id: "53-10", type: "multiple-choice", question: "What does أَمَانَةٌ mean?", options: ["Betrayal", "Trust", "Power", "Wealth"], correctAnswer: "Trust" }
    ]
};
