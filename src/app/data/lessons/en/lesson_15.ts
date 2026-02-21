import { Lesson } from '../../types';

export const lesson15: Lesson = {
    id: 15,
    title: "Lesson 15: The Dual (Al-Muthannā) (الدَّرْسُ الْخَامِسَ عَشَرَ - الْمُثَنَّى)",
    grammar: "The Dual (Al-Muthannā)",
    theory: {
        sections: [
            {
                title: "📖 Description",
                content: "The dual number (الْمُثَنَّى — Al-Muthannā) is used to refer to exactly two things. Unlike English, which simply adds 's' for plurals, Arabic has a special form for pairs. The dual is formed by adding specific suffixes to the singular noun."
            },
            {
                title: "📝 Key Rules",
                content: "- In the Marfū' state (مَرْفُوعٌ): add -āni (انِ) → كِتَابَانِ (two books)\\n- In the Manṣūb/Majrūr states (مَنْصُوبٌ / مَجْرُورٌ): add -ayni (يْنِ) → كِتَابَيْنِ\\n- The adjective must also agree in dual form\\n- Feminine nouns: the tā' marbūṭa (ة) changes to tā' maftūḥa (ت) before the suffix"
            },
            {
                title: "🗣️ Examples",
                content: "Pay attention to the following examples:",
                examples: [
                    { arabic: "كِتَابَانِ جَدِيدَانِ", meaning: "Kitābāni jadīdāni — Two new books (dual: -āni, Marfū' state)" },
                    { arabic: "فِي بَيْتَيْنِ كَبِيرَيْنِ", meaning: "Fī baytayni kabīrayni — In two big houses (dual: -ayni, Majrūr after preposition)" },
                    { arabic: "رَأَيْتُ مُعَلِّمَيْنِ", meaning: "Ra'aytu mu'allimayni — I saw two teachers (dual: -ayni, Manṣūb as direct object)" },
                    { arabic: "هَذَانِ طَالِبَانِ مُجْتَهِدَانِ", meaning: "Hādhāni ṭālibāni mujtahidāni — These are two diligent students (demonstrative + dual in Marfū')" },
                    { arabic: "مُدَرِّسَتَانِ فَاضِلَتَانِ", meaning: "Mudarrisatāni fāḍilatāni — Two virtuous female teachers (feminine dual)" }
                ]
            },
            {
                title: "📚 Vocabulary",
                content: "New words from this lesson:",
                examples: [
                    { arabic: "مُثَنًّى", meaning: "muthannā — Dual number" },
                    { arabic: "-انِ", meaning: "-āni — Dual suffix (Marfū' state)" },
                    { arabic: "-يْنِ", meaning: "-ayni — Dual suffix (Manṣūb/Majrūr states)" },
                    { arabic: "هَذَانِ", meaning: "hādhāni — These two (masculine)" },
                    { arabic: "هَاتَانِ", meaning: "hātāni — These two (feminine)" },
                    { arabic: "كِلَا", meaning: "kilā — Both (masculine)" },
                    { arabic: "كِلْتَا", meaning: "kiltā — Both (feminine)" },
                    { arabic: "اثْنَانِ", meaning: "ithnāni — Two (masculine)" }
                ]
            }
        ]
    },
    tasks: [
        { id: "15-1", type: "multiple-choice", question: "What suffix marks the dual in the Marfū' (مَرْفُوعٌ) state?", options: ["-ayni", "-āni", "-ūna", "-ātu"], correctAnswer: "-āni" },
        { id: "15-2", type: "multiple-choice", question: "What suffix marks the dual in the Manṣūb/Majrūr states?", options: ["-āni", "-ayni", "-ūna", "-īna"], correctAnswer: "-ayni" },
        { id: "15-3", type: "multiple-choice", question: "Why does كِتَابَيْنِ end with -ayni in رَأَيْتُ كِتَابَيْنِ?", options: ["Because it is Marfū'", "Because it is Manṣūb (direct object)", "Because it is indefinite", "Because it is feminine"], correctAnswer: "Because it is Manṣūb (direct object)" },
        { id: "15-4", type: "multiple-choice", question: "How do you say 'These two (feminine)' in Arabic?", options: ["هَذَانِ", "هَاتَانِ", "أُولَئِكَ", "هَؤُلَاءِ"], correctAnswer: "هَاتَانِ" },
        { id: "15-5", type: "multiple-choice", question: "Translate: كِتَابَانِ جَدِيدَانِ", options: ["A new book", "Two new books", "The new books", "New books"], correctAnswer: "Two new books" },
        { id: "15-6", type: "multiple-choice", question: "Translate: رَأَيْتُ مُعَلِّمَيْنِ", options: ["I saw a teacher", "I saw two teachers", "I saw the teacher", "I saw teachers"], correctAnswer: "I saw two teachers" },
        { id: "15-7", type: "multiple-choice", question: "Translate: فِي بَيْتَيْنِ كَبِيرَيْنِ", options: ["In a big house", "In two big houses", "In big houses", "In the big house"], correctAnswer: "In two big houses" },
        { id: "15-8", type: "multiple-choice", question: "What does مُثَنًّى mean?", options: ["Plural", "Dual number", "Singular", "Broken plural"], correctAnswer: "Dual number" },
        { id: "15-9", type: "multiple-choice", question: "What does كِلَا mean?", options: ["All", "Both (masculine)", "Two", "Every"], correctAnswer: "Both (masculine)" },
        { id: "15-10", type: "multiple-choice", question: "What does اثْنَانِ mean?", options: ["One", "Two (masculine)", "Three", "Both"], correctAnswer: "Two (masculine)" }
    ]
};
