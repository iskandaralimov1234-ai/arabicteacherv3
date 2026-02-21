import { Lesson } from '../../types';

export const lesson39: Lesson = {
    id: 39,
    title: "39-dars: Istisno (الدَّرْسُ التَّاسِعُ وَالثَّلَاثُونَ - الِاسْتِثْنَاءُ)",
    grammar: "Istisno",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "Istisno (الِاسْتِثْنَاءُ) umumiy guruhdan biror elementni ajratib ko'rsatishdir. إِلَّا (illo) yuklamasi istisno uchun ishlatiladi. Istisno qilingan element kontekstga qarab turli holatlarda turishi mumkin."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- إِلَّا — istisno yuklamasi\\n- Istisno qilingan element turli holatlarda turishi mumkin\\n- Ijobiy gapdan istisno — istisno qilingan Mansub holatda\\n- Inkor gapdan istisno — istisno qilingan gap qurilishiga muvofiq"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "جَاءَ الطُّلَّابُ إِلَّا مُحَمَّدًا", meaning: "Jā'a al-ṭullābu illā Muhammadan — Barcha talabalar keldi, Muhammaddan tashqari (Ijobiy gapdan istisno — Mansub)" },
                    { arabic: "مَا جَاءَ أَحَدٌ إِلَّا مُحَمَّدٌ", meaning: "Mā jā'a aḥadun illā Muhammadun — Hech kim kelmadi, Muhammaddan tashqari (Inkor gapdan istisno — Marfu')" },
                    { arabic: "كُلُّ الطُّلَّابِ حَاضِرُونَ إِلَّا عَلِيًّا", meaning: "Kullu al-ṭullābi ḥāḍirūna illā 'Aliyyan — Barcha talabalar hozir, Alidan tashqari (كل bilan istisno)" },
                    { arabic: "لَمْ يَذْهَبْ أَحَدٌ إِلَّا زَيْدًا", meaning: "Lam yadhhab aḥadun illā Zaydan — Hech kim bormadi, Zayddan tashqari (لَمْ dan keyin istisno)" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "اسْتِثْنَاءٌ", meaning: "istithnā'un — Istisno" },
                    { arabic: "أَدَاةُ اسْتِثْنَاءٍ", meaning: "adātu istithnā'in — Istisno yuklamasi" },
                    { arabic: "إِلَّا", meaning: "illā — ...dan tashqari/Agar bo'lmasa" },
                    { arabic: "مُسْتَثْنًى", meaning: "mustathnan — Istisno qilingan element" },
                    { arabic: "مُسْتَثْنَى مِنْهُ", meaning: "mustathnā minhu — Umumiy guruh" },
                    { arabic: "غَيْرُ", meaning: "ghayru — ...dan tashqari/Boshqa" },
                    { arabic: "سِوَى", meaning: "siwā — ...dan tashqari" },
                    { arabic: "خَلَا", meaning: "khalā — ...dan tashqari/...siz" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "39-1",
            type: "multiple-choice",
            question: "Istisno uchun qaysi yuklama ishlatiladi?",
            options: ["مَا", "إِلَّا", "هَلْ", "لَا"],
            correctAnswer: "إِلَّا"
        },
        {
            id: "39-2",
            type: "multiple-choice",
            question: "Ijobiy gapdan keyin istisno qilingan element qaysi holatda turadi?",
            options: ["Marfu' (مَرْفُوعٌ)", "Majrur (مَجْرُورٌ)", "Mansub (مَنْصُوبٌ)", "Majzum (مَجْزُومٌ)"],
            correctAnswer: "Mansub (مَنْصُوبٌ)"
        },
        {
            id: "39-3",
            type: "multiple-choice",
            question: "Inkor gapdan keyin istisno qilingan element qanday o'zgaradi?",
            options: ["Doimo Mansub", "Gap qurilishiga muvofiq", "Doimo Majrur", "O'zgarmaydi"],
            correctAnswer: "Gap qurilishiga muvofiq"
        },
        {
            id: "39-4",
            type: "multiple-choice",
            question: "Istisno uchun yana qaysi so'zlar ishlatilishi mumkin?",
            options: ["Faqat إِلَّا", "غَيْرُ، سِوَى، خَلَا", "Faqat غَيْرُ", "Faqat سِوَى"],
            correctAnswer: "غَيْرُ، سِوَى، خَلَا"
        },
        {
            id: "39-5",
            type: "multiple-choice",
            question: "Tarjima qiling: جَاءَ الطُّلَّابُ إِلَّا مُحَمَّدًا",
            options: ["Talabalar va Muhammad keldi", "Barcha talabalar keldi, Muhammaddan tashqari", "Faqat Muhammad keldi", "Muhammad kelmadi"],
            correctAnswer: "Barcha talabalar keldi, Muhammaddan tashqari"
        },
        {
            id: "39-6",
            type: "multiple-choice",
            question: "Tarjima qiling: مَا جَاءَ أَحَدٌ إِلَّا مُحَمَّدٌ",
            options: ["Hech kim kelmadi", "Hammasi keldi, Muhammaddan tashqari", "Hech kim kelmadi, Muhammaddan tashqari", "Faqat Muhammad kelmadi"],
            correctAnswer: "Hech kim kelmadi, Muhammaddan tashqari"
        },
        {
            id: "39-7",
            type: "multiple-choice",
            question: "Tarjimasi nima: كُلُّ الطُّلَّابِ حَاضِرُونَ إِلَّا عَلِيًّا?",
            options: ["Barcha talabalar hozir", "Barcha talabalar hozir, Alidan tashqari", "Faqat Ali hozir", "Hech kim hozir emas"],
            correctAnswer: "Barcha talabalar hozir, Alidan tashqari"
        },
        {
            id: "39-8",
            type: "multiple-choice",
            question: "اسْتِثْنَاءٌ nima degani?",
            options: ["Qo'shish", "Istisno", "Qo'shim", "O'chirish"],
            correctAnswer: "Istisno"
        },
        {
            id: "39-9",
            type: "multiple-choice",
            question: "غَيْرُ nima degani?",
            options: ["Faqat", "...dan tashqari/Boshqa", "Va", "Yoki"],
            correctAnswer: "...dan tashqari/Boshqa"
        },
        {
            id: "39-10",
            type: "multiple-choice",
            question: "مُسْتَثْنًى nima degani?",
            options: ["Umumiy guruh", "Istisno qilingan element", "Istisno yuklamasi", "Ko'makchi so'z"],
            correctAnswer: "Istisno qilingan element"
        }
    ]
};
