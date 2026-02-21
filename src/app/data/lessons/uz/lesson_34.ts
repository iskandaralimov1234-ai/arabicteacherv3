import { Lesson } from '../../types';

export const lesson34: Lesson = {
    id: 34,
    title: "34-dars: Majhul nisbat (Al-majhūl) (الدَّرْسُ الرَّابِعُ وَالثَّلَاثُونَ - الْمَجْهُولُ)",
    grammar: "Majhul nisbat (Al-majhūl)",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "Majhul nisbat (الْمَجْهُولُ) fe'l harakatlarini o'zgartirish orqali hosil qilinadi. Majhulda fā'il (bajaruvchi) tilga olinmaydi, maf'ul esa egaga aylanadi."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- Majhulda fā'il tilga olinmaydi\\n- Maf'ul ega o'rniga o'tadi (Marfu' holatida)\\n- Fe'lning birinchi harfiga damma qo'yiladi\\n- Fe'lning oxiridan oldingi harfga kasra qo'yiladi"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "كُتِبَ الدَّرْسُ", meaning: "Kutiba al-darsu — Dars yozildi (كَتَبَ dan majhul: كُتِبَ)" },
                    { arabic: "فُتِحَ الْبَابُ", meaning: "Futiaḥ al-bābu — Eshik ochildi (فَتَحَ dan majhul: فُتِحَ)" },
                    { arabic: "يُكْتَبُ الدَّرْسُ", meaning: "Yuktabu al-darsu — Dars yozilyapti/yoziladi (Hozirgi zamonda majhul)" },
                    { arabic: "قُرِئَ الْكِتَابُ", meaning: "Quri'a al-kitābu — Kitob o'qildi (قَرَأَ dan majhul: قُرِئَ)" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "مَجْهُولٌ", meaning: "majhūlun — Majhul nisbat" },
                    { arabic: "مَعْلُومٌ", meaning: "ma'lūmun — Ma'lum nisbat" },
                    { arabic: "نَائِبُ فَاعِلٍ", meaning: "nā'ibu fā'ilin — Fā'il o'rinbosari" },
                    { arabic: "مُبْنًى عَلَى الْمَجْهُولِ", meaning: "mubnan 'alā al-majhūli — Majhulga qurilgan" },
                    { arabic: "ضُرِبَ", meaning: "ḍuriba — U urildi" },
                    { arabic: "شُرِبَ", meaning: "shuriba — U ichildi" },
                    { arabic: "أُكِلَ", meaning: "ukila — U yeyildi" },
                    { arabic: "رُئِيَ", meaning: "ru'iya — U ko'rildi" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "34-1",
            type: "multiple-choice",
            question: "Majhulda fā'ilga nima bo'ladi?",
            options: ["Qoladi", "Tilga olinmaydi", "Maf'ulga aylanadi", "Holatini o'zgartiradi"],
            correctAnswer: "Tilga olinmaydi"
        },

        {
            id: "34-2",
            type: "multiple-choice",
            question: "Majhulda ega o'rniga nima o'tadi?",
            options: ["Fā'il", "Maf'ul", "Sifat", "Hol"],
            correctAnswer: "Maf'ul"
        },

        {
            id: "34-3",
            type: "multiple-choice",
            question: "Majhulda birinchi harf qanday harakat oladi?",
            options: ["Fatha", "Damma", "Kasra", "Sukun"],
            correctAnswer: "Damma"
        },

        {
            id: "34-4",
            type: "multiple-choice",
            question: "Majhulda oxirdan oldingi harf qanday harakat oladi?",
            options: ["Fatha", "Damma", "Kasra", "Sukun"],
            correctAnswer: "Kasra"
        },

        {
            id: "34-5",
            type: "multiple-choice",
            question: "Tarjima qiling: كُتِبَ الدَّرْسُ",
            options: ["Dars yozilyapti", "Dars yozildi", "Dars yoziladi", "Dars yozuvchi"],
            correctAnswer: "Dars yozildi"
        },

        {
            id: "34-6",
            type: "multiple-choice",
            question: "Tarjima qiling: يُكْتَبُ الدَّرْسُ",
            options: ["Dars yozilyapti/yoziladi", "Dars yozildi", "Dars yozdi", "Dars yozuvchi"],
            correctAnswer: "Dars yozilyapti/yoziladi"
        },

        {
            id: "34-7",
            type: "multiple-choice",
            question: "Tarjimasi nima: فُتِحَ الْبَابُ?",
            options: ["Eshik ochilyapti", "Eshik ochildi", "Eshik ochiladi", "Eshik ochuvchi"],
            correctAnswer: "Eshik ochildi"
        },

        {
            id: "34-8",
            type: "multiple-choice",
            question: "مَجْهُولٌ nima degani?",
            options: ["Ma'lum nisbat", "Majhul nisbat", "O'rta nisbat", "Qaytim nisbat"],
            correctAnswer: "Majhul nisbat"
        },

        {
            id: "34-9",
            type: "multiple-choice",
            question: "نَائِبُ فَاعِلٍ nima?",
            options: ["Bajaruvchi", "Fā'il o'rinbosari", "Ob'ekt", "Sifat"],
            correctAnswer: "Fā'il o'rinbosari"
        },

        {
            id: "34-10",
            type: "multiple-choice",
            question: "ضُرِبَ nima degani?",
            options: ["U urdi", "U urildi", "U uryapti", "U uradi"],
            correctAnswer: "U urildi"
        }
    ]
};
