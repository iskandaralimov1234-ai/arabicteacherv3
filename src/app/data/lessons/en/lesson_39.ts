import { Lesson } from '../../types';
export const lesson39: Lesson = {
    id: 39, title: "Lesson 39: The Ḥāl (الدَّرْسُ التَّاسِعُ وَالثَّلَاثُونَ - الْحَالُ)", grammar: "The Ḥāl (Circumstantial Accusative)", theory: {
        sections: [
            { title: "📖 Description", content: "The Ḥāl (الْحَالُ) describes the state or condition of the doer or object at the time of the action. It is always Manṣūb (مَنْصُوبٌ) and answers the question: 'In what state?'" },
            { title: "📝 Key Rules", content: "- Ḥāl is always Manṣūb and indefinite\\n- Ṣāḥib al-Ḥāl (the one described) is definite\\n- Ḥāl can be: a single word, a sentence, or a prepositional phrase\\n- It provides additional information about the doer/object during the action" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "جَاءَ الطَّالِبُ مَسْرُورًا", meaning: "Jā'a al-ṭālibu masrūran — The student came happily (مَسْرُورًا = Ḥāl, Manṣūb)" },
                    { arabic: "شَرِبْتُ الْمَاءَ بَارِدًا", meaning: "Sharibtu al-mā'a bāridan — I drank the water cold" },
                    { arabic: "رَأَيْتُ الْوَلَدَ يَبْكِي", meaning: "Ra'aytu al-walada yabkī — I saw the boy crying (Ḥāl = sentence)" },
                    { arabic: "دَخَلَ وَهُوَ يَضْحَكُ", meaning: "Dakhala wa huwa yaḍḥaku — He entered while laughing (Ḥāl = wāw al-ḥāl + sentence)" },
                    { arabic: "رَجَعَ الْجُنْدِيُّ مُنْتَصِرًا", meaning: "Raja'a al-jundiyyu muntaṣiran — The soldier returned victorious" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "حَالٌ", meaning: "ḥālun — Circumstantial accusative" }, { arabic: "صَاحِبُ الْحَالِ", meaning: "ṣāḥibu al-ḥāli — The one described" },
                    { arabic: "مَسْرُورٌ", meaning: "masrūrun — Happy" }, { arabic: "مُنْتَصِرٌ", meaning: "muntaṣirun — Victorious" },
                    { arabic: "يَبْكِي", meaning: "yabkī — He cries" }, { arabic: "يَضْحَكُ", meaning: "yaḍḥaku — He laughs" },
                    { arabic: "جُنْدِيٌّ", meaning: "jundiyyun — Soldier" }, { arabic: "وَاوُ الْحَالِ", meaning: "wāwu al-ḥāli — Wāw of Ḥāl" }
                ]
            }
        ]
    }, tasks: [
        { id: "39-1", type: "multiple-choice", question: "The Ḥāl is always in which state?", options: ["Marfū'", "Manṣūb", "Majrūr", "Majzūm"], correctAnswer: "Manṣūb" },
        { id: "39-2", type: "multiple-choice", question: "The Ḥāl is always:", options: ["Definite", "Indefinite", "Dual", "Plural"], correctAnswer: "Indefinite" },
        { id: "39-3", type: "multiple-choice", question: "The Ṣāḥib al-Ḥāl must be:", options: ["Indefinite", "Definite", "Manṣūb", "Feminine"], correctAnswer: "Definite" },
        { id: "39-4", type: "multiple-choice", question: "The Ḥāl answers which question?", options: ["Who?", "When?", "In what state?", "Where?"], correctAnswer: "In what state?" },
        { id: "39-5", type: "multiple-choice", question: "Translate: جَاءَ الطَّالِبُ مَسْرُورًا", options: ["The happy student", "The student came happily", "A student is happy", "Happy students came"], correctAnswer: "The student came happily" },
        { id: "39-6", type: "multiple-choice", question: "Translate: شَرِبْتُ الْمَاءَ بَارِدًا", options: ["I want cold water", "I drank the water cold", "Cold water was poured", "Water is cold"], correctAnswer: "I drank the water cold" },
        { id: "39-7", type: "multiple-choice", question: "Translate: رَجَعَ الْجُنْدِيُّ مُنْتَصِرًا", options: ["The soldier fought", "The soldier returned victorious", "The victorious soldier", "Soldiers won"], correctAnswer: "The soldier returned victorious" },
        { id: "39-8", type: "multiple-choice", question: "What does حَالٌ mean?", options: ["Subject", "Circumstantial accusative", "Object", "Predicate"], correctAnswer: "Circumstantial accusative" },
        { id: "39-9", type: "multiple-choice", question: "What does مَسْرُورٌ mean?", options: ["Sad", "Happy", "Angry", "Tired"], correctAnswer: "Happy" },
        { id: "39-10", type: "multiple-choice", question: "What does جُنْدِيٌّ mean?", options: ["Teacher", "Student", "Soldier", "Doctor"], correctAnswer: "Soldier" }
    ]
};
