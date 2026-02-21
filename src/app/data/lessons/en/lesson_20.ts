import { Lesson } from '../../types';
export const lesson20: Lesson = {
    id: 20, title: "Lesson 20: Numbers 100 and 1000 (الدَّرْسُ الْعِشْرُونَ - مِائَةٌ وَأَلْفٌ)", grammar: "Numbers 100 and 1000", theory: {
        sections: [
            { title: "📖 Description", content: "مِائَةٌ (one hundred) and أَلْفٌ (one thousand) are followed by a singular noun in the Majrūr (مَجْرُورٌ) state. They do not change for gender and form an iḍāfa with the counted noun." },
            { title: "📝 Key Rules", content: "- مِائَةٌ (100): counted noun = singular Majrūr\\n- أَلْفٌ (1000): counted noun = singular Majrūr\\n- مِائَتَانِ (200): dual of مِائَة\\n- Multiples: ثَلَاثُمِائَةٍ (300), أَرْبَعُمِائَةٍ (400)...\\n- No gender change for مِائَة and أَلْف" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "مِائَةُ كِتَابٍ", meaning: "Mi'atu kitābin — One hundred books (singular Majrūr)" },
                    { arabic: "أَلْفُ طَالِبٍ", meaning: "Alfu ṭālibin — One thousand students (singular Majrūr)" },
                    { arabic: "مِائَتَانِ وَخَمْسُونَ", meaning: "Mi'atāni wa khamsūna — Two hundred and fifty" },
                    { arabic: "ثَلَاثُمِائَةِ سَنَةٍ", meaning: "Thalāthu mi'ati sanatin — Three hundred years" },
                    { arabic: "أَلْفَا دِينَارٍ", meaning: "Alfā dīnārin — Two thousand dinars (dual of أَلْف)" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "مِائَةٌ", meaning: "mi'atun — One hundred" }, { arabic: "أَلْفٌ", meaning: "alfun — One thousand" },
                    { arabic: "مِائَتَانِ", meaning: "mi'atāni — Two hundred" }, { arabic: "أَلْفَانِ", meaning: "alfāni — Two thousand" },
                    { arabic: "مَلْيُونٌ", meaning: "malyūnun — Million" }, { arabic: "مِلْيَارٌ", meaning: "milyārun — Billion" },
                    { arabic: "عَدَدٌ", meaning: "'adadun — Number" }, { arabic: "رَقْمٌ", meaning: "raqmun — Digit/Numeral" }
                ]
            }
        ]
    }, tasks: [
        { id: "20-1", type: "multiple-choice", question: "The counted noun after 100 and 1000 is in which form?", options: ["Plural Majrūr", "Singular Manṣūb", "Singular Majrūr", "Plural Marfū'"], correctAnswer: "Singular Majrūr" },
        { id: "20-2", type: "multiple-choice", question: "Do 100 and 1000 change for gender?", options: ["Yes, always", "No, they are invariable", "Only 100", "Only 1000"], correctAnswer: "No, they are invariable" },
        { id: "20-3", type: "multiple-choice", question: "What is the dual of مِائَةٌ?", options: ["مِائَتَيْنِ", "مِائَتَانِ", "مِائَاتٌ", "مِائُونَ"], correctAnswer: "مِائَتَانِ" },
        { id: "20-4", type: "multiple-choice", question: "How do you say 'three hundred'?", options: ["ثَلَاثَةُ مِائَةٍ", "ثَلَاثُمِائَةٍ", "ثَلَاثُونَ مِائَةً", "مِائَةٌ ثَلَاثَةٌ"], correctAnswer: "ثَلَاثُمِائَةٍ" },
        { id: "20-5", type: "multiple-choice", question: "Translate: مِائَةُ كِتَابٍ", options: ["A hundred books", "One hundred books", "Ten books", "A thousand books"], correctAnswer: "One hundred books" },
        { id: "20-6", type: "multiple-choice", question: "Translate: أَلْفُ طَالِبٍ", options: ["One hundred students", "One thousand students", "Ten students", "A million students"], correctAnswer: "One thousand students" },
        { id: "20-7", type: "multiple-choice", question: "Translate: مِائَتَانِ وَخَمْسُونَ", options: ["One hundred fifty", "Two hundred fifty", "Two hundred five", "Two thousand fifty"], correctAnswer: "Two hundred fifty" },
        { id: "20-8", type: "multiple-choice", question: "What does مِائَةٌ mean?", options: ["Ten", "One hundred", "One thousand", "One million"], correctAnswer: "One hundred" },
        { id: "20-9", type: "multiple-choice", question: "What does أَلْفٌ mean?", options: ["One hundred", "One thousand", "Ten thousand", "One million"], correctAnswer: "One thousand" },
        { id: "20-10", type: "multiple-choice", question: "What does مَلْيُونٌ mean?", options: ["Thousand", "Hundred thousand", "Million", "Billion"], correctAnswer: "Million" }
    ]
};
