import { Lesson } from '../../types';

export const lesson18: Lesson = {
    id: 18,
    title: "18-dars: O'nliklar (20-90) (الدَّرْسُ الثَّامِنَ عَشَرَ - عَدَدُ مَضَاعَفَاتِ الْعَشْرَةِ)",
    grammar: "O'nliklar (20-90)",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "عشرون، ثلاثون، أربعون... (20, 30, 40... 90) sonlari birliklardan keyin -ūna (Marfu' holatida) yoki -īna (Mansub/Majrur holatlarida) qo'shimchasi qo'shib hosil qilinadi. Ular ikkala jins uchun bir xil shaklga ega. Sanaladigan so'z birlik sonda Mansub (مَنْصُوبٌ) holatiga qo'yiladi."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- 20-90 sonlar: muzakkar va muannas uchun bir xil shakl\\n- Marfu' holati: -ūna (ـُونَ) qo'shimchasi\\n- Mansub/Majrur holati: -īna (ـِينَ) qo'shimchasi\\n- Sanaladigan so'z birlik sonda Mansub (مَنْصُوبٌ) holatida"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "عِشْرُونَ كِتَابًا", meaning: "'Ishrūna kitāban — Yigirmata kitob (20: عشرون Marfu' holatida, sanaladigan so'z birlik sonda, Mansub holati)" },
                    { arabic: "ثَلَاثُونَ طَالِبًا", meaning: "Thalāthūna tāliban — O'ttizta talaba (30: ثلاثون Marfu' holatida, sanaladigan so'z birlik sonda, Mansub)" },
                    { arabic: "خَمْسُونَ رَجُلًا", meaning: "Khamsūna rajulan — Ellikta erkak (50: خمسون Marfu' holatida, sanaladigan so'z birlik sonda, Mansub)" },
                    { arabic: "تِسْعُونَ بَيْتًا", meaning: "Tis'ūna baytan — To'qsonata uy (90: تسعون Marfu' holatida, sanaladigan so'z birlik sonda, Mansub)" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "عِشْرُونَ", meaning: "'ishrūna — Yigirma" },
                    { arabic: "ثَلَاثُونَ", meaning: "thalāthūna — O'ttiz" },
                    { arabic: "أَرْبَعُونَ", meaning: "arba'ūna — Qirq" },
                    { arabic: "خَمْسُونَ", meaning: "khamsūna — Ellik" },
                    { arabic: "سِتُّونَ", meaning: "sittūna — Oltmish" },
                    { arabic: "سَبْعُونَ", meaning: "sab'ūna — Yetmish" },
                    { arabic: "ثَمَانُونَ", meaning: "thamānūna — Sakson" },
                    { arabic: "تِسْعُونَ", meaning: "tis'ūna — To'qson" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "18-1",
            type: "multiple-choice",
            question: "20-90 sonlari nechta shaklga ega?",
            options: ["Ikkita (muzakkar va muannas uchun)", "Bitta ikkala jins uchun", "Uchta", "To'rtta"],
            correctAnswer: "Bitta ikkala jins uchun"
        },

        {
            id: "18-2",
            type: "multiple-choice",
            question: "20-90 sonidan keyin sanaladigan so'z qaysi holatda turadi?",
            options: ["Marfu' (مَرْفُوعٌ)", "Majrur (مَجْرُورٌ)", "Mansub (مَنْصُوبٌ)", "Majzum (مَجْزُومٌ)"],
            correctAnswer: "Mansub (مَنْصُوبٌ)"
        },

        {
            id: "18-3",
            type: "multiple-choice",
            question: "20-90 sonidan keyin sanaladigan so'z qaysi sonda turadi?",
            options: ["Birlik", "Ko'plik", "Ikklik (musnna)", "Songa bog'liq"],
            correctAnswer: "Birlik"
        },

        {
            id: "18-4",
            type: "multiple-choice",
            question: "20-90 sonlari Marfu' (مَرْفُوعٌ) holatida qaysi qo'shimchaga ega?",
            options: ["-īna", "-ūna", "-ātu", "-āni"],
            correctAnswer: "-ūna"
        },

        {
            id: "18-5",
            type: "multiple-choice",
            question: "Tarjima qiling: عِشْرُونَ كِتَابًا",
            options: ["O'nta kitob", "Yigirmata kitob", "O'n ikkita kitob", "O'ttizta kitob"],
            correctAnswer: "Yigirmata kitob"
        },

        {
            id: "18-6",
            type: "multiple-choice",
            question: "Tarjima qiling: خَمْسُونَ طَالِبًا",
            options: ["Beshta talaba", "O'n beshta talaba", "Ellikta talaba", "Ellik beshta talaba"],
            correctAnswer: "Ellikta talaba"
        },

        {
            id: "18-7",
            type: "multiple-choice",
            question: "Tarjimasi nima: تِسْعُونَ رَجُلًا?",
            options: ["To'qqizta erkak", "O'n to'qqizta erkak", "To'qsonata erkak", "To'qson to'qqizta erkak"],
            correctAnswer: "To'qsonata erkak"
        },

        {
            id: "18-8",
            type: "multiple-choice",
            question: "Qaysi so'z 'o'ttiz' ma'nosini bildiradi?",
            options: ["ثَلَاثَةٌ", "ثَلَاثُونَ", "ثَلَاثَةَ عَشَرَ", "ثَلَاثَةٌ وَعِشْرُونَ"],
            correctAnswer: "ثَلَاثُونَ"
        },

        {
            id: "18-9",
            type: "multiple-choice",
            question: "Qaysi so'z 'sakson' ma'nosini bildiradi?",
            options: ["ثَمَانِيَةٌ", "ثَمَانُونَ", "ثَمَانِيَةٌ وَعِشْرُونَ", "ثَمَانِيَةَ عَشَرَ"],
            correctAnswer: "ثَمَانُونَ"
        },

        {
            id: "18-10",
            type: "multiple-choice",
            question: "Qaysi so'z 'qirq' ma'nosini bildiradi?",
            options: ["أَرْبَعَةٌ", "أَرْبَعُونَ", "أَرْبَعَةَ عَشَرَ", "أَرْبَعَةٌ وَعِشْرُونَ"],
            correctAnswer: "أَرْبَعُونَ"
        }
    ]
};
