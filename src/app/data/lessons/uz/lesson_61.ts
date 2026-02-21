import { Lesson } from '../../types';
export const lesson61: Lesson = {
    id: 61, title: "61-dars: Ma'ruf fe'llar (الدَّرْسُ الْحَادِي وَالسِّتُّونَ - الْمَعْرُوفُ)", grammar: "Ma'ruf fe'llar", theory: {
        sections: [
            { title: "📖 Tavsif", content: "Ma'ruf fe'llar — bu ma'lum nisbatdagi fe'llar bo'lib, ularning bajaruvchisi (fā'il) aniq. Aksincha, majhul nisbatda bajaruvchi noma'lum." },
            { title: "📝 Asosiy qoidalar", content: "- Ma'lum nisbat: bajaruvchi aniq\\n- Fe'lning asl harakat shakli saqlanadi\\n- Fā'il Marfu' holatida turadi\\n- Maf'ul (agar bo'lsa) Mansub holatida" },
            {
                title: "🗣️ Misollar", content: "Misollar:", examples: [
                    { arabic: "كَتَبَ الطَّالِبُ الدَّرْسَ", meaning: "Kataba al-ṭālibu al-darsa — Talaba darsni yozdi" },
                    { arabic: "يَقْرَأُ مُحَمَّدٌ الْكِتَابَ", meaning: "Yaqra'u Muhammadun al-kitāba — Muhammad kitob o'qiyapti" },
                    { arabic: "فَتَحَتِ الْمُعَلِّمَةُ الْبَابَ", meaning: "Fataḥati al-mu'allimatu al-bāba — O'qituvchi (ayol) eshikni ochdi" },
                    { arabic: "سَيَذْهَبُ الطُّلَّابُ", meaning: "Sayadhhabu al-ṭullābu — Talabalar boradilar" }
                ]
            },
            {
                title: "📚 Lug'at", content: "Yangi so'zlar:", examples: [
                    { arabic: "مَعْرُوفٌ", meaning: "ma'rūfun — Ma'lum/Taniqli" }, { arabic: "فَاعِلٌ", meaning: "fā'ilun — Bajaruvchi" },
                    { arabic: "مَعْلُومٌ", meaning: "ma'lūmun — Ma'lum" }, { arabic: "مَبْنِيٌّ لِلْمَعْلُومِ", meaning: "mabniyyun li-l-ma'lūmi — Ma'lumga qurilgan" },
                    { arabic: "كَتَبَ", meaning: "kataba — U yozdi" }, { arabic: "يَقْرَأُ", meaning: "yaqra'u — U o'qiyapti" },
                    { arabic: "فَتَحَ", meaning: "fataḥa — U ochdi" }, { arabic: "مُعَلِّمَةٌ", meaning: "mu'allimatun — O'qituvchi (ayol)" }
                ]
            }
        ]
    }, tasks: [
        { id: "61-1", type: "multiple-choice", question: "Ma'lum nisbatda bajaruvchi qanday?", options: ["Noma'lum", "Aniq", "Yo'q", "Tushirilgan"], correctAnswer: "Aniq" },
        { id: "61-2", type: "multiple-choice", question: "Fā'il qaysi holatda turadi?", options: ["Mansub", "Majrur", "Marfu'", "Majzum"], correctAnswer: "Marfu'" },
        { id: "61-3", type: "multiple-choice", question: "Maf'ul qaysi holatda turadi?", options: ["Marfu'", "Mansub", "Majrur", "Majzum"], correctAnswer: "Mansub" },
        { id: "61-4", type: "multiple-choice", question: "Tarjima qiling: كَتَبَ الطَّالِبُ الدَّرْسَ", options: ["Talaba darsni yozdi", "Dars yozildi", "Talaba dars o'qidi", "Dars o'qildi"], correctAnswer: "Talaba darsni yozdi" },
        { id: "61-5", type: "multiple-choice", question: "Tarjima qiling: يَقْرَأُ مُحَمَّدٌ الْكِتَابَ", options: ["Muhammad kitob yozdi", "Muhammad kitob o'qiyapti", "Kitob o'qildi", "Kitob yozildi"], correctAnswer: "Muhammad kitob o'qiyapti" },
        { id: "61-6", type: "multiple-choice", question: "مَعْرُوفٌ nima degani?", options: ["Noma'lum", "Ma'lum/Taniqli", "Kuchsiz", "Kuchli"], correctAnswer: "Ma'lum/Taniqli" },
        { id: "61-7", type: "multiple-choice", question: "فَاعِلٌ nima degani?", options: ["Ob'ekt", "Bajaruvchi", "Sifat", "Hol"], correctAnswer: "Bajaruvchi" },
        { id: "61-8", type: "multiple-choice", question: "مُعَلِّمَةٌ nima degani?", options: ["O'qituvchi (erkak)", "O'qituvchi (ayol)", "Talaba", "Direktor"], correctAnswer: "O'qituvchi (ayol)" },
        { id: "61-9", type: "multiple-choice", question: "يَقْرَأُ nima degani?", options: ["U yozdi", "U o'qiyapti", "U ochdi", "U yopdi"], correctAnswer: "U o'qiyapti" },
        { id: "61-10", type: "multiple-choice", question: "فَتَحَ nima degani?", options: ["U yopdi", "U ochdi", "U yozdi", "U o'qidi"], correctAnswer: "U ochdi" }
    ]
};
