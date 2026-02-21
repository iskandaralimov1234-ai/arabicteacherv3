import { Lesson } from '../../types';
export const lesson29: Lesson = {
    id: 29, title: "Lesson 29: Negation Particles (الدَّرْسُ التَّاسِعُ وَالْعِشْرُونَ - أَدَوَاتُ النَّفْيِ)", grammar: "Negation Particles", theory: {
        sections: [
            { title: "📖 Description", content: "Arabic has several negation particles: لَا (no/not), مَا (not), لَمْ (did not), لَنْ (will not), لَيْسَ (is not). Each has specific usage rules and effects on the verb or noun that follows." },
            { title: "📝 Key Rules", content: "- لَا + present verb = simple negation\\n- لَمْ + present verb = past negation (verb becomes Majzūm)\\n- لَنْ + present verb = future negation (verb becomes Manṣūb)\\n- مَا + past verb = negation of past\\n- لَيْسَ = 'is not' (subject Marfū', predicate Manṣūb)" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "لَا يَذْهَبُ", meaning: "Lā yadhhabu — He does not go (simple present negation)" },
                    { arabic: "لَمْ يَذْهَبْ", meaning: "Lam yadhhab — He did not go (لَمْ + Majzūm)" },
                    { arabic: "لَنْ يَذْهَبَ", meaning: "Lan yadhaba — He will not go (لَنْ + Manṣūb)" },
                    { arabic: "مَا ذَهَبَ", meaning: "Mā dhahaba — He did not go (مَا + past)" },
                    { arabic: "لَيْسَ الطَّالِبُ كَسُولًا", meaning: "Laysa al-ṭālibu kasūlan — The student is not lazy (لَيْسَ)" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "نَفْيٌ", meaning: "nafyun — Negation" }, { arabic: "لَا", meaning: "lā — No/Not" },
                    { arabic: "لَمْ", meaning: "lam — Did not" }, { arabic: "لَنْ", meaning: "lan — Will not" },
                    { arabic: "مَا", meaning: "mā — Not (past)" }, { arabic: "لَيْسَ", meaning: "laysa — Is not" },
                    { arabic: "كَسُولٌ", meaning: "kasūlun — Lazy" }, { arabic: "أَدَاةٌ", meaning: "adātun — Particle/Tool" }
                ]
            }
        ]
    }, tasks: [
        { id: "29-1", type: "multiple-choice", question: "لَمْ makes the present verb:", options: ["Marfū'", "Manṣūb", "Majzūm", "Unchanged"], correctAnswer: "Majzūm" },
        { id: "29-2", type: "multiple-choice", question: "لَنْ makes the present verb:", options: ["Marfū'", "Manṣūb", "Majzūm", "Unchanged"], correctAnswer: "Manṣūb" },
        { id: "29-3", type: "multiple-choice", question: "لَيْسَ puts the predicate in which state?", options: ["Marfū'", "Manṣūb", "Majrūr", "Majzūm"], correctAnswer: "Manṣūb" },
        { id: "29-4", type: "multiple-choice", question: "Which particle negates the future?", options: ["لَا", "لَمْ", "لَنْ", "مَا"], correctAnswer: "لَنْ" },
        { id: "29-5", type: "multiple-choice", question: "Translate: لَمْ يَذْهَبْ", options: ["He will not go", "He did not go", "He does not go", "He is not going"], correctAnswer: "He did not go" },
        { id: "29-6", type: "multiple-choice", question: "Translate: لَنْ يَذْهَبَ", options: ["He did not go", "He will not go", "He does not go", "He is not going"], correctAnswer: "He will not go" },
        { id: "29-7", type: "multiple-choice", question: "Translate: لَيْسَ الطَّالِبُ كَسُولًا", options: ["The student is lazy", "The student is not lazy", "The lazy student", "Students are not lazy"], correctAnswer: "The student is not lazy" },
        { id: "29-8", type: "multiple-choice", question: "What does نَفْيٌ mean?", options: ["Affirmation", "Negation", "Question", "Command"], correctAnswer: "Negation" },
        { id: "29-9", type: "multiple-choice", question: "What does كَسُولٌ mean?", options: ["Diligent", "Lazy", "Smart", "Fast"], correctAnswer: "Lazy" },
        { id: "29-10", type: "multiple-choice", question: "What does أَدَاةٌ mean?", options: ["Verb", "Particle/Tool", "Noun", "Adjective"], correctAnswer: "Particle/Tool" }
    ]
};
