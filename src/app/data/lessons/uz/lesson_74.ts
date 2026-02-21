import { Lesson } from '../../types';
export const lesson74: Lesson = {
    id: 74, title: "74-dars: Maqtum va manqut (الدَّرْسُ الرَّابِعُ وَالسَّبْعُونَ - الْمَقْطُوعُ وَالْمَنْقُوطُ)", grammar: "Maqtum va manqut (Qisqartirilgan va nuqtali so'zlar)", theory: {
        sections: [
            { title: "📖 Tavsif", content: "Maqtum — oxirida harf tushirilgan so'zlar. Manqut — nuqtali harflarning farqlanishi muhim bo'lgan so'zlar. Qur'on yozuvi (rasm) da maxsus qoidalar amal qiladi." },
            { title: "📝 Asosiy qoidalar", content: "- Ba'zi so'zlarda harf tushiriladi: ابْنٌ (ibn — o'g'il)\\n- Nuqtali va nuqtasiz harflarni farqlash muhim\\n- Qur'on rasmida maxsus yozuv qoidalari bor\\n- Mushaf yozuvi adabiy yozuvdan farq qilishi mumkin" },
            {
                title: "🗣️ Misollar", content: "Misollar:", examples: [
                    { arabic: "بِسْمِ اللهِ", meaning: "Bismillāhi — Allohning nomi bilan (ب va اسم orasida alif tushirilgan)" },
                    { arabic: "الرَّحْمَنِ", meaning: "Al-Raḥmāni — Rahmli (mushaf rasmida alif tushirilgan)" },
                    { arabic: "ب ت ث — نقطة", meaning: "Bā, tā, thā — nuqta bilan farqlanadi (nuqtaning muhimligi)" },
                    { arabic: "هَذَا — هَؤُلَاءِ", meaning: "Hādhā — Hā'ulā'i — bu (birlik) / bular (ko'plik) — yozuv farqi" }
                ]
            },
            {
                title: "📚 Lug'at", content: "Yangi so'zlar:", examples: [
                    { arabic: "مَقْطُوعٌ", meaning: "maqtū'un — Qisqartirilgan/Kesilgan" }, { arabic: "مَنْقُوطٌ", meaning: "manqūtun — Nuqtali" },
                    { arabic: "رَسْمٌ", meaning: "rasmun — Yozuv (Qur'on yozuvi)" }, { arabic: "مُصْحَفٌ", meaning: "muṣḥafun — Mushaf" },
                    { arabic: "خَطٌّ", meaning: "khaṭṭun — Xat/Yozuv" }, { arabic: "نُقْطَةٌ", meaning: "nuqṭatun — Nuqta" },
                    { arabic: "حَرْفٌ", meaning: "ḥarfun — Harf" }, { arabic: "كِتَابَةٌ", meaning: "kitābatun — Yozish" }
                ]
            }
        ]
    }, tasks: [
        { id: "74-1", type: "multiple-choice", question: "مَقْطُوعٌ nima?", options: ["Qo'shilgan", "Qisqartirilgan/Kesilgan", "Uzaytirilgan", "O'zgartirilgan"], correctAnswer: "Qisqartirilgan/Kesilgan" },
        { id: "74-2", type: "multiple-choice", question: "مَنْقُوطٌ nima?", options: ["Nuqtasiz", "Nuqtali", "Qisqartirilgan", "Uzaytirilgan"], correctAnswer: "Nuqtali" },
        { id: "74-3", type: "multiple-choice", question: "رَسْمٌ Qur'on kontekstida nima?", options: ["Rasm chizish", "Qur'on yozuvi", "Bezak", "Rang"], correctAnswer: "Qur'on yozuvi" },
        { id: "74-4", type: "multiple-choice", question: "مُصْحَفٌ nima?", options: ["Kitob", "Mushaf (Qur'on nusxasi)", "Daftar", "Qalam"], correctAnswer: "Mushaf (Qur'on nusxasi)" },
        { id: "74-5", type: "multiple-choice", question: "بِسْمِ da qanday harf tushirilgan?", options: ["Mim", "Bā", "Alif", "Sin"], correctAnswer: "Alif" },
        { id: "74-6", type: "multiple-choice", question: "نُقْطَةٌ nima?", options: ["Chiziq", "Nuqta", "Doira", "Uchburchak"], correctAnswer: "Nuqta" },
        { id: "74-7", type: "multiple-choice", question: "حَرْفٌ nima?", options: ["So'z", "Harf", "Gap", "Matn"], correctAnswer: "Harf" },
        { id: "74-8", type: "multiple-choice", question: "خَطٌّ nima?", options: ["Gap", "Xat/Yozuv", "So'z", "Harf"], correctAnswer: "Xat/Yozuv" },
        { id: "74-9", type: "multiple-choice", question: "Mushaf yozuvi adabiy yozuvdan farq qiladimi?", options: ["Yo'q, bir xil", "Ha, farq qilishi mumkin", "Faqat rangda", "Faqat o'lchamda"], correctAnswer: "Ha, farq qilishi mumkin" },
        { id: "74-10", type: "multiple-choice", question: "كِتَابَةٌ nima?", options: ["O'qish", "Yozish", "Eshitish", "Gapirish"], correctAnswer: "Yozish" }
    ]
};
