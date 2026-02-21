import { Lesson } from '../../types';
export const lesson44: Lesson = {
    id: 44, title: "Lesson 44: Inna and Its Sisters — Advanced (الدَّرْسُ الرَّابِعُ وَالْأَرْبَعُونَ - إِنَّ وَأَخَوَاتُهَا - مُتَقَدِّمٌ)", grammar: "Inna — Advanced", theory: {
        sections: [
            { title: "📖 Description", content: "Advanced usage of إِنَّ and its sisters: where the Khabar comes before the Ism, when إِنَّ comes after قَالَ, and when أَنَّ (with fatḥa) is used instead of إِنَّ (with kasra)." },
            { title: "📝 Key Rules", content: "- Khabar of إِنَّ stays Marfū' (مَرْفُوعٌ — damma, NOT kasra!)\\n- إِنَّ (with kasra) after beginning of speech or after قَالَ\\n- أَنَّ (with fatḥa) in the middle of speech\\n- Khabar can be fronted: إِنَّ فِي ذَلِكَ لَعِبْرَةً" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "إِنَّ فِي ذَلِكَ لَعِبْرَةً", meaning: "Inna fī dhālika la-'ibratan — Indeed in that is a lesson (Khabar fronted)" },
                    { arabic: "عَلِمْتُ أَنَّ الْعِلْمَ نَافِعٌ", meaning: "'Alimtu anna al-'ilma nāfi'un — I knew that knowledge is beneficial (أَنَّ in middle)" },
                    { arabic: "قَالَ إِنَّ اللهَ مَعَنَا", meaning: "Qāla inna Allāha ma'anā — He said: Indeed Allah is with us (إِنَّ after قَالَ)" },
                    { arabic: "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا", meaning: "Inna al-ṣalāta kānat... — Indeed prayer has been prescribed at fixed times" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "عِبْرَةٌ", meaning: "'ibratun — Lesson/Moral" }, { arabic: "نَافِعٌ", meaning: "nāfi'un — Beneficial" },
                    { arabic: "صَلَاةٌ", meaning: "ṣalātun — Prayer" }, { arabic: "مُؤْمِنٌ", meaning: "mu'minun — Believer" },
                    { arabic: "مَوْقُوتٌ", meaning: "mawqūtun — Fixed in time" }, { arabic: "تَقْدِيمٌ", meaning: "taqdīmun — Fronting" },
                    { arabic: "تَأْخِيرٌ", meaning: "ta'khīrun — Delaying" }, { arabic: "كِتَابٌ", meaning: "kitābun — Book/Decree" }
                ]
            }
        ]
    }, tasks: [
        { id: "44-1", type: "multiple-choice", question: "The Khabar of إِنَّ is in which state?", options: ["Manṣūb", "Majrūr", "Marfū' (ḍamma)", "Majzūm"], correctAnswer: "Marfū' (ḍamma)" },
        { id: "44-2", type: "multiple-choice", question: "When is أَنَّ (with fatḥa) used instead of إِنَّ?", options: ["At the start", "In the middle of speech", "After قَالَ", "Never"], correctAnswer: "In the middle of speech" },
        { id: "44-3", type: "multiple-choice", question: "The Khabar of إِنَّ can be:", options: ["Only after the Ism", "Fronted before the Ism", "Only a noun", "Only indefinite"], correctAnswer: "Fronted before the Ism" },
        { id: "44-4", type: "multiple-choice", question: "After قَالَ, which form is used?", options: ["أَنَّ (fatḥa)", "إِنَّ (kasra)", "لَكِنَّ", "كَأَنَّ"], correctAnswer: "إِنَّ (kasra)" },
        { id: "44-5", type: "multiple-choice", question: "Translate: عَلِمْتُ أَنَّ الْعِلْمَ نَافِعٌ", options: ["Knowledge is beneficial", "I knew that knowledge is beneficial", "Beneficial knowledge", "Know that knowledge benefits"], correctAnswer: "I knew that knowledge is beneficial" },
        { id: "44-6", type: "multiple-choice", question: "Translate: قَالَ إِنَّ اللهَ مَعَنَا", options: ["Allah said", "He said: Indeed Allah is with us", "Allah is with them", "We are with Allah"], correctAnswer: "He said: Indeed Allah is with us" },
        { id: "44-7", type: "multiple-choice", question: "Translate: إِنَّ فِي ذَلِكَ لَعِبْرَةً", options: ["That is a lesson", "Indeed in that is a lesson", "That lesson is there", "Lessons are many"], correctAnswer: "Indeed in that is a lesson" },
        { id: "44-8", type: "multiple-choice", question: "What does عِبْرَةٌ mean?", options: ["Example", "Lesson/Moral", "Story", "Warning"], correctAnswer: "Lesson/Moral" },
        { id: "44-9", type: "multiple-choice", question: "What does نَافِعٌ mean?", options: ["Harmful", "Beneficial", "Useless", "Expensive"], correctAnswer: "Beneficial" },
        { id: "44-10", type: "multiple-choice", question: "What does مُؤْمِنٌ mean?", options: ["Disbeliever", "Believer", "Scholar", "Teacher"], correctAnswer: "Believer" }
    ]
};
