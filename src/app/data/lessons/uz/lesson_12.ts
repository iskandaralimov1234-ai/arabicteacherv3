import { Lesson } from '../../types';

export const lesson12: Lesson = {
    id: 12,
    title: "12-dars: أَنْتِ وَ الذَّهَبْتِ (Muannas jinsi: Olmoshlar va Fe'llar)",
    grammar: "Feminine Pronouns & Feminine Past Tense Verbs",
    theory: {
        sections: [
            {
                title: "👩 «Sen» olmoshi (muannas jinsida): أَنْتِ",
                content: "Oldingi darslarda biz erkaklar uchun **أَنْتَ** (Anta) — «Sen» olmoshini o'rgangan edik.\nAyollar uchun esa oxiri kasra bilan tugaydigan **أَنْتِ** (Anti) ishlatiladi.\n\nBu olmosh bitta ayol kishiga yoki qiz bolaga murojaat qilganda qo'llaniladi.",
                examples: [
                    { arabic: "أَنْتِ مَرِيضَةٌ؟", meaning: "Sen kasalmiisan? (ayol kishidan so'rash)" },
                    { arabic: "أَنْتِ طَبِيبَةٌ؟", meaning: "Sen shifokormisan? (ayol kishiga)" },
                    { arabic: "أَيْنَ أَنْتِ يَا مَرْيَمُ؟", meaning: "Qayerdasan, ey Maryam?" }
                ]
            },
            {
                title: "🔙 O'tgan zamon: ذَهَبْتِ (Siz bordingiz - ayolga)",
                content: "Ayol kishiga nisbatan «Siz qildingiz» deb aytish uchun fe'lning oxiriga **-ti** (ـتِ) qo'shimchasi qo'shiladi.\n\nMasalan:\n- ذَهَبْتَ (zahabta) ➡️ Siz bordingiz (er.)\n- **ذَهَبْتِ** (zahabti) ➡️ Siz bordingiz (ay.)",
                examples: [
                    { arabic: "أَيْنَ ذَهَبْتِ يَا زَيْنَبُ؟", meaning: "Qayerga bording, ey Zaynab?" },
                    { arabic: "أَخَرَجْتِ مِنَ الْفَصْلِ؟", meaning: "Sinfdan chiqdingmi?" },
                    { arabic: "أَجَلَسْتِ عَلَى الْكُرْسِيِّ؟", meaning: "Kursiga o'tirdingmi?" }
                ]
            },
            {
                title: "🔗 Muannas bog'lovchi ismi: الَّتِي (Qaysiki/Ushbu)",
                content: "9-darsda biz muzakkar jins uchun **الَّذِي** (Al-laziy - 'qaysiki') so'zini o'rgangan edik.\nMuannas jinsidagi so'zlar uchun **الَّتِي** (Al-latiy) ishlatiladi.",
                examples: [
                    { arabic: "الْبِنْتُ الَّتِي فِي الْفَصْلِ", meaning: "Sinfdagi (sinfda bo'lgan) qiz" },
                    { arabic: "السَّاعَةُ الَّتِي عَلَى الْمَكْتَبِ", meaning: "Parta ustidagi soat (soat - muan. jinsida)" },
                    { arabic: "السيارة التي خَرَجَت الآن", meaning: "Hozirgina chiqqan mashina" }
                ]
            },
            {
                title: "❓ So'roq so'zlari",
                content: "Ushbu darsda ayol jinsiga nisbatan ko'proq **لِمَن** (Liman) — «Kimniki» va **أَيْنَ** (Ayna) — «Qayerda» so'zlari ishlatiladi.",
                examples: [
                    { arabic: "لِمَنْ هَذِهِ السَّاعَةُ؟", meaning: "Bu soat kimniki?" },
                    { arabic: "أَهِيَ لَكِ يَا مَرْيَمُ؟", meaning: "U senikimi, ey Maryam? (LA-KI munosabati)" },
                    { arabic: "أَيْنَ أُمُّكِ الآنَ؟", meaning: "Onang hozir qayerda?" }
                ]
            },
            {
                title: "🏠 Muannas jinsidagi narsalar",
                content: "Esingizda bo'lsin, agar so'z «to-marbuta» (**ة**) bilan tugasa, u deyarli har doim muannas jinsidadir. Unga nisbatan **أَنْتِ**, **هِيَ** va **الَّتِي** kabi so'zlarni ishlatish kerak.",
                examples: [
                    { arabic: "الْمَدْرَسَةُ الَّتِي أَمَامَ الْمَسْجِدِ", meaning: "Masjid oldidagi maktab" },
                    { arabic: "هَذِهِ حَقِيبَتُكِ؟", meaning: "Bu sening sumkangmi? (ayol kishiga)" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "12-1",
            type: "multiple-choice",
            question: "Ayol kishiga «Sen» deb qanday aytiladi?",
            options: ["أَنْتَ", "أَنْتِ", "أَنْتُ"],
            correctAnswer: "أَنْتِ"
        },
        {
            id: "12-2",
            type: "multiple-choice",
            question: "To'g'ri fe'l shaklini tanlang: «Sen ketding» (ayol kishiga)",
            options: ["ذَهَبْتَ", "ذَهَبْتِ", "ذَهَبَتْ"],
            correctAnswer: "ذَهَبْتِ"
        },
        {
            id: "12-3",
            type: "word-scramble",
            question: "Jumlani tuzing: «Ey Maryam, qayerga bording?»",
            arabic: "أَيْنَ ذَهَبْتِ يَا مَرْيَمُ؟",
            scrambledWords: ["مَرْيَمُ؟", "ذَهَبْتِ", "أَيْنَ", "يَا"],
            correctAnswer: "أَيْنَ ذَهَبْتِ يَا مَرْيَمُ؟"
        },
        {
            id: "12-4",
            type: "multiple-choice",
            question: "Qaysi so'z «qaysiki» (muannas jinsida) ma'nosini beradi?",
            options: ["الَّذِي", "الَّتِي", "هَذِهِ"],
            correctAnswer: "الَّتِي"
        },
        {
            id: "12-5",
            type: "word-scramble",
            question: "Tuzing: «Sinfdagi qiz»",
            arabic: "الْبِنْتُ الَّتِي فِي الْفَصْلِ",
            scrambledWords: ["الْفَصْلِ", "فِي", "الَّتِي", "الْبِنْتُ"],
            correctAnswer: "الْبِنْتُ الَّتِي فِي الْفَصْلِ"
        },
        {
            id: "12-6",
            type: "multiple-choice",
            question: "Qiz bolaga murojaat qilib «Onang» deb qanday aytiladi?",
            options: ["أُمُّكَ", "أُمُّكِ", "أُمُّهَا"],
            correctAnswer: "أُمُّكِ"
        },
        {
            id: "12-7",
            type: "multiple-choice",
            question: "«Bu soat kimniki?» tarjimasini tanlang:",
            options: ["لِمَنْ هَذِهِ السَّاعَةُ؟", "أَيْنَ هَذِهِ السَّاعَةُ؟", "مَنْ هَذِهِ السَّاعَةُ؟"],
            correctAnswer: "لِمَنْ هَذِهِ السَّاعَةُ؟"
        },
        {
            id: "12-8",
            type: "multiple-choice",
            question: "Ayol kishiga murojaatda fe'l oxiri qanday tugaydi (masalan, 'qilding')?",
            options: ["Fatha (ـتَ)", "Kasra (ـتِ)", "Sukun (ـتْ)"],
            correctAnswer: "Kasra (ـتِ)"
        },
        {
            id: "12-9",
            type: "word-scramble",
            question: "Tuzing: «Sen Madinadanmisan?» (ayol kishiga)",
            arabic: "أَأَنْتِ مِنَ الْمَدِينَةِ؟",
            scrambledWords: ["الْمَدِينَةِ؟", "مِنَ", "أَأَنْتِ"],
            correctAnswer: "أَأَنْتِ مِنَ الْمَدِينَةِ؟"
        },
        {
            id: "12-10",
            type: "multiple-choice",
            question: "«السَّاعَةُ الَّتِي عَلَى الْمَكْتَبِ» qanday tarjima qilinadi?",
            options: ["Parta ustidagi soat", "Parta ustidagi ruchka", "Sening soating partada"],
            correctAnswer: "Parta ustidagi soat"
        }
    ]
};
