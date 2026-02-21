import { Lesson } from '../../types';

export const lesson53: Lesson = {
    id: 53,
    title: "53-dars: Majrurat al-asma (Majrur holatdagi ismlar) (الدَّرْسُ الثَّالِثُ وَالْخَمْسُونَ - مَجْرُورَاتُ الْأَسْمَاءِ)",
    grammar: "Majrurat al-asma",
    theory: {
        sections: [
            { title: "📖 Tavsif", content: "Majrur holatida turadigan ismlar ikki asosiy sababga ko'ra Majrur bo'ladi: ko'makchi so'z (harf jarr) dan keyin yoki izofada (mudaf ilayhi) turganida." },
            { title: "📝 Asosiy qoidalar", content: "- Ko'makchi so'z (harf jarr) dan keyin: مِنْ، إِلَى، عَنْ، عَلَى، فِي، بِ، لِ\\n- Izofada mudaf ilayhi sifatida: كِتَابُ الطَّالِبِ\\n- Ikkala holatda ham ism Majrur holatiga o'tadi" },
            {
                title: "🗣️ Misollar", content: "Quyidagi misollarga e'tibor bering:", examples: [
                    { arabic: "ذَهَبْتُ إِلَى الْمَدْرَسَةِ", meaning: "Dhahabtu ilā al-madrasati — Men maktabga bordim (إِلَى dan keyin Majrur)" },
                    { arabic: "كِتَابُ الطَّالِبِ", meaning: "Kitābu al-ṭālibi — Talabaning kitobi (izofada Majrur)" },
                    { arabic: "خَرَجَ مِنَ الْبَيْتِ", meaning: "Kharaja min al-bayti — U uydan chiqdi (مِنْ dan keyin Majrur)" },
                    { arabic: "جَلَسَ عَلَى الْكُرْسِيِّ", meaning: "Jalasa 'alā al-kursiyyi — U stulga o'tirdi (عَلَى dan keyin Majrur)" }
                ]
            },
            {
                title: "📚 Lug'at", content: "Ushbu darsdan yangi so'zlar:", examples: [
                    { arabic: "مَجْرُورَاتٌ", meaning: "majrūrātun — Majrur turlar" },
                    { arabic: "حُرُوفُ الْجَرِّ", meaning: "ḥurūfu al-jarri — Ko'makchi so'zlar" },
                    { arabic: "إِضَافَةٌ", meaning: "iḍāfatun — Izofamuvofiq" },
                    { arabic: "مُضَافٌ إِلَيْهِ", meaning: "muḍāfun ilayhi — Izofaning ikkinchi qismi" },
                    { arabic: "مِنْ", meaning: "min — ...dan" },
                    { arabic: "إِلَى", meaning: "ilā — ...ga" },
                    { arabic: "عَلَى", meaning: "'alā — ...da/...ga" },
                    { arabic: "فِي", meaning: "fī — ...da" }
                ]
            }
        ]
    },
    tasks: [
        { id: "53-1", type: "multiple-choice", question: "Ism nechta sababga ko'ra Majrur bo'ladi?", options: ["Bitta", "Ikkita", "Uchta", "To'rtta"], correctAnswer: "Ikkita" },
        { id: "53-2", type: "multiple-choice", question: "Ko'makchi so'zdan keyin ism qaysi holatda turadi?", options: ["Marfu'", "Mansub", "Majrur", "Majzum"], correctAnswer: "Majrur" },
        { id: "53-3", type: "multiple-choice", question: "Izofada mudaf ilayhi qaysi holatda turadi?", options: ["Marfu'", "Mansub", "Majrur", "Majzum"], correctAnswer: "Majrur" },
        { id: "53-4", type: "multiple-choice", question: "Tarjima qiling: ذَهَبْتُ إِلَى الْمَدْرَسَةِ", options: ["Men maktabdan keldim", "Men maktabga bordim", "Men maktabda o'tirdim", "Men maktabdan chiqdim"], correctAnswer: "Men maktabga bordim" },
        { id: "53-5", type: "multiple-choice", question: "Tarjima qiling: كِتَابُ الطَّالِبِ", options: ["Talabaning kitobi", "Talabaga kitob", "Talaba kitob o'qidi", "Kitob talaba uchun"], correctAnswer: "Talabaning kitobi" },
        { id: "53-6", type: "multiple-choice", question: "حُرُوفُ الْجَرِّ nima degani?", options: ["Fe'llar", "Ko'makchi so'zlar", "Ismlar", "Sifatlar"], correctAnswer: "Ko'makchi so'zlar" },
        { id: "53-7", type: "multiple-choice", question: "مِنْ nima degani?", options: ["...ga", "...dan", "...da", "...bilan"], correctAnswer: "...dan" },
        { id: "53-8", type: "multiple-choice", question: "إِلَى nima degani?", options: ["...dan", "...ga", "...da", "...bilan"], correctAnswer: "...ga" },
        { id: "53-9", type: "multiple-choice", question: "إِضَافَةٌ nima degani?", options: ["Sifat", "Izofamuvofiq", "Fe'l", "Hol"], correctAnswer: "Izofamuvofiq" },
        { id: "53-10", type: "multiple-choice", question: "فِي nima degani?", options: ["...dan", "...ga", "...da", "...bilan"], correctAnswer: "...da" }
    ]
};
