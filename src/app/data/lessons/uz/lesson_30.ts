import { Lesson } from '../../types';

export const lesson30: Lesson = {
    id: 30,
    title: "30-dars: Egalik so'zlari (Zu/Zatu) va Zaif fe'llar",
    grammar: "Dhu/Dhatu & Weak Verbs Intro",
    theory: {
        sections: [
            {
                title: "🎩 Egalik so'zlari: Zu, Zatu, Zavu, Zavatu",
                content: "Biz birlik muzakkar uchun **ذُو** (Zu) ni o'rgangan edik. Mana to'liq jadval:\n- Birlik Muzakkar: **ذُو** (Zu)\n- Birlik Muannas: **ذَاتُ** (Zatu)\n- Ko'plik Muzakkar: **ذَوُو** (Zavu)\n- Ko'plik Muannas: **ذَوَاتُ** (Zavatu)",
                examples: [
                    { arabic: "رَجُلٌ ذُو مَالٍ", meaning: "Boy odam (mol egasi)" },
                    { arabic: "امْرَأَةٌ ذَاتُ جَمَالٍ", meaning: "Chiroyli ayol (husn egasi)" },
                    { arabic: "رِجَالٌ ذَوُو مَالٍ", meaning: "Boy erkaklar" }
                ]
            },
            {
                title: "🗣️ Zaif fe'llar (Ajvaf)",
                content: "O'rtadagi o'zak harfi zaif (Alif, Vav, Yā) bo'lgan fe'llar **Ajvaf** (Bo'sh) deyiladi.\nMisollar: **قَالَ** (Aytdi), **قَامَ** (Turdi), **زَارَ** (Ziyorat qildi).\nTurlanish paytida ularda o'zgarishlar bo'ladi.",
                examples: [
                    { arabic: "قَالَ الْمُدَرِّسُ", meaning: "O'qituvchi aytdi" },
                    { arabic: "زَارَ مُحَمَّدٌ صَدِيقَهُ", meaning: "Muhammad do'stini ziyorat qildi" }
                ]
            },
            {
                title: "📣 Nido (Chaqiriq)",
                content: "Ko'plikka murojaat qilinganda:\n- **يَا إِخْوَةُ** (Ey birodarlar!)\n- **يَا أَخَوَاتُ** (Ey opa-singillar!)\n«Yā»dan keyingi so'z tanvinini yo'qotadi (Marfu' tanvinsiz bo'ladi).",
                examples: [
                    { arabic: "يَا أَوْلَادُ", meaning: "Ey bolalar!" },
                    { arabic: "يَا رِجَالُ", meaning: "Ey erkaklar!" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "30-1",
            type: "multiple-choice",
            question: "«Chiroyli xulqli ayol» (Zatu xuluq) qanday aytiladi?",
            options: ["امْرَأَةٌ ذُو خُلُقٍ", "امْرَأَةٌ ذَاتُ خُلُقٍ", "امْرَأَةٌ ذَوَاتُ خُلُقٍ"],
            correctAnswer: "امْرَأَةٌ ذَاتُ خُلُقٍ"
        },
        {
            id: "30-2",
            type: "word-scramble",
            question: "Tuzing: «Talabalar ilm egalaridir»",
            arabic: "الطُّلَّابُ ذَوُو عِلْمٍ",
            scrambledWords: ["عِلْمٍ", "ذَوُو", "الطُّلَّابُ"],
            correctAnswer: "الطُّلَّابُ ذَوُو عِلْمٍ"
        },
        {
            id: "30-3",
            type: "multiple-choice",
            question: "«Zatu» (Egasi - muannas) ning ko'pligi:",
            options: ["ذَوَاءُ", "ذَوَاتُ", "ذَوَى"],
            correctAnswer: "ذَوَاتُ"
        },
        {
            id: "30-4",
            type: "matching",
            question: "Zu shaklini jins/son bilan bog'lang",
            pairs: [
                { "arabic": "ذُو", "meaning": "Birlik Muzakkar" },
                { "arabic": "ذَاتُ", "meaning": "Birlik Muannas" },
                { "arabic": "ذَوُو", "meaning": "Ko'plik Muzakkar" },
                { "arabic": "ذَوَاتُ", "meaning": "Ko'plik Muannas" }
            ]
        },
        {
            id: "30-5",
            type: "multiple-choice",
            question: "Ajvaf (Bo'sh) fe'lni tanlang:",
            options: ["كَتَبَ", "قَالَ", "ذَهَبَ"],
            correctAnswer: "قَالَ"
        },
        {
            id: "30-6",
            type: "multiple-choice",
            question: "To'g'ri nido: «Ey talabalar!»",
            options: ["يَا طُلَّابًا", "يَا طُلَّابُ", "يَا طُلَّابِ"],
            correctAnswer: "يَا طُلَّابُ"
        },
        {
            id: "30-7",
            type: "word-scramble",
            question: "Tuzing: «Bilol haqiqatni aytdi»",
            arabic: "قَالَ بِلَالٌ الْحَقَّ",
            scrambledWords: ["الْحَقَّ", "قَالَ", "بِلَالٌ"],
            correctAnswer: "قَالَ بِلَالٌ الْحَقَّ"
        },
        {
            id: "30-8",
            type: "multiple-choice",
            question: "«Zu» har doim nima bo'ladi?",
            options: ["Mudof", "Mudof Ilayhi", "Fe'l"],
            correctAnswer: "Mudof"
        },
        {
            id: "30-9",
            type: "multiple-choice",
            question: "Tarjima qiling: «Bu bog'lar meva egalaridir (mevalidir)»",
            options: ["هَذِهِ الْحَدَائِقُ ذَاتُ ثِمَارٍ", "هَذِهِ الْحَدَائِقُ ذَوَاتُ ثِمَارٍ", "هَذِهِ الْحَدَائِقُ ذُو ثِمَارٍ"],
            correctAnswer: "هَذِهِ الْحَدَائِقُ ذَوَاتُ ثِمَارٍ"
        },
        {
            id: "30-10",
            type: "word-scramble",
            question: "Tuzing: «Mening amakim Makkaga tashrif buyurdi»",
            arabic: "زَارَ عَمِّي مَكَّةَ",
            scrambledWords: ["مَكَّةَ", "عَمِّي", "زَارَ"],
            correctAnswer: "زَارَ عَمِّي مَكَّةَ"
        }
    ]
};
