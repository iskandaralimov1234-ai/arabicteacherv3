import { Lesson } from '../../types';
export const lesson25: Lesson = {
    id: 25, title: "Lesson 25: Emphasis (Tawkīd) (الدَّرْسُ الْخَامِسُ وَالْعِشْرُونَ - التَّوْكِيدُ)", grammar: "Emphasis (Tawkīd)", theory: {
        sections: [
            { title: "📖 Description", content: "Tawkīd (التَّوْكِيدُ — Emphasis) is used to reinforce or emphasize. Two types: Tawkīd Lafẓī (verbal — repeating the word) and Tawkīd Ma'nawī (meaning — using special words like نَفْسُ, عَيْنُ, كُلُّ, جَمِيعُ)." },
            { title: "📝 Key Rules", content: "- Tawkīd Lafẓī: repeat the word → جَاءَ جَاءَ (he came, he came!)\\n- Tawkīd Ma'nawī: uses emphasis words that agree in i'rāb\\n- نَفْسُ / عَيْنُ = himself/herself (with pronoun suffix)\\n- كُلُّ / جَمِيعُ = all/entirely\\n- The emphasis word takes the same i'rāb as the emphasized word" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "جَاءَ الْمُدِيرُ نَفْسُهُ", meaning: "Jā'a al-mudīru nafsuhu — The director himself came (Tawkīd Ma'nawī — Marfū')" },
                    { arabic: "رَأَيْتُ الْمُعَلِّمَ عَيْنَهُ", meaning: "Ra'aytu al-mu'allima 'aynahu — I saw the teacher himself (Tawkīd Ma'nawī — Manṣūb)" },
                    { arabic: "حَضَرَ الطُّلَّابُ كُلُّهُمْ", meaning: "Ḥaḍara al-ṭullābu kulluhum — All the students attended (Tawkīd Ma'nawī — كُلُّ)" },
                    { arabic: "قَرَأْتُ الْكِتَابَ الْكِتَابَ", meaning: "Qara'tu al-kitāba al-kitāba — I read the book, THE BOOK! (Tawkīd Lafẓī — repetition)" },
                    { arabic: "جَاءَ الطُّلَّابُ جَمِيعُهُمْ", meaning: "Jā'a al-ṭullābu jamī'uhum — All the students came (جَمِيعُ — all)" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "تَوْكِيدٌ", meaning: "tawkīdun — Emphasis" }, { arabic: "لَفْظِيٌّ", meaning: "lafẓiyyun — Verbal (repetition)" },
                    { arabic: "مَعْنَوِيٌّ", meaning: "ma'nawiyyun — Meaning-based" }, { arabic: "نَفْسٌ", meaning: "nafsun — Self" },
                    { arabic: "عَيْنٌ", meaning: "'aynun — Very same" }, { arabic: "كُلٌّ", meaning: "kullun — All/Every" },
                    { arabic: "جَمِيعٌ", meaning: "jamī'un — All/Entire" }, { arabic: "أَجْمَعُونَ", meaning: "ajma'ūna — All together" }
                ]
            }
        ]
    }, tasks: [
        { id: "25-1", type: "multiple-choice", question: "How many types of Tawkīd are there?", options: ["One", "Two", "Three", "Four"], correctAnswer: "Two" },
        { id: "25-2", type: "multiple-choice", question: "Tawkīd Lafẓī means:", options: ["Using نَفْسُ or عَيْنُ", "Repeating the word itself", "Adding a preposition", "Changing the vowel"], correctAnswer: "Repeating the word itself" },
        { id: "25-3", type: "multiple-choice", question: "In جَاءَ الْمُدِيرُ نَفْسُهُ, why is نَفْسُ in ḍamma?", options: ["Because it is always Marfū'", "Because it agrees with الْمُدِيرُ which is Marfū'", "Because it is indefinite", "Because it is the subject"], correctAnswer: "Because it agrees with الْمُدِيرُ which is Marfū'" },
        { id: "25-4", type: "multiple-choice", question: "Which word means 'all' in emphasis?", options: ["نَفْسٌ", "عَيْنٌ", "كُلٌّ", "بَعْضٌ"], correctAnswer: "كُلٌّ" },
        { id: "25-5", type: "multiple-choice", question: "Translate: جَاءَ الْمُدِيرُ نَفْسُهُ", options: ["The director went", "The director himself came", "The director's self", "The director left"], correctAnswer: "The director himself came" },
        { id: "25-6", type: "multiple-choice", question: "Translate: حَضَرَ الطُّلَّابُ كُلُّهُمْ", options: ["Some students attended", "All the students attended", "The students left", "A student attended"], correctAnswer: "All the students attended" },
        { id: "25-7", type: "multiple-choice", question: "Translate: رَأَيْتُ الْمُعَلِّمَ عَيْنَهُ", options: ["I saw a teacher", "I saw the teacher himself", "I saw the teacher's eye", "The teacher saw me"], correctAnswer: "I saw the teacher himself" },
        { id: "25-8", type: "multiple-choice", question: "What does تَوْكِيدٌ mean?", options: ["Emphasis", "Exception", "Coordination", "Apposition"], correctAnswer: "Emphasis" },
        { id: "25-9", type: "multiple-choice", question: "What does نَفْسٌ mean in Tawkīd?", options: ["Soul only", "Self (for emphasis)", "Body", "Mind"], correctAnswer: "Self (for emphasis)" },
        { id: "25-10", type: "multiple-choice", question: "What does جَمِيعٌ mean?", options: ["Some", "All/Entire", "Half", "Part"], correctAnswer: "All/Entire" }
    ]
};
