import { Lesson } from '../../types';

export const lesson33: Lesson = {
    id: 33,
    title: "33-dars: O'tuvchi va o'tuvchi bo'lmagan fe'llar (الدَّرْسُ الثَّالِثُ وَالثَّلَاثُونَ - الْأَفْعَالُ الْمُتَعَدِّيَةُ وَاللَّازِمَةُ)",
    grammar: "O'tuvchi va o'tuvchi bo'lmagan fe'llar",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "Fe'llar o'tuvchi (الْمُتَعَدِّيَةُ) va o'tuvchi bo'lmagan (اللَّازِمَةُ) turlarga bo'linadi. O'tuvchi fe'llar to'ldiruvchi (maf'ul) talab qiladi, o'tuvchi bo'lmagan fe'llar esa to'ldiruvchi talab qilmaydi."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- الْمُتَعَدِّيَةُ — to'ldiruvchi talab qiladi\\n- اللَّازِمَةُ — to'ldiruvchi talab qilmaydi\\n- O'tuvchi fe'llar majhulga aylantirilishi mumkin\\n- O'tuvchi bo'lmagan fe'llarning majhuli bo'lmaydi"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "كَتَبَ الطَّالِبُ الدَّرْسَ", meaning: "Kataba al-tālibu al-darsa — Talaba darsni yozdi (كَتَبَ — o'tuvchi fe'l, to'ldiruvchi bilan)" },
                    { arabic: "ذَهَبَ مُحَمَّدٌ", meaning: "Dhahaba Muhammadun — Muhammad ketdi (ذَهَبَ — o'tuvchi bo'lmagan fe'l (to'ldiruvchisiz))" },
                    { arabic: "فَتَحَ الطَّالِبُ الْبَابَ", meaning: "Fataha al-tālibu al-bāba — Talaba eshikni ochdi (فَتَحَ — o'tuvchi fe'l)" },
                    { arabic: "جَلَسَ الْمُعَلِّمُ", meaning: "Jalasa al-mu'allimu — O'qituvchi o'tirdi (جَلَسَ — o'tuvchi bo'lmagan fe'l)" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "فِعْلٌ مُتَعَدٍّ", meaning: "fi'lun muta'addin — O'tuvchi fe'l" },
                    { arabic: "فِعْلٌ لَازِمٌ", meaning: "fi'lun lāzimun — O'tuvchi bo'lmagan fe'l" },
                    { arabic: "مَفْعُولٌ بِهِ", meaning: "maf'ūlun bihi — To'g'ri to'ldiruvchi" },
                    { arabic: "تَعَدٍّ", meaning: "ta'addin — O'tuvchilik" },
                    { arabic: "لُزُومٌ", meaning: "luzūmun — O'tuvchi bo'lmaslik" },
                    { arabic: "جَلَسَ", meaning: "jalasa — U o'tirdi" },
                    { arabic: "قَامَ", meaning: "qāma — U turdi" },
                    { arabic: "نَامَ", meaning: "nāma — U uxladi" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "33-1",
            type: "multiple-choice",
            question: "Qaysi fe'l to'ldiruvchi talab qiladi?",
            options: ["اللَّازِمُ", "الْمُتَعَدِّي", "Ikkalasi", "Hech biri"],
            correctAnswer: "الْمُتَعَدِّي"
        },

        {
            id: "33-2",
            type: "multiple-choice",
            question: "Qaysi fe'l to'ldiruvchi talab qilmaydi?",
            options: ["الْمُتَعَدِّي", "اللَّازِمُ", "Ikkalasi", "Hech biri"],
            correctAnswer: "اللَّازِمُ"
        },

        {
            id: "33-3",
            type: "multiple-choice",
            question: "Qaysi fe'l majhulga aylantirilishi mumkin?",
            options: ["Faqat اللَّازِمُ", "Faqat الْمُتَعَدِّي", "Ikkalasi", "Hech biri"],
            correctAnswer: "Faqat الْمُتَعَدِّي"
        },

        {
            id: "33-4",
            type: "multiple-choice",
            question: "Qaysi fe'l o'tuvchi hisoblanadi?",
            options: ["ذَهَبَ", "جَلَسَ", "كَتَبَ", "نَامَ"],
            correctAnswer: "كَتَبَ"
        },

        {
            id: "33-5",
            type: "multiple-choice",
            question: "Tarjima qiling: كَتَبَ الطَّالِبُ الدَّرْسَ",
            options: ["Talaba darsni yozdi", "Talaba dars yozyapti", "Talaba dars o'qiyapti", "Talaba darsni ochdi"],
            correctAnswer: "Talaba darsni yozdi"
        },

        {
            id: "33-6",
            type: "multiple-choice",
            question: "Tarjima qiling: جَلَسَ الْمُعَلِّمُ عَلَى الْكُرْسِيِّ",
            options: ["O'qituvchi stulda turibdi", "O'qituvchi stulga o'tirdi", "O'qituvchi stulni qo'ydi", "O'qituvchi stul yonida"],
            correctAnswer: "O'qituvchi stulga o'tirdi"
        },

        {
            id: "33-7",
            type: "multiple-choice",
            question: "Tarjimasi nima: قَامَ مُحَمَّدٌ?",
            options: ["Muhammad o'tirdi", "Muhammad turdi", "Muhammad ketdi", "Muhammad uxladi"],
            correctAnswer: "Muhammad turdi"
        },

        {
            id: "33-8",
            type: "multiple-choice",
            question: "فِعْلٌ مُتَعَدٍّ nima degani?",
            options: ["O'tuvchi bo'lmagan fe'l", "O'tuvchi fe'l", "Holat fe'li", "Yordamchi fe'l"],
            correctAnswer: "O'tuvchi fe'l"
        },

        {
            id: "33-9",
            type: "multiple-choice",
            question: "Qaysi so'z 'u o'tirdi' ma'nosini bildiradi?",
            options: ["قَامَ", "جَلَسَ", "نَامَ", "ذَهَبَ"],
            correctAnswer: "جَلَسَ"
        },

        {
            id: "33-10",
            type: "multiple-choice",
            question: "مَفْعُولٌ بِهِ nima degani?",
            options: ["Ega", "To'g'ri to'ldiruvchi", "Bilvosita to'ldiruvchi", "Hol"],
            correctAnswer: "To'g'ri to'ldiruvchi"
        }
    ]
};
