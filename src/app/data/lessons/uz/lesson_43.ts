import { Lesson } from '../../types';

export const lesson43: Lesson = {
    id: 43,
    title: "43-dars: Beshta ism (Al-Asmā'u al-khamsa) (الدَّرْسُ الثَّالِثُ وَالْأَرْبَعُونَ - الْأَسْمَاءُ الْخَمْسَةُ)",
    grammar: "Beshta ism (Al-Asmā'u al-khamsa)",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "Beshta ism (الْأَسْمَاءُ الْخَمْسَةُ) — bu maxsus i'rob qoidalariga ega bo'lgan beshta arabcha so'z. Ular: أَبٌ (ota), أَخٌ (aka), حَمٌ (qaynota), فَمٌ (og'iz), ذُو (ega). Ular izofaga qo'shilganda harflar bilan i'rob qilinadi."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- Marfu' holatida: oxirida و (vav) — أَبُوكَ\\n- Mansub holatida: oxirida ا (alif) — أَبَاكَ\\n- Majrur holatida: oxirida ي (yā) — أَبِيكَ\\n- Faqat izofaga qo'shilganda shu qoida ishlaydi"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "جَاءَ أَبُوكَ", meaning: "Jā'a abūka — Otang keldi (أَبُو — Marfu' holatida و bilan)" },
                    { arabic: "رَأَيْتُ أَبَاكَ", meaning: "Ra'aytu abāka — Men otangni ko'rdim (أَبَا — Mansub holatida ا bilan)" },
                    { arabic: "سَلَّمْتُ عَلَى أَبِيكَ", meaning: "Sallamtu 'alā abīka — Men otangga salom berdim (أَبِي — Majrur holatida ي bilan)" },
                    { arabic: "ذُو مَالٍ", meaning: "Dhū mālin — Mol-mulk egasi (ذُو — Marfu' holatida و bilan)" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "الْأَسْمَاءُ الْخَمْسَةُ", meaning: "al-asmā'u al-khamsatu — Beshta ism" },
                    { arabic: "أَبٌ", meaning: "abun — Ota" },
                    { arabic: "أَخٌ", meaning: "akhun — Aka" },
                    { arabic: "حَمٌ", meaning: "ḥamun — Qaynota" },
                    { arabic: "فَمٌ", meaning: "famun — Og'iz" },
                    { arabic: "ذُو", meaning: "dhū — ...ega" },
                    { arabic: "مَالٌ", meaning: "mālun — Mol-mulk" },
                    { arabic: "عِلْمٌ", meaning: "'ilmun — Ilm" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "43-1",
            type: "multiple-choice",
            question: "Beshta ism Marfu' holatida oxirida qanday harf oladi?",
            options: ["ا (alif)", "و (vav)", "ي (yā)", "ن (nun)"],
            correctAnswer: "و (vav)"
        },
        {
            id: "43-2",
            type: "multiple-choice",
            question: "Beshta ism Mansub holatida oxirida qanday harf oladi?",
            options: ["ا (alif)", "و (vav)", "ي (yā)", "ن (nun)"],
            correctAnswer: "ا (alif)"
        },
        {
            id: "43-3",
            type: "multiple-choice",
            question: "Beshta ism Majrur holatida oxirida qanday harf oladi?",
            options: ["ا (alif)", "و (vav)", "ي (yā)", "ن (nun)"],
            correctAnswer: "ي (yā)"
        },
        {
            id: "43-4",
            type: "multiple-choice",
            question: "Qaysi so'z beshta ismga kiradi?",
            options: ["كِتَابٌ", "أَبٌ", "بَيْتٌ", "مَدْرَسَةٌ"],
            correctAnswer: "أَبٌ"
        },
        {
            id: "43-5",
            type: "multiple-choice",
            question: "Tarjima qiling: جَاءَ أَبُوكَ",
            options: ["Otang ketdi", "Otang keldi", "Akang keldi", "Akang ketdi"],
            correctAnswer: "Otang keldi"
        },
        {
            id: "43-6",
            type: "multiple-choice",
            question: "Tarjima qiling: رَأَيْتُ أَبَاكَ",
            options: ["Men otangni ko'rdim", "Men otang bilan gaplashdim", "Men akangni ko'rdim", "Men otangga salom berdim"],
            correctAnswer: "Men otangni ko'rdim"
        },
        {
            id: "43-7",
            type: "multiple-choice",
            question: "Tarjimasi nima: ذُو مَالٍ?",
            options: ["Mol-mulk", "Mol-mulk egasi", "Mol-mulksiz", "Mol-mulk bilan"],
            correctAnswer: "Mol-mulk egasi"
        },
        {
            id: "43-8",
            type: "multiple-choice",
            question: "أَخٌ nima degani?",
            options: ["Ota", "Aka", "Qaynota", "Og'iz"],
            correctAnswer: "Aka"
        },
        {
            id: "43-9",
            type: "multiple-choice",
            question: "ذُو nima degani?",
            options: ["Bu", "U", "...ega", "...siz"],
            correctAnswer: "...ega"
        },
        {
            id: "43-10",
            type: "multiple-choice",
            question: "Bu qoida qachon ishlaydi?",
            options: ["Doimo", "Faqat izofaga qo'shilganda", "Faqat birlik sonda", "Faqat ko'plikda"],
            correctAnswer: "Faqat izofaga qo'shilganda"
        }
    ]
};
