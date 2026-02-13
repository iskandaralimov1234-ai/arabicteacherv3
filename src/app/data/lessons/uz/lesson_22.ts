import { Lesson } from '../../types';

export const lesson22: Lesson = {
    id: 22,
    title: "22-dars: G'ayri munsarif (2-qism)",
    grammar: "Diptotes: Categories & Rules",
    theory: {
        sections: [
            {
                title: "🚫 Atoqli otlar (Ayol va Maxsus erkak ismlari)",
                content: "Quyidagi ismlar tanvin qabul qilmaydi (G'ayri munsarif):\n1. **Barcha ayol ismlari**: Zaynabu (زَيْنَبُ), Maryamu (مَرْيَمُ), Fotimatu (فَاطِمَةُ).\n2. **Oxiri ة bilan tugagan erkak ismlari**: Hamzatu (حَمْزَةُ), Usamatu (أُسَامَةُ), Talhatu (طَلْحَةُ).",
                examples: [
                    { arabic: "هَذِهِ زَيْنَبُ", meaning: "Bu Zaynab (Zaynabun emas)" },
                    { arabic: "كِتَابُ حَمْزَةَ", meaning: "Hamzaning kitobi (Qaratqich — Fatha!)" },
                    { arabic: "رَأَيْتُ أُسَامَةَ", meaning: "Men Usamani ko'rdim" }
                ]
            },
            {
                title: "😡 -'ān' bilan tugagan sifatlar",
                content: "**-ān** (alif-nun) bilan tugagan muzakkar sifatlar ham tanvin qabul qilmaydi:\n- **غَضْبَانُ** (G'ozbānu) — G'azabli\n- **كَسْلَانُ** (Kaslānu) — Dangasa\n- **جَوْعَانُ** (Jav'ānu) — Och",
                examples: [
                    { arabic: "أَنَا جَوْعَانُ", meaning: "Mening qornim och" },
                    { arabic: "هُوَ كَسْلَانُ", meaning: "U dangasa" },
                    { arabic: "لِمَاذَا أَنْتَ غَضْبَانُ؟", meaning: "Nega g'azablisiz?" }
                ]
            },
            {
                title: "🌍 Arabcha bo'lmagan ismlar va shaharlar",
                content: "Payg'ambarlarning ismlari (Muhammad, Solih, Shuayb, Hud, Nuh, Lut dan tashqari) va shahar nomlari ko'pincha arabcha bo'lmaydi va tanvin olmaydi.",
                examples: [
                    { arabic: "إِبْرَاهِيمُ", meaning: "Ibrohim" },
                    { arabic: "يُوسُفُ", meaning: "Yusuf" },
                    { arabic: "لَنْدَنُ", meaning: "London" },
                    { arabic: "بَاكِسْتَانُ", meaning: "Pokiston" }
                ]
            },
            {
                title: "⚡ Qaratqich kelishigi qoidasi",
                content: "G'ayri munsarif so'zlarning asosiy qoidasi: **Qaratqich kelishigida** (yoki old qo'shimchadan keyin) ular kasra (i) o'rniga **FATHA** (a) oladi.",
                examples: [
                    { arabic: "مِنْ مَكَّةَ", meaning: "Makkadan (Min Makkata)" },
                    { arabic: "إِلَى بَغْدَادَ", meaning: "Bag'dodga (Ila Bag'dada)" },
                    { arabic: "فِي مَسَاجِدَ كَثِيرَةٍ", meaning: "Ko'p masjidlarda (Fi masājida...)" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "22-1",
            type: "multiple-choice",
            question: "Qaysi ism to'g'ri yozilgan (tanvinsiz)?",
            options: ["زَيْنَبٌ", "زَيْنَبُ", "زَيْنَبٍ"],
            correctAnswer: "زَيْنَبُ"
        },
        {
            id: "22-2",
            type: "multiple-choice",
            question: "To'g'ri shaklni tanlang: «Fotimadan»",
            options: ["مِنْ فَاطِمَةِ", "مِنْ فَاطِمَةَ", "مِنْ فَاطِمَةٍ"],
            correctAnswer: "مِنْ فَاطِمَةَ"
        },
        {
            id: "22-3",
            type: "word-scramble",
            question: "Tuzing: «Mening qornim och»",
            arabic: "أَنَا جَوْعَانُ",
            scrambledWords: ["جَوْعَانُ", "أَنَا", "جَوْعَانٌ"],
            correctAnswer: "أَنَا جَوْعَانُ"
        },
        {
            id: "22-4",
            type: "matching",
            question: "Ismni toifasi bilan bog'lang",
            pairs: [
                { "arabic": "حَمْزَةُ", "meaning": "Muzakkar (õ bilan)" },
                { "arabic": "مَرْيَمُ", "meaning": "Muannas" },
                { "arabic": "وِلْيَمُ", "meaning": "Xorijiy (Uilyam)" },
                { "arabic": "أَحْمَدُ", "meaning": "Fe'l vaznida (Af'alu)" }
            ]
        },
        {
            id: "22-5",
            type: "multiple-choice",
            question: "«Londonda» qanday aytiladi?",
            options: ["فِي لَنْدَنِ", "فِي لَنْدَنَ", "فِي لَنْدَنٍ"],
            correctAnswer: "فِي لَنْدَنَ"
        },
        {
            id: "22-6",
            type: "multiple-choice",
            question: "Tarjima qiling: «Dangasa talaba»",
            options: ["طَالِبٌ كَسْلَانُ", "طَالِبٌ كَسْلَانٌ", "طَالِبٌ كَسْلَانِ"],
            correctAnswer: "طَالِبٌ كَسْلَانُ"
        },
        {
            id: "22-7",
            type: "word-scramble",
            question: "Tuzing: «Ibrohimning kitobi»",
            arabic: "كِتَابُ إِبْرَاهِيمَ",
            scrambledWords: ["إِبْرَاهِيمَ", "كِتَابُ", "إِبْرَاهِيمِ"],
            correctAnswer: "كِتَابُ إِبْرَاهِيمَ"
        },
        {
            id: "22-8",
            type: "multiple-choice",
            question: "Tanvin QABUL QILADIGAN ismni tanlang:",
            options: ["مُحَمَّدٌ", "يُوسُفُ", "فَاطِمَةُ"],
            correctAnswer: "مُحَمَّدٌ"
        },
        {
            id: "22-9",
            type: "multiple-choice",
            question: "«Nega g'azablisiz?»",
            options: ["لِمَاذَا أَنْتَ غَضْبَانُ؟", "لِمَاذَا أَنْتَ غَضْبَانٌ؟", "لِمَاذَا أَنْتَ غَضْبَانِ؟"],
            correctAnswer: "لِمَاذَا أَنْتَ غَضْبَانُ؟"
        },
        {
            id: "22-10",
            type: "word-scramble",
            question: "Tuzing: «Biz Makkaga ketdik»",
            arabic: "ذَهَبْنَا إِلَى مَكَّةَ",
            scrambledWords: ["مَكَّةَ", "إِلَى", "ذَهَبْنَا"],
            correctAnswer: "ذَهَبْنَا إِلَى مَكَّةَ"
        }
    ]
};
