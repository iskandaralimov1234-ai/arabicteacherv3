import { Lesson } from '../../types';

export const lesson37: Lesson = {
    id: 37,
    title: "37-dars: Nido (Murojaat) (الدَّرْسُ السَّابِعُ وَالثَّلَاثُونَ - الْمُنَادَى)",
    grammar: "Nido (Murojaat)",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "Nido (الْمُنَادَى) biror kishiga murojaat qilish uchun ishlatiladi. U aniqlik va so'z turiga qarab bir nechta shaklga ega."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- Nido murojaat qilish uchun ishlatiladi\\n- يا yuklamasi nido oldidan keladi\\n- Ba'zi shakllar qo'shimcha alif oladi\\n- Aniq nido alif olmaydi"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "يَا مُحَمَّدُ", meaning: "Yā Muhammadu — Ey Muhammad! (Aniq ismga murojaat)" },
                    { arabic: "يَا طَالِبُ", meaning: "Yā tālibu — Ey talaba! (Noaniq so'zga murojaat)" },
                    { arabic: "يَا أَيُّهَا الْمُؤْمِنُونَ", meaning: "Yā ayyuhā al-mu'minūna — Ey mo'minlar! (Aniq ko'plikka murojaat)" },
                    { arabic: "يَا أَيَّتُهَا الْمَرْأَةُ", meaning: "Yā ayyatuha al-mar'atu — Ey ayol! (Aniq muannas so'zga murojaat)" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "مُنَادًى", meaning: "munādan — Nido (murojaat)" },
                    { arabic: "أَدَاةُ نِدَاءٍ", meaning: "adātu nidā'in — Nido yuklamasi" },
                    { arabic: "يَا", meaning: "yā — Ey! (nido yuklamasi)" },
                    { arabic: "أَيُّهَا", meaning: "ayyuhā — Ey sizlar (muzakkar)" },
                    { arabic: "أَيَّتُهَا", meaning: "ayyatuhā — Ey sizlar (muannas)" },
                    { arabic: "نِدَاءٌ عَامٌّ", meaning: "nidā'un 'āmmun — Umumiy nido" },
                    { arabic: "نِدَاءٌ خَاصٌّ", meaning: "nidā'un khāṣṣun — Xususiy nido" },
                    { arabic: "حَذْفُ النُّونِ", meaning: "ḥadhfu al-nūni — Nunning tushishi" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "37-1",
            type: "multiple-choice",
            question: "Nido uchun qaysi yuklama ishlatiladi?",
            options: ["هَلْ", "يَا", "مَا", "لَا"],
            correctAnswer: "يَا"
        },
        {
            id: "37-2",
            type: "multiple-choice",
            question: "Aniq ko'plik muzakkar so'zga murojaat qilish uchun qaysi shakl ishlatiladi?",
            options: ["يَا فُلَانُ", "يَا أَيُّهَا...", "يَا أَيَّتُهَا...", "يَا...ُ"],
            correctAnswer: "يَا أَيُّهَا..."
        },
        {
            id: "37-3",
            type: "multiple-choice",
            question: "Aniq muannas so'zga murojaat qilish uchun qaysi shakl ishlatiladi?",
            options: ["يَا فُلَانُ", "يَا أَيُّهَا...", "يَا أَيَّتُهَا...", "يَا...ُ"],
            correctAnswer: "يَا أَيَّتُهَا..."
        },
        {
            id: "37-4",
            type: "multiple-choice",
            question: "Ba'zi nido shakllariga nima qo'shiladi?",
            options: ["Damma", "Qo'shimcha alif", "Oxirgi harf tushadi", "Tanvin qo'shiladi"],
            correctAnswer: "Qo'shimcha alif"
        },
        {
            id: "37-5",
            type: "multiple-choice",
            question: "Tarjima qiling: يَا مُحَمَّدُ",
            options: ["Bu Muhammad", "Ey Muhammad!", "Muhammad qayerda?", "Muhammad shu yerda"],
            correctAnswer: "Ey Muhammad!"
        },
        {
            id: "37-6",
            type: "multiple-choice",
            question: "Tarjima qiling: يَا أَيُّهَا الْمُؤْمِنُونَ",
            options: ["Ey mo'min", "Ey mo'minlar!", "Mo'minlar qayerda?", "Mo'minlar shu yerda"],
            correctAnswer: "Ey mo'minlar!"
        },
        {
            id: "37-7",
            type: "multiple-choice",
            question: "Tarjimasi nima: يَا طَالِبُ?",
            options: ["Ey talaba!", "Bu talaba", "Talaba qayerda?", "Talaba shu yerda"],
            correctAnswer: "Ey talaba!"
        },
        {
            id: "37-8",
            type: "multiple-choice",
            question: "مُنَادًى nima degani?",
            options: ["Savol", "Nido (murojaat)", "Javob", "Buyruq"],
            correctAnswer: "Nido (murojaat)"
        },
        {
            id: "37-9",
            type: "multiple-choice",
            question: "أَيُّهَا nima degani?",
            options: ["Ey sizlar (muzakkar)", "Ey sizlar (muannas)", "Bu", "U"],
            correctAnswer: "Ey sizlar (muzakkar)"
        },
        {
            id: "37-10",
            type: "multiple-choice",
            question: "أَيَّتُهَا nima degani?",
            options: ["Ey sizlar (muzakkar)", "Ey sizlar (muannas)", "Bu", "U"],
            correctAnswer: "Ey sizlar (muannas)"
        }
    ]
};
