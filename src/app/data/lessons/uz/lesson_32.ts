import { Lesson } from '../../types';

export const lesson32: Lesson = {
    id: 32,
    title: "32-dars: Qiyoslash darajalari (At-tafḍīl) (الدَّرْسُ الثَّانِي وَالثَّلَاثُونَ - التَّفْضِيلُ)",
    grammar: "Qiyoslash darajalari (At-tafḍīl)",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "Ustunlik darajasi (التَّفْضِيلُ) أَفْعَلُ shabloni yordamida hosil qilinadi. Ikki narsani solishtirish uchun مِنْ ko'makchi so'zi ishlatiladi. Eng yuqori darajani ifodalash uchun ta'rif artikli ishlatiladi."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- Qiyoslash shabloni: أَفْعَلُ\\n- Qiyoslash: أَفْعَلُ + مِنْ\\n- Ustunlik: الْأَفْعَلُ\\n- مِنْ dan keyin so'z Majrur holatida turadi"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "مُحَمَّدٌ أَكْبَرُ مِنْ عَلِيٍّ", meaning: "Muhammadun akbaru min 'Aliyyin — Muhammad Alidan kattaroq (أَفْعَلُ + مِنْ qiyoslash uchun)" },
                    { arabic: "هَذَا الْكِتَابُ أَجْمَلُ مِنْ ذَلِكَ", meaning: "Hādhā al-kitābu ajmalu min dhālika — Bu kitob anavisidan chiroyliroq (Ikki kitobni solishtirish)" },
                    { arabic: "هُوَ الْأَكْبَرُ فِي الْعَائِلَةِ", meaning: "Huwa al-akbaru fī al-'ā'ilati — U oiladagi eng kattasi (الْأَفْعَلُ ustunlik uchun)" },
                    { arabic: "هِيَ أَذْكَى مِنْ أُخْتِهَا", meaning: "Hiya adhkā min ukhtihā — U singlisidan aqlliroq (أَذْكَى - qiyoslash darajasi)" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "تَفْضِيلٌ", meaning: "tafḍīlun — Ustunlik darajasi" },
                    { arabic: "أَفْعَلُ", meaning: "af'alu — Qiyoslash shabloni" },
                    { arabic: "أَكْبَرُ", meaning: "akbaru — Kattaroq/Kattaliroq" },
                    { arabic: "أَصْغَرُ", meaning: "aṣgharu — Kichikroq/Yoshroq" },
                    { arabic: "أَجْمَلُ", meaning: "ajmalu — Chiroyliroq" },
                    { arabic: "أَذْكَى", meaning: "adhkā — Aqlliroq" },
                    { arabic: "أَطْوَلُ", meaning: "aṭwalu — Uzunroq/Balandroq" },
                    { arabic: "أَقْصَرُ", meaning: "aqṣaru — Qisqaroq/Pastroq" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "32-1",
            type: "multiple-choice",
            question: "Qiyoslash uchun qaysi shablon ishlatiladi?",
            options: ["فَاعِلٌ", "أَفْعَلُ", "مَفْعُولٌ", "مِفْعَلٌ"],
            correctAnswer: "أَفْعَلُ"
        },

        {
            id: "32-2",
            type: "multiple-choice",
            question: "Qiyoslash uchun qaysi ko'makchi so'z ishlatiladi?",
            options: ["مِنْ", "إِلَى", "فِي", "عَلَى"],
            correctAnswer: "مِنْ"
        },

        {
            id: "32-3",
            type: "multiple-choice",
            question: "Ustunlik qanday ifodalanadi?",
            options: ["أَفْعَلُ + مِنْ", "الْأَفْعَلُ", "أَفْعَلُ فِي", "أَفْعَلُ عَلَى"],
            correctAnswer: "الْأَفْعَلُ"
        },

        {
            id: "32-4",
            type: "multiple-choice",
            question: "Qiyoslashda مِنْ dan keyin so'z qaysi holatda turadi?",
            options: ["Marfu' (مَرْفُوعٌ)", "Majrur (مَجْرُورٌ)", "Mansub (مَنْصُوبٌ)", "Majzum (مَجْزُومٌ)"],
            correctAnswer: "Majrur (مَجْرُورٌ)"
        },

        {
            id: "32-5",
            type: "multiple-choice",
            question: "Tarjima qiling: مُحَمَّدٌ أَكْبَرُ مِنْ عَلِيٍّ",
            options: ["Muhammad va Ali kattalar", "Muhammad Alidan kattaroq", "Muhammad eng kattasi", "Muhammad va Ali akalar"],
            correctAnswer: "Muhammad Alidan kattaroq"
        },

        {
            id: "32-6",
            type: "multiple-choice",
            question: "Tarjima qiling: هُوَ الْأَكْبَرُ فِي الْعَائِلَةِ",
            options: ["U oilada kattaroq", "U oiladagi eng kattasi", "U katta oilada", "U katta oiladan"],
            correctAnswer: "U oiladagi eng kattasi"
        },

        {
            id: "32-7",
            type: "multiple-choice",
            question: "Tarjimasi nima: هِيَ أَذْكَى مِنْ أُخْتِهَا?",
            options: ["U aqlli singil", "U singlisidan aqlliroq", "U eng aqlli singil", "U va singlisi aqlli"],
            correctAnswer: "U singlisidan aqlliroq"
        },

        {
            id: "32-8",
            type: "multiple-choice",
            question: "تَفْضِيلٌ nima degani?",
            options: ["Qiyoslash", "Ustunlik darajasi", "Sifat", "Ravish"],
            correctAnswer: "Ustunlik darajasi"
        },

        {
            id: "32-9",
            type: "multiple-choice",
            question: "Qaysi so'z 'kattaroq/kattaliroq' ma'nosini bildiradi?",
            options: ["أَصْغَرُ", "أَكْبَرُ", "كَبِيرٌ", "صَغِيرٌ"],
            correctAnswer: "أَكْبَرُ"
        },

        {
            id: "32-10",
            type: "multiple-choice",
            question: "أَجْمَلُ nima degani?",
            options: ["Chiroyli", "Chiroyliroq", "Eng chiroyli", "Chiroyliemas"],
            correctAnswer: "Chiroyliroq"
        }
    ]
};
