import { Lesson } from '../../types';

export const lesson42: Lesson = {
    id: 42,
    title: "42-dars: «Kam» so'zi (الدَّرْسُ الثَّانِي وَالْأَرْبَعُونَ - أَدَاةُ كَمْ)",
    grammar: "«Kam» so'zi",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "كَمْ (kam) so'zi ikki ma'noda ishlatiladi: savol (كَمْ الِاسْتِفْهَامِيَّةُ) va ko'plikni bildirish (كَمْ الْخَبَرِيَّةُ). Har ikki holatda tamyiz bilan ishlatiladi."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- كَمْ الِاسْتِفْهَامِيَّةُ — savol ma'nosida (Nechta?)\\n- كَمْ الْخَبَرِيَّةُ — ko'plik ma'nosida (Nechta... bor!)\\n- Savol كَمْ dan keyin tamyiz Mansub holatida\\n- Xabar كَمْ dan keyin tamyiz Majrur holatida"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "كَمْ كِتَابًا قَرَأْتَ؟", meaning: "Kam kitāban qara'ta? — Nechta kitob o'qiding? (Savol كَمْ — tamyiz Mansub)" },
                    { arabic: "كَمْ طَالِبٍ فِي الْفَصْلِ!", meaning: "Kam tālibin fī al-faṣli! — Sinfda qancha talaba bor! (Xabar كَمْ — tamyiz Majrur)" },
                    { arabic: "كَمْ يَوْمًا سَافَرْتَ؟", meaning: "Kam yawman sāfarta? — Necha kun sayohat qilding?" },
                    { arabic: "كَمْ مَرَّةٍ زُرْتُ هَذَا الْمَكَانَ!", meaning: "Kam marratin zurtu hādhā al-makāna! — Necha marta bu joyni ziyorat qildim!" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "كَمْ", meaning: "kam — Nechta?/Qancha?" },
                    { arabic: "كَمْ الِاسْتِفْهَامِيَّةُ", meaning: "kam al-istifhāmiyyatu — Savol كَمْ" },
                    { arabic: "كَمْ الْخَبَرِيَّةُ", meaning: "kam al-khabariyyatu — Xabar كَمْ" },
                    { arabic: "مَرَّةٌ", meaning: "marratun — Marta" },
                    { arabic: "يَوْمٌ", meaning: "yawmun — Kun" },
                    { arabic: "فَصْلٌ", meaning: "faṣlun — Sinf/Fasil" },
                    { arabic: "سَافَرَ", meaning: "sāfara — U sayohat qildi" },
                    { arabic: "زَارَ", meaning: "zāra — U ziyorat qildi" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "42-1",
            type: "multiple-choice",
            question: "كَمْ nechta ma'noda ishlatiladi?",
            options: ["Bitta", "Ikkita", "Uchta", "To'rtta"],
            correctAnswer: "Ikkita"
        },
        {
            id: "42-2",
            type: "multiple-choice",
            question: "Savol كَمْ dan keyin tamyiz qaysi holatda turadi?",
            options: ["Marfu' (مَرْفُوعٌ)", "Majrur (مَجْرُورٌ)", "Mansub (مَنْصُوبٌ)", "Majzum (مَجْزُومٌ)"],
            correctAnswer: "Mansub (مَنْصُوبٌ)"
        },
        {
            id: "42-3",
            type: "multiple-choice",
            question: "Xabar كَمْ dan keyin tamyiz qaysi holatda turadi?",
            options: ["Marfu' (مَرْفُوعٌ)", "Majrur (مَجْرُورٌ)", "Mansub (مَنْصُوبٌ)", "Majzum (مَجْزُومٌ)"],
            correctAnswer: "Majrur (مَجْرُورٌ)"
        },
        {
            id: "42-4",
            type: "multiple-choice",
            question: "كَمْ الِاسْتِفْهَامِيَّةُ qanday ma'noni bildiradi?",
            options: ["Ko'plik", "Savol (Nechta?)", "Inkor", "Buyruq"],
            correctAnswer: "Savol (Nechta?)"
        },
        {
            id: "42-5",
            type: "multiple-choice",
            question: "Tarjima qiling: كَمْ كِتَابًا قَرَأْتَ؟",
            options: ["Qaysi kitobni o'qiding?", "Nechta kitob o'qiding?", "Kitob qayerda?", "Kitob qachon?"],
            correctAnswer: "Nechta kitob o'qiding?"
        },
        {
            id: "42-6",
            type: "multiple-choice",
            question: "Tarjima qiling: كَمْ طَالِبٍ فِي الْفَصْلِ!",
            options: ["Talaba sinfda", "Sinfda qancha talaba bor!", "Talabalar qayerda?", "Talaba nechta?"],
            correctAnswer: "Sinfda qancha talaba bor!"
        },
        {
            id: "42-7",
            type: "multiple-choice",
            question: "Tarjimasi nima: كَمْ يَوْمًا سَافَرْتَ؟",
            options: ["Qayerga sayohat qilding?", "Necha kun sayohat qilding?", "Kim bilan sayohat qilding?", "Qachon sayohat qilding?"],
            correctAnswer: "Necha kun sayohat qilding?"
        },
        {
            id: "42-8",
            type: "multiple-choice",
            question: "مَرَّةٌ nima degani?",
            options: ["Kun", "Marta", "Soat", "Oy"],
            correctAnswer: "Marta"
        },
        {
            id: "42-9",
            type: "multiple-choice",
            question: "سَافَرَ nima degani?",
            options: ["U keldi", "U sayohat qildi", "U ketdi", "U o'tirdi"],
            correctAnswer: "U sayohat qildi"
        },
        {
            id: "42-10",
            type: "multiple-choice",
            question: "فَصْلٌ nima degani?",
            options: ["Kitob", "Sinf/Fasil", "Dars", "Maktab"],
            correctAnswer: "Sinf/Fasil"
        }
    ]
};
