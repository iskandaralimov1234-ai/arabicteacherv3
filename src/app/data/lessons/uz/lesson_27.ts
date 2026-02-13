import { Lesson } from '../../types';

export const lesson27: Lesson = {
    id: 27,
    title: "27-dars: «Bo'lmoq» fe'li (كَانَ) va 11-20 sonlari (muannas)",
    grammar: "Kana (Was), Feminine Numbers 11-20",
    theory: {
        sections: [
            {
                title: "⏳ «Bo'ldi» fe'li (كَانَ)",
                content: "**كَانَ** (Kāna) — «Bo'ldi» yoki «Eda» deb tarjima qilinadi. U «Inna»ning teskarisi kabi ishlaydi.\nEga (Ism Kāna) **Raf** (Damma) bo'lib qoladi, Kesim (Xabar Kāna) esa **Nasb** (Fatha) bo'ladi.",
                examples: [
                    { arabic: "الْبَيْتُ جَدِيدٌ", meaning: "Uy yangi" },
                    { arabic: "كَانَ الْبَيْتُ جَدِيدًا", meaning: "Uy yangi EDI (Jadidan)" },
                    { arabic: "كَانَ الْمُدَرِّسُ مَرِيضًا", meaning: "O'qituvchi kasal edi" }
                ]
            },
            {
                title: "🔢 11-20 Sonlari (Muannas)",
                content: "Muannas (ayol) jinsi uchun 11 va 12 sonlari maxsus shaklga ega:\n- 11: **إِحْدَى عَشْرَةَ** (Ihdā 'ashrota)\n- 12: **اِثْنَتَا عَشْرَةَ** (Isnatā 'ashrota)\n13 dan 19 gacha: Birinchi qism Muzakkar (ة siz), ikkinchi qism Muannas (ة bilan).\nMisol: **ثَلَاثَ عَشْرَةَ** (Salāsa (m) 'ashrota (f)).",
                examples: [
                    { arabic: "إِحْدَى عَشْرَةَ طَالِبَةً", meaning: "11 ta talaba qiz" },
                    { arabic: "اِثْنَتَا عَشْرَةَ سَيَّارَةً", meaning: "12 ta mashina" },
                    { arabic: "خَمْسَ عَشْرَةَ دَقِيقَةً", meaning: "15 daqiqa" }
                ]
            },
            {
                title: "👩 Ayol ismlari va G'ayri munsarif",
                content: "Eslatma: Ayol ismlari (Fotima, Zaynab) tanvin qabul qilmaydi.\nLekin o'rtasi sukunli 3 harfli ismlar (Hind) tanvin olishi (Hindun) yoki olmasligi (Hindu) mumkin. Bu kursda ko'proq tanvinsiz qo'llaniladi.",
                examples: [
                    { arabic: "رَأَيْتُ زَيْنَبَ", meaning: "Men Zaynabni ko'rdim" },
                    { arabic: "سَلَّمْتُ عَلَى هِنْدَ", meaning: "Men Hindga salom berdim" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "27-1",
            type: "multiple-choice",
            question: "«Dars oson edi» qanday aytiladi?",
            options: ["كَانَ الدَّرْسُ سَهْلٌ", "كَانَ الدَّرْسُ سَهْلًا", "كَانَ الدَّرْسَ سَهْلًا"],
            correctAnswer: "كَانَ الدَّرْسُ سَهْلًا"
        },
        {
            id: "27-2",
            type: "multiple-choice",
            question: "«11 ta mashina» (mashina - muannas)",
            options: ["أَحَدَ عَشَرَ سَيَّارَةً", "إِحْدَى عَشْرَةَ سَيَّارَةً", "إِحْدَى عَشَرَ سَيَّارَةً"],
            correctAnswer: "إِحْدَى عَشْرَةَ سَيَّارَةً"
        },
        {
            id: "27-3",
            type: "word-scramble",
            question: "Tuzing: «Muhammad talaba edi»",
            arabic: "كَانَ مُحَمَّدٌ طَالِبًا",
            scrambledWords: ["مُحَمَّدٌ", "كَانَ", "طَالِبًا"],
            correctAnswer: "كَانَ مُحَمَّدٌ طَالِبًا"
        },
        {
            id: "27-4",
            type: "multiple-choice",
            question: "«15 daqiqa» (Daqiqa - muannas)",
            options: ["خَمْسَةَ عَشَرَ دَقِيقَةً", "خَمْسَ عَشْرَةَ دَقِيقَةً", "خَمْسَ عَشَرَ دَقِيقَةً"],
            correctAnswer: "خَمْسَ عَشْرَةَ دَقِيقَةً"
        },
        {
            id: "27-5",
            type: "matching",
            question: "Son va jinsni moslashtiring",
            pairs: [
                { "arabic": "أَحَدَ عَشَرَ", "meaning": "Muzakkar (11)" },
                { "arabic": "إِحْدَى عَشْرَةَ", "meaning": "Muannas (11)" },
                { "arabic": "تِسْعَةَ عَشَرَ", "meaning": "Muzakkar (19)" },
                { "arabic": "تِسْعَ عَشْرَةَ", "meaning": "Muannas (19)" }
            ]
        },
        {
            id: "27-6",
            type: "multiple-choice",
            question: "«Zaynabga» (Ila Zaynab...)",
            options: ["إِلَى زَيْنَبِ", "إِلَى زَيْنَبَ", "إِلَى زَيْنَبٍ"],
            correctAnswer: "إِلَى زَيْنَبَ"
        },
        {
            id: "27-7",
            type: "word-scramble",
            question: "Tuzing: «Eshik ochiq edi»",
            arabic: "كَانَ الْبَابُ مَفْتُوحًا",
            scrambledWords: ["مَفْتُوحًا", "الْبَابُ", "كَانَ"],
            correctAnswer: "كَانَ الْبَابُ مَفْتُوحًا"
        },
        {
            id: "27-8",
            type: "multiple-choice",
            question: "«12 ta talaba qiz»",
            options: ["اِثْنَا عَشَرَ طَالِبَةً", "اِثْنَتَا عَشْرَةَ طَالِبَةً", "اِثْنَيْ عَشَرَ طَالِبَةً"],
            correctAnswer: "اِثْنَتَا عَشْرَةَ طَالِبَةً"
        },
        {
            id: "27-9",
            type: "multiple-choice",
            question: "«Kāna» nima qiladi?",
            options: ["Xabarni Nasb (Fatha) qiladi", "Ismni Nasb (Fatha) qiladi", "Hech narsa qilmaydi"],
            correctAnswer: "Xabarni Nasb (Fatha) qiladi"
        },
        {
            id: "27-10",
            type: "word-scramble",
            question: "Tuzing: «Soat qimmat» (As-Sa'ah g'oliya)",
            arabic: "السَّاعَةُ غَالِيَةٌ",
            scrambledWords: ["غَالِيَةٌ", "السَّاعَةُ"],
            correctAnswer: "السَّاعَةُ غَالِيَةٌ"
        }
    ]
};
