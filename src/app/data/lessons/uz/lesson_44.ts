import { Lesson } from '../../types';

export const lesson44: Lesson = {
    id: 44,
    title: "44-dars: Inna va uning singlilari (إِنَّ وَأَخَوَاتُهَا) (الدَّرْسُ الرَّابِعُ وَالْأَرْبَعُونَ)",
    grammar: "Inna va uning singlilari",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "إِنَّ va uning singlilari — bu ismli gapning boshiga kelib, ega va xabarning holatlarini o'zgartiradigan yuklamalardir. Ega Mansub holatiga, xabar esa Marfu' holatida qoladi."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- إِنَّ dan keyin المُبْتَدَأ fatha oladi (Mansub — مَنْصُوبٌ)\\n- الخَبَر damma saqlanadi (Marfu' — مَرْفُوعٌ)\\n- Singlilari: أَنَّ، كَأَنَّ، لَكِنَّ، لَيْتَ، لَعَلَّ"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "إِنَّ اللهَ غَفُورٌ رَحِيمٌ", meaning: "Inna Allāha ghafūrun raḥīmun — Albatta, Alloh Kechiruvchi, Mehribondir (إِنَّ + ism (Mansub) + xabar (Marfu'))" },
                    { arabic: "كَأَنَّهُ إِنْسَانٌ", meaning: "Ka'annahu insānun — Go'yo u insondir (كَأَنَّ — إِنَّ ning singlisi)" },
                    { arabic: "لَكِنَّ الْحَقَّ واضِحٌ", meaning: "Lākinna al-ḥaqqa wāḍiḥun — Lekin haqiqat ravshandir (لَكِنَّ — إِنَّ ning singlisi)" },
                    { arabic: "لَيْتَ الشَّبَابَ يَعُودُ", meaning: "Layta al-shabāba ya'ūdu — Koshki yoshlik qaytsa (لَيْتَ — إِنَّ ning singlisi)" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "إِنَّ", meaning: "inna — Albatta/Darhaqiqat" },
                    { arabic: "أَنَّ", meaning: "anna — ...ekanligini (bog'lovchi)" },
                    { arabic: "كَأَنَّ", meaning: "ka'anna — Go'yo" },
                    { arabic: "لَكِنَّ", meaning: "lākinna — Lekin" },
                    { arabic: "لَيْتَ", meaning: "layta — Koshki/Agar bo'lsa" },
                    { arabic: "لَعَلَّ", meaning: "la'alla — Balki/Ehtimol" },
                    { arabic: "إِسْمُ إِنَّ", meaning: "ismu inna — إِنَّ ning ismi" },
                    { arabic: "خَبَرُ إِنَّ", meaning: "khabaru inna — إِنَّ ning xabari" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "44-1",
            type: "multiple-choice",
            question: "إِنَّ dan keyin ism qanday harakat oladi?",
            options: ["Damma", "Fatha", "Kasra", "Sukun"],
            correctAnswer: "Fatha"
        },
        {
            id: "44-2",
            type: "multiple-choice",
            question: "إِنَّ dan keyin xabar qaysi holatda turadi?",
            options: ["Mansub", "Majrur", "Marfu'", "Majzum"],
            correctAnswer: "Marfu'"
        },
        {
            id: "44-3",
            type: "multiple-choice",
            question: "إِنَّ ning nechta singlisi bor?",
            options: ["Uchta", "To'rtta", "Beshta", "Oltita"],
            correctAnswer: "Beshta"
        },
        {
            id: "44-4",
            type: "multiple-choice",
            question: "Qaysi yuklama 'lekin' ma'nosini bildiradi?",
            options: ["إِنَّ", "أَنَّ", "كَأَنَّ", "لَكِنَّ"],
            correctAnswer: "لَكِنَّ"
        },
        {
            id: "44-5",
            type: "multiple-choice",
            question: "Tarjima qiling: إِنَّ اللهَ غَفُورٌ رَحِيمٌ",
            options: ["Alloh Kechiruvchi", "Albatta, Alloh Kechiruvchi, Mehribondir", "Alloh Mehribon", "Albatta, Alloh Buyukdir"],
            correctAnswer: "Albatta, Alloh Kechiruvchi, Mehribondir"
        },
        {
            id: "44-6",
            type: "multiple-choice",
            question: "Tarjima qiling: كَأَنَّهُ إِنْسَانٌ",
            options: ["U inson", "Go'yo u insondir", "U inson emas", "U inson edi"],
            correctAnswer: "Go'yo u insondir"
        },
        {
            id: "44-7",
            type: "multiple-choice",
            question: "Tarjimasi nima: لَكِنَّ الْحَقَّ واضِحٌ?",
            options: ["Haqiqat ravshan", "Lekin haqiqat ravshan", "Haqiqat ravshan emas", "Chunki haqiqat ravshan"],
            correctAnswer: "Lekin haqiqat ravshan"
        },
        {
            id: "44-8",
            type: "multiple-choice",
            question: "إِنَّ nima degani?",
            options: ["Agar", "Albatta/Darhaqiqat", "Nima", "Lekin"],
            correctAnswer: "Albatta/Darhaqiqat"
        },
        {
            id: "44-9",
            type: "multiple-choice",
            question: "كَأَنَّ nima degani?",
            options: ["إِنَّ", "أَنَّ", "Go'yo", "لَكِنَّ"],
            correctAnswer: "Go'yo"
        },
        {
            id: "44-10",
            type: "multiple-choice",
            question: "لَيْتَ nima degani?",
            options: ["Balki", "Koshki/Agar bo'lsa", "Lekin", "Albatta"],
            correctAnswer: "Koshki/Agar bo'lsa"
        }
    ]
};
