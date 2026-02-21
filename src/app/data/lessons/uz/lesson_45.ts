import { Lesson } from '../../types';

export const lesson45: Lesson = {
    id: 45,
    title: "45-dars: Kāna va uning singlilari (كَانَ وَأَخَوَاتُهَا) (الدَّرْسُ الْخَامِسُ وَالْأَرْبَعُونَ)",
    grammar: "Kāna va uning singlilari",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "كَانَ va uning singlilari — bu ismli gapning boshiga kelib, ega Marfu' holatida qoladi, xabar esa Mansub holatiga o'tadi. Ular asosan vaqt yoki holatni bildiradi."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- كَانَ dan keyin المُبْتَدَأ Marfu' holatida qoladi (اسم كان)\\n- الخَبَر Mansub holatiga o'tadi (خبر كان)\\n- Singlilari: أَصْبَحَ، أَمْسَى، ظَلَّ، بَاتَ، صَارَ، لَيْسَ"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "كَانَ مُحَمَّدٌ طَالِبًا", meaning: "Kāna Muhammadun tāliban — Muhammad talaba edi (كَانَ + ism (Marfu') + xabar (Mansub))" },
                    { arabic: "أَصْبَحَ الْجَوُّ بَارِدًا", meaning: "Aṣbaḥa al-jawwu bāridan — Havo sovuq bo'ldi (أَصْبَحَ — كَانَ ning singlisi)" },
                    { arabic: "لَيْسَ الْأَمْرُ سَهْلًا", meaning: "Laysa al-amru sahlan — Ish oson emas (لَيْسَ — inkor uchun)" },
                    { arabic: "صَارَ الطِّفْلُ رَجُلًا", meaning: "Ṣāra al-ṭiflu rajulan — Bola erkakka aylandi (صَارَ — o'zgarish)" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "كَانَ", meaning: "kāna — ...edi (o'tgan zamon)" },
                    { arabic: "أَصْبَحَ", meaning: "aṣbaḥa — ...bo'ldi (ertalab)" },
                    { arabic: "أَمْسَى", meaning: "amsā — ...bo'ldi (kechqurun)" },
                    { arabic: "ظَلَّ", meaning: "ẓalla — ...bo'lib qoldi (kunduz)" },
                    { arabic: "بَاتَ", meaning: "bāta — ...bo'lib qoldi (kechasi)" },
                    { arabic: "صَارَ", meaning: "ṣāra — ...ga aylandi" },
                    { arabic: "لَيْسَ", meaning: "laysa — ...emas" },
                    { arabic: "مَا زَالَ", meaning: "mā zāla — Hali ham..." }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "45-1",
            type: "multiple-choice",
            question: "كَانَ dan keyin ism qaysi holatda turadi?",
            options: ["Mansub", "Majrur", "Marfu'", "Majzum"],
            correctAnswer: "Marfu'"
        },
        {
            id: "45-2",
            type: "multiple-choice",
            question: "كَانَ dan keyin xabar qaysi holatda turadi?",
            options: ["Marfu'", "Majrur", "Mansub", "Majzum"],
            correctAnswer: "Mansub"
        },
        {
            id: "45-3",
            type: "multiple-choice",
            question: "Qaysi so'z inkor ma'nosini bildiradi?",
            options: ["كَانَ", "أَصْبَحَ", "لَيْسَ", "صَارَ"],
            correctAnswer: "لَيْسَ"
        },
        {
            id: "45-4",
            type: "multiple-choice",
            question: "صَارَ qanday ma'noni bildiradi?",
            options: ["...edi", "...bo'ldi", "...ga aylandi", "...emas"],
            correctAnswer: "...ga aylandi"
        },
        {
            id: "45-5",
            type: "multiple-choice",
            question: "Tarjima qiling: كَانَ مُحَمَّدٌ طَالِبًا",
            options: ["Muhammad talaba", "Muhammad talaba edi", "Muhammad talaba bo'ladi", "Muhammad talaba emas"],
            correctAnswer: "Muhammad talaba edi"
        },
        {
            id: "45-6",
            type: "multiple-choice",
            question: "Tarjima qiling: لَيْسَ الْأَمْرُ سَهْلًا",
            options: ["Ish oson", "Ish oson emas", "Ish qiyin bo'ldi", "Ish osonlashdi"],
            correctAnswer: "Ish oson emas"
        },
        {
            id: "45-7",
            type: "multiple-choice",
            question: "Tarjimasi nima: صَارَ الطِّفْلُ رَجُلًا?",
            options: ["Bola erkak edi", "Bola erkakka aylandi", "Bola erkak emas", "Bola erkak bo'ladi"],
            correctAnswer: "Bola erkakka aylandi"
        },
        {
            id: "45-8",
            type: "multiple-choice",
            question: "كَانَ nima degani?",
            options: ["...bo'ldi", "...edi", "...emas", "...bo'ladi"],
            correctAnswer: "...edi"
        },
        {
            id: "45-9",
            type: "multiple-choice",
            question: "أَصْبَحَ nima degani?",
            options: ["...edi", "...bo'ldi (ertalab)", "...emas", "...bo'ladi"],
            correctAnswer: "...bo'ldi (ertalab)"
        },
        {
            id: "45-10",
            type: "multiple-choice",
            question: "مَا زَالَ nima degani?",
            options: ["Endi emas", "Hali ham...", "Hammasi", "Hech narsa"],
            correctAnswer: "Hali ham..."
        }
    ]
};
