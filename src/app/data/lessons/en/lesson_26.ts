import { Lesson } from '../../types';
export const lesson26: Lesson = {
    id: 26, title: "Lesson 26: Relative Clause (الدَّرْسُ السَّادِسُ وَالْعِشْرُونَ - الْجُمْلَةُ الْمَوْصُولَةُ)", grammar: "Relative Clause (Ṣila)", theory: {
        sections: [
            { title: "📖 Description", content: "The relative clause in Arabic uses relative pronouns (الاِسْمُ الْمَوْصُولُ). The most common is الَّذِي (who/which, masculine singular). The clause after it is called الصِّلَة (Ṣila) and must contain a return pronoun (عَائِدٌ) referring to the antecedent." },
            { title: "📝 Key Rules", content: "- الَّذِي (masc. sing.), الَّتِي (fem. sing.), الَّذِينَ (masc. pl.), اللَّاتِي (fem. pl.)\\n- اللَّذَانِ (masc. dual), اللَّتَانِ (fem. dual)\\n- The return pronoun (عَائِدٌ) must refer back to the noun\\n- Only definite nouns can have relative clauses directly" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "الطَّالِبُ الَّذِي نَجَحَ", meaning: "Al-ṭālibu al-ladhī najaḥa — The student who succeeded" },
                    { arabic: "الطَّالِبَةُ الَّتِي دَرَسَتْ", meaning: "Al-ṭālibatu al-latī darasat — The female student who studied" },
                    { arabic: "الْكِتَابُ الَّذِي قَرَأْتُهُ", meaning: "Al-kitābu al-ladhī qara'tuhu — The book which I read (هُ = return pronoun)" },
                    { arabic: "الطُّلَّابُ الَّذِينَ حَضَرُوا", meaning: "Al-ṭullābu al-ladhīna ḥaḍarū — The students who attended" },
                    { arabic: "الْمَدْرَسَةُ الَّتِي ذَهَبْتُ إِلَيْهَا", meaning: "Al-madrasatu al-latī dhahabtu ilayhā — The school that I went to" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "اِسْمٌ مَوْصُولٌ", meaning: "ismun mawṣūlun — Relative pronoun" }, { arabic: "صِلَةٌ", meaning: "ṣilatun — Relative clause" },
                    { arabic: "عَائِدٌ", meaning: "'ā'idun — Return pronoun" }, { arabic: "الَّذِي", meaning: "al-ladhī — Who/Which (m.s.)" },
                    { arabic: "الَّتِي", meaning: "al-latī — Who/Which (f.s.)" }, { arabic: "الَّذِينَ", meaning: "al-ladhīna — Who/Which (m.pl.)" },
                    { arabic: "اللَّاتِي", meaning: "al-lātī — Who/Which (f.pl.)" }, { arabic: "نَجَحَ", meaning: "najaḥa — He succeeded" }
                ]
            }
        ]
    }, tasks: [
        { id: "26-1", type: "multiple-choice", question: "What is the masculine singular relative pronoun?", options: ["الَّتِي", "الَّذِي", "الَّذِينَ", "اللَّاتِي"], correctAnswer: "الَّذِي" },
        { id: "26-2", type: "multiple-choice", question: "What must a relative clause contain?", options: ["A preposition", "A return pronoun (عَائِدٌ)", "An adjective", "A number"], correctAnswer: "A return pronoun (عَائِدٌ)" },
        { id: "26-3", type: "multiple-choice", question: "Only which type of nouns can have relative clauses?", options: ["Indefinite", "Definite", "Dual", "Plural only"], correctAnswer: "Definite" },
        { id: "26-4", type: "multiple-choice", question: "What is the relative pronoun for feminine plural?", options: ["الَّذِي", "الَّتِي", "الَّذِينَ", "اللَّاتِي"], correctAnswer: "اللَّاتِي" },
        { id: "26-5", type: "multiple-choice", question: "Translate: الطَّالِبُ الَّذِي نَجَحَ", options: ["The student succeeded", "The student who succeeded", "A successful student", "The succeeding student"], correctAnswer: "The student who succeeded" },
        { id: "26-6", type: "multiple-choice", question: "Translate: الْكِتَابُ الَّذِي قَرَأْتُهُ", options: ["I read a book", "The book which I read", "The book is readable", "I will read the book"], correctAnswer: "The book which I read" },
        { id: "26-7", type: "multiple-choice", question: "Translate: الطُّلَّابُ الَّذِينَ حَضَرُوا", options: ["The students attended", "The students who attended", "Students are present", "All students"], correctAnswer: "The students who attended" },
        { id: "26-8", type: "multiple-choice", question: "What does اِسْمٌ مَوْصُولٌ mean?", options: ["Demonstrative pronoun", "Relative pronoun", "Personal pronoun", "Interrogative pronoun"], correctAnswer: "Relative pronoun" },
        { id: "26-9", type: "multiple-choice", question: "What does عَائِدٌ mean?", options: ["Antecedent", "Return pronoun", "Subject", "Object"], correctAnswer: "Return pronoun" },
        { id: "26-10", type: "multiple-choice", question: "What does نَجَحَ mean?", options: ["He failed", "He succeeded", "He left", "He studied"], correctAnswer: "He succeeded" }
    ]
};
