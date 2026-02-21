import { Lesson } from '../../types';
export const lesson36: Lesson = {
    id: 36, title: "Lesson 36: The Nominal Sentence (الدَّرْسُ السَّادِسُ وَالثَّلَاثُونَ - الْجُمْلَةُ الِاسْمِيَّةُ)", grammar: "Nominal Sentence (Jumla Ismiyya)", theory: {
        sections: [
            { title: "📖 Description", content: "The nominal sentence (الْجُمْلَةُ الِاسْمِيَّةُ) begins with a noun and consists of a subject (مُبْتَدَأٌ — Mubtada') and a predicate (خَبَرٌ — Khabar). Both are in the Marfū' (مَرْفُوعٌ) state." },
            { title: "📝 Key Rules", content: "- Mubtada' (subject): always Marfū' (مَرْفُوعٌ)\\n- Khabar (predicate): always Marfū' (مَرْفُوعٌ)\\n- Khabar can be: single word, sentence, or prepositional phrase\\n- When Khabar is a prepositional phrase, it may come before the Mubtada'" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "الْعِلْمُ نُورٌ", meaning: "Al-'ilmu nūrun — Knowledge is light (Mubtada' + Khabar, both Marfū')" },
                    { arabic: "الطَّالِبُ مُجْتَهِدٌ", meaning: "Al-ṭālibu mujtahidun — The student is diligent" },
                    { arabic: "الْكِتَابُ عَلَى الطَّاوِلَةِ", meaning: "Al-kitābu 'alā al-ṭāwilati — The book is on the table (Khabar = prepositional phrase)" },
                    { arabic: "مُحَمَّدٌ يَدْرُسُ", meaning: "Muḥammadun yadrusu — Muhammad studies (Khabar = verbal sentence)" },
                    { arabic: "فِي الْبَيْتِ رَجُلٌ", meaning: "Fī al-bayti rajulun — In the house is a man (Khabar precedes Mubtada')" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "جُمْلَةٌ اسْمِيَّةٌ", meaning: "jumlatun ismiyyatun — Nominal sentence" }, { arabic: "مُبْتَدَأٌ", meaning: "mubtada'un — Subject" },
                    { arabic: "خَبَرٌ", meaning: "khabarun — Predicate" }, { arabic: "نُورٌ", meaning: "nūrun — Light" },
                    { arabic: "ظَلَامٌ", meaning: "ẓalāmun — Darkness" }, { arabic: "شِبْهُ جُمْلَةٍ", meaning: "shibhu jumlatin — Semi-sentence (prepositional phrase)" },
                    { arabic: "مُقَدَّمٌ", meaning: "muqaddamun — Fronted" }, { arabic: "مُؤَخَّرٌ", meaning: "mu'akhkharun — Delayed" }
                ]
            }
        ]
    }, tasks: [
        { id: "36-1", type: "multiple-choice", question: "The Mubtada' is in which state?", options: ["Manṣūb", "Majrūr", "Marfū'", "Majzūm"], correctAnswer: "Marfū'" },
        { id: "36-2", type: "multiple-choice", question: "The Khabar is in which state?", options: ["Manṣūb", "Majrūr", "Marfū'", "Majzūm"], correctAnswer: "Marfū'" },
        { id: "36-3", type: "multiple-choice", question: "A nominal sentence begins with:", options: ["A verb", "A noun", "A preposition", "A particle"], correctAnswer: "A noun" },
        { id: "36-4", type: "multiple-choice", question: "The Khabar can be:", options: ["Only a noun", "A word, sentence, or prepositional phrase", "Only a verb", "Only an adjective"], correctAnswer: "A word, sentence, or prepositional phrase" },
        { id: "36-5", type: "multiple-choice", question: "Translate: الْعِلْمُ نُورٌ", options: ["Light of knowledge", "Knowledge is light", "The knowledge shines", "Learn from light"], correctAnswer: "Knowledge is light" },
        { id: "36-6", type: "multiple-choice", question: "Translate: الطَّالِبُ مُجْتَهِدٌ", options: ["The diligent student", "The student is diligent", "A diligent student", "Students are diligent"], correctAnswer: "The student is diligent" },
        { id: "36-7", type: "multiple-choice", question: "Translate: الْكِتَابُ عَلَى الطَّاوِلَةِ", options: ["The book and the table", "The book is on the table", "Put the book on the table", "Under the table"], correctAnswer: "The book is on the table" },
        { id: "36-8", type: "multiple-choice", question: "What does مُبْتَدَأٌ mean?", options: ["Predicate", "Subject", "Object", "Verb"], correctAnswer: "Subject" },
        { id: "36-9", type: "multiple-choice", question: "What does خَبَرٌ mean?", options: ["Subject", "Predicate", "Verb", "Particle"], correctAnswer: "Predicate" },
        { id: "36-10", type: "multiple-choice", question: "What does نُورٌ mean?", options: ["Darkness", "Light", "Fire", "Water"], correctAnswer: "Light" }
    ]
};
