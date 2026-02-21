import { Lesson } from '../../types';
export const lesson75: Lesson = {
    id: 75, title: "75-dars: Ijāza va sanad (الدَّرْسُ الْخَامِسُ وَالسَّبْعُونَ - الْإِجَازَةُ وَالسَّنَدُ)", grammar: "Ijāza va sanad", theory: {
        sections: [
            { title: "📖 Tavsif", content: "Ijāza — ustoz tomonidan shogirdga Qur'on yoki hadisni rivoyat qilish ruxsati. Sanad — rivoyat zanjiri bo'lib, har bir rivoyatchining nomi ketma-ket keltiriladi." },
            { title: "📝 Asosiy qoidalar", content: "- Ijāza — rivoyat qilish ruxsati\\n- Sanad — rivoyat zanjiri (isnad)\\n- Har bir rivoyatchi ishonchli bo'lishi kerak\\n- Zanjir Payg'ambar (ﷺ) gacha yetishi kerak" },
            {
                title: "🗣️ Misollar", content: "Misollar:", examples: [
                    { arabic: "حَدَّثَنَا فُلَانٌ عَنْ فُلَانٍ", meaning: "Ḥaddathanā fulānun 'an fulānin — Bizga falon falon orqali rivoyat qildi (sanad namunasi)" },
                    { arabic: "أَخْبَرَنَا فُلَانٌ", meaning: "Akhbaranā fulānun — Bizga falon xabar berdi (rivoyat usuli)" },
                    { arabic: "سَمِعْتُ فُلَانًا يَقُولُ", meaning: "Sami'tu fulānan yaqūlu — Men falonning aytganini eshitdim" },
                    { arabic: "إِجَازَةٌ مِنَ الشَّيْخِ", meaning: "Ijāzatun min al-shaykhi — Shayx tomonidan ijāza (ruxsat)" }
                ]
            },
            {
                title: "📚 Lug'at", content: "Yangi so'zlar:", examples: [
                    { arabic: "إِجَازَةٌ", meaning: "ijāzatun — Ijāza/Ruxsat" }, { arabic: "سَنَدٌ", meaning: "sanadun — Sanad/Rivoyat zanjiri" },
                    { arabic: "إِسْنَادٌ", meaning: "isnādun — Isnad" }, { arabic: "رَاوٍ", meaning: "rāwin — Rivoyatchi" },
                    { arabic: "حَدَّثَنَا", meaning: "ḥaddathanā — Bizga rivoyat qildi" }, { arabic: "أَخْبَرَنَا", meaning: "akhbaranā — Bizga xabar berdi" },
                    { arabic: "سَمِعْتُ", meaning: "sami'tu — Men eshitdim" }, { arabic: "شَيْخٌ", meaning: "shaykhun — Shayx/Ustoz" }
                ]
            }
        ]
    }, tasks: [
        { id: "75-1", type: "multiple-choice", question: "Ijāza nima?", options: ["Kitob", "Rivoyat qilish ruxsati", "Imtihon", "Diplom"], correctAnswer: "Rivoyat qilish ruxsati" },
        { id: "75-2", type: "multiple-choice", question: "Sanad nima?", options: ["Kitob nomi", "Rivoyat zanjiri", "Shahar nomi", "Dars turi"], correctAnswer: "Rivoyat zanjiri" },
        { id: "75-3", type: "multiple-choice", question: "رَاوٍ nima?", options: ["Yozuvchi", "Rivoyatchi", "O'quvchi", "Tinglovchi"], correctAnswer: "Rivoyatchi" },
        { id: "75-4", type: "multiple-choice", question: "حَدَّثَنَا nima degani?", options: ["Bizga yozdi", "Bizga rivoyat qildi", "Bizga o'qidi", "Bizga ko'rsatdi"], correctAnswer: "Bizga rivoyat qildi" },
        { id: "75-5", type: "multiple-choice", question: "Sanad kim gacha yetishi kerak?", options: ["Sahobagacha", "Payg'ambar (ﷺ) gacha", "Tobe'ingacha", "Imomgacha"], correctAnswer: "Payg'ambar (ﷺ) gacha" },
        { id: "75-6", type: "multiple-choice", question: "إِسْنَادٌ nima?", options: ["Matn", "Isnad (zanjir)", "Sharh", "Tafsir"], correctAnswer: "Isnad (zanjir)" },
        { id: "75-7", type: "multiple-choice", question: "شَيْخٌ nima?", options: ["Talaba", "Shayx/Ustoz", "Bola", "Mehmon"], correctAnswer: "Shayx/Ustoz" },
        { id: "75-8", type: "multiple-choice", question: "أَخْبَرَنَا nima degani?", options: ["Bizga rivoyat qildi", "Bizga xabar berdi", "Bizga yozdi", "Bizga aytdi"], correctAnswer: "Bizga xabar berdi" },
        { id: "75-9", type: "multiple-choice", question: "سَمِعْتُ nima degani?", options: ["Men ko'rdim", "Men eshitdim", "Men yozdim", "Men o'qidim"], correctAnswer: "Men eshitdim" },
        { id: "75-10", type: "multiple-choice", question: "Rivoyatchi qanday bo'lishi kerak?", options: ["Boy", "Ishonchli", "Yosh", "Keksa"], correctAnswer: "Ishonchli" }
    ]
};
