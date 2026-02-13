import { Lesson } from '../../types';

export const lesson24: Lesson = {
    id: 24,
    title: "24-dars: «Albatta» (إِنَّ) va uning sheriklari",
    grammar: "Inna (Indeed), Lalla (Maybe), Dhu (Possessor)",
    theory: {
        sections: [
            {
                title: "💎 «Albatta» (إِنَّ) yuklamasi",
                content: "**إِنَّ** (Inna) so'zi ta'kidlash uchun ishlatiladi va «Albatta», «Haqiqatan» deb tarjima qilinadi.\nU gapning egasini (Mubtado) **Tushum kelishigiga** (Nasb — Fatha) o'zgartiradi.",
                examples: [
                    { arabic: "الْبَيْتُ جَمِيلٌ", meaning: "Uy chiroyli (Damma)" },
                    { arabic: "إِنَّ الْبَيْتَ جَمِيلٌ", meaning: "Albatta, uy chiroyli (Fatha)" },
                    { arabic: "إِنَّ اللهَ غَفُورٌ", meaning: "Albatta, Alloh Kechirguvchidir" }
                ]
            },
            {
                title: "🤔 «Shoyadki/Balki» (لَعَلَّ)",
                content: "**لَعَلَّ** (La'alla) — Innaning «singlisi». U umid yoki xavfni bildiradi («Shoyadki», «Balki», «Umid qilamanki»).\nU ham mubtadoni **Tushum kelishigiga** (Fatha) qo'yadi.",
                examples: [
                    { arabic: "لَعَلَّ الْمُدَرِّسَ مَرِيضٌ", meaning: "Balki o'qituvchi kasaldir" },
                    { arabic: "لَعَلَّ الْإِمْتِحَانَ سَهْلٌ", meaning: "Shoyadki imtihon oson bo'lsa" }
                ]
            },
            {
                title: "🎩 Egasi (ذُو)",
                content: "**ذُو** (Zu) so'zi «Ega» yoki «...si bor» degan ma'noni anglatadi. U har doim Mudof bo'lib keladi.\n- **ذُو مَالٍ** — Mol egasi (Boy)\n- **ذُو خُلُقٍ** — Xulq egasi (Odobli)",
                examples: [
                    { arabic: "مُدِيرُنَا ذُو قَامَةٍ طَوِيلَةٍ", meaning: "Bizning direktor baland bo'yli (bo'y egasi)" },
                    { arabic: "هَذَا الطَّالِبُ ذُو خُلُقٍ حَسَنٍ", meaning: "Bu talaba chiroyli xulq egasidir" }
                ]
            },
            {
                title: "🔢 100 va 1000 sonlari",
                content: "**مِائَةٌ** (Mi'atun — 100) va **أَلْفٌ** (Alfun — 1000) sonlari jinsga qarab o'zgarmaydi.\nUlardan keyin kelgan sanalmish **Birlik** va **Qaratqich kelishigida** (Mudof ilayhi kabi) bo'ladi.",
                examples: [
                    { arabic: "مِائَةُ رَجُلٍ", meaning: "100 ta erkak" },
                    { arabic: "مِائَةُ امْرَأَةٍ", meaning: "100 ta ayol" },
                    { arabic: "أَلْفُ دُولَارٍ", meaning: "1000 dollar" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "24-1",
            type: "multiple-choice",
            question: "Qaysi jumla grammatik jihatdan to'g'ri?",
            options: ["إِنَّ الْبَيْتُ جَمِيلٌ", "إِنَّ الْبَيْتَ جَمِيلٌ", "إِنَّ الْبَيْتِ جَمِيلٌ"],
            correctAnswer: "إِنَّ الْبَيْتَ جَمِيلٌ"
        },
        {
            id: "24-2",
            type: "word-scramble",
            question: "Tuzing: «Shoyadki imtihon oson bo'lsa»",
            arabic: "لَعَلَّ الْإِمْتِحَانَ سَهْلٌ",
            scrambledWords: ["سَهْلٌ", "الْإِمْتِحَانَ", "لَعَلَّ"],
            correctAnswer: "لَعَلَّ الْإِمْتِحَانَ سَهْلٌ"
        },
        {
            id: "24-3",
            type: "multiple-choice",
            question: "«Boy» (Mol egasi) qanday aytiladi?",
            options: ["ذُو مَالٍ", "ذُو مَالًا", "ذُو مَالٌ"],
            correctAnswer: "ذُو مَالٍ"
        },
        {
            id: "24-4",
            type: "matching",
            question: "So'zni ma'nosi bilan bog'lang",
            pairs: [
                { "arabic": "إِنَّ", "meaning": "Albatta / Haqiqatan" },
                { "arabic": "لَعَلَّ", "meaning": "Balki / Shoyadki" },
                { "arabic": "ذُو", "meaning": "Egasi" },
                { "arabic": "أَلْفٌ", "meaning": "Ming" }
            ]
        },
        {
            id: "24-5",
            type: "multiple-choice",
            question: "To'g'ri shaklni tanlang: «100 ta kitob»",
            options: ["مِائَةُ كُتُبٍ", "مِائَةُ كِتَابٍ", "مِائَةُ كِتَابًا"],
            correctAnswer: "مِائَةُ كِتَابٍ"
        },
        {
            id: "24-6",
            type: "multiple-choice",
            question: "«Zayd och». «Albatta»ni qo'shing:",
            options: ["إِنَّ زَيْدٌ جَوْعَانُ", "إِنَّ زَيْدًا جَوْعَانُ", "إِنَّ زَيْدٍ جَوْعَانُ"],
            correctAnswer: "إِنَّ زَيْدًا جَوْعَانُ"
        },
        {
            id: "24-7",
            type: "word-scramble",
            question: "Tuzing: «Albatta Alloh biz bilan»",
            arabic: "إِنَّ اللهَ مَعَنَا",
            scrambledWords: ["مَعَنَا", "اللهَ", "إِنَّ"],
            correctAnswer: "إِنَّ اللهَ مَعَنَا"
        },
        {
            id: "24-8",
            type: "multiple-choice",
            question: "Bu ko'ylak «qimmat» (G'olin):",
            options: ["غَالِيٌ", "غَالٍ", "غَالِيًا"],
            correctAnswer: "غَالٍ"
        },
        {
            id: "24-9",
            type: "multiple-choice",
            question: "So'roqdagi «Yoki»: «Sen shifokormisan YOKI muhandis?»",
            options: ["أَ طَبِيبٌ أَنْتَ أَمْ مُهَنْدِسٌ؟", "أَ طَبِيبٌ أَنْتَ أَوْ مُهَنْدِسٌ؟"],
            correctAnswer: "أَ طَبِيبٌ أَنْتَ أَمْ مُهَنْدِسٌ؟"
        },
        {
            id: "24-10",
            type: "word-scramble",
            question: "Tuzing: «Bu ko'ylakning yengi qisqa»",
            arabic: "هَذَا الْقَمِيصُ ذُو كُمٍّ قَصِيرٍ",
            scrambledWords: ["كُمٍّ", "هَذَا", "ذُو", "قَصِيرٍ", "الْقَمِيصُ"],
            correctAnswer: "هَذَا الْقَمِيصُ ذُو كُمٍّ قَصِيرٍ"
        }
    ]
};
