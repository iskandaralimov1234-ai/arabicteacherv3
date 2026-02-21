import { Lesson } from '../../types';

export const lesson19: Lesson = {
    id: 19,
    title: "19-dars: Murakkab sonlar (21-99) (الدَّرْسُ التَّاسِعَ عَشَرَ - الْعَدَدُ الْمُرَكَّبُ)",
    grammar: "Murakkab sonlar (21-99)",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "Murakkab sonlar (21-99) birliklar va o'nliklarning birikmasidan hosil bo'ladi. Birliklar o'nliklardan oldin keladi va sanaladigan so'z jinsi bilan moslashadi. O'nliklar doimo bir xil shaklda bo'ladi."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- Birliklar o'nliklardan oldin keladi\\n- Birliklar sanaladigan so'z jinsi bilan moslashadi\\n- O'nliklar doimo bir xil shaklda\\n- Sanaladigan so'z birlik sonda Mansub (مَنْصُوبٌ) holatida"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "وَاحِدٌ وَعِشْرُونَ كِتَابًا", meaning: "Wāḥidun wa 'ishrūna kitāban — Yigirma bitta kitob (21: birlik (moslashgan) + و + عشرون)" },
                    { arabic: "ثَلَاثَةٌ وَثَلَاثُونَ طَالِبًا", meaning: "Thalāthatun wa thalāthūna tāliban — O'ttiz uchta talaba (33: birlik (moslashgan) + و + ثلاثون)" },
                    { arabic: "خَمْسُ كُتُبٍ وَخَمْسُونَ", meaning: "Khamsu kutubin wa khamsūna — Ellik beshta kitob (55: birlik (moslashgan) + و + خمسون)" },
                    { arabic: "تِسْعَةٌ وَتِسْعُونَ رَجُلًا", meaning: "Tis'atun wa tis'ūna rajulan — To'qson to'qqizta erkak (99: birlik (moslashgan) + و + تسعون)" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "عَدَدٌ مُرَكَّبٌ", meaning: "adadun murakkabun — Murakkab son" },
                    { arabic: "وَ", meaning: "wa — Va (bog'lovchi)" },
                    { arabic: "وَاحِدٌ وَعِشْرُونَ", meaning: "wāḥidun wa 'ishrūna — Yigirma bir" },
                    { arabic: "اثْنَانِ وَعِشْرُونَ", meaning: "ithnāni wa 'ishrūna — Yigirma ikki" },
                    { arabic: "أَرْبَعَةٌ وَأَرْبَعُونَ", meaning: "arba'atun wa arba'ūna — Qirq to'rt" },
                    { arabic: "سِتَّةٌ وَسِتُّونَ", meaning: "sittatun wa sittūna — Oltmish olti" },
                    { arabic: "ثَمَانِيَةٌ وَثَمَانُونَ", meaning: "thamāniyatun wa thamānūna — Sakson sakkiz" },
                    { arabic: "مِائَةٌ", meaning: "mi'atun — Yuz" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "19-1",
            type: "multiple-choice",
            question: "Murakkab sonlarda birliklar va o'nliklar qanday tartibda keladi?",
            options: ["O'nliklar + birliklar", "Birliklar + o'nliklar", "Tartib muhim emas", "Songa bog'liq"],
            correctAnswer: "Birliklar + o'nliklar"
        },

        {
            id: "19-2",
            type: "multiple-choice",
            question: "Murakkab sonlarda sanaladigan so'z bilan nima moslashadi?",
            options: ["Faqat o'nliklar", "Faqat birliklar", "Ham birliklar, ham o'nliklar", "Hech narsa"],
            correctAnswer: "Faqat birliklar"
        },

        {
            id: "19-3",
            type: "multiple-choice",
            question: "Murakkab sondan keyin sanaladigan so'z qaysi holatda turadi?",
            options: ["Marfu' (مَرْفُوعٌ)", "Majrur (مَجْرُورٌ)", "Mansub (مَنْصُوبٌ)", "Majzum (مَجْزُومٌ)"],
            correctAnswer: "Mansub (مَنْصُوبٌ)"
        },

        {
            id: "19-4",
            type: "multiple-choice",
            question: "Murakkab sondan keyin sanaladigan so'z qaysi sonda turadi?",
            options: ["Birlik", "Ko'plik", "Ikklik (musnna)", "Songa bog'liq"],
            correctAnswer: "Birlik"
        },

        {
            id: "19-5",
            type: "multiple-choice",
            question: "Tarjima qiling: وَاحِدٌ وَعِشْرُونَ كِتَابًا",
            options: ["Yigirmata kitob", "Yigirma bitta kitob", "Yigirma ikkita kitob", "Bitta kitob"],
            correctAnswer: "Yigirma bitta kitob"
        },

        {
            id: "19-6",
            type: "multiple-choice",
            question: "Tarjima qiling: خَمْسَةٌ وَخَمْسُونَ طَالِبًا",
            options: ["Beshta talaba", "Ellik beshta talaba", "O'n beshta talaba", "Ellikta talaba"],
            correctAnswer: "Ellik beshta talaba"
        },

        {
            id: "19-7",
            type: "multiple-choice",
            question: "Tarjimasi nima: ثَلَاثَةٌ وَثَلَاثُونَ رَجُلًا?",
            options: ["Uchta erkak", "O'ttiz uchta erkak", "O'ttizta erkak", "O'ttiz uchta ayol"],
            correctAnswer: "O'ttiz uchta erkak"
        },

        {
            id: "19-8",
            type: "multiple-choice",
            question: "عَدَدٌ مُرَكَّبٌ nima degani?",
            options: ["Oddiy son", "Murakkab son", "Kasr son", "Tartib son"],
            correctAnswer: "Murakkab son"
        },

        {
            id: "19-9",
            type: "multiple-choice",
            question: "Qaysi so'z 'yuz' ma'nosini bildiradi?",
            options: ["عَشَرَةٌ", "مِائَةٌ", "أَلْفٌ", "عِشْرُونَ"],
            correctAnswer: "مِائَةٌ"
        },

        {
            id: "19-10",
            type: "multiple-choice",
            question: "وَ nima ma'noni bildiradi?",
            options: ["Yoki", "Va", "Lekin", "Chunki"],
            correctAnswer: "Va"
        }
    ]
};
