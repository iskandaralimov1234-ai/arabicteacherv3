import { Lesson } from '../../types';
export const lesson32: Lesson = {
    id: 32, title: "Lesson 32: Comparative and Superlative (الدَّرْسُ الثَّانِي وَالثَّلَاثُونَ - التَّفْضِيلُ)", grammar: "Comparative and Superlative (Tafḍīl)", theory: {
        sections: [
            { title: "📖 Description", content: "The comparative/superlative form (أَفْعَلُ — Af'alu) is used to compare. It follows the pattern أَفْعَلُ and is called اسْمُ التَّفْضِيلِ (Ismu al-Tafḍīl). It can mean 'more X' or 'the most X' depending on context." },
            { title: "📝 Key Rules", content: "- Pattern: أَفْعَلُ → أَكْبَرُ (bigger/biggest)\\n- Comparative: أَكْبَرُ مِنْ (bigger than)\\n- Superlative (definite): الْأَكْبَرُ (the biggest)\\n- Superlative (iḍāfa): أَكْبَرُ طَالِبٍ (the biggest student)\\n- Feminine form: فُعْلَى → كُبْرَى (biggest, fem.)" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "مُحَمَّدٌ أَكْبَرُ مِنْ عَلِيٍّ", meaning: "Muḥammadun akbaru min 'Aliyyin — Muhammad is bigger than Ali (comparative)" },
                    { arabic: "هُوَ الْأَكْبَرُ", meaning: "Huwa al-akbaru — He is the biggest (superlative with الـ)" },
                    { arabic: "أَحْسَنُ طَالِبٍ", meaning: "Aḥsanu ṭālibin — The best student (superlative with iḍāfa)" },
                    { arabic: "هِيَ الْكُبْرَى", meaning: "Hiya al-kubrā — She is the biggest (feminine superlative)" },
                    { arabic: "الْعِلْمُ أَنْفَعُ مِنَ الْمَالِ", meaning: "Al-'ilmu anfa'u mina al-māli — Knowledge is more beneficial than wealth" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "تَفْضِيلٌ", meaning: "tafḍīlun — Comparison/Preference" }, { arabic: "أَفْعَلُ", meaning: "af'alu — Comparative/Superlative pattern" },
                    { arabic: "أَكْبَرُ", meaning: "akbaru — Bigger/Biggest" }, { arabic: "أَصْغَرُ", meaning: "aṣgharu — Smaller/Smallest" },
                    { arabic: "أَحْسَنُ", meaning: "aḥsanu — Better/Best" }, { arabic: "أَجْمَلُ", meaning: "ajmalu — More beautiful" },
                    { arabic: "كُبْرَى", meaning: "kubrā — Biggest (fem.)" }, { arabic: "أَنْفَعُ", meaning: "anfa'u — More beneficial" }
                ]
            }
        ]
    }, tasks: [
        { id: "32-1", type: "multiple-choice", question: "The comparative/superlative follows which pattern?", options: ["فَعِيلٌ", "أَفْعَلُ", "فَاعِلٌ", "مَفْعُولٌ"], correctAnswer: "أَفْعَلُ" },
        { id: "32-2", type: "multiple-choice", question: "How do you express 'bigger than' in Arabic?", options: ["أَكْبَرُ مِنْ", "أَكْبَرُ فِي", "الْأَكْبَرُ", "كَبِيرٌ مِنْ"], correctAnswer: "أَكْبَرُ مِنْ" },
        { id: "32-3", type: "multiple-choice", question: "The feminine superlative pattern is:", options: ["أَفْعَلُ", "فُعْلَى", "فَاعِلَةٌ", "مَفْعُولَةٌ"], correctAnswer: "فُعْلَى" },
        { id: "32-4", type: "multiple-choice", question: "The definite superlative is formed with:", options: ["تَنْوِين", "الـ + أَفْعَلُ", "مِنْ + أَفْعَلُ", "بِ + أَفْعَلُ"], correctAnswer: "الـ + أَفْعَلُ" },
        { id: "32-5", type: "multiple-choice", question: "Translate: مُحَمَّدٌ أَكْبَرُ مِنْ عَلِيٍّ", options: ["Muhammad is like Ali", "Muhammad is bigger than Ali", "Ali is bigger than Muhammad", "They are the same size"], correctAnswer: "Muhammad is bigger than Ali" },
        { id: "32-6", type: "multiple-choice", question: "Translate: أَحْسَنُ طَالِبٍ", options: ["A good student", "The best student", "Better than a student", "Good students"], correctAnswer: "The best student" },
        { id: "32-7", type: "multiple-choice", question: "Translate: الْعِلْمُ أَنْفَعُ مِنَ الْمَالِ", options: ["Knowledge and wealth are equal", "Knowledge is more beneficial than wealth", "Wealth is better", "Knowledge is wealth"], correctAnswer: "Knowledge is more beneficial than wealth" },
        { id: "32-8", type: "multiple-choice", question: "What does تَفْضِيلٌ mean?", options: ["Negation", "Comparison/Preference", "Exception", "Emphasis"], correctAnswer: "Comparison/Preference" },
        { id: "32-9", type: "multiple-choice", question: "What does أَكْبَرُ mean?", options: ["Smaller", "Bigger/Biggest", "Equal", "Similar"], correctAnswer: "Bigger/Biggest" },
        { id: "32-10", type: "multiple-choice", question: "What does أَجْمَلُ mean?", options: ["Uglier", "More beautiful", "Smaller", "Taller"], correctAnswer: "More beautiful" }
    ]
};
