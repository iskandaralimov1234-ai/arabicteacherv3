import { Lesson } from '../../types';
export const lesson60: Lesson = {
    id: 60, title: "60-dars: Hamzali fe'llar (الدَّرْسُ السِّتُّونَ - الْمَهْمُوزُ)", grammar: "Hamzali fe'llar", theory: {
        sections: [
            { title: "📖 Tavsif", content: "Hamzali fe'llar (الْمَهْمُوزُ) — ildizida hamza (ء) mavjud bo'lgan fe'llardir. Hamza ildizning birinchi, ikkinchi yoki uchinchi harfi bo'lishi mumkin." },
            { title: "📝 Asosiy qoidalar", content: "- Hamza birinchi harf: أَكَلَ (yedi), أَخَذَ (oldi)\\n- Hamza ikkinchi harf: سَأَلَ (so'radi)\\n- Hamza uchinchi harf: قَرَأَ (o'qidi)\\n- Hamza ba'zi hollarda alif, vav yoki yā ga aylanadi" },
            {
                title: "🗣️ Misollar", content: "Misollar:", examples: [
                    { arabic: "أَكَلَ الطَّعَامَ", meaning: "Akala al-ṭa'āma — U taomni yedi (أَكَلَ — hamza birinchi harf)" },
                    { arabic: "سَأَلَ الْمُعَلِّمَ", meaning: "Sa'ala al-mu'allima — U o'qituvchidan so'radi (سَأَلَ — hamza ikkinchi harf)" },
                    { arabic: "قَرَأَ الْكِتَابَ", meaning: "Qara'a al-kitāba — U kitobni o'qidi (قَرَأَ — hamza uchinchi harf)" },
                    { arabic: "أَمَرَ بِالْمَعْرُوفِ", meaning: "Amara bi-l-ma'rūfi — U yaxshilikka buyurdi" }
                ]
            },
            {
                title: "📚 Lug'at", content: "Yangi so'zlar:", examples: [
                    { arabic: "مَهْمُوزٌ", meaning: "mahmūzun — Hamzali fe'l" }, { arabic: "هَمْزَةٌ", meaning: "hamzatun — Hamza" },
                    { arabic: "أَكَلَ", meaning: "akala — U yedi" }, { arabic: "أَخَذَ", meaning: "akhadha — U oldi" },
                    { arabic: "سَأَلَ", meaning: "sa'ala — U so'radi" }, { arabic: "قَرَأَ", meaning: "qara'a — U o'qidi" },
                    { arabic: "أَمَرَ", meaning: "amara — U buyurdi" }, { arabic: "طَعَامٌ", meaning: "ṭa'āmun — Taom" }
                ]
            }
        ]
    }, tasks: [
        { id: "60-1", type: "multiple-choice", question: "Hamzali fe'lda nima bor?", options: ["Tashdid", "Hamza (ء)", "Kuchsiz harf", "Ikki xil harf"], correctAnswer: "Hamza (ء)" },
        { id: "60-2", type: "multiple-choice", question: "أَكَلَ da hamza nechinchi harf?", options: ["Birinchi", "Ikkinchi", "Uchinchi", "To'rtinchi"], correctAnswer: "Birinchi" },
        { id: "60-3", type: "multiple-choice", question: "سَأَلَ da hamza nechinchi harf?", options: ["Birinchi", "Ikkinchi", "Uchinchi", "To'rtinchi"], correctAnswer: "Ikkinchi" },
        { id: "60-4", type: "multiple-choice", question: "قَرَأَ da hamza nechinchi harf?", options: ["Birinchi", "Ikkinchi", "Uchinchi", "To'rtinchi"], correctAnswer: "Uchinchi" },
        { id: "60-5", type: "multiple-choice", question: "Tarjima qiling: أَكَلَ الطَّعَامَ", options: ["U taom pishirdi", "U taomni yedi", "U taom sotib oldi", "U taomni ko'rdi"], correctAnswer: "U taomni yedi" },
        { id: "60-6", type: "multiple-choice", question: "Tarjima qiling: قَرَأَ الْكِتَابَ", options: ["U kitob yozdi", "U kitobni o'qidi", "U kitob ochdi", "U kitob sotdi"], correctAnswer: "U kitobni o'qidi" },
        { id: "60-7", type: "multiple-choice", question: "مَهْمُوزٌ nima degani?", options: ["Kuchsiz fe'l", "Hamzali fe'l", "Mushaddad fe'l", "O'tuvchi fe'l"], correctAnswer: "Hamzali fe'l" },
        { id: "60-8", type: "multiple-choice", question: "هَمْزَةٌ nima degani?", options: ["Harf", "Hamza", "Harakat", "Nuqta"], correctAnswer: "Hamza" },
        { id: "60-9", type: "multiple-choice", question: "أَمَرَ nima degani?", options: ["U so'radi", "U buyurdi", "U javob berdi", "U qochdi"], correctAnswer: "U buyurdi" },
        { id: "60-10", type: "multiple-choice", question: "طَعَامٌ nima degani?", options: ["Suv", "Taom", "Meva", "Non"], correctAnswer: "Taom" }
    ]
};
