import { Lesson } from '../../types';

export const lesson48: Lesson = {
    id: 48,
    title: "48-dars: Maf'ul ma'ahu (Hamroh to'ldiruvchi) (الدَّرْسُ الثَّامِنُ وَالْأَرْبَعُونَ - الْمَفْعُولُ مَعَهُ)",
    grammar: "Maf'ul ma'ahu (Hamroh to'ldiruvchi)",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "Maf'ul ma'ahu (الْمَفْعُولُ مَعَهُ) — وَ (va) harfidan keyin keladigan, harakat bilan birga bo'lishni bildiruvchi ismdir. U doimo Mansub holatida turadi."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- وَ (va) harfidan keyin keladi\\n- Vav bu yerda 'birgalik' ma'nosida\\n- Doimo Mansub holatida turadi\\n- Harakat bilan birga bo'lishni bildiradi"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "سِرْتُ وَالنَّهْرَ", meaning: "Sirtu wa al-nahra — Men daryo bo'ylab yurdim (وَالنَّهْرَ — hamroh to'ldiruvchi)" },
                    { arabic: "جِئْتُ وَطُلُوعَ الشَّمْسِ", meaning: "Ji'tu wa ṭulū'a al-shamsi — Men quyosh chiqishi bilan keldim" },
                    { arabic: "مَشَيْتُ وَالْجَبَلَ", meaning: "Mashaytu wa al-jabala — Men tog' bo'ylab yurdim" },
                    { arabic: "سَافَرْتُ وَالْقَمَرَ", meaning: "Sāfartu wa al-qamara — Men oy yorug'ida sayohat qildim" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "مَفْعُولٌ مَعَهُ", meaning: "maf'ūlun ma'ahu — Hamroh to'ldiruvchi" },
                    { arabic: "وَاوُ الْمَعِيَّةِ", meaning: "wāwu al-ma'iyyati — Birgalik vavi" },
                    { arabic: "نَهْرٌ", meaning: "nahrun — Daryo" },
                    { arabic: "طُلُوعٌ", meaning: "ṭulū'un — Chiqish (quyosh)" },
                    { arabic: "شَمْسٌ", meaning: "shamsun — Quyosh" },
                    { arabic: "جَبَلٌ", meaning: "jabalun — Tog'" },
                    { arabic: "قَمَرٌ", meaning: "qamarun — Oy" },
                    { arabic: "سَارَ", meaning: "sāra — U yurdi" }
                ]
            }
        ]
    },
    tasks: [
        { id: "48-1", type: "multiple-choice", question: "Maf'ul ma'ahu nimadan keyin keladi?", options: ["مِنْ", "إِلَى", "وَ (birgalik vavi)", "فِي"], correctAnswer: "وَ (birgalik vavi)" },
        { id: "48-2", type: "multiple-choice", question: "Maf'ul ma'ahu qaysi holatda turadi?", options: ["Marfu'", "Majrur", "Mansub", "Majzum"], correctAnswer: "Mansub" },
        { id: "48-3", type: "multiple-choice", question: "Maf'ul ma'ahu nimani bildiradi?", options: ["Sababni", "Birgalikni", "Joyni", "Vaqtni"], correctAnswer: "Birgalikni" },
        { id: "48-4", type: "multiple-choice", question: "Tarjima qiling: سِرْتُ وَالنَّهْرَ", options: ["Men daryo ko'rdim", "Men daryo bo'ylab yurdim", "Men daryoga tushdim", "Men daryodan o'tdim"], correctAnswer: "Men daryo bo'ylab yurdim" },
        { id: "48-5", type: "multiple-choice", question: "Tarjima qiling: جِئْتُ وَطُلُوعَ الشَّمْسِ", options: ["Men quyoshni ko'rdim", "Men quyosh chiqishi bilan keldim", "Men quyosh botganda keldim", "Men quyoshga bordim"], correctAnswer: "Men quyosh chiqishi bilan keldim" },
        { id: "48-6", type: "multiple-choice", question: "نَهْرٌ nima degani?", options: ["Tog'", "Daryo", "Dengiz", "Ko'l"], correctAnswer: "Daryo" },
        { id: "48-7", type: "multiple-choice", question: "جَبَلٌ nima degani?", options: ["Daryo", "Tog'", "O'rmon", "Cho'l"], correctAnswer: "Tog'" },
        { id: "48-8", type: "multiple-choice", question: "شَمْسٌ nima degani?", options: ["Oy", "Yulduz", "Quyosh", "Osmon"], correctAnswer: "Quyosh" },
        { id: "48-9", type: "multiple-choice", question: "قَمَرٌ nima degani?", options: ["Quyosh", "Oy", "Yulduz", "Osmon"], correctAnswer: "Oy" },
        { id: "48-10", type: "multiple-choice", question: "وَاوُ الْمَعِيَّةِ nima degani?", options: ["Atov vavi", "Birgalik vavi", "Bog'lovchi vav", "Savol vavi"], correctAnswer: "Birgalik vavi" }
    ]
};
