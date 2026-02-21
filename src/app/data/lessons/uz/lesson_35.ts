import { Lesson } from '../../types';

export const lesson35: Lesson = {
    id: 35,
    title: "35-dars: Beshta fe'l (Al-Af'ālu al-khamsa) (الدَّرْسُ الْخَامِسُ وَالثَّلَاثُونَ - الْأَفْعَالُ الْخَمْسَةُ)",
    grammar: "Beshta fe'l (Al-Af'ālu al-khamsa)",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "Beshta fe'l (الْأَفْعَالُ الْخَمْسَةُ) — bu mudori' zamondagi maxsus tasrifga ega bo'lgan fe'l shakllari. Ular Marfu' holatida oxirida nunni saqlaydi, Mansub va Majzum holatlarida esa nun tushib qoladi."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- Beshta shakl: يَفْعَلَانِ، تَفْعَلَانِ، يَفْعَلُونَ، تَفْعَلُونَ، تَفْعَلِينَ\\n- Marfu' holatida: nunni saqlaydi\\n- Mansub/Majzum holatida: nun tushib qoladi\\n- Bu jazm qoidalaridan istisno"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "الطُّلَّابُ يَكْتُبُونَ الدَّرْسَ", meaning: "Al-tullābu yaktubūna al-darsa — Talabalar darsni yozyaptilar (يَكْتُبُونَ — Marfu' holatida nun bilan)" },
                    { arabic: "لَنْ يَكْتُبُوا الدَّرْسَ", meaning: "Lan yaktubū al-darsa — Ular darsni yozishmaydi (لَنْ bilan Mansub — nun tushdi)" },
                    { arabic: "أَنْتُمْ تَذْهَبُونَ إِلَى الْمَدْرَسَةِ", meaning: "Antum tadhhabūna ilā al-madrasati — Sizlar maktabga bormoqdasizlar" },
                    { arabic: "لَمْ يَذْهَبُوا", meaning: "Lam yadhhabū — Ular bormadilar (لَمْ bilan Majzum — nun tushdi)" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "الْأَفْعَالُ الْخَمْسَةُ", meaning: "al-af'ālu al-khamsatu — Beshta fe'l" },
                    { arabic: "يَفْعَلَانِ", meaning: "yaf'alāni — Ular ikkisi bajaradi (muzakkar)" },
                    { arabic: "تَفْعَلَانِ", meaning: "taf'alāni — Siz ikkingiz bajarasiz" },
                    { arabic: "يَفْعَلُونَ", meaning: "yaf'alūna — Ular bajaradilar (muzakkar)" },
                    { arabic: "تَفْعَلُونَ", meaning: "taf'alūna — Sizlar bajarasizlar" },
                    { arabic: "تَفْعَلِينَ", meaning: "taf'alīna — Sen bajarasan (muannas)" },
                    { arabic: "أَكَلَ", meaning: "akala — U yedi" },
                    { arabic: "أَخَذَ", meaning: "akhadha — U oldi" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "35-1",
            type: "multiple-choice",
            question: "'Beshta fe'l' guruhiga nechta shakl kiradi?",
            options: ["Uchta", "To'rtta", "Beshta", "Oltita"],
            correctAnswer: "Beshta"
        },

        {
            id: "35-2",
            type: "multiple-choice",
            question: "Beshta fe'lga qanday maxsus qoida qo'llaniladi?",
            options: ["Harflar ikkilanishi", "Mansub/Majzumda nun tushib qolishi", "Ildizning o'zgarishi", "Alif qo'shilishi"],
            correctAnswer: "Mansub/Majzumda nun tushib qolishi"
        },

        {
            id: "35-3",
            type: "multiple-choice",
            question: "Marfu' holatida beshta fe'l nimani saqlaydi?",
            options: ["Alif", "Nun", "Ta", "Ya"],
            correctAnswer: "Nun"
        },

        {
            id: "35-4",
            type: "multiple-choice",
            question: "Qaysi fe'l 'u yedi' ma'nosini bildiradi?",
            options: ["أَبَ", "أَخَ", "أَكَلَ", "أَخَذَ"],
            correctAnswer: "أَكَلَ"
        },

        {
            id: "35-5",
            type: "multiple-choice",
            question: "Tarjima qiling: الطُّلَّابُ يَكْتُبُونَ الدَّرْسَ",
            options: ["Sen dars yozyapsan", "Sizlar dars yozyapsizlar", "Talabalar darsni yozyaptilar", "Biz dars yozyapmiz"],
            correctAnswer: "Talabalar darsni yozyaptilar"
        },

        {
            id: "35-6",
            type: "multiple-choice",
            question: "Tarjima qiling: لَنْ يَكْتُبُوا الدَّرْسَ",
            options: ["Ular darsni yozdilar", "Ular darsni yozishmaydi", "Ular darsni yozyaptilar", "Ular darsni yozadilar"],
            correctAnswer: "Ular darsni yozishmaydi"
        },

        {
            id: "35-7",
            type: "multiple-choice",
            question: "Tarjimasi nima: أَخَذَ الطَّالِبُ الْكِتَابَ?",
            options: ["Talaba kitob berdi", "Talaba kitob oldi", "Talaba kitob o'qidi", "Talaba kitob yozdi"],
            correctAnswer: "Talaba kitob oldi"
        },

        {
            id: "35-8",
            type: "multiple-choice",
            question: "يَفْعَلُونَ qaysi shaxs va songa tegishli?",
            options: ["1-shaxs birlik", "3-shaxs ko'plik muzakkar", "2-shaxs birlik", "3-shaxs birlik"],
            correctAnswer: "3-shaxs ko'plik muzakkar"
        },

        {
            id: "35-9",
            type: "multiple-choice",
            question: "Qaysi so'z 'u oldi' ma'nosini bildiradi?",
            options: ["أَبَ", "أَخَ", "أَكَلَ", "أَخَذَ"],
            correctAnswer: "أَخَذَ"
        },

        {
            id: "35-10",
            type: "multiple-choice",
            question: "تَفْعَلِينَ qaysi shaxs va songa tegishli?",
            options: ["2-shaxs birlik muzakkar", "2-shaxs birlik muannas", "3-shaxs birlik muannas", "1-shaxs birlik"],
            correctAnswer: "2-shaxs birlik muannas"
        }
    ]
};
