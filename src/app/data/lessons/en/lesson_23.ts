import { Lesson } from '../../types';
export const lesson23: Lesson = {
    id: 23, title: "Lesson 23: The Adjective (Na't) (الدَّرْسُ الثَّالِثُ وَالْعِشْرُونَ - النَّعْتُ)", grammar: "The Adjective (Na't)", theory: {
        sections: [
            { title: "📖 Description", content: "The adjective (النَّعْتُ — Al-Na't) in Arabic must agree with the noun it describes (المَنْعُوتُ — Al-Man'ūt) in four things: definiteness, gender, number, and i'rāb state." },
            { title: "📝 Key Rules", content: "- Agreement in definiteness: الطَّالِبُ الْمُجْتَهِدُ (definite + definite)\\n- Agreement in gender: masculine noun → masculine adjective\\n- Agreement in number: singular/dual/plural\\n- Agreement in i'rāb: both Marfū', Manṣūb, or Majrūr\\n- Exception: broken plural of non-rational → feminine singular adjective" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "الطَّالِبُ الْمُجْتَهِدُ", meaning: "Al-ṭālibu al-mujtahidu — The diligent student (both definite, Marfū')" },
                    { arabic: "كِتَابٌ جَدِيدٌ", meaning: "Kitābun jadīdun — A new book (both indefinite, Marfū')" },
                    { arabic: "فِي مَدْرَسَةٍ كَبِيرَةٍ", meaning: "Fī madrasatin kabīratin — In a big school (both Majrūr, feminine)" },
                    { arabic: "رَأَيْتُ طَالِبًا مُجْتَهِدًا", meaning: "Ra'aytu ṭāliban mujtahidan — I saw a diligent student (both Manṣūb)" },
                    { arabic: "الْكُتُبُ الْجَدِيدَةُ", meaning: "Al-kutubu al-jadīdatu — The new books (broken plural of non-rational → feminine singular adjective)" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "نَعْتٌ", meaning: "na'tun — Adjective/Qualifier" }, { arabic: "مَنْعُوتٌ", meaning: "man'ūtun — Described noun" },
                    { arabic: "مُجْتَهِدٌ", meaning: "mujtahidun — Diligent" }, { arabic: "جَدِيدٌ", meaning: "jadīdun — New" },
                    { arabic: "كَبِيرٌ", meaning: "kabīrun — Big" }, { arabic: "صَغِيرٌ", meaning: "ṣaghīrun — Small" },
                    { arabic: "جَمِيلٌ", meaning: "jamīlun — Beautiful" }, { arabic: "قَدِيمٌ", meaning: "qadīmun — Old/Ancient" }
                ]
            }
        ]
    }, tasks: [
        { id: "23-1", type: "multiple-choice", question: "The adjective must agree with the noun in how many things?", options: ["Two", "Three", "Four", "Five"], correctAnswer: "Four" },
        { id: "23-2", type: "multiple-choice", question: "In فِي مَدْرَسَةٍ كَبِيرَةٍ, why is كَبِيرَةٍ Majrūr?", options: ["Because it follows a verb", "Because it agrees with the noun's i'rāb (Majrūr)", "Because it is indefinite", "Because it is feminine"], correctAnswer: "Because it agrees with the noun's i'rāb (Majrūr)" },
        { id: "23-3", type: "multiple-choice", question: "Broken plural of non-rational nouns takes which adjective?", options: ["Masculine plural", "Feminine singular", "Masculine singular", "Dual"], correctAnswer: "Feminine singular" },
        { id: "23-4", type: "multiple-choice", question: "How do you say 'a new book' (indefinite)?", options: ["الْكِتَابُ الْجَدِيدُ", "كِتَابٌ جَدِيدٌ", "كِتَابُ جَدِيدٍ", "الْكِتَابُ جَدِيدٌ"], correctAnswer: "كِتَابٌ جَدِيدٌ" },
        { id: "23-5", type: "multiple-choice", question: "Translate: الطَّالِبُ الْمُجْتَهِدُ", options: ["A student is diligent", "The diligent student", "The student studies", "Students are diligent"], correctAnswer: "The diligent student" },
        { id: "23-6", type: "multiple-choice", question: "Translate: رَأَيْتُ طَالِبًا مُجْتَهِدًا", options: ["I saw a diligent student", "I saw the diligent student", "A diligent student saw me", "The diligent student came"], correctAnswer: "I saw a diligent student" },
        { id: "23-7", type: "multiple-choice", question: "Translate: فِي مَدْرَسَةٍ كَبِيرَةٍ", options: ["In the big school", "In a big school", "The big school", "A big school"], correctAnswer: "In a big school" },
        { id: "23-8", type: "multiple-choice", question: "What does نَعْتٌ mean?", options: ["Noun", "Adjective/Qualifier", "Verb", "Preposition"], correctAnswer: "Adjective/Qualifier" },
        { id: "23-9", type: "multiple-choice", question: "What does مُجْتَهِدٌ mean?", options: ["Lazy", "Diligent", "Tall", "Short"], correctAnswer: "Diligent" },
        { id: "23-10", type: "multiple-choice", question: "What does قَدِيمٌ mean?", options: ["New", "Small", "Old/Ancient", "Beautiful"], correctAnswer: "Old/Ancient" }
    ]
};
