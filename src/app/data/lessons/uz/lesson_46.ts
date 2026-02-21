import { Lesson } from '../../types';

export const lesson46: Lesson = {
    id: 46,
    title: "46-dars: Maf'ul mutlaq (الدَّرْسُ السَّادِسُ وَالْأَرْبَعُونَ - الْمَفْعُولُ الْمُطْلَقُ)",
    grammar: "Maf'ul mutlaq (Mutlaq to'ldiruvchi)",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "Maf'ul mutlaq (الْمَفْعُولُ الْمُطْلَقُ) — fe'lning o'zidan yasalgan ism bo'lib, harakatni kuchaytirish yoki turini ko'rsatish uchun ishlatiladi. U doimo Mansub holatida turadi."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- Maf'ul mutlaq fe'lning masdaridan yasaladi\\n- Doimo Mansub holatida turadi\\n- Harakatni kuchaytirish yoki turini bildirish uchun\\n- Fe'ldan keyin keladi"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "ضَرَبْتُهُ ضَرْبًا", meaning: "Ḍarabtuhu ḍarban — Men uni urdim (kuchli urish) (ضَرْبًا — kuchaytirish uchun)" },
                    { arabic: "فَرِحَ فَرَحًا شَدِيدًا", meaning: "Fariḥa faraḥan shadīdan — U juda qattiq xursand bo'ldi (turini bildirish)" },
                    { arabic: "كَتَبَ كِتَابَةً جَمِيلَةً", meaning: "Kataba kitābatan jamīlatan — U chiroyli yozdi (كِتَابَةً — turini bildirish)" },
                    { arabic: "سَجَدَ سَجْدَتَيْنِ", meaning: "Sajada sajdatayni — U ikki marta sajda qildi (sonini bildirish)" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "مَفْعُولٌ مُطْلَقٌ", meaning: "maf'ūlun muṭlaqun — Mutlaq to'ldiruvchi" },
                    { arabic: "مَصْدَرٌ", meaning: "maṣdarun — Masdar (fe'l ismi)" },
                    { arabic: "ضَرْبٌ", meaning: "ḍarbun — Urish" },
                    { arabic: "فَرَحٌ", meaning: "faraḥun — Xursandchilik" },
                    { arabic: "كِتَابَةٌ", meaning: "kitābatun — Yozish" },
                    { arabic: "سَجْدَةٌ", meaning: "sajdatun — Sajda" },
                    { arabic: "شَدِيدٌ", meaning: "shadīdun — Qattiq/Kuchli" },
                    { arabic: "جَمِيلٌ", meaning: "jamīlun — Chiroyli" }
                ]
            }
        ]
    },
    tasks: [
        { id: "46-1", type: "multiple-choice", question: "Maf'ul mutlaq nimadan yasaladi?", options: ["Ismdan", "Fe'lning masdaridan", "Sifatdan", "Zamirdan"], correctAnswer: "Fe'lning masdaridan" },
        { id: "46-2", type: "multiple-choice", question: "Maf'ul mutlaq qaysi holatda turadi?", options: ["Marfu'", "Majrur", "Mansub", "Majzum"], correctAnswer: "Mansub" },
        { id: "46-3", type: "multiple-choice", question: "Maf'ul mutlaq nima uchun ishlatiladi?", options: ["Faqat inkor", "Harakatni kuchaytirish yoki turini bildirish", "Faqat savol", "Faqat buyruq"], correctAnswer: "Harakatni kuchaytirish yoki turini bildirish" },
        { id: "46-4", type: "multiple-choice", question: "Tarjima qiling: ضَرَبْتُهُ ضَرْبًا", options: ["Men uni ko'rdim", "Men uni urdim (kuchli)", "Men uni kutdim", "Men uni chaqirdim"], correctAnswer: "Men uni urdim (kuchli)" },
        { id: "46-5", type: "multiple-choice", question: "Tarjima qiling: فَرِحَ فَرَحًا شَدِيدًا", options: ["U xafa bo'ldi", "U juda qattiq xursand bo'ldi", "U yig'ladi", "U kuldi"], correctAnswer: "U juda qattiq xursand bo'ldi" },
        { id: "46-6", type: "multiple-choice", question: "مَصْدَرٌ nima degani?", options: ["Fe'l", "Masdar (fe'l ismi)", "Sifat", "Ravish"], correctAnswer: "Masdar (fe'l ismi)" },
        { id: "46-7", type: "multiple-choice", question: "ضَرْبٌ nima degani?", options: ["Yozish", "Urish", "O'qish", "O'tirish"], correctAnswer: "Urish" },
        { id: "46-8", type: "multiple-choice", question: "شَدِيدٌ nima degani?", options: ["Oson", "Qattiq/Kuchli", "Yengil", "Sekin"], correctAnswer: "Qattiq/Kuchli" },
        { id: "46-9", type: "multiple-choice", question: "كِتَابَةٌ nima degani?", options: ["Kitob", "Yozish", "O'qish", "Dars"], correctAnswer: "Yozish" },
        { id: "46-10", type: "multiple-choice", question: "Maf'ul mutlaq gapda qayerda keladi?", options: ["Fe'ldan oldin", "Fe'ldan keyin", "Gap boshida", "Gap oxirida"], correctAnswer: "Fe'ldan keyin" }
    ]
};
