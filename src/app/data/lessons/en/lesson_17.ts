import { Lesson } from '../../types';
export const lesson17: Lesson = {
    id: 17, title: "Lesson 17: Numbers 11-19 (الدَّرْسُ السَّابِعَ عَشَرَ - الْأَعْدَادُ ١١-١٩)", grammar: "Numbers 11-19", theory: {
        sections: [
            { title: "📖 Description", content: "Numbers 11-19 are compound numbers. Each consists of two parts: the unit and 'ten' (عَشَرَ). For 11-12, both parts agree in gender. For 13-19, the unit part follows reverse gender while 'ten' agrees with the noun." },
            { title: "📝 Key Rules", content: "- 11 (أَحَدَ عَشَرَ / إِحْدَى عَشْرَةَ): both parts agree in gender\\n- 12 (اثْنَا عَشَرَ / اثْنَتَا عَشْرَةَ): both parts agree in gender\\n- 13-19: unit reverses gender, 'ten' agrees\\n- The counted noun is always singular Manṣūb (مَنْصُوبٌ)" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "أَحَدَ عَشَرَ كِتَابًا", meaning: "Aḥada 'ashara kitāban — Eleven books (counted noun: singular Manṣūb)" },
                    { arabic: "إِحْدَى عَشْرَةَ بِنْتًا", meaning: "Iḥdā 'ashrata bintan — Eleven girls (feminine form)" },
                    { arabic: "ثَلَاثَةَ عَشَرَ طَالِبًا", meaning: "Thalāthata 'ashara ṭāliban — Thirteen students (reverse gender on unit)" },
                    { arabic: "خَمْسَ عَشْرَةَ سَيَّارَةً", meaning: "Khamsa 'ashrata sayyāratan — Fifteen cars (unit agrees, 'ten' agrees)" },
                    { arabic: "تِسْعَةَ عَشَرَ يَوْمًا", meaning: "Tis'ata 'ashara yawman — Nineteen days" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "أَحَدَ عَشَرَ", meaning: "aḥada 'ashara — Eleven (masc.)" }, { arabic: "اثْنَا عَشَرَ", meaning: "ithnā 'ashara — Twelve (masc.)" },
                    { arabic: "ثَلَاثَةَ عَشَرَ", meaning: "thalāthata 'ashara — Thirteen (masc.)" }, { arabic: "أَرْبَعَةَ عَشَرَ", meaning: "arba'ata 'ashara — Fourteen (masc.)" },
                    { arabic: "خَمْسَةَ عَشَرَ", meaning: "khamsata 'ashara — Fifteen (masc.)" }, { arabic: "سِتَّةَ عَشَرَ", meaning: "sittata 'ashara — Sixteen (masc.)" },
                    { arabic: "سَبْعَةَ عَشَرَ", meaning: "sab'ata 'ashara — Seventeen (masc.)" }, { arabic: "تِسْعَةَ عَشَرَ", meaning: "tis'ata 'ashara — Nineteen (masc.)" }
                ]
            }
        ]
    }, tasks: [
        { id: "17-1", type: "multiple-choice", question: "The counted noun after numbers 11-19 is in which form?", options: ["Plural Majrūr", "Singular Manṣūb", "Dual Marfū'", "Plural Marfū'"], correctAnswer: "Singular Manṣūb" },
        { id: "17-2", type: "multiple-choice", question: "For numbers 13-19, the unit part follows which gender rule?", options: ["Agrees with noun", "Reverse gender", "Always masculine", "Always feminine"], correctAnswer: "Reverse gender" },
        { id: "17-3", type: "multiple-choice", question: "For numbers 11-12, both parts follow which rule?", options: ["Reverse gender", "Agree in gender with the noun", "Always feminine", "No gender agreement"], correctAnswer: "Agree in gender with the noun" },
        { id: "17-4", type: "multiple-choice", question: "What is the correct form for 'eleven books'?", options: ["أَحَدَ عَشَرَ كُتُبٍ", "أَحَدَ عَشَرَ كِتَابًا", "أَحَدَ عَشَرَ كِتَابٌ", "إِحْدَى عَشْرَةَ كِتَابًا"], correctAnswer: "أَحَدَ عَشَرَ كِتَابًا" },
        { id: "17-5", type: "multiple-choice", question: "Translate: ثَلَاثَةَ عَشَرَ طَالِبًا", options: ["Thirteen teachers", "Thirteen students", "Thirty students", "Three students"], correctAnswer: "Thirteen students" },
        { id: "17-6", type: "multiple-choice", question: "Translate: خَمْسَ عَشْرَةَ سَيَّارَةً", options: ["Five cars", "Fifteen cars", "Fifty cars", "Fifteen books"], correctAnswer: "Fifteen cars" },
        { id: "17-7", type: "multiple-choice", question: "Translate: تِسْعَةَ عَشَرَ يَوْمًا", options: ["Nine days", "Ninety days", "Nineteen days", "Nineteen nights"], correctAnswer: "Nineteen days" },
        { id: "17-8", type: "multiple-choice", question: "What does أَحَدَ عَشَرَ mean?", options: ["Ten", "Eleven", "Twelve", "Thirteen"], correctAnswer: "Eleven" },
        { id: "17-9", type: "multiple-choice", question: "What does اثْنَا عَشَرَ mean?", options: ["Eleven", "Twelve", "Twenty", "Twenty-two"], correctAnswer: "Twelve" },
        { id: "17-10", type: "multiple-choice", question: "What does تِسْعَةَ عَشَرَ mean?", options: ["Nine", "Ninety", "Nineteen", "Eighteen"], correctAnswer: "Nineteen" }
    ]
};
