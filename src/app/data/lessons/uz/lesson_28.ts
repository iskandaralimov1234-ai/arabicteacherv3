import { Lesson } from '../../types';

export const lesson28: Lesson = {
    id: 28,
    title: "28-dars: Fe'l jumlasi (Ega va To'ldiruvchi)",
    grammar: "Verbal Sentence: Subject & Object",
    theory: {
        sections: [
            {
                title: "🎬 Fe'l jumlasi (Jumla Fe'liya)",
                content: "Fe'l jumlasi fe'l bilan boshlanadi.\nU quyidagilardan iborat:\n1. **Fi'l** (Fe'l)\n2. **Fā'il** (Bajaruvchi / Ega) — har doim Marfu' (Damma)\n3. **Maf'ul Bihi** (To'ldiruvchi / Obyekt) — har doim Mansub (Fatha)",
                examples: [
                    { arabic: "ضَرَبَ حَامِدٌ مَحْمُودًا", meaning: "Hamid (ega) Mahmudni (obyekt) urdi" },
                    { arabic: "شَرِبَ الْوَلَدُ الْمَاءَ", meaning: "Bola suvni ichdi" }
                ]
            },
            {
                title: "❓ So'roq so'zlar",
                content: "**مَتَى** (Matā) — «Qachon?» (o'tgan va kelasi zamon uchun)\n**أَيْنَ** (Ayna) — «Qayerda?» / «Qayerga?»",
                examples: [
                    { arabic: "مَتَى ذَهَبْتَ إِلَى الْمَدْرَسَةِ؟", meaning: "Maktabga qachon ketding?" },
                    { arabic: "أَيْنَ ذَهَبَ بِلَالٌ؟", meaning: "Bilol qayerga ketdi?" }
                ]
            },
            {
                title: "🔄 O'timli va O'timsiz fe'llar",
                content: "Obyektni talab qiladigan fe'llar (kimni? nimani?) **O'timli** (Muta'addi) deyiladi.\nObyekt talab qilmaydigan fe'llar (o'tirdi, chiqdi kabi) **O'timsiz** (Lozim) deyiladi.",
                examples: [
                    { arabic: "كَتَبَ الطَّالِبُ الدَّرْسَ", meaning: "Talaba darsni yozdi (O'timli)" },
                    { arabic: "خَرَجَ الْمُدَرِّسُ", meaning: "O'qituvchi chiqdi (O'timsiz)" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "28-1",
            type: "multiple-choice",
            question: "Jumladan Obyektni (Maf'ulni) toping: «Talaba eshikni ochdi»",
            options: ["فَتَحَ", "الطَّالِبُ", "الْبَابَ"],
            correctAnswer: "الْبَابَ"
        },
        {
            id: "28-2",
            type: "word-scramble",
            question: "Tuzing: «Bola nonni yedi»",
            arabic: "أَكَلَ الْوَلَدُ الْخُبْزَ",
            scrambledWords: ["الْخُبْزَ", "أَكَلَ", "الْوَلَدُ"],
            correctAnswer: "أَكَلَ الْوَلَدُ الْخُبْزَ"
        },
        {
            id: "28-3",
            type: "multiple-choice",
            question: "Obyektning to'g'ri shaklini tanlang: «Men o'qituvchini ko'rdim»",
            options: ["رَأَيْتُ الْمُدَرِّسُ", "رَأَيْتُ الْمُدَرِّسَ", "رَأَيْتُ الْمُدَرِّسِ"],
            correctAnswer: "رَأَيْتُ الْمُدَرِّسَ"
        },
        {
            id: "28-4",
            type: "matching",
            question: "Atamani ma'nosi bilan bog'lang",
            pairs: [
                { "arabic": "الْفَاعِلُ", "meaning": "Bajaruvchi / Ega" },
                { "arabic": "الْمَفْعُولُ بِهِ", "meaning": "Obyekt / Qabul qiluvchi" },
                { "arabic": "دَخَلَ", "meaning": "Kirdi (O'timsiz)" },
                { "arabic": "ضَرَبَ", "meaning": "Urdi (O'timli)" }
            ]
        },
        {
            id: "28-5",
            type: "multiple-choice",
            question: "«Hamid Bilolni urdi» qanday aytiladi?",
            options: ["ضَرَبَ حَامِدٌ بِلَالٍ", "ضَرَبَ حَامِدٌ بِلَالًا", "ضَرَبَ حَامِدًا بِلَالٌ"],
            correctAnswer: "ضَرَبَ حَامِدٌ بِلَالًا"
        },
        {
            id: "28-6",
            type: "multiple-choice",
            question: "Tarjima qiling: «Qachon qaytding?»",
            options: ["مَتَى رَجَعْتَ؟", "أَيْنَ رَجَعْتَ؟", "مَا رَجَعْتَ؟"],
            correctAnswer: "مَتَى رَجَعْتَ؟"
        },
        {
            id: "28-7",
            type: "word-scramble",
            question: "Tuzing: «Ibrohim darsni yozdi»",
            arabic: "كَتَبَ إِبْرَاهِيمُ الدَّرْسَ",
            scrambledWords: ["الدَّرْسَ", "كَتَبَ", "إِبْرَاهِيمُ"],
            correctAnswer: "كَتَبَ إِبْرَاهِيمُ الدَّرْسَ"
        },
        {
            id: "28-8",
            type: "multiple-choice",
            question: "Bajaruvchi (Fā'il) qaysi harakatda bo'ladi?",
            options: ["Fatha (a)", "Kasra (i)", "Damma (u)"],
            correctAnswer: "Damma (u)"
        },
        {
            id: "28-9",
            type: "multiple-choice",
            question: "«Ruchkani kim sindirdi?» (Man kasara al-qalam...)",
            options: ["مَنْ كَسَرَ الْقَلَمَ؟", "مَنْ كَسَرَ الْقَلَمُ؟", "مَنْ كَسَرَ الْقَلَمِ؟"],
            correctAnswer: "مَنْ كَسَرَ الْقَلَمَ؟"
        },
        {
            id: "28-10",
            type: "word-scramble",
            question: "Tuzing: «Erkak ilonni o'ldirdi»",
            arabic: "قَتَلَ الرَّجُلُ الْحَيَّةَ",
            scrambledWords: ["الْحَيَّةَ", "قَتَلَ", "الرَّجُلُ"],
            correctAnswer: "قَتَلَ الرَّجُلُ الْحَيَّةَ"
        }
    ]
};
