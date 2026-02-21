import { Lesson } from '../../types';

export const lesson41: Lesson = {
    id: 41,
    title: "41-dars: Tamyiz (Aniqlash/Spetsifikatsiya) (الدَّرْسُ الْحَادِي وَالْأَرْبَعُونَ - التَّمْيِيزُ)",
    grammar: "Tamyiz (Aniqlash/Spetsifikatsiya)",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "Tamyiz (التَّمْيِيزُ) — bu noaniq miqdor yoki sifatni aniqlaydigan so'zdir. Odatda birlik sonda Mansub (مَنْصُوبٌ) holatida turadi."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- Tamyiz miqdor yoki sifatni aniqlaydi\\n- Odatda birlik sonda Mansub holatida\\n- Sonlardan keyin ishlatiladi\\n- Ba'zi sifatlardan keyin ham ishlatiladi"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "شَرِبْتُ لَبَنًا كَثِيرًا", meaning: "Sharibtu labanan kathīran — Men ko'p sut ichdim (Tamyiz miqdorni aniqlaydi)" },
                    { arabic: "عِنْدِي كِتَابَانِ تَمْيِيزُهُمَا جَيِّدٌ", meaning: "'Indī kitābāni tamyīzuhumā jayyidun — Menda ikkita kitob bor, ularning aniqlashi yaxshi (Sondan keyin tamyiz)" },
                    { arabic: "عِنْدِي دَرَاهِمُ تَمْيِيزُهَا صَحِيحٌ", meaning: "'Indī darāhimu tamyīzuhā ṣaḥīḥun — Menda dirhamlar bor, ularning aniqlashi to'g'ri" },
                    { arabic: "كَمْ طَالِبًا فِي الْمَدْرَسَةِ؟", meaning: "Kam tāliban fī al-madrasati? — Maktabda nechta talaba bor? (كَمْ dan keyin tamyiz)" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "تَمْيِيزٌ", meaning: "tamyīzun — Aniqlash/Spetsifikatsiya" },
                    { arabic: "تَمْيِيزٌ صَرِيحٌ", meaning: "tamyīzun ṣarīḥun — Ochiq aniqlash" },
                    { arabic: "تَمْيِيزٌ مُؤَوَّلٌ", meaning: "tamyīzun mu'awwalun — Tushuntirilgan aniqlash" },
                    { arabic: "كَثِيرٌ", meaning: "kathīrun — Ko'p" },
                    { arabic: "قَلِيلٌ", meaning: "qalīlun — Oz" },
                    { arabic: "كَمْ", meaning: "kam — Nechta?/Qancha?" },
                    { arabic: "لَبَنٌ", meaning: "labanun — Sut" },
                    { arabic: "دِرْهَمٌ", meaning: "dirhamun — Dirham" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "41-1",
            type: "multiple-choice",
            question: "التَّمْيِيزُ nima?",
            options: ["Sifat", "Miqdor yoki sifatni aniqlaydigan so'z", "Ism", "Fe'l"],
            correctAnswer: "Miqdor yoki sifatni aniqlaydigan so'z"
        },
        {
            id: "41-2",
            type: "multiple-choice",
            question: "Tamyiz odatda qaysi holatda turadi?",
            options: ["Marfu' (مَرْفُوعٌ)", "Majrur (مَجْرُورٌ)", "Mansub (مَنْصُوبٌ)", "Majzum (مَجْزُومٌ)"],
            correctAnswer: "Mansub (مَنْصُوبٌ)"
        },
        {
            id: "41-3",
            type: "multiple-choice",
            question: "Tamyiz odatda qaysi sonda turadi?",
            options: ["Birlik", "Ko'plik", "Ikklik (musnna)", "Kontekstga bog'liq"],
            correctAnswer: "Birlik"
        },
        {
            id: "41-4",
            type: "multiple-choice",
            question: "Qanday so'zlardan keyin tamyiz ko'p ishlatiladi?",
            options: ["Faqat sonlardan keyin", "Sonlar va ba'zi sifatlardan keyin", "Faqat sifatlardan keyin", "Faqat fe'llardan keyin"],
            correctAnswer: "Sonlar va ba'zi sifatlardan keyin"
        },
        {
            id: "41-5",
            type: "multiple-choice",
            question: "Tarjima qiling: شَرِبْتُ لَبَنًا كَثِيرًا",
            options: ["Men sut ichdim", "Men ko'p sut ichdim", "Men sut sotib oldim", "Men sut ko'ryapman"],
            correctAnswer: "Men ko'p sut ichdim"
        },
        {
            id: "41-6",
            type: "multiple-choice",
            question: "Tarjima qiling: كَمْ طَالِبًا فِي الْمَدْرَسَةِ؟",
            options: ["Maktabda kim talaba?", "Maktabda nechta talaba bor?", "Maktabda talabalar qayerda?", "Maktabda talabalar qachon?"],
            correctAnswer: "Maktabda nechta talaba bor?"
        },
        {
            id: "41-7",
            type: "multiple-choice",
            question: "Tarjimasi nima: عِنْدِي دَرَاهِمُ تَمْيِيزُهَا صَحِيحٌ?",
            options: ["Menda dirhamlar bor", "Menda dirhamlar bor, ularning aniqlashi to'g'ri", "Menda ko'p dirham bor", "Menda dirham yo'q"],
            correctAnswer: "Menda dirhamlar bor, ularning aniqlashi to'g'ri"
        },
        {
            id: "41-8",
            type: "multiple-choice",
            question: "تَمْيِيزٌ nima degani?",
            options: ["Qiyoslash", "Aniqlash/Spetsifikatsiya", "Ko'paytirish", "Kamaytirish"],
            correctAnswer: "Aniqlash/Spetsifikatsiya"
        },
        {
            id: "41-9",
            type: "multiple-choice",
            question: "Qaysi so'z 'ko'p' ma'nosini bildiradi?",
            options: ["قَلِيلٌ", "كَثِيرٌ", "صَغِيرٌ", "كَبِيرٌ"],
            correctAnswer: "كَثِيرٌ"
        },
        {
            id: "41-10",
            type: "multiple-choice",
            question: "كَمْ nima degani?",
            options: ["Kim?", "Nima?", "Nechta?/Qancha?", "Qayerda?"],
            correctAnswer: "Nechta?/Qancha?"
        }
    ]
};
