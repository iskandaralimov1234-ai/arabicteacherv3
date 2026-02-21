import { Lesson } from '../../types';
export const lesson50: Lesson = {
    id: 50, title: "Lesson 50: Tamyīz (الدَّرْسُ الْخَمْسُونَ - التَّمْيِيزُ)", grammar: "Tamyīz (Specification)", theory: {
        sections: [
            { title: "📖 Description", content: "Tamyīz (التَّمْيِيزُ — Specification/Distinction) is a noun that removes ambiguity from a general or vague statement. It is always indefinite and Manṣūb (مَنْصُوبٌ). It answers: 'specification of what?'" },
            { title: "📝 Key Rules", content: "- Always indefinite and Manṣūb\\n- Tamyīz Nafs: after measures → عِشْرُونَ كِتَابًا (20 books)\\n- Tamyīz Nisba: after sentences → طَابَتِ الْمَدِينَةُ هَوَاءً (beautiful in air)\\n- After numbers 11-99: singular Manṣūb\\n- After 100/1000: singular Majrūr (iḍāfa, not tamyīz)" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "عِنْدِي عِشْرُونَ كِتَابًا", meaning: "'Indī 'ishrūna kitāban — I have twenty books (كِتَابًا = Tamyīz after number)" },
                    { arabic: "اِشْتَرَيْتُ رِطْلًا عَسَلًا", meaning: "Ishtaraytu riṭlan 'asalan — I bought a pound of honey (عَسَلًا = Tamyīz of measure)" },
                    { arabic: "طَابَتِ الْمَدِينَةُ هَوَاءً", meaning: "Ṭābati al-madīnatu hawā'an — The city is pleasant in its air (Tamyīz Nisba)" },
                    { arabic: "هُوَ أَكْبَرُ مِنِّي سِنًّا", meaning: "Huwa akbaru minnī sinnan — He is older than me in age (سِنًّا = Tamyīz)" },
                    { arabic: "مَلَأْتُ الْكَأْسَ مَاءً", meaning: "Mala'tu al-ka'sa mā'an — I filled the cup with water" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "تَمْيِيزٌ", meaning: "tamyīzun — Specification/Distinction" }, { arabic: "مُمَيَّزٌ", meaning: "mumayyazun — Specified noun" },
                    { arabic: "نَفْسٌ", meaning: "nafsun — Self (Tamyīz type)" }, { arabic: "نِسْبَةٌ", meaning: "nisbatun — Relation (Tamyīz type)" },
                    { arabic: "رِطْلٌ", meaning: "riṭlun — Pound (weight)" }, { arabic: "عَسَلٌ", meaning: "'asalun — Honey" },
                    { arabic: "هَوَاءٌ", meaning: "hawā'un — Air" }, { arabic: "سِنٌّ", meaning: "sinnun — Age/Tooth" }
                ]
            }
        ]
    }, tasks: [
        { id: "50-1", type: "multiple-choice", question: "Tamyīz is always:", options: ["Definite and Marfū'", "Indefinite and Manṣūb", "Definite and Majrūr", "Indefinite and Marfū'"], correctAnswer: "Indefinite and Manṣūb" },
        { id: "50-2", type: "multiple-choice", question: "Tamyīz after numbers 11-99 is:", options: ["Plural Majrūr", "Singular Manṣūb", "Dual Marfū'", "Plural Marfū'"], correctAnswer: "Singular Manṣūb" },
        { id: "50-3", type: "multiple-choice", question: "Tamyīz Nisba comes after:", options: ["Numbers", "Sentences (to clarify meaning)", "Only measures", "Only weights"], correctAnswer: "Sentences (to clarify meaning)" },
        { id: "50-4", type: "multiple-choice", question: "In هُوَ أَكْبَرُ مِنِّي سِنًّا, what is سِنًّا?", options: ["Direct object", "Tamyīz", "Ḥāl", "Subject"], correctAnswer: "Tamyīz" },
        { id: "50-5", type: "multiple-choice", question: "Translate: عِنْدِي عِشْرُونَ كِتَابًا", options: ["I have twenty books", "I read twenty books", "Twenty books are here", "I want twenty books"], correctAnswer: "I have twenty books" },
        { id: "50-6", type: "multiple-choice", question: "Translate: طَابَتِ الْمَدِينَةُ هَوَاءً", options: ["The city has air", "The city is pleasant in its air", "The air is nice", "The city is big"], correctAnswer: "The city is pleasant in its air" },
        { id: "50-7", type: "multiple-choice", question: "Translate: اِشْتَرَيْتُ رِطْلًا عَسَلًا", options: ["I sold honey", "I bought a pound of honey", "I ate honey", "I want honey"], correctAnswer: "I bought a pound of honey" },
        { id: "50-8", type: "multiple-choice", question: "What does تَمْيِيزٌ mean?", options: ["Exception", "Specification/Distinction", "Emphasis", "Coordination"], correctAnswer: "Specification/Distinction" },
        { id: "50-9", type: "multiple-choice", question: "What does عَسَلٌ mean?", options: ["Sugar", "Honey", "Milk", "Water"], correctAnswer: "Honey" },
        { id: "50-10", type: "multiple-choice", question: "What does سِنٌّ mean?", options: ["Eye", "Age/Tooth", "Hand", "Head"], correctAnswer: "Age/Tooth" }
    ]
};
