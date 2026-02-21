import { Lesson } from '../../types';
export const lesson83: Lesson = {
    id: 83, title: "83-dars: Imlo (Orfografiya) (الدَّرْسُ الثَّالِثُ وَالثَّمَانُونَ - الْإِمْلَاءُ)", grammar: "Imlo (Orfografiya)", theory: {
        sections: [
            { title: "📖 Tavsif", content: "Imlo — arab tilida to'g'ri yozish qoidalari. Hamzaning yozilishi, ta marbuta va ta maftuhaning farqi, alif maqsura va boshqalar." },
            { title: "📝 Asosiy qoidalar", content: "- Hamzaning joyi: so'z boshida, o'rtasida, oxirida\\n- ة (ta marbuta) va ت (ta maftuha) farqi\\n- Alif maqsura (ى) va yā (ي) farqi\\n- Lam shamsiyya va lam qamariyya" },
            {
                title: "🗣️ Misollar", content: "Misollar:", examples: [
                    { arabic: "مَدْرَسَةٌ — مَدْرَسَتُ الْعِلْمِ", meaning: "Madrasatun — madrasatu al-'ilmi — Ta marbuta izofada ta ga aylanadi" },
                    { arabic: "ال + شَمْس = الشَّمْسُ", meaning: "Al + shams = al-shamsu — Lam shamsiyya (lam o'qilmaydi, harf tashdidlanadi)" },
                    { arabic: "ال + قَمَر = الْقَمَرُ", meaning: "Al + qamar = al-qamaru — Lam qamariyya (lam o'qiladi)" },
                    { arabic: "عَلَى — إِلَى — حَتَّى", meaning: "'Alā — ilā — ḥattā — Alif maqsura bilan yoziladigan so'zlar" }
                ]
            },
            {
                title: "📚 Lug'at", content: "Yangi so'zlar:", examples: [
                    { arabic: "إِمْلَاءٌ", meaning: "imlā'un — Imlo/Orfografiya" }, { arabic: "تَاءٌ مَرْبُوطَةٌ", meaning: "tā'un marbūṭatun — Ta marbuta" },
                    { arabic: "تَاءٌ مَفْتُوحَةٌ", meaning: "tā'un maftūḥatun — Ta maftuha" }, { arabic: "أَلِفٌ مَقْصُورَةٌ", meaning: "alifun maqṣūratun — Alif maqsura" },
                    { arabic: "لَامٌ شَمْسِيَّةٌ", meaning: "lāmun shamsiyyatun — Lam shamsiyya" }, { arabic: "لَامٌ قَمَرِيَّةٌ", meaning: "lāmun qamariyyatun — Lam qamariyya" },
                    { arabic: "هَمْزَةُ الْوَصْلِ", meaning: "hamzatu al-waṣli — Vasl hamzasi" }, { arabic: "هَمْزَةُ الْقَطْعِ", meaning: "hamzatu al-qaṭ'i — Qat' hamzasi" }
                ]
            }
        ]
    }, tasks: [
        { id: "83-1", type: "multiple-choice", question: "ة nima deb ataladi?", options: ["Ta maftuha", "Ta marbuta", "Ha", "Alif"], correctAnswer: "Ta marbuta" },
        { id: "83-2", type: "multiple-choice", question: "Lam shamsiyyada nima bo'ladi?", options: ["Lam o'qiladi", "Lam o'qilmaydi, harf tashdidlanadi", "Lam ikki marta o'qiladi", "Lam tushiriladi"], correctAnswer: "Lam o'qilmaydi, harf tashdidlanadi" },
        { id: "83-3", type: "multiple-choice", question: "Lam qamariyyada nima bo'ladi?", options: ["Lam o'qilmaydi", "Lam o'qiladi", "Lam tushiriladi", "Lam ikki marta o'qiladi"], correctAnswer: "Lam o'qiladi" },
        { id: "83-4", type: "multiple-choice", question: "إِمْلَاءٌ nima?", options: ["O'qish", "Imlo/Orfografiya", "Gapirish", "Eshitish"], correctAnswer: "Imlo/Orfografiya" },
        { id: "83-5", type: "multiple-choice", question: "Hamza so'zning qayerida bo'lishi mumkin?", options: ["Faqat boshida", "Faqat oxirida", "Boshida, o'rtasida va oxirida", "Faqat o'rtasida"], correctAnswer: "Boshida, o'rtasida va oxirida" },
        { id: "83-6", type: "multiple-choice", question: "أَلِفٌ مَقْصُورَةٌ nima?", options: ["Uzun alif", "Alif maqsura", "Qisqa alif", "Hamza"], correctAnswer: "Alif maqsura" },
        { id: "83-7", type: "multiple-choice", question: "هَمْزَةُ الْوَصْلِ nima?", options: ["Qat' hamzasi", "Vasl hamzasi", "O'rta hamza", "Oxirgi hamza"], correctAnswer: "Vasl hamzasi" },
        { id: "83-8", type: "multiple-choice", question: "هَمْزَةُ الْقَطْعِ nima?", options: ["Vasl hamzasi", "Qat' hamzasi", "O'rta hamza", "Oxirgi hamza"], correctAnswer: "Qat' hamzasi" },
        { id: "83-9", type: "multiple-choice", question: "لَامٌ شَمْسِيَّةٌ nima?", options: ["Oy lomi", "Quyosh lomi", "Yulduz lomi", "Osmon lomi"], correctAnswer: "Quyosh lomi" },
        { id: "83-10", type: "multiple-choice", question: "لَامٌ قَمَرِيَّةٌ nima?", options: ["Quyosh lomi", "Oy lomi", "Yulduz lomi", "Osmon lomi"], correctAnswer: "Oy lomi" }
    ]
};
