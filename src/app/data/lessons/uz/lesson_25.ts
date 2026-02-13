import { Lesson } from '../../types';

export const lesson25: Lesson = {
    id: 25,
    title: "25-dars: Inkor fe'li «Laysa» (لَيْسَ) va «Lekin» (لَكِنَّ)",
    grammar: "Laisa (Is not), Lakinna (But)",
    theory: {
        sections: [
            {
                title: "⛔ Inkor fe'li «Laysa» (لَيْسَ)",
                content: "**لَيْسَ** (Laysa) — «Emas» deb tarjima qilinadi. Bu fe'l kesimni (Xabar) **Tushum kelishigiga** (Nasb — Fatha) qo'yadi.\nU «Kāna/Bo'ldi» fe'li kabi ishlaydi.",
                examples: [
                    { arabic: "الْبَيْتُ جَدِيدٌ", meaning: "Uy yangi" },
                    { arabic: "لَيْسَ الْبَيْتُ جَدِيدًا", meaning: "Uy yangi EMAS (Jadidan - Fatha)" },
                    { arabic: "لَيْسَ الْمُدَرِّسُ كَبِيرًا", meaning: "O'qituvchi keksa emas" }
                ]
            },
            {
                title: "🖇️ «Bi» (بِـ) bilan kelishi",
                content: "Ko'pincha «Laysa»ning xabariga **بِـ** (Bi) harfi qo'shiladi. Bunda so'z **Qaratqich kelishigida** (Kasra) bo'ladi. Ma'nosi o'zgarmaydi, faqat kuchaytiriladi.",
                examples: [
                    { arabic: "لَيْسَ الْبَيْتُ بِجَدِيدٍ", meaning: "Uy yangi emas (Bi-Jadidin)" },
                    { arabic: "أَ لَسْتَ بِمُهَنْدِسٍ؟", meaning: "Sen muhandis emasmisan?" }
                ]
            },
            {
                title: "☝️ «Lekin» (لَكِنَّ)",
                content: "**لَكِنَّ** (Lakinna) — Innaning «singlisi». U «Lekin», «Biroq» deb tarjima qilinadi.\nU o'zidan keyin kelgan so'zni (yoki olmoshni) **Tushum kelishigiga** (Nasb — Fatha) qo'yadi.",
                examples: [
                    { arabic: "الْبَيْتُ جَمِيلٌ لَكِنَّهُ صَغِيرٌ", meaning: "Uy chiroyli, LEKIN u kichkina" },
                    { arabic: "أَنَا طَالِبٌ لَكِنَّ أَخِي طَبِيبٌ", meaning: "Men talabaman, LEKIN akam shifokor" }
                ]
            },
            {
                title: "💡 Yangi so'zlar",
                content: "Ushbu antonimlarni yodlang:\n- **غَالٍ** (G'olin) — Qimmat ↔ **رَخِيصٌ** (Roxisun) — Arzon\n- **ذَكِيٌّ** (Zakiyyun) — Aqlli ↔ **غَبِيٌّ** (G'obiyyun) — Ahmoq\n- **مُتَزَوِّجٌ** (Mutazavvijun) — Uylangan ↔ **أَعْزَبُ** (A'zabu) — Bo'ydoq",
                examples: [
                    { arabic: "هَذَا الْقَلَمُ غَالٍ", meaning: "Bu ruchka qimmat" },
                    { arabic: "هُوَ ذَكِيٌّ جِدًّا", meaning: "U juda aqlli" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "25-1",
            type: "multiple-choice",
            question: "To'g'ri jumlani tanlang (Bi-siz):",
            options: ["لَيْسَ الْبَيْتُ كَبِيرًا", "لَيْسَ الْبَيْتُ كَبِيرٌ", "لَيْسَ الْبَيْتُ كَبِيرٍ"],
            correctAnswer: "لَيْسَ الْبَيْتُ كَبِيرًا"
        },
        {
            id: "25-2",
            type: "multiple-choice",
            question: "To'g'ri jumlani tanlang (Bi bilan):",
            options: ["لَيْسَ الْبَيْتُ بِكَبِيرًا", "لَيْسَ الْبَيْتُ بِكَبِيرٌ", "لَيْسَ الْبَيْتُ بِكَبِيرٍ"],
            correctAnswer: "لَيْسَ الْبَيْتُ بِكَبِيرٍ"
        },
        {
            id: "25-3",
            type: "word-scramble",
            question: "Tuzing: «Muhammad shifokor, lekin Zayd hamshira (erkak)»",
            arabic: "مُحَمَّدٌ طَبِيبٌ لَكِنَّ زَيْدًا مُمَرِّضٌ",
            scrambledWords: ["طَبِيبٌ", "لَكِنَّ", "مُحَمَّدٌ", "مُمَرِّضٌ", "زَيْدًا"],
            correctAnswer: "مُحَمَّدٌ طَبِيبٌ لَكِنَّ زَيْدًا مُمَرِّضٌ"
        },
        {
            id: "25-4",
            type: "matching",
            question: "Antonimlarni moslang",
            pairs: [
                { "arabic": "غَالٍ", "meaning": "Arzon" },
                { "arabic": "ذَكِيٌّ", "meaning": "Ahmoq" },
                { "arabic": "مُتَزَوِّجٌ", "meaning": "Bo'ydoq" },
                { "arabic": "كَبِيرٌ", "meaning": "Kichkina" }
            ]
        },
        {
            id: "25-5",
            type: "multiple-choice",
            question: "«Bu kitob arzon» qanday aytiladi?",
            options: ["هَذَا الْكِتَابُ رَخِيصٌ", "هَذَا الْكِتَابُ غَالٍ", "هَذَا الْكِتَابُ رَخِيصًا"],
            correctAnswer: "هَذَا الْكِتَابُ رَخِيصٌ"
        },
        {
            id: "25-6",
            type: "multiple-choice",
            question: "«Qimmat» (Garolin) Al-siz:",
            options: ["غَالِيٌ", "غَالٍ", "غَالِيًا"],
            correctAnswer: "غَالٍ"
        },
        {
            id: "25-7",
            type: "word-scramble",
            question: "Tuzing: «Sen talaba emasmisan?»",
            arabic: "أَ لَسْتَ بِطَالِبٍ؟",
            scrambledWords: ["بِطَالِبٍ؟", "أَ", "لَسْتَ"],
            correctAnswer: "أَ لَسْتَ بِطَالِبٍ؟"
        },
        {
            id: "25-8",
            type: "multiple-choice",
            question: "«...lekin u dangasa»",
            options: ["لَكِنَّهُ كَسْلَانُ", "لَكِنَّهُ كَسْلَانٍ", "لَكِنَّهُ كَسْلَانٌ"],
            correctAnswer: "لَكِنَّهُ كَسْلَانُ"
        },
        {
            id: "25-9",
            type: "multiple-choice",
            question: "Tarjima qiling: «Zayd kasal emas»",
            options: ["لَيْسَ زَيْدٌ مَرِيضًا", "لَيْسَ زَيْدًا مَرِيضٌ", "لَيْسَ زَيْدٌ مَرِيضٌ"],
            correctAnswer: "لَيْسَ زَيْدٌ مَرِيضًا"
        },
        {
            id: "25-10",
            type: "word-scramble",
            question: "Tuzing: «Amerika katta, lekin u uzoq»",
            arabic: "أَمْرِيكَا كَبِيرَةٌ لَكِنَّهَا بَعِيدَةٌ",
            scrambledWords: ["لَكِنَّهَا", "أَمْرِيكَا", "بَعِيدَةٌ", "كَبِيرَةٌ"],
            correctAnswer: "أَمْرِيكَا كَبِيرَةٌ لَكِنَّهَا بَعِيدَةٌ"
        }
    ]
};
