import { Lesson } from '../../types';

export const lesson16: Lesson = {
    id: 16,
    title: "16-dars: Aqlsizlarning ko'pligi (غير العاقل)",
    grammar: "Plural of Non-Rational Nouns",
    theory: {
        sections: [
            {
                title: "🧠 Aqlsiz va Aqlli",
                content: "Arab tilida barcha otlar ikkiga bo'linadi:\n1. **Aqlli (العَاقِلُ):** Odamlar, Farishtalar, Jinlar.\n2. **Aqlsiz (غَيْرُ العَاقِلِ):** Hayvonlar, narsalar, tushunchalar.",
                examples: [
                    { arabic: "رَجُلٌ (erkak)", meaning: "Aqlli" },
                    { arabic: "قَلَمٌ (ruchka)", meaning: "Aqlsiz" },
                    { arabic: "كِتَابٌ (kitob)", meaning: "Aqlsiz" }
                ]
            },
            {
                title: "🌟 Aqlsizlar qoidasi",
                content: "**Aqlsiz** narsalarning ko'pligi grammatik jihatdan **Muannas birlik** (U - ayol jinsi) sifatida qabul qilinadi.\n\nBu degani, ularga nisbatan ishlatiladigan olmoshlar, ko'rsatish so'zlari va sifatlar «U» (هِيَ, هَذِهِ) kabi bo'ladi.",
                examples: [
                    { arabic: "أَقْلَامٌ (ruchkalar)", meaning: "«U» sifatida qaraladi (Birlik, Muannas)" },
                    { arabic: "كُتُبٌ (kitoblar)", meaning: "«U» sifatida qaraladi" },
                    { arabic: "سَيَّارَاتٌ (mashinalar)", meaning: "«U» sifatida qaraladi" }
                ]
            },
            {
                title: "👉 Ko'rsatish: «Bular» va «Anavilar»",
                content: "Aqlsizlarning ko'pligi uchun biz quyidagilarni ishlatamiz:\n- **هَذِهِ** (Hazihi) — Bular (aslida «Bu» muannas)\n- **تِلْكَ** (Tilka) — Anavilar (aslida «Anavi» muannas)",
                examples: [
                    { arabic: "هَذِهِ أَقْلَامٌ", meaning: "Bular — ruchkalar" },
                    { arabic: "تِلْكَ جِبَالٌ", meaning: "Anavilar — tog'lar" },
                    { arabic: "هَذِهِ كُتُبٌ جَدِيدَةٌ", meaning: "Bular — yangi kitoblar" }
                ]
            },
            {
                title: "🎨 Tasvirlash (Sifatlar)",
                content: "Aqlsizlarning ko'pligiga nisbatan sifat ham **muannas birlik** shaklida qo'yiladi.",
                examples: [
                    { arabic: "بُيُوتٌ كَبِيرَةٌ", meaning: "Katta uylar (aslida Uylar katta-muannas)" },
                    { arabic: "أَبْوَابٌ مَفْتُوحَةٌ", meaning: "Ochiq eshiklar" },
                    { arabic: "السَّيَّارَاتُ جَدِيدَةٌ", meaning: "Mashinalar yangi" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "16-1",
            type: "multiple-choice",
            question: "«Bular — ruchkalar» qanday aytiladi?",
            options: ["هَؤُلَاءِ أَقْلَامٌ", "هَذِهِ أَقْلَامٌ", "هَذَا أَقْلَامٌ"],
            correctAnswer: "هَذِهِ أَقْلَامٌ"
        },
        {
            id: "16-2",
            type: "multiple-choice",
            question: "«Kitoblar» (كُتُبٌ) so'zini qaysi olmosh almashtiradi?",
            options: ["هُمْ", "هُنَّ", "هِيَ"],
            correctAnswer: "هِيَ"
        },
        {
            id: "16-3",
            type: "word-scramble",
            question: "Tuzing: «Bu uylar katta»",
            arabic: "هَذِهِ الْبُيُوتُ كَبِيرَةٌ",
            scrambledWords: ["كَبِيرَةٌ", "الْبُيُوتُ", "هَذِهِ"],
            correctAnswer: "هَذِهِ الْبُيُوتُ كَبِيرَةٌ"
        },
        {
            id: "16-4",
            type: "multiple-choice",
            question: "To'g'ri sifatni tanlang: «Yangi ruchkalar»",
            options: ["أَقْلَامٌ جَدِيدَةٌ", "أَقْلَامٌ جُدُدٌ", "أَقْلَامٌ جَدِيدٌ"],
            correctAnswer: "أَقْلَامٌ جَدِيدَةٌ"
        },
        {
            id: "16-5",
            type: "matching",
            question: "So'zni mos ko'rsatish olmoshi bilan bog'lang",
            pairs: [
                { "arabic": "رِجَالٌ (erkaklar)", "meaning": "هَؤُلَاءِ" },
                { "arabic": "كُتُبٌ (kitoblar)", "meaning": "هَذِهِ" },
                { "arabic": "أَخَوَاتٌ (opa-singillar)", "meaning": "هَؤُلَاءِ" },
                { "arabic": "أَقْلَامٌ (ruchkalar)", "meaning": "هَذِهِ" }
            ]
        },
        {
            id: "16-6",
            type: "multiple-choice",
            question: "«Anavi yulduzlar chiroyli» qanday aytiladi?",
            options: ["أُولَئِكَ النُّجُومُ جَمِيلَةٌ", "تِلْكَ النُّجُومُ جَمِيلَةٌ", "تِلْكَ النُّجُومُ جَمِيلَاتٌ"],
            correctAnswer: "تِلْكَ النُّجُومُ جَمِيلَةٌ"
        },
        {
            id: "16-7",
            type: "word-scramble",
            question: "Tuzing: «Masjid eshiklari ochiq»",
            arabic: "أَبْوَابُ الْمَسْجِدِ مَفْتُوحَةٌ",
            scrambledWords: ["مَفْتُوحَةٌ", "أَبْوَابُ", "الْمَسْجِدِ"],
            correctAnswer: "أَبْوَابُ الْمَسْجِدِ مَفْتُوحَةٌ"
        },
        {
            id: "16-8",
            type: "multiple-choice",
            question: "«Masjid» (مَسْجِدٌ) so'zining ko'pligi:",
            options: ["مَسَاجِدُ", "مَسْجِدُونَ", "مَسَاجِيدٌ"],
            correctAnswer: "مَسَاجِدُ"
        },
        {
            id: "16-9",
            type: "multiple-choice",
            question: "«Bu kitoblar qayerda? Ular parta ustida.»",
            options: ["أَيْنَ هَذِهِ الْكُتُبُ؟ هِيَ عَلَى الْمَكْتَبِ", "أَيْنَ هَؤُلَاءِ الْكُتُبُ؟ هُمْ عَلَى الْمَكْتَبِ"],
            correctAnswer: "أَيْنَ هَذِهِ الْكُتُبُ؟ هِيَ عَلَى الْمَكْتَبِ"
        },
        {
            id: "16-10",
            type: "word-scramble",
            question: "Tuzing: «Bu soatlar qimmat»",
            arabic: "هَذِهِ السَّاعَاتُ غَالِيَةٌ",
            scrambledWords: ["غَالِيَةٌ", "السَّاعَاتُ", "هَذِهِ"],
            correctAnswer: "هَذِهِ السَّاعَاتُ غَالِيَةٌ"
        }
    ]
};
