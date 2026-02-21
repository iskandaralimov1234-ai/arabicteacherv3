import { Lesson } from '../../types';
export const lesson76: Lesson = {
    id: 76, title: "76-dars: Hadis terminologiyasi (الدَّرْسُ السَّادِسُ وَالسَّبْعُونَ - مُصْطَلَحُ الْحَدِيثِ)", grammar: "Hadis terminologiyasi", theory: {
        sections: [
            { title: "📖 Tavsif", content: "Hadis terminologiyasi — hadislarni tasniflash va baholash ilmi. Hadislar ishonchlilik darajasiga ko'ra turli toifalarga bo'linadi." },
            { title: "📝 Asosiy qoidalar", content: "- Sahih — ishonchli hadis\\n- Hasan — yaxshi hadis\\n- Zaif — kuchsiz hadis\\n- Mawzu' — uydirma hadis\\n- Hadis = sanad + matn" },
            {
                title: "🗣️ Misollar", content: "Misollar:", examples: [
                    { arabic: "حَدِيثٌ صَحِيحٌ", meaning: "Ḥadīthun ṣaḥīḥun — Sahih (ishonchli) hadis" },
                    { arabic: "حَدِيثٌ حَسَنٌ", meaning: "Ḥadīthun ḥasanun — Hasan (yaxshi) hadis" },
                    { arabic: "حَدِيثٌ ضَعِيفٌ", meaning: "Ḥadīthun ḍa'īfun — Zaif (kuchsiz) hadis" },
                    { arabic: "رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ", meaning: "Rawāhu al-Bukhāriyyu wa Muslimun — Buxoriy va Muslim rivoyat qilgan (mutaffaqun alayhi)" }
                ]
            },
            {
                title: "📚 Lug'at", content: "Yangi so'zlar:", examples: [
                    { arabic: "حَدِيثٌ", meaning: "ḥadīthun — Hadis" }, { arabic: "صَحِيحٌ", meaning: "ṣaḥīḥun — Sahih/Ishonchli" },
                    { arabic: "حَسَنٌ", meaning: "ḥasanun — Hasan/Yaxshi" }, { arabic: "ضَعِيفٌ", meaning: "ḍa'īfun — Zaif/Kuchsiz" },
                    { arabic: "مَوْضُوعٌ", meaning: "mawḍū'un — Uydirma" }, { arabic: "مَتْنٌ", meaning: "matnun — Matn (hadis matni)" },
                    { arabic: "رَاوٍ", meaning: "rāwin — Rivoyatchi" }, { arabic: "مُحَدِّثٌ", meaning: "muḥaddithun — Muhaddis" }
                ]
            }
        ]
    }, tasks: [
        { id: "76-1", type: "multiple-choice", question: "Sahih hadis nima?", options: ["Kuchsiz hadis", "Ishonchli hadis", "Uydirma hadis", "Yaxshi hadis"], correctAnswer: "Ishonchli hadis" },
        { id: "76-2", type: "multiple-choice", question: "Zaif hadis nima?", options: ["Ishonchli", "Yaxshi", "Kuchsiz", "Uydirma"], correctAnswer: "Kuchsiz" },
        { id: "76-3", type: "multiple-choice", question: "Hadis nimalardan iborat?", options: ["Faqat matn", "Sanad va matn", "Faqat sanad", "Kitob va bob"], correctAnswer: "Sanad va matn" },
        { id: "76-4", type: "multiple-choice", question: "مَوْضُوعٌ nima?", options: ["Ishonchli", "Uydirma", "Yaxshi", "Kuchsiz"], correctAnswer: "Uydirma" },
        { id: "76-5", type: "multiple-choice", question: "مُحَدِّثٌ nima?", options: ["Faqih", "Muhaddis (hadis olimi)", "Mufassir", "Qori"], correctAnswer: "Muhaddis (hadis olimi)" },
        { id: "76-6", type: "multiple-choice", question: "مَتْنٌ nima?", options: ["Zanjir", "Matn (hadis matni)", "Sarlavha", "Izoh"], correctAnswer: "Matn (hadis matni)" },
        { id: "76-7", type: "multiple-choice", question: "حَسَنٌ nima?", options: ["Ishonchli", "Yaxshi", "Kuchsiz", "Uydirma"], correctAnswer: "Yaxshi" },
        { id: "76-8", type: "multiple-choice", question: "ضَعِيفٌ nima degani?", options: ["Kuchli", "Kuchsiz/Zaif", "Ishonchli", "Yaxshi"], correctAnswer: "Kuchsiz/Zaif" },
        { id: "76-9", type: "multiple-choice", question: "رَاوٍ nima?", options: ["Yozuvchi", "Rivoyatchi", "O'quvchi", "Tinglovchi"], correctAnswer: "Rivoyatchi" },
        { id: "76-10", type: "multiple-choice", question: "صَحِيحٌ nima degani?", options: ["Zaif", "Sahih/Ishonchli", "Uydirma", "Yaxshi"], correctAnswer: "Sahih/Ishonchli" }
    ]
};
