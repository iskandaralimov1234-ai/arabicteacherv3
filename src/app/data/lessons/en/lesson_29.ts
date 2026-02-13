import { Lesson } from '../../types';

export const lesson29: Lesson = {
    id: 29,
    title: "Lesson 29: Demonstratives for Plural",
    grammar: "Demonstratives: Rational vs Irrational",
    theory: {
        sections: [
            {
                title: "🧠 Rational vs Irrational",
                content: "In Arabic, it is important to distinguish between 'Rational' (Humans, Angels, Jinns) and 'Irrational' (Animals, objects, concepts).\nThis affects the plural forms.",
                examples: [
                    { arabic: "عَاقِلٌ", meaning: "Rational" },
                    { arabic: "غَيْرُ عَاقِلٍ", meaning: "Irrational" }
                ]
            },
            {
                title: "👈 'These' (Near)",
                content: "- For **Rational**: **هَؤُلَاءِ** (Ha'ula'i) — These (men & women).\n- For **Irrational**: **هَذِهِ** (Hadhihi) — These (same as 'This woman'). Irrational Plural = Singular Feminine!",
                examples: [
                    { arabic: "هَؤُلَاءِ طُلَّابٌ", meaning: "These are students (Rational)" },
                    { arabic: "هَذِهِ كُتُبٌ", meaning: "These are books (Irrational -> Fem. Sing.)" }
                ]
            },
            {
                title: "👉 'Those' (Far)",
                content: "- For **Rational**: **أُولَئِكَ** (Ula'ika) — Those.\n- For **Irrational**: **تِلْكَ** (Tilka) — Those (same as 'That woman'). Again, treated as Singular Feminine.",
                examples: [
                    { arabic: "أُولَئِكَ مُهَنْدِسُونَ", meaning: "Those are engineers" },
                    { arabic: "تِلْكَ بُيُوتٌ جَمِيلَةٌ", meaning: "Those are beautiful houses" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "29-1",
            type: "multiple-choice",
            question: "How to say 'These (notebooks)'? (Notebooks - Dafātir - irrational)",
            options: ["هَؤُلَاءِ دَفَاتِرُ", "هَذِهِ دَفَاتِرُ", "هَذَا دَفَاتِرُ"],
            correctAnswer: "هَذِهِ دَفَاتِرُ"
        },
        {
            id: "29-2",
            type: "multiple-choice",
            question: "How to say 'Those (men)'?",
            options: ["تِلْكَ رِجَالٌ", "أُولَئِكَ رِجَالٌ", "هَؤُلَاءِ رِجَالٌ"],
            correctAnswer: "أُولَئِكَ رِجَالٌ"
        },
        {
            id: "29-3",
            type: "word-scramble",
            question: "Arrange: 'These houses are beautiful' (Irrational!)",
            arabic: "هَذِهِ الْبُيُوتُ جَمِيلَةٌ",
            scrambledWords: ["جَمِيلَةٌ", "هَذِهِ", "الْبُيُوتُ"],
            correctAnswer: "هَذِهِ الْبُيُوتُ جَمِيلَةٌ"
        },
        {
            id: "29-4",
            type: "matching",
            question: "Match demonstrative and category",
            pairs: [
                { "arabic": "هَؤُلَاءِ", "meaning": "Near, Rational (Pl.)" },
                { "arabic": "أُولَئِكَ", "meaning": "Far, Rational (Pl.)" },
                { "arabic": "هَذِهِ", "meaning": "Near, Irrational (Pl.)" },
                { "arabic": "تِلْكَ", "meaning": "Far, Irrational (Pl.)" }
            ]
        },
        {
            id: "29-5",
            type: "multiple-choice",
            question: "Select correct: 'Those mountains are high' (Jibal - Pl. Irrational)",
            options: ["أُولَئِكَ الْجِبَالُ عَالِيَةٌ", "تِلْكَ الْجِبَالُ عَالِيَةٌ", "تِلْكَ الْجِبَالُ عَالُونَ"],
            correctAnswer: "تِلْكَ الْجِبَالُ عَالِيَةٌ"
        },
        {
            id: "29-6",
            type: "word-scramble",
            question: "Arrange: 'Where are those new doctors?'",
            arabic: "أَيْنَ أُولَئِكَ الْأَطِبَّاءُ الْجُدُدُ؟",
            scrambledWords: ["أُولَئِكَ", "أَيْنَ", "الْجُدُدُ؟", "الْأَطِبَّاءُ"],
            correctAnswer: "أَيْنَ أُولَئِكَ الْأَطِبَّاءُ الْجُدُدُ؟"
        },
        {
            id: "29-7",
            type: "multiple-choice",
            question: "'These are pens' (Aqlām)",
            options: ["هَذِهِ أَقْلَامٌ", "هَؤُلَاءِ أَقْلَامٌ", "تِلْكَ أَقْلَامٌ"],
            correctAnswer: "هَذِهِ أَقْلَامٌ"
        },
        {
            id: "29-8",
            type: "multiple-choice",
            question: "What adjective form is used for irrational plural? (e.g. Books ...)",
            options: ["Plural (Judud)", "Singular Feminine (Jadīdatun)", "Singular Masculine (Jadīdun)"],
            correctAnswer: "Singular Feminine (Jadīdatun)"
        },
        {
            id: "29-9",
            type: "word-scramble",
            question: "Arrange: 'These lessons are easy'",
            arabic: "هَذِهِ الدُّرُوسُ سَهْلَةٌ",
            scrambledWords: ["الدُّرُوسُ", "هَذِهِ", "سَهْلَةٌ"],
            correctAnswer: "هَذِهِ الدُّرُوسُ سَهْلَةٌ"
        },
        {
            id: "29-10",
            type: "multiple-choice",
            question: "Is 'Ha'ula'i Humrun' (These are donkeys) correct?",
            options: ["Yes, donkeys are alive", "No, donkeys are irrational -> Hadhihi Humrun", "No, must be Tilka"],
            correctAnswer: "No, donkeys are irrational -> Hadhihi Humrun"
        }
    ]
};
