import { Lesson } from '../../types';

export const lesson16: Lesson = {
    id: 16,
    title: "Lesson 16: Numbers 1-10 (الدَّرْسُ السَّادِسَ عَشَرَ - الْأَعْدَادُ ١-١٠)",
    grammar: "Numbers 1-10",
    theory: {
        sections: [
            {
                title: "📖 Description",
                content: "Arabic numbers 1-10 have a unique rule: the number takes the OPPOSITE gender of the counted noun. If the noun is masculine, the number is feminine, and vice versa. This is called 'reverse gender agreement' (مُخَالَفَة)."
            },
            {
                title: "📝 Key Rules",
                content: "- Numbers 1-2: agree with the noun in gender (like adjectives)\\n- Numbers 3-10: reverse gender — masculine noun takes feminine number\\n- The counted noun after 3-10 is in plural Majrūr (مَجْرُورٌ) state\\n- Numbers 3-10 are in an iḍāfa construction with the counted noun"
            },
            {
                title: "🗣️ Examples",
                content: "Pay attention to the following examples:",
                examples: [
                    { arabic: "ثَلَاثَةُ كُتُبٍ", meaning: "Thalāthatu kutubin — Three books (كِتَابٌ is masculine, so number is feminine ثَلَاثَةُ)" },
                    { arabic: "ثَلَاثُ بَنَاتٍ", meaning: "Thalāthu banātin — Three girls (بِنْتٌ is feminine, so number is masculine ثَلَاثُ)" },
                    { arabic: "خَمْسَةُ طُلَّابٍ", meaning: "Khamsatu ṭullābin — Five students (masculine noun → feminine number)" },
                    { arabic: "سَبْعُ سَيَّارَاتٍ", meaning: "Sab'u sayyārātin — Seven cars (feminine noun → masculine number)" },
                    { arabic: "عَشَرَةُ أَقْلَامٍ", meaning: "'Asharatu aqlāmin — Ten pens (masculine noun → feminine number)" }
                ]
            },
            {
                title: "📚 Vocabulary",
                content: "New words from this lesson:",
                examples: [
                    { arabic: "وَاحِدٌ", meaning: "wāḥidun — One" }, { arabic: "اثْنَانِ", meaning: "ithnāni — Two" },
                    { arabic: "ثَلَاثَةٌ", meaning: "thalāthatun — Three (feminine form)" }, { arabic: "أَرْبَعَةٌ", meaning: "arba'atun — Four (feminine form)" },
                    { arabic: "خَمْسَةٌ", meaning: "khamsatun — Five (feminine form)" }, { arabic: "سِتَّةٌ", meaning: "sittatun — Six (feminine form)" },
                    { arabic: "سَبْعَةٌ", meaning: "sab'atun — Seven (feminine form)" }, { arabic: "عَشَرَةٌ", meaning: "'asharatun — Ten (feminine form)" }
                ]
            }
        ]
    },
    tasks: [
        { id: "16-1", type: "multiple-choice", question: "Numbers 3-10 follow which gender rule?", options: ["Same gender as noun", "Reverse gender (مُخَالَفَة)", "Always masculine", "Always feminine"], correctAnswer: "Reverse gender (مُخَالَفَة)" },
        { id: "16-2", type: "multiple-choice", question: "The counted noun after numbers 3-10 is in which state?", options: ["Singular Marfū'", "Plural Majrūr", "Dual Manṣūb", "Singular Manṣūb"], correctAnswer: "Plural Majrūr" },
        { id: "16-3", type: "multiple-choice", question: "كِتَابٌ is masculine. What is 'three books'?", options: ["ثَلَاثُ كُتُبٍ", "ثَلَاثَةُ كُتُبٍ", "ثَلَاثَةُ كِتَابٍ", "ثَلَاثُ كِتَابٍ"], correctAnswer: "ثَلَاثَةُ كُتُبٍ" },
        { id: "16-4", type: "multiple-choice", question: "Numbers 1-2 follow which rule?", options: ["Reverse gender", "Agree with noun in gender", "Always take ta marbuta", "Are always invariable"], correctAnswer: "Agree with noun in gender" },
        { id: "16-5", type: "multiple-choice", question: "Translate: خَمْسَةُ طُلَّابٍ", options: ["Five female students", "Five students", "Five lessons", "Five teachers"], correctAnswer: "Five students" },
        { id: "16-6", type: "multiple-choice", question: "Translate: سَبْعُ سَيَّارَاتٍ", options: ["Seven boys", "Seven cars", "Seven books", "Seven pens"], correctAnswer: "Seven cars" },
        { id: "16-7", type: "multiple-choice", question: "Translate: عَشَرَةُ أَقْلَامٍ", options: ["Ten pens", "Ten books", "Ten students", "Ten days"], correctAnswer: "Ten pens" },
        { id: "16-8", type: "multiple-choice", question: "What does وَاحِدٌ mean?", options: ["Two", "One", "Three", "Zero"], correctAnswer: "One" },
        { id: "16-9", type: "multiple-choice", question: "What does خَمْسَةٌ mean?", options: ["Four", "Five", "Six", "Seven"], correctAnswer: "Five" },
        { id: "16-10", type: "multiple-choice", question: "What does عَشَرَةٌ mean?", options: ["Eight", "Nine", "Ten", "Eleven"], correctAnswer: "Ten" }
    ]
};
