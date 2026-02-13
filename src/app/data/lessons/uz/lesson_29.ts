import { Lesson } from '../../types';

export const lesson29: Lesson = {
    id: 29,
    title: "29-dars: Ko'plik uchun ko'rsatish olmoshlari",
    grammar: "Demonstratives: Rational vs Irrational",
    theory: {
        sections: [
            {
                title: "🧠 Aqli bor va Aqli yo'q",
                content: "Arab tilida «Aqli bor» (Odamlar, Farishtalar, Jinlar) va «Aqli yo'q» (Hayvonlar, buyumlar) orasida farq bor.\nBu ko'plik shakllariga ta'sir qiladi.",
                examples: [
                    { arabic: "عَاقِلٌ", meaning: "Aqli bor" },
                    { arabic: "غَيْرُ عَاقِلٍ", meaning: "Aqli yo'q" }
                ]
            },
            {
                title: "👈 «Bular» (Yaqin)",
                content: "- **Aqli borlar** uchun: **هَؤُلَاءِ** (Ha'ula'i) — Bular (erkak va ayol).\n- **Aqli yo'qlar** uchun: **هَذِهِ** (Hazihi) — Bular (xuddi «Bu» - muannas birlikdek!). Aqli yo'q ko'plik = Muannas Birlik.",
                examples: [
                    { arabic: "هَؤُلَاءِ طُلَّابٌ", meaning: "Bular talabalar (Aqli bor)" },
                    { arabic: "هَذِهِ كُتُبٌ", meaning: "Bular kitoblar (Aqli yo'q -> Muannas Birlik)" }
                ]
            },
            {
                title: "👉 «Anavilar» (Uzoq)",
                content: "- **Aqli borlar** uchun: **أُولَئِكَ** (Ula'ika) — Anavilar.\n- **Aqli yo'qlar** uchun: **تِلْكَ** (Tilka) — Anavilar (xuddi «Anavi» - muannas birlikdek).",
                examples: [
                    { arabic: "أُولَئِكَ مُهَنْدِسُونَ", meaning: "Anavilar — muhandislar" },
                    { arabic: "تِلْكَ بُيُوتٌ جَمِيلَةٌ", meaning: "Anavilar — chiroyli uylar" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "29-1",
            type: "multiple-choice",
            question: "«Bular (daftar)» qanday aytiladi? (Daftar - aqli yo'q)",
            options: ["هَؤُلَاءِ دَفَاتِرُ", "هَذِهِ دَفَاتِرُ", "هَذَا دَفَاتِرُ"],
            correctAnswer: "هَذِهِ دَفَاتِرُ"
        },
        {
            id: "29-2",
            type: "multiple-choice",
            question: "«Anavilar (erkaklar)» qanday aytiladi?",
            options: ["تِلْكَ رِجَالٌ", "أُولَئِكَ رِجَالٌ", "هَؤُلَاءِ رِجَالٌ"],
            correctAnswer: "أُولَئِكَ رِجَالٌ"
        },
        {
            id: "29-3",
            type: "word-scramble",
            question: "Tuzing: «Bu uylar chiroyli» (Aqli yo'q!)",
            arabic: "هَذِهِ الْبُيُوتُ جَمِيلَةٌ",
            scrambledWords: ["جَمِيلَةٌ", "هَذِهِ", "الْبُيُوتُ"],
            correctAnswer: "هَذِهِ الْبُيُوتُ جَمِيلَةٌ"
        },
        {
            id: "29-4",
            type: "matching",
            question: "Olmosh va toifani bog'lang",
            pairs: [
                { "arabic": "هَؤُلَاءِ", "meaning": "Yaqin, Aqli bor (Ko'plik)" },
                { "arabic": "أُولَئِكَ", "meaning": "Uzoq, Aqli bor (Ko'plik)" },
                { "arabic": "هَذِهِ", "meaning": "Yaqin, Aqli yo'q (Ko'plik)" },
                { "arabic": "تِلْكَ", "meaning": "Uzoq, Aqli yo'q (Ko'plik)" }
            ]
        },
        {
            id: "29-5",
            type: "multiple-choice",
            question: "Tanlang: «Anavi tog'lar baland» (Tog'lar - Jibal - Aqli yo'q)",
            options: ["أُولَئِكَ الْجِبَالُ عَالِيَةٌ", "تِلْكَ الْجِبَالُ عَالِيَةٌ", "تِلْكَ الْجِبَالُ عَالُونَ"],
            correctAnswer: "تِلْكَ الْجِبَالُ عَالِيَةٌ"
        },
        {
            id: "29-6",
            type: "word-scramble",
            question: "Tuzing: «Anavi yangi shifokorlar qayerda?»",
            arabic: "أَيْنَ أُولَئِكَ الْأَطِبَّاءُ الْجُدُدُ؟",
            scrambledWords: ["أُولَئِكَ", "أَيْنَ", "الْجُدُدُ؟", "الْأَطِبَّاءُ"],
            correctAnswer: "أَيْنَ أُولَئِكَ الْأَطِبَّاءُ الْجُدُدُ؟"
        },
        {
            id: "29-7",
            type: "multiple-choice",
            question: "«Bular ruchkalar» (Aqlam)",
            options: ["هَذِهِ أَقْلَامٌ", "هَؤُلَاءِ أَقْلَامٌ", "تِلْكَ أَقْلَامٌ"],
            correctAnswer: "هَذِهِ أَقْلَامٌ"
        },
        {
            id: "29-8",
            type: "multiple-choice",
            question: "Aqli yo'q ko'plik uchun qanday sifat ishlatiladi? (Masalan: Kitoblar ...)",
            options: ["Ko'plik (Judud)", "Muannas Birlik (Jadīdatun)", "Muzakkar Birlik (Jadīdun)"],
            correctAnswer: "Muannas Birlik (Jadīdatun)"
        },
        {
            id: "29-9",
            type: "word-scramble",
            question: "Tuzing: «Bu darslar oson»",
            arabic: "هَذِهِ الدُّرُوسُ سَهْلَةٌ",
            scrambledWords: ["الدُّرُوسُ", "هَذِهِ", "سَهْلَةٌ"],
            correctAnswer: "هَذِهِ الدُّرُوسُ سَهْلَةٌ"
        },
        {
            id: "29-10",
            type: "multiple-choice",
            question: "To'g'rimi: «Ha'ula'i Humrun» (Bular eshaklar)?",
            options: ["Ha, eshaklar tirik", "Yo'q, eshaklar aqli yo'q -> Hazihi Humrun", "Yo'q, Tilka bo'lishi kerak"],
            correctAnswer: "Yo'q, eshaklar aqli yo'q -> Hazihi Humrun"
        }
    ]
};
