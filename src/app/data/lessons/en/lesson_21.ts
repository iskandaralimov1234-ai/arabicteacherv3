import { Lesson } from '../../types';
export const lesson21: Lesson = {
    id: 21, title: "Lesson 21: Prepositions (الدَّرْسُ الْحَادِي وَالْعِشْرُونَ - حُرُوفُ الْجَرِّ)", grammar: "Prepositions (Ḥurūf al-Jarr)", theory: {
        sections: [
            { title: "📖 Description", content: "Prepositions (حُرُوفُ الْجَرِّ — Ḥurūf al-Jarr) are particles that come before nouns and put them in the Majrūr (مَجْرُورٌ) state. The noun after a preposition always takes kasra (ِ) or tanwīn kasra (ٍ)." },
            { title: "📝 Key Rules", content: "- The noun after a preposition is always Majrūr (مَجْرُورٌ)\\n- Common prepositions: فِي (in), مِنْ (from), إِلَى (to), عَلَى (on), عَنْ (about), بِ (with/by), لِ (for/to), كَ (like)\\n- Prepositions are inseparable from the noun that follows" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "فِي الْبَيْتِ", meaning: "Fī al-bayti — In the house (البَيْتِ is Majrūr — kasra)" },
                    { arabic: "مِنَ الْمَدْرَسَةِ", meaning: "Mina al-madrasati — From the school" },
                    { arabic: "إِلَى الْمَسْجِدِ", meaning: "Ilā al-masjidi — To the mosque" },
                    { arabic: "عَلَى الطَّاوِلَةِ", meaning: "'Alā al-ṭāwilati — On the table" },
                    { arabic: "بِالْقَلَمِ", meaning: "Bi-l-qalami — With the pen" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "حَرْفُ جَرٍّ", meaning: "ḥarfu jarrin — Preposition" }, { arabic: "فِي", meaning: "fī — In" },
                    { arabic: "مِنْ", meaning: "min — From" }, { arabic: "إِلَى", meaning: "ilā — To" },
                    { arabic: "عَلَى", meaning: "'alā — On" }, { arabic: "عَنْ", meaning: "'an — About/From" },
                    { arabic: "بِ", meaning: "bi — With/By" }, { arabic: "لِ", meaning: "li — For/To" }
                ]
            }
        ]
    }, tasks: [
        { id: "21-1", type: "multiple-choice", question: "A noun after a preposition is in which state?", options: ["Marfū'", "Manṣūb", "Majrūr", "Majzūm"], correctAnswer: "Majrūr" },
        { id: "21-2", type: "multiple-choice", question: "What vowel mark indicates the Majrūr state?", options: ["Ḍamma (ُ)", "Fatḥa (َ)", "Kasra (ِ)", "Sukūn (ْ)"], correctAnswer: "Kasra (ِ)" },
        { id: "21-3", type: "multiple-choice", question: "Which preposition means 'in'?", options: ["مِنْ", "فِي", "إِلَى", "عَلَى"], correctAnswer: "فِي" },
        { id: "21-4", type: "multiple-choice", question: "Why is الْبَيْتِ in kasra in فِي الْبَيْتِ?", options: ["Because it is the subject", "Because it follows a preposition (Majrūr)", "Because it is indefinite", "Because it is an object"], correctAnswer: "Because it follows a preposition (Majrūr)" },
        { id: "21-5", type: "multiple-choice", question: "Translate: مِنَ الْمَدْرَسَةِ", options: ["To the school", "In the school", "From the school", "At the school"], correctAnswer: "From the school" },
        { id: "21-6", type: "multiple-choice", question: "Translate: عَلَى الطَّاوِلَةِ", options: ["Under the table", "On the table", "Near the table", "Behind the table"], correctAnswer: "On the table" },
        { id: "21-7", type: "multiple-choice", question: "Translate: إِلَى الْمَسْجِدِ", options: ["From the mosque", "In the mosque", "To the mosque", "At the mosque"], correctAnswer: "To the mosque" },
        { id: "21-8", type: "multiple-choice", question: "What does حَرْفُ جَرٍّ mean?", options: ["Verb", "Preposition", "Noun", "Adjective"], correctAnswer: "Preposition" },
        { id: "21-9", type: "multiple-choice", question: "What does عَنْ mean?", options: ["In", "To", "On", "About/From"], correctAnswer: "About/From" },
        { id: "21-10", type: "multiple-choice", question: "What does بِ mean?", options: ["For", "With/By", "In", "To"], correctAnswer: "With/By" }
    ]
};
