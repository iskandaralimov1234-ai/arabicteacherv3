import { Lesson } from '../../types';

export const lesson21: Lesson = {
    id: 21,
    title: "21-dars: Mening maktabim (مَدْرَسَتِي)",
    grammar: "Diptotes (Part 1) & Nominal Sentences",
    theory: {
        sections: [
            {
                title: "🏫 Dars mavzusi: Mening maktabim",
                content: "Ushbu darsda biz maktab haqidagi matnni o'qiymiz hamda binolarni, sinflarni va buyumlarni tasvirlashni o'rganamiz.\nBirikma olmoshlarga (Bizning maktab, uning eshiklari) va o'rin-joy zarflariga (oldida, orqasida) e'tibor bering.",
                examples: [
                    { arabic: "هَذِهِ مَدْرَسَتِي", meaning: "Bu mening maktabim" },
                    { arabic: "هِيَ قَرِيبَةٌ مِنَ الْمَسْجِدِ", meaning: "U masjidga yaqin" },
                    { arabic: "أَبْوَابُهَا مَفْتُوحَةٌ", meaning: "Uning eshiklari ochiq" }
                ]
            },
            {
                title: "🚫 Tanvinsiz so'zlar (Mamnu' min as-sarf)",
                content: "Arab tilida shunday so'zlar borki, ular **tanvin qabul qilmaydi** (un/an/in) va qaratqich kelishigida (jarr) kasra (i) o'rniga **fatha** (a) oladi.\nBunday so'zlar **Mamnu' min as-sarf** (Sarf qilinmaydigan) deb ataladi.",
                examples: [
                    { arabic: "مَسَاجِدُ", meaning: "Masjidlar (Masajidun emas)" },
                    { arabic: "مَدَارِسُ", meaning: "Maktablar (Madarisun emas)" },
                    { arabic: "مَكَاتِبُ", meaning: "Partalar / Ofislar" }
                ]
            },
            {
                title: "📏 Ko'plik formulasi (Mafā'il)",
                content: "**مَفَاعِلُ** (Mafā'il) yoki **مَفَاعِيلُ** (Mafā'īl) vaznidagi ko'plab ko'plik so'zlar 'tanvinsiz' hisoblanadi.\nEslab qoling: ularning oxirida **bitta damma** bo'ladi.",
                examples: [
                    { arabic: "مَنَادِيلُ", meaning: "Ro'molchalar / Salfetkalar" },
                    { arabic: "مَفَاتِيحُ", meaning: "Kalitlar" },
                    { arabic: "فَنَادِقُ", meaning: "Mehmonxonalar" }
                ]
            },
            {
                title: "🎨 Ranglar (Muzakkar)",
                content: "Shuningdek, **أَفْعَلُ** (Af'alu) vaznidagi muzakkar jinsdagi rang nomlari ham tanvin qabul qilmaydi.",
                examples: [
                    { arabic: "أَحْمَرُ", meaning: "Qizil" },
                    { arabic: "أَبْيَضُ", meaning: "Oq" },
                    { arabic: "أَسْوَدُ", meaning: "Qora" },
                    { arabic: "أَخْضَرُ", meaning: "Yashil" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "21-1",
            type: "multiple-choice",
            question: "«Bu mening maktabim» qanday aytiladi?",
            options: ["هَذَا مَدْرَسَتِي", "هَذِهِ مَدْرَسَتِي", "تِلْكَ مَدْرَسَةٌ"],
            correctAnswer: "هَذِهِ مَدْرَسَتِي"
        },
        {
            id: "21-2",
            type: "multiple-choice",
            question: "«Masjidlar» so'zining to'g'ri ko'pligini tanlang (tanvinsiz)",
            options: ["مَسَاجِدٌ", "مَسَاجِدُ", "مَسْجِدُونَ"],
            correctAnswer: "مَسَاجِدُ"
        },
        {
            id: "21-3",
            type: "word-scramble",
            question: "Tuzing: «Hozir uning eshiklari ochiq»",
            arabic: "أَبْوَابُهَا مَفْتُوحَةٌ الْآنَ",
            scrambledWords: ["الْآنَ", "مَفْتُوحَةٌ", "أَبْوَابُهَا"],
            correctAnswer: "أَبْوَابُهَا مَفْتُوحَةٌ الْآنَ"
        },
        {
            id: "21-4",
            type: "multiple-choice",
            question: "«Qizil» (muzakkar) qanday bo'ladi?",
            options: ["أَحْمَرُ", "أَحْمَرٌ", "حَمْرَاءُ"],
            correctAnswer: "أَحْمَرُ"
        },
        {
            id: "21-5",
            type: "matching",
            question: "So'zni ma'nosi bilan bog'lang",
            pairs: [
                { "arabic": "مَكَاتِبُ", "meaning": "Partalar" },
                { "arabic": "كَرَاسِيُّ", "meaning": "Stullar" },
                { "arabic": "مَدَارِسُ", "meaning": "Maktablar" },
                { "arabic": "دَقَائِقُ", "meaning": "Daqiqalar" }
            ]
        },
        {
            id: "21-6",
            type: "multiple-choice",
            question: "Tanvin qabul QILMAYDIGAN so'zni tanlang:",
            options: ["كِتَابُ", "قَلَمُ", "مَسَاجِدُ"],
            correctAnswer: "مَسَاجِدُ"
        },
        {
            id: "21-7",
            type: "word-scramble",
            question: "Tuzing: «Maktabda ko'p sinflar bor»",
            arabic: "فِي الْمَدْرَسَةِ فُصُولٌ كَثِيرَةٌ",
            scrambledWords: ["كَثِيرَةٌ", "فُصُولٌ", "الْمَدْرَسَةِ", "فِي"],
            correctAnswer: "فِي الْمَدْرَسَةِ فُصُولٌ كَثِيرَةٌ"
        },
        {
            id: "21-8",
            type: "multiple-choice",
            question: "«Kalitlar» arab tilida:",
            options: ["مِفْتَاحٌ", "مَفَاتِيحُ", "مَفَاتِيحٌ"],
            correctAnswer: "مَفَاتِيحُ"
        },
        {
            id: "21-9",
            type: "multiple-choice",
            question: "«Bizning maktab» qanday aytiladi?",
            options: ["مَدْرَسَتُنَا", "مَدْرَسَتُهُمْ", "مَدْرَسَتُكُمْ"],
            correctAnswer: "مَدْرَسَتُنَا"
        },
        {
            id: "21-10",
            type: "word-scramble",
            question: "Tuzing: «Bizda kichik bog'lar bor» (Bog'lar - hadā'iq, tanvinsiz)",
            arabic: "لَنَا حَدَائِقُ صَغِيرَةٌ",
            scrambledWords: ["صَغِيرَةٌ", "حَدَائِقُ", "لَنَا"],
            correctAnswer: "لَنَا حَدَائِقُ صَغِيرَةٌ"
        }
    ]
};
