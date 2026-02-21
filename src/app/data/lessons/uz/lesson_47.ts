import { Lesson } from '../../types';

export const lesson47: Lesson = {
    id: 47,
    title: "47-dars: Maf'ul lajlihi (Sabab to'ldiruvchi) (الدَّرْسُ السَّابِعُ وَالْأَرْبَعُونَ - الْمَفْعُولُ لِأَجْلِهِ)",
    grammar: "Maf'ul lajlihi (Sabab to'ldiruvchi)",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "Maf'ul lajlihi (الْمَفْعُولُ لِأَجْلِهِ) — harakatning sababini bildiruvchi masdardir. U doimo Mansub holatida turadi va 'nima uchun?' savoliga javob beradi."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- Harakatning sababini bildiradi\\n- 'Nima uchun?' savoliga javob beradi\\n- Doimo Mansub holatida turadi\\n- Masdar bo'lishi kerak"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "قُمْتُ إِجْلَالًا لِلْمُعَلِّمِ", meaning: "Qumtu ijlālan li-l-mu'allimi — Men o'qituvchiga hurmat uchun turdim (إِجْلَالًا — sabab)" },
                    { arabic: "سَافَرْتُ طَلَبًا لِلْعِلْمِ", meaning: "Sāfartu ṭalaban li-l-'ilmi — Men ilm izlash uchun sayohat qildim (طَلَبًا — sabab)" },
                    { arabic: "جِئْتُ رَغْبَةً فِي اللِّقَاءِ", meaning: "Ji'tu raghbatan fī al-liqā'i — Men ko'rishishni istaganim uchun keldim" },
                    { arabic: "فَرَرْتُ خَوْفًا مِنَ الْعَدُوِّ", meaning: "Farartu khawfan min al-'aduwwi — Men dushmandan qo'rqib qochdim (خَوْفًا — sabab)" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "مَفْعُولٌ لِأَجْلِهِ", meaning: "maf'ūlun li-ajlihi — Sabab to'ldiruvchi" },
                    { arabic: "إِجْلَالٌ", meaning: "ijlālun — Hurmat" },
                    { arabic: "طَلَبٌ", meaning: "ṭalabun — Izlash/Talab" },
                    { arabic: "رَغْبَةٌ", meaning: "raghbatun — Xohish/Istak" },
                    { arabic: "خَوْفٌ", meaning: "khawfun — Qo'rquv" },
                    { arabic: "فَرَّ", meaning: "farra — U qochdi" },
                    { arabic: "عَدُوٌّ", meaning: "'aduwwun — Dushman" },
                    { arabic: "لِقَاءٌ", meaning: "liqā'un — Uchrashuv" }
                ]
            }
        ]
    },
    tasks: [
        { id: "47-1", type: "multiple-choice", question: "Maf'ul lajlihi nimani bildiradi?", options: ["Joyni", "Vaqtni", "Sababni", "Miqdorni"], correctAnswer: "Sababni" },
        { id: "47-2", type: "multiple-choice", question: "Maf'ul lajlihi qaysi savolga javob beradi?", options: ["Qachon?", "Qayerda?", "Nima uchun?", "Qanday?"], correctAnswer: "Nima uchun?" },
        { id: "47-3", type: "multiple-choice", question: "Maf'ul lajlihi qaysi holatda turadi?", options: ["Marfu'", "Majrur", "Mansub", "Majzum"], correctAnswer: "Mansub" },
        { id: "47-4", type: "multiple-choice", question: "Tarjima qiling: قُمْتُ إِجْلَالًا لِلْمُعَلِّمِ", options: ["Men o'qituvchini ko'rdim", "Men o'qituvchiga hurmat uchun turdim", "Men o'qituvchi bilan gaplashdim", "Men o'qituvchiga bordim"], correctAnswer: "Men o'qituvchiga hurmat uchun turdim" },
        { id: "47-5", type: "multiple-choice", question: "Tarjima qiling: فَرَرْتُ خَوْفًا مِنَ الْعَدُوِّ", options: ["Men dushman bilan jang qildim", "Men dushmandan qo'rqib qochdim", "Men dushmanmi ko'rdim", "Men dushman oldiga bordim"], correctAnswer: "Men dushmandan qo'rqib qochdim" },
        { id: "47-6", type: "multiple-choice", question: "إِجْلَالٌ nima degani?", options: ["Qo'rquv", "Hurmat", "Xohish", "G'azab"], correctAnswer: "Hurmat" },
        { id: "47-7", type: "multiple-choice", question: "خَوْفٌ nima degani?", options: ["Hurmat", "Xohish", "Qo'rquv", "Xursandchilik"], correctAnswer: "Qo'rquv" },
        { id: "47-8", type: "multiple-choice", question: "طَلَبٌ nima degani?", options: ["Berish", "Izlash/Talab", "Olish", "Ko'rish"], correctAnswer: "Izlash/Talab" },
        { id: "47-9", type: "multiple-choice", question: "عَدُوٌّ nima degani?", options: ["Do'st", "Dushman", "Aka", "Qo'shni"], correctAnswer: "Dushman" },
        { id: "47-10", type: "multiple-choice", question: "فَرَّ nima degani?", options: ["U keldi", "U qochdi", "U turdi", "U o'tirdi"], correctAnswer: "U qochdi" }
    ]
};
