import { Lesson } from '../../types';

export const lesson31: Lesson = {
    id: 31,
    title: "31-dars: Fe'ldan yasalgan ismlar (الدَّرْسُ الْحَادِي وَالثَّلَاثُونَ - الْأَسْمَاءُ الْمُشْتَقَّةُ مِنَ الْأَفْعَالِ)",
    grammar: "Fe'ldan yasalgan ismlar",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "Fe'ldan yasalgan ismlar fe'l ildizlaridan hosil bo'lib, turli ma'nolarni ifodalaydi: vaqt, joy, asbob va hokazo. Asosiy turlari: اسم الزمان (vaqt ismi), اسم المكان (joy ismi), اسم الآلة (asbob ismi)."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- اِسْمُ الزَّمَانِ: مَفْعَلٌ/مَفْعِلٌ - harakatning vaqti\\n- اِسْمُ الْمَكَانِ: مَفْعَلٌ/مَفْعِلٌ - harakatning joyi\\n- اِسْمُ الْآلَةِ: مِفْعَلٌ/مِفْعَلَةٌ - asbob\\n- Maf'ul bilan sinonim, lekin kontekst bilan farqlanadi"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "مَطْبَخٌ", meaning: "Maṭbakhun — Oshxona (pishirish joyi) (مَفْعَلٌ - joy ismi طَبَخَ dan)" },
                    { arabic: "مَكْتَبٌ", meaning: "Maktabun — Kabinet/Stol (yozish joyi) (مَفْعَلٌ - joy ismi كَتَبَ dan)" },
                    { arabic: "مِفْتَاحٌ", meaning: "Miftāḥun — Kalit (ochish asbobi) (مِفْعَالٌ - asbob ismi فَتَحَ dan)" },
                    { arabic: "مِكْنَسَةٌ", meaning: "Miknasatun — Supurgi (supurish asbobi) (مِفْعَلَةٌ - asbob ismi كَنَسَ dan)" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "اِسْمُ زَمَانٍ", meaning: "ismu zamānin — Vaqt ismi" },
                    { arabic: "اِسْمُ مَكَانٍ", meaning: "ismu makānin — Joy ismi" },
                    { arabic: "اِسْمُ آلَةٍ", meaning: "ismu ālatin — Asbob ismi" },
                    { arabic: "مَفْعَلٌ", meaning: "maf'alun — Shablon (joy/vaqt)" },
                    { arabic: "مِفْعَلٌ", meaning: "mif'alun — Shablon (asbob)" },
                    { arabic: "مِفْعَالٌ", meaning: "mif'ālun — Shablon (asbob)" },
                    { arabic: "مَسْجِدٌ", meaning: "masjidun — Masjid (sajda joyi)" },
                    { arabic: "مِسْحَاةٌ", meaning: "misḥātun — Belkurak" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "31-1",
            type: "multiple-choice",
            question: "Joy va vaqt ismlari uchun qaysi shablon ishlatiladi?",
            options: ["مِفْعَلٌ", "مَفْعَلٌ/مَفْعِلٌ", "فَاعِلٌ", "مَفْعُولٌ"],
            correctAnswer: "مَفْعَلٌ/مَفْعِلٌ"
        },

        {
            id: "31-2",
            type: "multiple-choice",
            question: "Asbob ismlari uchun qaysi shablon ishlatiladi?",
            options: ["مَفْعَلٌ", "مِفْعَلٌ/مِفْعَالٌ/مِفْعَلَةٌ", "فَاعِلٌ", "مَفْعُولٌ"],
            correctAnswer: "مِفْعَلٌ/مِفْعَالٌ/مِفْعَلَةٌ"
        },

        {
            id: "31-3",
            type: "multiple-choice",
            question: "مَكْتَبٌ qaysi fe'ldan yasalgan?",
            options: ["قَرَأَ", "كَتَبَ", "فَتَحَ", "ذَهَبَ"],
            correctAnswer: "كَتَبَ"
        },

        {
            id: "31-4",
            type: "multiple-choice",
            question: "مَطْبَخٌ nima ma'noni bildiradi?",
            options: ["Pishirish vaqti", "Pishirish joyi (oshxona)", "Pishirish asbobi", "Pishirish harakati"],
            correctAnswer: "Pishirish joyi (oshxona)"
        },

        {
            id: "31-5",
            type: "multiple-choice",
            question: "Tarjima qiling: مِفْتَاحٌ",
            options: ["Eshik", "Kalit", "Qulf", "Ochilish"],
            correctAnswer: "Kalit"
        },

        {
            id: "31-6",
            type: "multiple-choice",
            question: "Tarjima qiling: مَسْجِدٌ",
            options: ["Joy", "Masjid", "Namoz", "Gilam"],
            correctAnswer: "Masjid"
        },

        {
            id: "31-7",
            type: "multiple-choice",
            question: "مِكْنَسَةٌ qanday tarjima qilinadi?",
            options: ["Chang", "Supurgi", "Tozalash", "Supurmoq"],
            correctAnswer: "Supurgi"
        },

        {
            id: "31-8",
            type: "multiple-choice",
            question: "اِسْمُ مَكَانٍ nima degani?",
            options: ["Vaqt ismi", "Joy ismi", "Asbob ismi", "Harakat ismi"],
            correctAnswer: "Joy ismi"
        },

        {
            id: "31-9",
            type: "multiple-choice",
            question: "Qaysi so'z 'masjid' ma'nosini bildiradi?",
            options: ["مَكْتَبٌ", "مَسْجِدٌ", "مَطْبَخٌ", "مِفْتَاحٌ"],
            correctAnswer: "مَسْجِدٌ"
        },

        {
            id: "31-10",
            type: "multiple-choice",
            question: "اِسْمُ آلَةٍ nima degani?",
            options: ["Vaqt ismi", "Joy ismi", "Asbob ismi", "Harakat ismi"],
            correctAnswer: "Asbob ismi"
        }
    ]
};
