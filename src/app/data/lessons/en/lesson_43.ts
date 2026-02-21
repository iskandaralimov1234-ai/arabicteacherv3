import { Lesson } from '../../types';
export const lesson43: Lesson = {
    id: 43, title: "Lesson 43: The Maf'ūl Ma'ahu (الدَّرْسُ الثَّالِثُ وَالْأَرْبَعُونَ - الْمَفْعُولُ مَعَهُ)", grammar: "Object of Accompaniment (Maf'ūl Ma'ahu)", theory: {
        sections: [
            { title: "📖 Description", content: "The Maf'ūl Ma'ahu (الْمَفْعُولُ مَعَهُ) is a noun after وَ that indicates accompaniment rather than coordination. It is always Manṣūb. The وَ here is called وَاوُ الْمَعِيَّةِ (wāw of accompaniment)." },
            { title: "📝 Key Rules", content: "- Always Manṣūb (مَنْصُوبٌ)\\n- Comes after وَ (wāw of accompaniment)\\n- Differs from 'Aṭf (coordination) — indicates 'together with'\\n- مَشَيْتُ وَالنَّهْرَ = I walked along the river (not: I and the river walked)" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "مَشَيْتُ وَالنَّهْرَ", meaning: "Mashaytu wa al-nahra — I walked along the river (النَّهْرَ = Manṣūb, accompaniment)" },
                    { arabic: "جَاءَ الْأُسْتَاذُ وَطُلُوعَ الشَّمْسِ", meaning: "Jā'a al-ustādhu wa ṭulū'a al-shamsi — The teacher came at sunrise" },
                    { arabic: "سِرْتُ وَالْجَبَلَ", meaning: "Sirtu wa al-jabala — I walked along the mountain" },
                    { arabic: "اسْتَوَى الْمَاءُ وَالْخَشَبَةَ", meaning: "Istawā al-mā'u wa al-khashabata — The water leveled with the plank" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "مَفْعُولٌ مَعَهُ", meaning: "maf'ūlun ma'ahu — Object of accompaniment" }, { arabic: "وَاوُ الْمَعِيَّةِ", meaning: "wāwu al-ma'iyyati — Wāw of accompaniment" },
                    { arabic: "نَهْرٌ", meaning: "nahrun — River" }, { arabic: "جَبَلٌ", meaning: "jabalun — Mountain" },
                    { arabic: "طُلُوعٌ", meaning: "ṭulū'un — Rising/Sunrise" }, { arabic: "غُرُوبٌ", meaning: "ghurūbun — Setting/Sunset" },
                    { arabic: "خَشَبَةٌ", meaning: "khashabatun — Plank" }, { arabic: "مَعِيَّةٌ", meaning: "ma'iyyatun — Accompaniment" }
                ]
            }
        ]
    }, tasks: [
        { id: "43-1", type: "multiple-choice", question: "The Maf'ūl Ma'ahu is always:", options: ["Marfū'", "Manṣūb", "Majrūr", "Majzūm"], correctAnswer: "Manṣūb" },
        { id: "43-2", type: "multiple-choice", question: "The وَ in Maf'ūl Ma'ahu is called:", options: ["Wāw 'aṭf", "Wāw al-ma'iyya", "Wāw al-ḥāl", "Wāw al-qasam"], correctAnswer: "Wāw al-ma'iyya" },
        { id: "43-3", type: "multiple-choice", question: "How does it differ from coordination ('Aṭf)?", options: ["It indicates accompaniment, not joint action", "It indicates cause", "It indicates time", "It indicates place"], correctAnswer: "It indicates accompaniment, not joint action" },
        { id: "43-4", type: "multiple-choice", question: "In مَشَيْتُ وَالنَّهْرَ, who walked?", options: ["The river", "I walked (along the river)", "We both walked", "The river and I"], correctAnswer: "I walked (along the river)" },
        { id: "43-5", type: "multiple-choice", question: "Translate: مَشَيْتُ وَالنَّهْرَ", options: ["I swam in the river", "I walked along the river", "The river and I walked", "I crossed the river"], correctAnswer: "I walked along the river" },
        { id: "43-6", type: "multiple-choice", question: "Translate: جَاءَ الْأُسْتَاذُ وَطُلُوعَ الشَّمْسِ", options: ["The teacher came and the sun rose", "The teacher came at sunrise", "The sun and teacher came", "The teacher left at sunrise"], correctAnswer: "The teacher came at sunrise" },
        { id: "43-7", type: "multiple-choice", question: "Translate: سِرْتُ وَالْجَبَلَ", options: ["I climbed the mountain", "I walked along the mountain", "The mountain and I went", "I saw the mountain"], correctAnswer: "I walked along the mountain" },
        { id: "43-8", type: "multiple-choice", question: "What does نَهْرٌ mean?", options: ["Sea", "River", "Lake", "Mountain"], correctAnswer: "River" },
        { id: "43-9", type: "multiple-choice", question: "What does جَبَلٌ mean?", options: ["River", "Hill", "Mountain", "Valley"], correctAnswer: "Mountain" },
        { id: "43-10", type: "multiple-choice", question: "What does طُلُوعٌ mean?", options: ["Setting", "Rising/Sunrise", "Noon", "Night"], correctAnswer: "Rising/Sunrise" }
    ]
};
