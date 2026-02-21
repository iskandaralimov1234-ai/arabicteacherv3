import { Lesson } from '../../types';
export const lesson70: Lesson = {
    id: 70, title: "70-dars: Naḥv (Sintaksis) (الدَّرْسُ السَّبْعُونَ - النَّحْوُ)", grammar: "Naḥv (Sintaksis)", theory: {
        sections: [
            { title: "📖 Tavsif", content: "Naḥv — arab tili sintaksisi, ya'ni gaplarning tuzilishi va so'zlarning gapda o'z o'rnini o'rganadi. I'rob (so'z oxiridagi harakatning o'zgarishi) naḥvning asosiy tushunchasi." },
            { title: "📝 Asosiy qoidalar", content: "- Naḥv gap tuzilishini o'rganadi\\n- I'rob — so'z oxiridagi harakat o'zgarishi\\n- 4 ta i'rob holati: Marfu', Mansub, Majrur, Majzum\\n- Ism va fe'l uchun turli qoidalar" },
            {
                title: "🗣️ Misollar", content: "Misollar:", examples: [
                    { arabic: "الطَّالِبُ مُجْتَهِدٌ", meaning: "Al-ṭālibu mujtahidun — Talaba tirishqoq (ismli gap: mubtada' Marfu' + xabar Marfu')" },
                    { arabic: "كَتَبَ الطَّالِبُ الدَّرْسَ", meaning: "Kataba al-ṭālibu al-darsa — Talaba darsni yozdi (fe'lli gap: fe'l + fā'il Marfu' + maf'ul Mansub)" },
                    { arabic: "ذَهَبَ إِلَى الْمَدْرَسَةِ", meaning: "Dhahaba ilā al-madrasati — U maktabga bordi (ko'makchi so'zdan keyin Majrur)" },
                    { arabic: "لَمْ يَذْهَبْ", meaning: "Lam yadhhab — U bormadi (لَمْ dan keyin fe'l Majzum)" }
                ]
            },
            {
                title: "📚 Lug'at", content: "Yangi so'zlar:", examples: [
                    { arabic: "نَحْوٌ", meaning: "naḥwun — Sintaksis" }, { arabic: "إِعْرَابٌ", meaning: "i'rābun — I'rob" },
                    { arabic: "مُبْتَدَأٌ", meaning: "mubtada'un — Ega" }, { arabic: "خَبَرٌ", meaning: "khabarun — Xabar" },
                    { arabic: "فَاعِلٌ", meaning: "fā'ilun — Bajaruvchi" }, { arabic: "مَفْعُولٌ", meaning: "maf'ūlun — To'ldiruvchi" },
                    { arabic: "جُمْلَةٌ", meaning: "jumlatun — Gap" }, { arabic: "كَلِمَةٌ", meaning: "kalimatun — So'z" }
                ]
            }
        ]
    }, tasks: [
        { id: "70-1", type: "multiple-choice", question: "Naḥv nimani o'rganadi?", options: ["Morfologiyani", "Sintaksisni", "Ritorikani", "Mantiqni"], correctAnswer: "Sintaksisni" },
        { id: "70-2", type: "multiple-choice", question: "إِعْرَابٌ nima?", options: ["Sarf", "I'rob (so'z oxiri harakati o'zgarishi)", "Masdar", "Sifat"], correctAnswer: "I'rob (so'z oxiri harakati o'zgarishi)" },
        { id: "70-3", type: "multiple-choice", question: "I'robning nechta holati bor?", options: ["Ikkita", "Uchta", "To'rtta", "Beshta"], correctAnswer: "To'rtta" },
        { id: "70-4", type: "multiple-choice", question: "مُبْتَدَأٌ nima?", options: ["Xabar", "Ega", "Fe'l", "Sifat"], correctAnswer: "Ega" },
        { id: "70-5", type: "multiple-choice", question: "Tarjima qiling: كَتَبَ الطَّالِبُ الدَّرْسَ", options: ["Talaba dars o'qidi", "Talaba darsni yozdi", "Dars yozildi", "Talaba keldi"], correctAnswer: "Talaba darsni yozdi" },
        { id: "70-6", type: "multiple-choice", question: "جُمْلَةٌ nima?", options: ["So'z", "Gap", "Harf", "Bo'g'in"], correctAnswer: "Gap" },
        { id: "70-7", type: "multiple-choice", question: "فَاعِلٌ qaysi holatda turadi?", options: ["Mansub", "Majrur", "Marfu'", "Majzum"], correctAnswer: "Marfu'" },
        { id: "70-8", type: "multiple-choice", question: "مَفْعُولٌ qaysi holatda turadi?", options: ["Marfu'", "Mansub", "Majrur", "Majzum"], correctAnswer: "Mansub" },
        { id: "70-9", type: "multiple-choice", question: "نَحْوٌ nima?", options: ["Morfologiya", "Sintaksis", "Ritorika", "Falsafa"], correctAnswer: "Sintaksis" },
        { id: "70-10", type: "multiple-choice", question: "كَلِمَةٌ nima?", options: ["Gap", "So'z", "Harf", "Matn"], correctAnswer: "So'z" }
    ]
};
