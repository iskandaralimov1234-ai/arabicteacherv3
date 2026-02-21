import { Lesson } from '../../types';
export const lesson42: Lesson = {
    id: 42, title: "Lesson 42: The Maf'ūl li-Ajlihi (الدَّرْسُ الثَّانِي وَالْأَرْبَعُونَ - الْمَفْعُولُ لِأَجْلِهِ)", grammar: "Object of Purpose (Maf'ūl li-Ajlihi)", theory: {
        sections: [
            { title: "📖 Description", content: "The Maf'ūl li-Ajlihi (الْمَفْعُولُ لِأَجْلِهِ) is a verbal noun explaining WHY an action was done. It answers the question 'for what purpose?' and is always Manṣūb." },
            { title: "📝 Key Rules", content: "- Always Manṣūb (مَنْصُوبٌ) and a verbal noun (مَصْدَر)\\n- Answers 'why?' or 'for what reason?'\\n- Must share the same doer and time as the main verb\\n- Alternative: لِ + Majrūr (prepositional phrase)" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "قُمْتُ إِجْلَالًا لِلْمُعَلِّمِ", meaning: "Qumtu ijlālan lil-mu'allimi — I stood up out of respect for the teacher" },
                    { arabic: "جِئْتُ رَغْبَةً فِي الْعِلْمِ", meaning: "Ji'tu raghbatan fī al-'ilmi — I came out of desire for knowledge" },
                    { arabic: "سَافَرَ طَلَبًا لِلرِّزْقِ", meaning: "Sāfara ṭalaban lil-rizqi — He traveled seeking provision" },
                    { arabic: "بَكَى خَوْفًا مِنَ اللهِ", meaning: "Bakā khawfan mina Allāhi — He cried out of fear of Allah" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "مَفْعُولٌ لِأَجْلِهِ", meaning: "maf'ūlun li-ajlihi — Object of purpose" }, { arabic: "إِجْلَالٌ", meaning: "ijlālun — Respect/Reverence" },
                    { arabic: "رَغْبَةٌ", meaning: "raghbatun — Desire" }, { arabic: "طَلَبٌ", meaning: "ṭalabun — Seeking/Pursuit" },
                    { arabic: "خَوْفٌ", meaning: "khawfun — Fear" }, { arabic: "رِزْقٌ", meaning: "rizqun — Provision" },
                    { arabic: "تَقْدِيرٌ", meaning: "taqdīrun — Appreciation" }, { arabic: "حُبٌّ", meaning: "ḥubbun — Love" }
                ]
            }
        ]
    }, tasks: [
        { id: "42-1", type: "multiple-choice", question: "The Maf'ūl li-Ajlihi is always:", options: ["Marfū'", "Manṣūb", "Majrūr", "Majzūm"], correctAnswer: "Manṣūb" },
        { id: "42-2", type: "multiple-choice", question: "It answers which question?", options: ["How?", "When?", "Why?", "Where?"], correctAnswer: "Why?" },
        { id: "42-3", type: "multiple-choice", question: "The Maf'ūl li-Ajlihi must be a:", options: ["Noun", "Verbal noun (maṣdar)", "Verb", "Preposition"], correctAnswer: "Verbal noun (maṣdar)" },
        { id: "42-4", type: "multiple-choice", question: "The alternative is:", options: ["مِنْ + Majrūr", "لِ + Majrūr", "فِي + Marfū'", "عَنْ + Manṣūb"], correctAnswer: "لِ + Majrūr" },
        { id: "42-5", type: "multiple-choice", question: "Translate: قُمْتُ إِجْلَالًا لِلْمُعَلِّمِ", options: ["I sat for the teacher", "I stood out of respect for the teacher", "I taught the student", "I respected the teacher"], correctAnswer: "I stood out of respect for the teacher" },
        { id: "42-6", type: "multiple-choice", question: "Translate: بَكَى خَوْفًا مِنَ اللهِ", options: ["He laughed from joy", "He cried out of fear of Allah", "He feared crying", "He was scared"], correctAnswer: "He cried out of fear of Allah" },
        { id: "42-7", type: "multiple-choice", question: "Translate: سَافَرَ طَلَبًا لِلرِّزْقِ", options: ["He stopped seeking", "He traveled seeking provision", "He found provision", "He lost his way"], correctAnswer: "He traveled seeking provision" },
        { id: "42-8", type: "multiple-choice", question: "What does خَوْفٌ mean?", options: ["Love", "Fear", "Hope", "Anger"], correctAnswer: "Fear" },
        { id: "42-9", type: "multiple-choice", question: "What does رِزْقٌ mean?", options: ["Wealth", "Provision", "Knowledge", "Food"], correctAnswer: "Provision" },
        { id: "42-10", type: "multiple-choice", question: "What does إِجْلَالٌ mean?", options: ["Disrespect", "Respect/Reverence", "Fear", "Joy"], correctAnswer: "Respect/Reverence" }
    ]
};
