import { Lesson } from '../../types';
export const lesson34: Lesson = {
    id: 34, title: "Lesson 34: Passive Voice (الدَّرْسُ الرَّابِعُ وَالثَّلَاثُونَ - الْمَبْنِيُّ لِلْمَجْهُولِ)", grammar: "Passive Voice (Al-Mabnī lil-Majhūl)", theory: {
        sections: [
            { title: "📖 Description", content: "The passive voice (الْمَبْنِيُّ لِلْمَجْهُولِ) is used when the doer is unknown or unimportant. The verb's vowel pattern changes, and the object becomes the deputy subject (نَائِبُ الْفَاعِلِ) in the Marfū' state." },
            { title: "📝 Key Rules", content: "- Past tense passive: كُتِبَ (was written) — first vowel = ḍamma, second = kasra\\n- Present tense passive: يُكْتَبُ (is being written) — first vowel = ḍamma, before-last = fatḥa\\n- The object becomes نَائِبُ الْفَاعِلِ (deputy subject) → Marfū'\\n- The actual doer is not mentioned" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "كُتِبَ الدَّرْسُ", meaning: "Kutiba al-darsu — The lesson was written (الدَّرْسُ is Marfū' as deputy subject)" },
                    { arabic: "يُقْرَأُ الْكِتَابُ", meaning: "Yuqra'u al-kitābu — The book is being read" },
                    { arabic: "فُتِحَ الْبَابُ", meaning: "Futiḥa al-bābu — The door was opened" },
                    { arabic: "بُنِيَ الْمَسْجِدُ", meaning: "Buniya al-masjidu — The mosque was built" },
                    { arabic: "يُدَرَّسُ الْعِلْمُ", meaning: "Yudarrasu al-'ilmu — Knowledge is being taught" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "مَبْنِيٌّ لِلْمَجْهُولِ", meaning: "mabniyyun lil-majhūli — Passive voice" }, { arabic: "مَبْنِيٌّ لِلْمَعْلُومِ", meaning: "mabniyyun lil-ma'lūmi — Active voice" },
                    { arabic: "نَائِبُ الْفَاعِلِ", meaning: "nā'ibu al-fā'ili — Deputy subject" }, { arabic: "كُتِبَ", meaning: "kutiba — Was written" },
                    { arabic: "يُقْرَأُ", meaning: "yuqra'u — Is being read" }, { arabic: "فُتِحَ", meaning: "futiḥa — Was opened" },
                    { arabic: "بُنِيَ", meaning: "buniya — Was built" }, { arabic: "مَجْهُولٌ", meaning: "majhūlun — Unknown" }
                ]
            }
        ]
    }, tasks: [
        { id: "34-1", type: "multiple-choice", question: "The passive past tense vowel pattern is:", options: ["Fatḥa + fatḥa", "Ḍamma + kasra", "Kasra + ḍamma", "Sukūn + fatḥa"], correctAnswer: "Ḍamma + kasra" },
        { id: "34-2", type: "multiple-choice", question: "In passive voice, the object becomes:", options: ["Manṣūb", "Majrūr", "Marfū' (deputy subject)", "Majzūm"], correctAnswer: "Marfū' (deputy subject)" },
        { id: "34-3", type: "multiple-choice", question: "What is نَائِبُ الْفَاعِلِ?", options: ["The doer", "The deputy subject (former object)", "The verb", "The preposition"], correctAnswer: "The deputy subject (former object)" },
        { id: "34-4", type: "multiple-choice", question: "The passive present tense starts with:", options: ["Kasra", "Ḍamma", "Fatḥa", "Sukūn"], correctAnswer: "Ḍamma" },
        { id: "34-5", type: "multiple-choice", question: "Translate: كُتِبَ الدَّرْسُ", options: ["He wrote the lesson", "The lesson was written", "Write the lesson", "The lesson writes"], correctAnswer: "The lesson was written" },
        { id: "34-6", type: "multiple-choice", question: "Translate: فُتِحَ الْبَابُ", options: ["He opened the door", "The door was opened", "Open the door", "The door opens"], correctAnswer: "The door was opened" },
        { id: "34-7", type: "multiple-choice", question: "Translate: بُنِيَ الْمَسْجِدُ", options: ["He built the mosque", "The mosque was built", "Build the mosque", "The mosque is building"], correctAnswer: "The mosque was built" },
        { id: "34-8", type: "multiple-choice", question: "What does مَبْنِيٌّ لِلْمَجْهُولِ mean?", options: ["Active voice", "Passive voice", "Imperative", "Subjunctive"], correctAnswer: "Passive voice" },
        { id: "34-9", type: "multiple-choice", question: "What does مَجْهُولٌ mean?", options: ["Known", "Unknown", "Difficult", "Easy"], correctAnswer: "Unknown" },
        { id: "34-10", type: "multiple-choice", question: "What does فُتِحَ mean?", options: ["He opened", "Was opened", "Will open", "Is opening"], correctAnswer: "Was opened" }
    ]
};
