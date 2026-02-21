import { Lesson } from '../../types';
export const lesson69: Lesson = {
    id: 69, title: "69-dars: Sarf (Morfologiya) (الدَّرْسُ التَّاسِعُ وَالسِّتُّونَ - الصَّرْفُ)", grammar: "Sarf (Morfologiya/So'z o'zgarishi)", theory: {
        sections: [
            { title: "📖 Tavsif", content: "Sarf — arab tili morfologiyasi, ya'ni so'zlarning shakli va o'zgarishini o'rganadi. Fe'llarning tasrifi, ismlarning vaznlari va ildiz tizimi shu fanga kiradi." },
            { title: "📝 Asosiy qoidalar", content: "- Sarf so'z shaklini o'rganadi (naḥv esa gap tuzilishini)\\n- Arab so'zlari 3 harfli ildizdan yasaladi\\n- Har bir so'zning vazni (shakli) bor\\n- Fe'llarning tasrifi — sarf ning asosiy mavzusi" },
            {
                title: "🗣️ Misollar", content: "Misollar:", examples: [
                    { arabic: "كَتَبَ — يَكْتُبُ — كِتَابَةٌ", meaning: "Kataba — yaktubu — kitābatun — U yozdi — u yozyapti — yozish (bir ildizdan turli shakllar)" },
                    { arabic: "عَلِمَ — يَعْلَمُ — عِلْمٌ", meaning: "'Alima — ya'lamu — 'ilmun — U bildi — u bilyapti — ilm" },
                    { arabic: "فَعَلَ — فَاعِلٌ — مَفْعُولٌ", meaning: "Fa'ala — fā'ilun — maf'ūlun — Qildi — qiluvchi — qilingan (vazn namunasi)" },
                    { arabic: "دَرَسَ — مَدْرَسَةٌ — دِرَاسَةٌ", meaning: "Darasa — madrasatun — dirāsatun — U o'rgandi — maktab — o'rganish" }
                ]
            },
            {
                title: "📚 Lug'at", content: "Yangi so'zlar:", examples: [
                    { arabic: "صَرْفٌ", meaning: "ṣarfun — Morfologiya" }, { arabic: "تَصْرِيفٌ", meaning: "taṣrīfun — Tasrif (fe'l o'zgarishi)" },
                    { arabic: "وَزْنٌ", meaning: "waznun — Vazn (shakl)" }, { arabic: "مِيزَانٌ", meaning: "mīzānun — O'lchov" },
                    { arabic: "جَذْرٌ", meaning: "jadhrun — Ildiz" }, { arabic: "بِنَاءٌ", meaning: "binā'un — Qurilish" },
                    { arabic: "فَرْعٌ", meaning: "far'un — Tarmoq" }, { arabic: "أَصْلٌ", meaning: "aṣlun — Asl" }
                ]
            }
        ]
    }, tasks: [
        { id: "69-1", type: "multiple-choice", question: "Sarf nimani o'rganadi?", options: ["Sintaksisni", "Morfologiyani", "Ritorikani", "Mantiqni"], correctAnswer: "Morfologiyani" },
        { id: "69-2", type: "multiple-choice", question: "تَصْرِيفٌ nima?", options: ["Sintaksis", "Tasrif (fe'l o'zgarishi)", "Ritorika", "Mantiq"], correctAnswer: "Tasrif (fe'l o'zgarishi)" },
        { id: "69-3", type: "multiple-choice", question: "وَزْنٌ nima?", options: ["Ildiz", "Vazn (shakl)", "Tarmoq", "Asl"], correctAnswer: "Vazn (shakl)" },
        { id: "69-4", type: "multiple-choice", question: "Arab so'zlari necha harfli ildizdan yasaladi?", options: ["2 harfli", "3 harfli", "4 harfli", "5 harfli"], correctAnswer: "3 harfli" },
        { id: "69-5", type: "multiple-choice", question: "Tarjima qiling: كَتَبَ — يَكْتُبُ — كِتَابَةٌ", options: ["O'qidi — o'qiyapti — o'qish", "Yozdi — yozyapti — yozish", "Gapirdi — gapiryapti — gapirish", "Eshitdi — eshityapti — eshitish"], correctAnswer: "Yozdi — yozyapti — yozish" },
        { id: "69-6", type: "multiple-choice", question: "جَذْرٌ nima?", options: ["Vazn", "Ildiz", "Tarmoq", "Shakl"], correctAnswer: "Ildiz" },
        { id: "69-7", type: "multiple-choice", question: "Sarf va naḥv farqi nima?", options: ["Sarf so'z shaklini o'rganadi", "Ularning farqi yo'q", "Sarf gap tuzilishini o'rganadi", "Sarf faqat fe'llarni o'rganadi"], correctAnswer: "Sarf so'z shaklini o'rganadi" },
        { id: "69-8", type: "multiple-choice", question: "أَصْلٌ nima?", options: ["Tarmoq", "Asl", "Vazn", "Ildiz"], correctAnswer: "Asl" },
        { id: "69-9", type: "multiple-choice", question: "مِيزَانٌ nima?", options: ["Kalit", "O'lchov", "Supurgi", "Egov"], correctAnswer: "O'lchov" },
        { id: "69-10", type: "multiple-choice", question: "صَرْفٌ nima?", options: ["Sintaksis", "Morfologiya", "Ritorika", "Falsafa"], correctAnswer: "Morfologiya" }
    ]
};
