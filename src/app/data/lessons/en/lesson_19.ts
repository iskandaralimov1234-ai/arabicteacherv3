import { Lesson } from '../../types';
export const lesson19: Lesson = {
    id: 19, title: "Lesson 19: Compound Numbers 21-99 (الدَّرْسُ التَّاسِعَ عَشَرَ - الْأَعْدَادُ ٢١-٩٩)", grammar: "Compound Numbers 21-99", theory: {
        sections: [
            { title: "📖 Description", content: "Compound numbers (21-99) consist of the unit + وَ (and) + the ten. The unit part follows the same gender rules as 1-10 (1-2 agree, 3-9 reverse). The counted noun is singular Manṣūb." },
            { title: "📝 Key Rules", content: "- Structure: unit + وَ + ten → خَمْسَةٌ وَعِشْرُونَ (25)\\n- Unit (1-2): agrees in gender with noun\\n- Unit (3-9): reverse gender\\n- Ten part: invariable in gender\\n- Counted noun: singular Manṣūb (تَمْيِيز)" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "وَاحِدٌ وَعِشْرُونَ كِتَابًا", meaning: "Wāḥidun wa 'ishrūna kitāban — Twenty-one books" },
                    { arabic: "ثَلَاثَةٌ وَثَلَاثُونَ طَالِبًا", meaning: "Thalāthatun wa thalāthūna ṭāliban — Thirty-three students (reverse gender on unit)" },
                    { arabic: "خَمْسٌ وَأَرْبَعُونَ سَنَةً", meaning: "Khamsun wa arba'ūna sanatan — Forty-five years" },
                    { arabic: "سَبْعَةٌ وَسِتُّونَ يَوْمًا", meaning: "Sab'atun wa sittūna yawman — Sixty-seven days" },
                    { arabic: "تِسْعَةٌ وَتِسْعُونَ اسْمًا", meaning: "Tis'atun wa tis'ūna isman — Ninety-nine names" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "عَدَدٌ مُرَكَّبٌ", meaning: "'adadun murakkabun — Compound number" },
                    { arabic: "تَمْيِيزٌ", meaning: "tamyīzun — Specification (the counted noun)" },
                    { arabic: "وَ", meaning: "wa — And (conjunction between unit and ten)" },
                    { arabic: "مُخَالَفَةٌ", meaning: "mukhālafatun — Reverse gender agreement" },
                    { arabic: "مُطَابَقَةٌ", meaning: "muṭābaqatun — Gender agreement" },
                    { arabic: "مَعْدُودٌ", meaning: "ma'dūdun — Counted noun" },
                    { arabic: "عَدَدٌ", meaning: "'adadun — Number" },
                    { arabic: "مُفْرَدٌ", meaning: "mufradun — Singular" }
                ]
            }
        ]
    }, tasks: [
        { id: "19-1", type: "multiple-choice", question: "What is the structure of compound numbers 21-99?", options: ["Ten + unit", "Unit + وَ + ten", "Unit + ten", "Ten + وَ + unit"], correctAnswer: "Unit + وَ + ten" },
        { id: "19-2", type: "multiple-choice", question: "The counted noun after compound numbers is in which form?", options: ["Plural Majrūr", "Singular Manṣūb", "Dual Marfū'", "Plural Marfū'"], correctAnswer: "Singular Manṣūb" },
        { id: "19-3", type: "multiple-choice", question: "In 33 students, why is the unit ثَلَاثَةٌ (feminine)?", options: ["Because طَالِب is feminine", "Because طَالِب is masculine (reverse gender)", "Because all units are feminine", "Because it follows the ten"], correctAnswer: "Because طَالِب is masculine (reverse gender)" },
        { id: "19-4", type: "multiple-choice", question: "What does تَمْيِيز mean in the context of numbers?", options: ["Plural form", "The counted noun (specification)", "Gender agreement", "Reverse agreement"], correctAnswer: "The counted noun (specification)" },
        { id: "19-5", type: "multiple-choice", question: "Translate: وَاحِدٌ وَعِشْرُونَ كِتَابًا", options: ["Twelve books", "Twenty-one books", "One hundred books", "Twenty books"], correctAnswer: "Twenty-one books" },
        { id: "19-6", type: "multiple-choice", question: "Translate: تِسْعَةٌ وَتِسْعُونَ اسْمًا", options: ["Nine names", "Ninety names", "Ninety-nine names", "Nineteen names"], correctAnswer: "Ninety-nine names" },
        { id: "19-7", type: "multiple-choice", question: "Translate: خَمْسٌ وَأَرْبَعُونَ سَنَةً", options: ["Five years", "Forty-five years", "Fifty-four years", "Forty years"], correctAnswer: "Forty-five years" },
        { id: "19-8", type: "multiple-choice", question: "What does عَدَدٌ مُرَكَّبٌ mean?", options: ["Simple number", "Compound number", "Ordinal number", "Even number"], correctAnswer: "Compound number" },
        { id: "19-9", type: "multiple-choice", question: "What does مَعْدُودٌ mean?", options: ["Number", "Counted noun", "Counter", "Plural"], correctAnswer: "Counted noun" },
        { id: "19-10", type: "multiple-choice", question: "What does مُخَالَفَةٌ mean?", options: ["Agreement", "Reverse gender agreement", "Singular form", "Dual form"], correctAnswer: "Reverse gender agreement" }
    ]
};
