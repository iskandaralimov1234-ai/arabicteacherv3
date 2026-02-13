import { Lesson } from '../../types';

export const lesson15: Lesson = {
    id: 15,
    title: "15-dars: Ko'plik muannas (أَنْتُنَّ)",
    grammar: "Feminine Plural Pronouns & Verbs",
    theory: {
        sections: [
            {
                title: "👥 «Sizlar» (ayollar) olmoshi",
                content: "Bir guruh ayollarga murojaat qilish uchun **أَنْتُنَّ** (Antunna) — «Sizlar» (muannas) olmoshi ishlatiladi.\nBu erkaklar uchun ishlatiladigan «Antum»ning muannas shaklidir.",
                examples: [
                    { arabic: "أَنْتُنَّ طَالِبَاتٌ", meaning: "Sizlar talaba qizlarsiz" },
                    { arabic: "أَنْتُنَّ مُدَرِّسَاتٌ", meaning: "Sizlar o'qituvchi ayollarsiz" },
                    { arabic: "مَنْ أَنْتُنَّ؟", meaning: "Sizlar kimsiz?" }
                ]
            },
            {
                title: "🔗 Birikma olmosh «Sizlarning» (ayollar)",
                content: "Agar ayollarga qarata «Sizlarning uyingiz» demoqchi bo'lsak, **ـكُنَّ** (-kunna) qo'shimchasini ishlatamiz.",
                examples: [
                    { arabic: "بَيْتُكُنَّ", meaning: "Sizlarning uyingiz" },
                    { arabic: "هَذِهِ مَدْرَسَتُكُنَّ", meaning: "Bu sizlarning maktabingiz" },
                    { arabic: "أَيْنَ أُخْتُكُنَّ؟", meaning: "Opangiz qayerda?" }
                ]
            },
            {
                title: "🏃‍♀️ O'tgan zamon fe'llari (Ular — ayollar)",
                content: "Bir guruh ayollarning harakatini (Ular ketdilar) ifodalash uchun fe'lga **ـْنَ** (Nun al-Niswa) qo'shiladi:\n\n- **ذَهَبْنَ** (Zahabna) — Ular (ayollar) ketdilar\n- **خَرَجْنَ** (Xarajna) — Ular chiqdilar",
                examples: [
                    { arabic: "الطَّالِبَاتُ ذَهَبْنَ", meaning: "Talaba qizlar ketdilar" },
                    { arabic: "ذَهَبْنَ إِلَى الْفَصْلِ", meaning: "Ular sinfga ketdilar" }
                ]
            },
            {
                title: "⏱ Vaqt zarflari: قَبْلَ va بَعْدَ",
                content: "**قَبْلَ** (Qabla - Oldin) va **بَعْدَ** (Ba'da - Keyin) so'zlari har doim Idofa holatida keladi (keyingi so'z karsali bo'ladi).\nOdatda ular fathali bo'ladi.",
                examples: [
                    { arabic: "قَبْلَ الصَّلَاةِ", meaning: "Namozdan oldin" },
                    { arabic: "بَعْدَ الدَّرْسِ", meaning: "Darsdan keyin" },
                    { arabic: "قَبْلَ الأَذَانِ", meaning: "Azondan oldin" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "15-1",
            type: "multiple-choice",
            question: "Ayollarga qarata «Sizlar» qanday aytiladi?",
            options: ["أَنْتُمْ", "أَنْتُنَّ", "هُنَّ"],
            correctAnswer: "أَنْتُنَّ"
        },
        {
            id: "15-2",
            type: "multiple-choice",
            question: "«Sizlarning kitobingiz» (ayollarga):",
            options: ["كِتَابُكُمْ", "كِتَابُكُنَّ", "كِتَابُهُمْ"],
            correctAnswer: "كِتَابُكُنَّ"
        },
        {
            id: "15-3",
            type: "word-scramble",
            question: "Tuzing: «Maktabingiz qayerda, ey opa-singillar?»",
            arabic: "أَيْنَ مَدْرَسَتُكُنَّ يَا أَخَوَاتُ؟",
            scrambledWords: ["يَا", "أَخَوَاتُ؟", "مَدْرَسَتُكُنَّ", "أَيْنَ"],
            correctAnswer: "أَيْنَ مَدْرَسَتُكُنَّ يَا أَخَوَاتُ؟"
        },
        {
            id: "15-4",
            type: "multiple-choice",
            question: "«Ular (ayollar) chiqdilar» qanday aytiladi?",
            options: ["خَرَجُوا", "خَرَجْنَ", "خَرَجَتْ"],
            correctAnswer: "خَرَجْنَ"
        },
        {
            id: "15-5",
            type: "multiple-choice",
            question: "Tarjima qiling: «Darsdan oldin»",
            options: ["قَبْلَ الدَّرْسِ", "بَعْدَ الدَّرْسِ", "فِي الدَّرْسِ"],
            correctAnswer: "قَبْلَ الدَّرْسِ"
        },
        {
            id: "15-6",
            type: "word-scramble",
            question: "Tuzing: «Biz namozdan keyin ketdik»",
            arabic: "ذَهَبْنَا بَعْدَ الصَّلَاةِ",
            scrambledWords: ["الصَّلَاةِ", "بَعْدَ", "ذَهَبْنَا"],
            correctAnswer: "ذَهَبْنَا بَعْدَ الصَّلَاةِ"
        },
        {
            id: "15-7",
            type: "matching",
            question: "Fe'l va egasini moslashtiring",
            pairs: [
                { "arabic": "ذَهَبُوا", "meaning": "Ular (Muzakkar) ketdilar" },
                { "arabic": "ذَهَبْنَ", "meaning": "Ular (Muannas) ketdilar" },
                { "arabic": "ذَهَبْتُمْ", "meaning": "Sizlar (Muzakkar) ketdingiz" },
                { "arabic": "ذَهَبْنَا", "meaning": "Biz ketdik" }
            ]
        },
        {
            id: "15-8",
            type: "multiple-choice",
            question: "«أُخْتٌ» (Opa/Singil) so'zining ko'pligi:",
            options: ["إِخْوَةٌ", "أَخَوَاتٌ", "أُخْتَاتٌ"],
            correctAnswer: "أَخَوَاتٌ"
        },
        {
            id: "15-9",
            type: "multiple-choice",
            question: "«Sizlar kimsiz, ey ayollar?»",
            options: ["مَنْ أَنْتُنَّ يَا نِسَاءُ؟", "مَنْ أَنْتُمْ يَا نِسَاءُ؟", "مَنْ هُنَّ يَا نِسَاءُ؟"],
            correctAnswer: "مَنْ أَنْتُنَّ يَا نِسَاءُ؟"
        },
        {
            id: "15-10",
            type: "word-scramble",
            question: "Tuzing: «Ular (ayollar) maktabdan qaytdilar»",
            arabic: "رَجَعْنَ مِنَ الْمَدْرَسَةِ",
            scrambledWords: ["الْمَدْرَسَةِ", "مِنَ", "رَجَعْنَ"],
            correctAnswer: "رَجَعْنَ مِنَ الْمَدْرَسَةِ"
        }
    ]
};
