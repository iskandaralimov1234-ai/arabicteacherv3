import { Lesson } from '../../types';

export const lesson20: Lesson = {
    id: 20,
    title: "20-dars: 3-10 Sonlari (Muannas)",
    grammar: "Numbers 3-10 with Feminine Nouns",
    theory: {
        sections: [
            {
                title: "🔢 3-10 Sonlari Muannas Jinsida",
                content: "Biz o'rgandikki, muzakkar jinsidagi so'zlar bilan sonlar «muannas» shaklda (ة bilan) keladi.\n**Muannas (ayol) jinsidagi** so'zlar bilan esa buning aksi: sonlar «muzakkar» shaklda (ة SIZ) keladi!\nBunga «Sonning jinsda sanalmishga teskari bo'lishi» deyiladi.",
                examples: [
                    { arabic: "ثَلَاثُ طَالِبَاتٍ", meaning: "Uchta talaba qiz (Salasu - ة yo'q)" },
                    { arabic: "أَرْبَعُ سَيَّارَاتٍ", meaning: "To'rtta mashina (Arba'u - ة yo'q)" },
                    { arabic: "عَشْرُ نِسَاءٍ", meaning: "O'nta ayol ('Ashru - ة yo'q)" }
                ]
            },
            {
                title: "📏 Sanalmish Qoidasi",
                content: "Sanalmish (Ma'dud) **Ko'plikda** va **Qaratqich kelishigida** (Majrur - Kasra/Tanvin kasra) bo'lishi shart.\nBu Izofaga o'xshaydi: Son — Mudof, Sanalmish — Mudof ilayhi.",
                examples: [
                    { arabic: "خَمْسُ صَلَوَاتٍ", meaning: "Besh vaqt namoz" },
                    { arabic: "سِتُّ مُمَرِّضَاتٍ", meaning: "Oltita hamshira" }
                ]
            },
            {
                title: "🕵️ Jinsni qanday aniqlaymiz?",
                content: "Xato qilmaslik uchun har doim so'zning **Birlik shakliga** qarang.\nMasalan, «Hada'iq» (Bog'lar) — muannas, chunki birligi «Hadiqa» (Bog'). Demak, son ة siz bo'ladi.",
                examples: [
                    { arabic: "هَذِهِ ثَلَاثُ حَدَائِقَ", meaning: "Bular uchta bog'" },
                    { arabic: "تِسْعُ آيَاتٍ", meaning: "To'qqizta oyat (Oyat so'zi muannas)" }
                ]
            },
            {
                title: "📝 Jadval (3-10)",
                content: "- 3: **ثَلَاثُ**\n- 4: **أَرْبَعُ**\n- 5: **خَمْسُ**\n- 6: **سِتُّ**\n- 7: **سَبْعُ**\n- 8: **ثَمَانِي** (maxsus shakl)\n- 9: **تِسْعُ**\n- 10: **عَشْرُ**",
                examples: [
                    { arabic: "فِي الْبَيْتِ ثَمَانِي غُرَفٍ", meaning: "Uyda sakkizta xona bor" },
                    { arabic: "عِنْدِي سَبْعُ بَنَاتٍ", meaning: "Mening yettita qizim bor" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "20-1",
            type: "multiple-choice",
            question: "To'g'ri birikmani tanlang: «3 ta talaba qiz»",
            options: ["ثَلَاثَةُ طَالِبَاتٍ", "ثَلَاثُ طَالِبَاتٍ", "ثَلَاثُ طَالِبَةٍ"],
            correctAnswer: "ثَلَاثُ طَالِبَاتٍ"
        },
        {
            id: "20-2",
            type: "word-scramble",
            question: "Tuzing: «Yetti kecha» (Layalin - Layla ko'pligi)",
            arabic: "سَبْعُ لَيَالٍ",
            scrambledWords: ["لَيَالٍ", "سَبْعُ"],
            correctAnswer: "سَبْعُ لَيَالٍ"
        },
        {
            id: "20-3",
            type: "multiple-choice",
            question: "«5 ta mashina» (Sayyara - muannas)",
            options: ["خَمْسَةُ سَيَّارَاتٍ", "خَمْسُ سَيَّارَاتٍ", "خَمْسُ سَيَّارَةٍ"],
            correctAnswer: "خَمْسُ سَيَّارَاتٍ"
        },
        {
            id: "20-4",
            type: "matching",
            question: "Sonni sanalmish bilan bog'lang",
            pairs: [
                { "arabic": "ثَلَاثُ", "meaning": "Qizlar" },
                { "arabic": "ثَلَاثَةُ", "meaning": "O'g'il bolalar" },
                { "arabic": "عَشْرُ", "meaning": "Ayollar" },
                { "arabic": "عَشَرَةُ", "meaning": "Erkaklar" }
            ]
        },
        {
            id: "20-5",
            type: "multiple-choice",
            question: "«G'uraf» (Xonalar) so'zining jinsi nima?",
            options: ["Muzakkar", "Muannas (birligi G'urfa)", "Jinsi yo'q"],
            correctAnswer: "Muannas (birligi G'urfa)"
        },
        {
            id: "20-6",
            type: "multiple-choice",
            question: "Muannas sanalmish oldida «8» qanday yoziladi?",
            options: ["ثَمَانِيَةُ", "ثَمَانِي", "ثَمَانٍ"],
            correctAnswer: "ثَمَانِي"
        },
        {
            id: "20-7",
            type: "word-scramble",
            question: "Tuzing: «Uning to'rtta opasi bor»",
            arabic: "لَهُ أَرْبَعُ أَخَوَاتٍ",
            scrambledWords: ["أَخَوَاتٍ", "أَرْبَعُ", "لَهُ"],
            correctAnswer: "لَهُ أَرْبَعُ أَخَوَاتٍ"
        },
        {
            id: "20-8",
            type: "multiple-choice",
            question: "Tanlang: «6 soat» (Soat - Sa'a)",
            options: ["سِتُّ سَاعَاتٍ", "سِتَّةُ سَاعَاتٍ", "سِتُّ سَاعَةٍ"],
            correctAnswer: "سِتُّ سَاعَاتٍ"
        },
        {
            id: "20-9",
            type: "multiple-choice",
            question: "«Kasalxonada 10 ta shifokor ayol bor»",
            options: ["فِي الْمُسْتَشْفَى عَشَرَةُ طَبِيبَاتٍ", "فِي الْمُسْتَشْفَى عَشْرُ طَبِيبَاتٍ", "فِي الْمُسْتَشْفَى عَشْرُ أَطِبَّاءَ"],
            correctAnswer: "فِي الْمُسْتَشْفَى عَشْرُ طَبِيبَاتٍ"
        },
        {
            id: "20-10",
            type: "word-scramble",
            question: "Tuzing: «Biz 9 ta oyat o'qidik»",
            arabic: "قَرَأْنَا تِسْعَ آيَاتٍ",
            scrambledWords: ["تِسْعَ", "آيَاتٍ", "قَرَأْنَا"],
            correctAnswer: "قَرَأْنَا تِسْعَ آيَاتٍ"
        }
    ]
};
