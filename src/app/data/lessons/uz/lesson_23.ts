import { Lesson } from '../../types';

export const lesson23: Lesson = {
    id: 23,
    title: "23-dars: G'ayri munsarif istisnolari (1-kitob yakuni)",
    grammar: "Diptotes Exceptions (Kasra)",
    theory: {
        sections: [
            {
                title: "🏁 1-kitobning yakuni",
                content: "Tabriklaymiz! Bu Madina kursi 1-kitobining so'nggi darsi.\nBu yerda biz muhim qoidani o'rganamiz: qachon «tanvin qabul qilmaydigan» so'zlar baribir kasra oladi.",
                examples: [
                    { arabic: "الْحَمْدُ لِلَّهِ", meaning: "Allohga hamd bo'lsin" },
                    { arabic: "أَتْمَمْنَا الْكِتَابَ الْأَوَّلَ", meaning: "Biz birinchi kitobni tugatdik" }
                ]
            },
            {
                title: "⚠️ 1-istisno: «Al» artikli",
                content: "G'ayri munsarif so'zlar (Diptotlar) agar ularga **ال** (Al) qo'shilsa, qaratqich kelishigida **KASRA** qabul qiladi.",
                examples: [
                    { arabic: "فِي مَسَاجِدَ", meaning: "Masjidlarda (Fatha - Al yo'q)" },
                    { arabic: "فِي الْمَسَاجِدِ", meaning: "Masjidlarda (Kasra - Al bor)" },
                    { arabic: "بِالْأَقْلَامِ", meaning: "Ruchkalar bilan (Kasra - Al bor)" }
                ]
            },
            {
                title: "⚠️ 2-istisno: Mudof bo'lish",
                content: "Agar G'ayri munsarif so'z **Mudof** (izofaning birinchi so'zi) bo'lsa, u ham qaratqich kelishigida **KASRA** oladi.",
                examples: [
                    { arabic: "فِي مَسَاجِدِ الْمَدِينَةِ", meaning: "Shahar masjidlarida (Kasra - Mudof)" },
                    { arabic: "بِمَفَاتِيحِ الْبَيْتِ", meaning: "Uyning kalitlari bilan (Kasra - Mudof)" }
                ]
            },
            {
                title: "📝 Umumiy takrorlash",
                content: "Biz nimalarni o'rgandik:\n- Quyosh va Oy harflari\n- Kelishiklar (Raf, Nasb, Jarr)\n- Izofa\n- O'tgan zamon fe'li\n- Ko'plik shakllari\n- G'ayri munsarif",
                examples: [
                    { arabic: "ذَهَبَ الطَّالِبُ إِلَى الْمَدْرَسَةِ", meaning: "Talaba maktabga ketdi" },
                    { arabic: "كِتَابُ مُحَمَّدٍ جَدِيدٌ", meaning: "Muhammadning kitobi yangi" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "23-1",
            type: "multiple-choice",
            question: "To'g'ri qo'shimchani tanlang: «Masjidlarda» (Al yo'q)",
            options: ["فِي مَسَاجِدِ", "فِي مَسَاجِدَ", "فِي مَسَاجِدٍ"],
            correctAnswer: "فِي مَسَاجِدَ"
        },
        {
            id: "23-2",
            type: "multiple-choice",
            question: "To'g'ri qo'shimchani tanlang: «Shahar masjidlarida» (Mudof)",
            options: ["فِي مَسَاجِدِ الْمَدِينَةِ", "فِي مَسَاجِدَ الْمَدِينَةِ", "فِي مَسَاجِدُ الْمَدِينَةِ"],
            correctAnswer: "فِي مَسَاجِدِ الْمَدِينَةِ"
        },
        {
            id: "23-3",
            type: "word-scramble",
            question: "Tuzing: «Maktablarda» (Al bilan)",
            arabic: "فِي الْمَدَارِسِ",
            scrambledWords: ["الْمَدَارِسِ", "فِي", "الْمَدَارِسَ"],
            correctAnswer: "فِي الْمَدَارِسِ"
        },
        {
            id: "23-4",
            type: "multiple-choice",
            question: "Qaysi so'z kasra bilan tugaydi?",
            options: ["عَلَى مَكْتَبِ الْمُدَرِّسِ", "عَلَى مَكْتَبَ الْمُدَرِّسِ", "عَلَى مَكْتَبُ الْمُدَرِّسِ"],
            correctAnswer: "عَلَى مَكْتَبِ الْمُدَرِّسِ"
        },
        {
            id: "23-5",
            type: "matching",
            question: "Qoida va misolni moslashtiring",
            pairs: [
                { "arabic": "فِي مَسَاجِدَ", "meaning": "Al yo'q va Mudof emas (Fatha)" },
                { "arabic": "فِي الْمَسَاجِدِ", "meaning": "Al bilan (Kasra)" },
                { "arabic": "فِي مَسَاجِدِكُمْ", "meaning": "Mudof (Kasra)" },
                { "arabic": "مِنْ مَكَّةَ", "meaning": "G'ayri munsarif ot (Fatha)" }
            ]
        },
        {
            id: "23-6",
            type: "multiple-choice",
            question: "«Kalitlar bilan» (Al-Maftih) qanday aytiladi?",
            options: ["بِالْمَفَاتِيحَ", "بِالْمَفَاتِيحِ", "بِالْمَفَاتِيحُ"],
            correctAnswer: "بِالْمَفَاتِيحِ"
        },
        {
            id: "23-7",
            type: "word-scramble",
            question: "Tuzing: «Biz katta masjidlarda namoz o'qidik»",
            arabic: "صَلَّيْنَا فِي مَسَاجِدَ كَبِيرَةٍ",
            scrambledWords: ["كَبِيرَةٍ", "مَسَاجِدَ", "فِي", "صَلَّيْنَا"],
            correctAnswer: "صَلَّيْنَا فِي مَسَاجِدَ كَبِيرَةٍ"
        },
        {
            id: "23-8",
            type: "multiple-choice",
            question: "Nega 'Kabiratin' kasrali? ('Fi masajida kabiratin')",
            options: ["Chunki u 'Masajida' (majrur) so'zining sifati", "Chunki bu xato", "Sifat har doim kasrali bo'ladi"],
            correctAnswer: "Chunki u 'Masajida' (majrur) so'zining sifati"
        },
        {
            id: "23-9",
            type: "multiple-choice",
            question: "Tarjima qiling: «Oq uyda» (Al-Bayt Al-Abyad)",
            options: ["فِي الْبَيْتِ الْأَبْيَضِ", "فِي الْبَيْتِ الْأَبْيَضَ", "فِي الْبَيْتِ أَبْيَضِ"],
            correctAnswer: "فِي الْبَيْتِ الْأَبْيَضِ"
        },
        {
            id: "23-10",
            type: "word-scramble",
            question: "Tuzing: «Olamlar Robbi Allohga hamd bo'lsin»",
            arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            scrambledWords: ["رَبِّ", "الْعَالَمِينَ", "لِلَّهِ", "الْحَمْدُ"],
            correctAnswer: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ"
        }
    ]
};
