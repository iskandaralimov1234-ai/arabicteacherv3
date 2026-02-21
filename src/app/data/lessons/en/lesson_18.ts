import { Lesson } from '../../types';
export const lesson18: Lesson = {
    id: 18, title: "Lesson 18: Multiples of Ten 20-90 (الدَّرْسُ الثَّامِنَ عَشَرَ - الْأَعْدَادُ ٢٠-٩٠)", grammar: "Multiples of Ten (20-90)", theory: {
        sections: [
            { title: "📖 Description", content: "The tens (20-90) in Arabic are formed using the sound masculine plural pattern. They do not change for gender — the same form is used with both masculine and feminine nouns." },
            { title: "📝 Key Rules", content: "- عِشْرُونَ (20) follows the sound masculine plural pattern\\n- All tens (20-90) are invariable in gender\\n- In Marfū': -ūna ending → عِشْرُونَ\\n- In Manṣūb/Majrūr: -īna ending → عِشْرِينَ\\n- Counted noun: singular Manṣūb (مَنْصُوبٌ)" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "عِشْرُونَ طَالِبًا", meaning: "'Ishrūna ṭāliban — Twenty students (singular Manṣūb counted noun)" },
                    { arabic: "ثَلَاثُونَ كِتَابًا", meaning: "Thalāthūna kitāban — Thirty books" },
                    { arabic: "أَرْبَعُونَ يَوْمًا", meaning: "Arba'ūna yawman — Forty days" },
                    { arabic: "خَمْسُونَ سَنَةً", meaning: "Khamsūna sanatan — Fifty years" },
                    { arabic: "مَعَ تِسْعِينَ طَالِبًا", meaning: "Ma'a tis'īna ṭāliban — With ninety students (Majrūr: -īna)" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "عِشْرُونَ", meaning: "'ishrūna — Twenty" }, { arabic: "ثَلَاثُونَ", meaning: "thalāthūna — Thirty" },
                    { arabic: "أَرْبَعُونَ", meaning: "arba'ūna — Forty" }, { arabic: "خَمْسُونَ", meaning: "khamsūna — Fifty" },
                    { arabic: "سِتُّونَ", meaning: "sittūna — Sixty" }, { arabic: "سَبْعُونَ", meaning: "sab'ūna — Seventy" },
                    { arabic: "ثَمَانُونَ", meaning: "thamānūna — Eighty" }, { arabic: "تِسْعُونَ", meaning: "tis'ūna — Ninety" }
                ]
            }
        ]
    }, tasks: [
        { id: "18-1", type: "multiple-choice", question: "Tens (20-90) follow which gender rule?", options: ["Reverse gender", "Same gender as noun", "Invariable — no gender change", "Always feminine"], correctAnswer: "Invariable — no gender change" },
        { id: "18-2", type: "multiple-choice", question: "The counted noun after tens (20-90) is in which form?", options: ["Plural Majrūr", "Singular Manṣūb", "Plural Manṣūb", "Singular Marfū'"], correctAnswer: "Singular Manṣūb" },
        { id: "18-3", type: "multiple-choice", question: "In the Manṣūb/Majrūr state, tens end with:", options: ["-ūna", "-īna", "-āni", "-ayni"], correctAnswer: "-īna" },
        { id: "18-4", type: "multiple-choice", question: "What is the Manṣūb form of عِشْرُونَ?", options: ["عِشْرُونَ", "عِشْرِينَ", "عِشْرَانِ", "عِشْرَيْنِ"], correctAnswer: "عِشْرِينَ" },
        { id: "18-5", type: "multiple-choice", question: "Translate: ثَلَاثُونَ كِتَابًا", options: ["Thirteen books", "Thirty books", "Three books", "Thirty-three books"], correctAnswer: "Thirty books" },
        { id: "18-6", type: "multiple-choice", question: "Translate: أَرْبَعُونَ يَوْمًا", options: ["Four days", "Fourteen days", "Forty days", "Four hundred days"], correctAnswer: "Forty days" },
        { id: "18-7", type: "multiple-choice", question: "Translate: خَمْسُونَ سَنَةً", options: ["Five years", "Fifteen years", "Fifty years", "Five hundred years"], correctAnswer: "Fifty years" },
        { id: "18-8", type: "multiple-choice", question: "What does عِشْرُونَ mean?", options: ["Twelve", "Twenty", "Two hundred", "Two"], correctAnswer: "Twenty" },
        { id: "18-9", type: "multiple-choice", question: "What does سَبْعُونَ mean?", options: ["Seven", "Seventeen", "Seventy", "Seven hundred"], correctAnswer: "Seventy" },
        { id: "18-10", type: "multiple-choice", question: "What does تِسْعُونَ mean?", options: ["Nine", "Nineteen", "Ninety", "Nine hundred"], correctAnswer: "Ninety" }
    ]
};
