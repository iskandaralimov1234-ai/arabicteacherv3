import { Lesson } from '../../types';

export const lesson36: Lesson = {
    id: 36,
    title: "36-dars: Illati fe'llar (Al-mu'talla) (الدَّرْسُ السَّادِسُ وَالثَّلَاثُونَ - الْأَفْعَالُ الْمُعْتَلَّةُ)",
    grammar: "Illati fe'llar (Al-mu'talla)",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "Illati fe'llar (الْمُعْتَلَّةُ) ildizida kuchsiz harflar (و، ي، ا) mavjud bo'lgan fe'llardir. Ular uch turga bo'linadi: miṡāl (birinchi harf kuchsiz), ajvaf (ikkinchi harf kuchsiz), nāqiṣ (uchinchi harf kuchsiz)."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- الْمِثَالُ: birinchi harf kuchsiz (و، ي)\\n- الْأَجْوَفُ: ikkinchi harf kuchsiz (و، ي، ا)\\n- النَّاقِصُ: uchinchi harf kuchsiz (و، ي)\\n- Bu fe'llarning tasrifi maxsus shakllarga ega"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "وَعَدَ اللهُ الْمُؤْمِنِينَ", meaning: "Wa'ada Allāhu al-mu'minīna — Alloh mo'minlarga va'da berdi (وَعَدَ — miṡāl (kuchsiz و))" },
                    { arabic: "قَالَ مُحَمَّدٌ الْحَقَّ", meaning: "Qāla Muhammadun al-ḥaqqa — Muhammad haqni aytdi (قَالَ — ajvaf (kuchsiz ا))" },
                    { arabic: "دَعَا الْمُؤْذِنُ إِلَى الصَّلَاةِ", meaning: "Da'ā al-mu'adhdhinu ilā al-ṣalāti — Muazzin namozga chaqirdi (دَعَا — ajvaf (kuchsiz ا))" },
                    { arabic: "رَمَى الطَّالِبُ الْكُرَةَ", meaning: "Ramā al-tālibu al-kurata — Talaba to'pni tashladi (رَمَى — nāqiṣ (kuchsiz ى))" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "فِعْلٌ مُعْتَلٌّ", meaning: "fi'lun mu'tallun — Illati fe'l" },
                    { arabic: "الْمِثَالُ", meaning: "al-mithālu — Birinchi harfi kuchsiz" },
                    { arabic: "الْأَجْوَفُ", meaning: "al-ajwafu — Ikkinchi harfi kuchsiz" },
                    { arabic: "النَّاقِصُ", meaning: "al-nāqiṣu — Uchinchi harfi kuchsiz" },
                    { arabic: "وَعَدَ", meaning: "wa'ada — U va'da berdi" },
                    { arabic: "قَالَ", meaning: "qāla — U aytdi" },
                    { arabic: "دَعَا", meaning: "da'ā — U chaqirdi" },
                    { arabic: "رَمَى", meaning: "ramā — U tashladi" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "36-1",
            type: "multiple-choice",
            question: "Illati fe'llarning nechta turi bor?",
            options: ["Ikkita", "Uchta", "To'rtta", "Beshta"],
            correctAnswer: "Uchta"
        },
        {
            id: "36-2",
            type: "multiple-choice",
            question: "Qaysi turda birinchi harf kuchsiz?",
            options: ["الْأَجْوَفُ", "الْمِثَالُ", "النَّاقِصُ", "الصَّحِيحُ"],
            correctAnswer: "الْمِثَالُ"
        },
        {
            id: "36-3",
            type: "multiple-choice",
            question: "Qaysi turda ikkinchi harf kuchsiz?",
            options: ["الْمِثَالُ", "الْأَجْوَفُ", "النَّاقِصُ", "الصَّحِيحُ"],
            correctAnswer: "الْأَجْوَفُ"
        },
        {
            id: "36-4",
            type: "multiple-choice",
            question: "Qaysi turda uchinchi harf kuchsiz?",
            options: ["الْمِثَالُ", "الْأَجْوَفُ", "النَّاقِصُ", "الصَّحِيحُ"],
            correctAnswer: "النَّاقِصُ"
        },
        {
            id: "36-5",
            type: "multiple-choice",
            question: "Tarjima qiling: قَالَ مُحَمَّدٌ الْحَقَّ",
            options: ["Muhammad haqni eshitdi", "Muhammad haqni aytdi", "Muhammad haqni biladi", "Muhammad haqni sevadi"],
            correctAnswer: "Muhammad haqni aytdi"
        },
        {
            id: "36-6",
            type: "multiple-choice",
            question: "Tarjima qiling: دَعَا الْمُؤْذِنُ إِلَى الصَّلَاةِ",
            options: ["Muazzin namoz o'qiyapti", "Muazzin namozga chaqirdi", "Muazzin namozga ketdi", "Muazzin namozni kutmoqda"],
            correctAnswer: "Muazzin namozga chaqirdi"
        },
        {
            id: "36-7",
            type: "multiple-choice",
            question: "Tarjimasi nima: رَمَى الطَّالِبُ الْكُرَةَ?",
            options: ["Talaba to'pni tutdi", "Talaba to'pni tashladi", "Talaba to'pni sotib oldi", "Talaba to'pni ko'rdi"],
            correctAnswer: "Talaba to'pni tashladi"
        },
        {
            id: "36-8",
            type: "multiple-choice",
            question: "فِعْلٌ مُعْتَلٌّ nima degani?",
            options: ["To'g'ri fe'l", "Illati fe'l", "O'tuvchi fe'l", "O'tuvchi bo'lmagan fe'l"],
            correctAnswer: "Illati fe'l"
        },
        {
            id: "36-9",
            type: "multiple-choice",
            question: "Qaysi so'z 'u aytdi' ma'nosini bildiradi?",
            options: ["كَتَبَ", "قَالَ", "فَعَلَ", "ذَهَبَ"],
            correctAnswer: "قَالَ"
        },
        {
            id: "36-10",
            type: "multiple-choice",
            question: "وَعَدَ nima degani?",
            options: ["U so'radi", "U va'da berdi", "U javob berdi", "U jim bo'ldi"],
            correctAnswer: "U va'da berdi"
        }
    ]
};
