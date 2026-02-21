import { Lesson } from '../../types';

export const lesson50: Lesson = {
    id: 50,
    title: "50-dars: Sonlardan keyin tamyiz (الدَّرْسُ الْخَمْسُونَ - التَّمْيِيزُ بَعْدَ الْعَدَدِ)",
    grammar: "Sonlardan keyin tamyiz",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "Sonlardan keyin tamyizning holati va soni songa bog'liq. 3-10: tamyiz ko'plik Majrur; 11-99: tamyiz birlik Mansub; 100, 1000: tamyiz birlik Majrur."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- 3-10: tamyiz ko'plik sonda Majrur holatida\\n- 11-99: tamyiz birlik sonda Mansub holatida\\n- 100, 1000: tamyiz birlik sonda Majrur holatida\\n- 1, 2: sifat sifatida moslashadi"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "ثَلَاثَةُ كُتُبٍ", meaning: "Thalāthatu kutubin — Uchta kitob (3-10: tamyiz ko'plik Majrur)" },
                    { arabic: "أَحَدَ عَشَرَ كِتَابًا", meaning: "Aḥada 'ashara kitāban — O'n bitta kitob (11-99: tamyiz birlik Mansub)" },
                    { arabic: "مِائَةُ كِتَابٍ", meaning: "Mi'atu kitābin — Yuzta kitob (100: tamyiz birlik Majrur)" },
                    { arabic: "أَلْفُ كِتَابٍ", meaning: "Alfu kitābin — Mingta kitob (1000: tamyiz birlik Majrur)" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "تَمْيِيزُ الْعَدَدِ", meaning: "tamyīzu al-'adadi — Son tamyizi" },
                    { arabic: "ثَلَاثَةٌ", meaning: "thalāthatun — Uch" },
                    { arabic: "عَشَرَةٌ", meaning: "'asharatun — O'n" },
                    { arabic: "مِائَةٌ", meaning: "mi'atun — Yuz" },
                    { arabic: "أَلْفٌ", meaning: "alfun — Ming" },
                    { arabic: "كُتُبٌ", meaning: "kutubun — Kitoblar" },
                    { arabic: "طُلَّابٌ", meaning: "ṭullābun — Talabalar" },
                    { arabic: "رِجَالٌ", meaning: "rijālun — Erkaklar" }
                ]
            }
        ]
    },
    tasks: [
        { id: "50-1", type: "multiple-choice", question: "3-10 sonlaridan keyin tamyiz qaysi holatda turadi?", options: ["Mansub birlik", "Majrur ko'plik", "Marfu' birlik", "Mansub ko'plik"], correctAnswer: "Majrur ko'plik" },
        { id: "50-2", type: "multiple-choice", question: "11-99 sonlaridan keyin tamyiz qaysi holatda turadi?", options: ["Majrur ko'plik", "Mansub birlik", "Marfu' birlik", "Majrur birlik"], correctAnswer: "Mansub birlik" },
        { id: "50-3", type: "multiple-choice", question: "100 va 1000 dan keyin tamyiz qaysi holatda turadi?", options: ["Mansub birlik", "Majrur ko'plik", "Majrur birlik", "Marfu' birlik"], correctAnswer: "Majrur birlik" },
        { id: "50-4", type: "multiple-choice", question: "Tarjima qiling: ثَلَاثَةُ كُتُبٍ", options: ["Bitta kitob", "Uchta kitob", "O'nta kitob", "Yuzta kitob"], correctAnswer: "Uchta kitob" },
        { id: "50-5", type: "multiple-choice", question: "Tarjima qiling: أَحَدَ عَشَرَ كِتَابًا", options: ["O'nta kitob", "O'n bitta kitob", "Yigirmata kitob", "Bitta kitob"], correctAnswer: "O'n bitta kitob" },
        { id: "50-6", type: "multiple-choice", question: "Tarjima qiling: مِائَةُ كِتَابٍ", options: ["O'nta kitob", "Yuzta kitob", "Mingta kitob", "Ellikta kitob"], correctAnswer: "Yuzta kitob" },
        { id: "50-7", type: "multiple-choice", question: "أَلْفٌ nima degani?", options: ["Yuz", "Ming", "O'n", "Million"], correctAnswer: "Ming" },
        { id: "50-8", type: "multiple-choice", question: "كُتُبٌ nima degani?", options: ["Kitob", "Kitoblar", "Dars", "Darslar"], correctAnswer: "Kitoblar" },
        { id: "50-9", type: "multiple-choice", question: "رِجَالٌ nima degani?", options: ["Erkak", "Erkaklar", "Ayol", "Ayollar"], correctAnswer: "Erkaklar" },
        { id: "50-10", type: "multiple-choice", question: "مِائَةٌ nima degani?", options: ["O'n", "Yuz", "Ming", "Ellik"], correctAnswer: "Yuz" }
    ]
};
