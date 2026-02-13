
import { Lesson } from '../../types';

export const lesson6: Lesson = {
    id: 6,
    title: "6-dars: هَذِهِ (Bu - Ayol jinsi)",
    grammar: "Ko'rsatkich olmoshlari (Muannas)",
    theory: {
        sections: [
            {
                "title": "Kirish: هَذِهِ (Hazihi)",
                "content": "Biz **هَذَا** (Haza) erkak jinsidagi so'zlar uchun ishlatilishini o'rgandik. Ayol jinsidagi so'zlar uchun esa **هَذِهِ** (Hazihi) ishlatiladi. Bu 'Bu' degan ma'noni anglatadi.",
                "examples": [
                    { "arabic": "هَذِهِ بِنْتٌ", "meaning": "Bu qiz bola" },
                    { "arabic": "هَذِهِ مَدْرَسَةٌ", "meaning": "Bu maktab" },
                    { "arabic": "هَذِهِ غُرْفَةٌ", "meaning": "Bu xona" },
                    { "arabic": "هَذِهِ سَيَّارَةٌ", "meaning": "Bu mashina" },
                    { "arabic": "هَذِهِ طَبِيبَةٌ", "meaning": "Bu shifokor (ayol)" }
                ]
            },
            {
                "title": "Ta-Marbuta (ة)",
                "content": "Arab tilida ayol jinsining eng asosiy belgisi so'z oxiridagi **ة** (Ta-Marbuta) harfidir. Ko'p hollarda 'ة' bilan tugagan so'zlar muannas (ayol) jinsida bo'ladi.",
                "examples": [
                    { "arabic": "هَذِهِ حَقِيبَةٌ", "meaning": "Bu sumka" },
                    { "arabic": "هَذِهِ مِكْوَاةٌ", "meaning": "Bu dazmol" },
                    { "arabic": "هَذِهِ دَجَاجَةٌ", "meaning": "Bu tovuq" },
                    { "arabic": "هَذِهِ نَافِذَةٌ", "meaning": "Bu deraza" },
                    { "arabic": "هَذِهِ حَدِيقَةٌ", "meaning": "Bu bog'" }
                ]
            },
            {
                "title": "Tana a'zolari",
                "content": "Juft tana a'zolari (ko'z, quloq, qo'l, oyoq) odatda **ayol jinsida** bo'ladi. Yagona tana a'zolari (burun, og'iz, bosh) esa **erkak jinsida** hisoblanadi.",
                "examples": [
                    { "arabic": "هَذِهِ يَدٌ", "meaning": "Bu qo'l" },
                    { "arabic": "هَذِهِ عَيْنٌ", "meaning": "Bu ko'z" },
                    { "arabic": "هَذِهِ أُذُنٌ", "meaning": "Bu quloq" },
                    { "arabic": "هَذِهِ رِجْلٌ", "meaning": "Bu oyoq" },
                    { "arabic": "هَذَا رَأْسٌ", "meaning": "Bu bosh (muzakkar)" }
                ]
            },
            {
                "title": "Egalik: Li (لِـ)",
                "content": "**لِـ** (Li) predlogi 'uchun' yoki 'niki' degan ma'noni bildiradi. Ismga qo'shilganda egalikni ifodalaydi.",
                "examples": [
                    { "arabic": "هَذِهِ لِمُحَمَّدٍ", "meaning": "Bu Muhammadniki" },
                    { "arabic": "الْحَمْدُ لِلَّهِ", "meaning": "Maqtov Allahgadir" },
                    { "arabic": "لِمَنْ هَذِهِ؟", "meaning": "Bu kimniki?" },
                    { "arabic": "هَذِهِ لَكَ", "meaning": "Bu sen uchun" },
                    { "arabic": "الْمُلْكُ لِلَّهِ", "meaning": "Mulk Allohnikidir" }
                ]
            }
        ]
    },
    tasks: [
        {
            "id": "6-1",
            "type": "multiple-choice",
            "question": "Qaysi so'z ayol jinsida?",
            "options": ["كِتَابٌ (Kitob)", "بَيْتٌ (Uy)", "سَيَّارَةٌ (Mashina)"],
            "correctAnswer": "سَيَّارَةٌ (Mashina)"
        },
        {
            "id": "6-2",
            "type": "multiple-choice",
            "question": "'Yadun' (Qo'l) so'zi uchun qaysi olmosh ishlatiladi?",
            "options": ["هَذَا", "هَذِهِ", "ذَلِكَ"],
            "correctAnswer": "هَذِهِ"
        },
        {
            "id": "6-3",
            "type": "multiple-choice",
            "question": "Tarjima qiling: 'Bu dazmol'",
            "options": ["هَذِهِ مِكْوَاةٌ", "هَذَا مِكْوَاةٌ", "تِلْكَ مِكْوَاةٌ"],
            "correctAnswer": "هَذِهِ مِكْوَاةٌ"
        },
        {
            "id": "6-4",
            "type": "multiple-choice",
            "question": "'Liman' (لِمَنْ) nimani anglatadi?",
            "options": ["Kim", "Kimniki / Kim uchun", "Qayerda"],
            "correctAnswer": "Kimniki / Kim uchun"
        },
        {
            "id": "6-5",
            "type": "multiple-choice",
            "question": "'Anfun' (Burun - أَنْفٌ) muzakkarmi yoki muannasmi?",
            "options": ["Muzakkar (Erkak)", "Muannas (Ayol)", "Ikkisi ham"],
            "correctAnswer": "Muzakkar (Erkak)"
        },
        {
            "id": "6-6",
            "type": "multiple-choice",
            "question": "'Bu ko'z' iborasini toping",
            "options": ["هَذِهِ عَيْنٌ", "هَذَا عَيْنٌ", "ذَلِكَ عَيْنٌ"],
            "correctAnswer": "هَذِهِ عَيْنٌ"
        },
        {
            "id": "6-7",
            "type": "multiple-choice",
            "question": "Tarjima qiling: 'Bu Xolidniki'",
            "options": ["هَذَا خَالِدٌ", "هَذِهِ لِخَالِدٍ", "خَالِدٌ هُنَا"],
            "correctAnswer": "هَذِهِ لِخَالِدٍ"
        },
        {
            "id": "6-8",
            "type": "multiple-choice",
            "question": "'Mudarissatun' so'zida ayol jinsi belgisi nima?",
            "options": ["Tanvin", "Ta-Marbuta (ة)", "Alif"],
            "correctAnswer": "Ta-Marbuta (ة)"
        },
        {
            "id": "6-9",
            "type": "multiple-choice",
            "question": "Tarjima qiling: 'Bu sumka kimniki?'",
            "options": ["لِمَنْ هَذِهِ الْحَقِيبَةُ؟", "أَيْنَ الْحَقِيبَةُ؟", "مَا هَذِهِ؟"],
            "correctAnswer": "لِمَنْ هَذِهِ الْحَقِيبَةُ؟"
        },
        {
            "id": "6-10",
            "type": "multiple-choice",
            "question": "To'g'ri jumlani tanlang:",
            "options": ["هَذَا بِنْتٌ", "هَذِهِ وَلَدٌ", "هَذِهِ بِنْتٌ"],
            "correctAnswer": "هَذِهِ بِنْتٌ"
        }
    ]
};
