import { Lesson } from '../../types';

export const lesson52: Lesson = {
    id: 52,
    title: "52-dars: Mansubat al-asma (Mansub holatdagi ismlar) (الدَّرْسُ الثَّانِي وَالْخَمْسُونَ - مَنْصُوبَاتُ الْأَسْمَاءِ)",
    grammar: "Mansubat al-asma",
    theory: {
        sections: [
            { title: "📖 Tavsif", content: "Mansub holatida turadigan ismlar bir nechta turga bo'linadi: maf'ul bihi, maf'ul mutlaq, maf'ul lajlihi, maf'ul fīhi, maf'ul ma'ahu, ḥāl, tamyiz va istisno." },
            { title: "📝 Asosiy qoidalar", content: "- Maf'ul bihi — to'g'ri to'ldiruvchi\\n- Maf'ul mutlaq — mutlaq to'ldiruvchi\\n- Maf'ul lajlihi — sabab to'ldiruvchi\\n- Ḥāl, tamyiz, istisno — boshqa mansub holatlar" },
            {
                title: "🗣️ Misollar", content: "Quyidagi misollarga e'tibor bering:", examples: [
                    { arabic: "كَتَبَ الدَّرْسَ", meaning: "Kataba al-darsa — U darsni yozdi (الدَّرْسَ — maf'ul bihi)" },
                    { arabic: "ضَرَبَ ضَرْبًا", meaning: "Ḍaraba ḍarban — U urib urdi (ضَرْبًا — maf'ul mutlaq)" },
                    { arabic: "قُمْتُ إِجْلَالًا", meaning: "Qumtu ijlālan — Men hurmat uchun turdim (إِجْلَالًا — maf'ul lajlihi)" },
                    { arabic: "جَاءَ ضَاحِكًا", meaning: "Jā'a ḍāḥikan — U kulib keldi (ضَاحِكًا — ḥāl)" }
                ]
            },
            {
                title: "📚 Lug'at", content: "Ushbu darsdan yangi so'zlar:", examples: [
                    { arabic: "مَنْصُوبَاتٌ", meaning: "manṣūbātun — Mansub turlar" },
                    { arabic: "مَفْعُولٌ بِهِ", meaning: "maf'ūlun bihi — To'g'ri to'ldiruvchi" },
                    { arabic: "مَفْعُولٌ مُطْلَقٌ", meaning: "maf'ūlun muṭlaqun — Mutlaq to'ldiruvchi" },
                    { arabic: "مَفْعُولٌ لِأَجْلِهِ", meaning: "maf'ūlun li-ajlihi — Sabab to'ldiruvchi" },
                    { arabic: "مَفْعُولٌ فِيهِ", meaning: "maf'ūlun fīhi — Joy/vaqt holi" },
                    { arabic: "حَالٌ", meaning: "ḥālun — Holat holi" },
                    { arabic: "تَمْيِيزٌ", meaning: "tamyīzun — Aniqlash" },
                    { arabic: "مُسْتَثْنًى", meaning: "mustathnan — Istisno" }
                ]
            }
        ]
    },
    tasks: [
        { id: "52-1", type: "multiple-choice", question: "To'g'ri to'ldiruvchi qanday ataladi?", options: ["مَفْعُولٌ مُطْلَقٌ", "مَفْعُولٌ بِهِ", "حَالٌ", "تَمْيِيزٌ"], correctAnswer: "مَفْعُولٌ بِهِ" },
        { id: "52-2", type: "multiple-choice", question: "Sababni bildiradigan mansub ism qanday ataladi?", options: ["مَفْعُولٌ بِهِ", "مَفْعُولٌ لِأَجْلِهِ", "حَالٌ", "تَمْيِيزٌ"], correctAnswer: "مَفْعُولٌ لِأَجْلِهِ" },
        { id: "52-3", type: "multiple-choice", question: "Holat holini qanday atash mumkin?", options: ["تَمْيِيزٌ", "مُسْتَثْنًى", "حَالٌ", "مَفْعُولٌ مُطْلَقٌ"], correctAnswer: "حَالٌ" },
        { id: "52-4", type: "multiple-choice", question: "Tarjima qiling: كَتَبَ الدَّرْسَ", options: ["U dars yozyapti", "U darsni yozdi", "U dars o'qidi", "U dars ochdi"], correctAnswer: "U darsni yozdi" },
        { id: "52-5", type: "multiple-choice", question: "Tarjima qiling: جَاءَ ضَاحِكًا", options: ["U yig'lab keldi", "U kulib keldi", "U tez keldi", "U sekin keldi"], correctAnswer: "U kulib keldi" },
        { id: "52-6", type: "multiple-choice", question: "مَنْصُوبَاتٌ nima degani?", options: ["Marfu' turlar", "Mansub turlar", "Majrur turlar", "Majzum turlar"], correctAnswer: "Mansub turlar" },
        { id: "52-7", type: "multiple-choice", question: "مَفْعُولٌ مُطْلَقٌ nimani kuchaytiradi?", options: ["Ismni", "Harakatni", "Sifatni", "Joyni"], correctAnswer: "Harakatni" },
        { id: "52-8", type: "multiple-choice", question: "مَفْعُولٌ فِيهِ nimani bildiradi?", options: ["Sababni", "Joy yoki vaqtni", "Holatni", "Miqdorni"], correctAnswer: "Joy yoki vaqtni" },
        { id: "52-9", type: "multiple-choice", question: "مُسْتَثْنًى nima degani?", options: ["Qo'shilgan", "Istisno qilingan", "O'chirilgan", "Qo'yilgan"], correctAnswer: "Istisno qilingan" },
        { id: "52-10", type: "multiple-choice", question: "Mansub turlari nechta?", options: ["Uchta", "Beshta", "Sakkizta", "O'nta"], correctAnswer: "Sakkizta" }
    ]
};
