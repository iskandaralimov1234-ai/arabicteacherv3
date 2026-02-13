import { Lesson } from '../../types';

export const lesson1: Lesson = {
    "id": 1,
    "title": "1-dars: هَذَا (Bu) va ذَلِكَ (U)",
    "grammar": "Ko'rsatkich olmoshlari",
    "theory": {
        "sections": [
            {
                "title": "👉 هَذَا (Haza) — Bu (Yaqin uchun)",
                "content": "Arab tilida yaqin masofadagi erkak jinsidagi birlik narsalarni ko'rsatish uchun **هَذَا** (házа̄) olmoshi ishlatiladi. Bu o'zbek tilidagi 'bu' so'ziga to'g'ri keladi.\n\nEslatma: 'Haza' deb yozilgani bilan, talaffuzda 'a' tovushi cho'zib aytiladi (haazaa).\n\nGap tuzilishi: **هَذَا** + [Narsa nomi]",
                "examples": [
                    {
                        "arabic": "هَذَا كِتَابٌ",
                        "meaning": "Bu kitob (haza kitabun)"
                    },
                    {
                        "arabic": "هَذَا مَسْجِدٌ",
                        "meaning": "Bu masjid (haza masjidun)"
                    },
                    {
                        "arabic": "هَذَا بَابٌ",
                        "meaning": "Bu eshik (haza babun)"
                    },
                    {
                        "arabic": "هَذَا قَلَمٌ",
                        "meaning": "Bu qalam (haza qalamun)"
                    },
                    {
                        "arabic": "هَذَا بَيْتٌ",
                        "meaning": "Bu uy (haza baytun)"
                    }
                ]
            },
            {
                "title": "👉 ذَلِكَ (Zalika) — U (Uzoq uchun)",
                "content": "Uzoq masofadagi erkak jinsidagi birlik narsalarni ko'rsatish uchun **ذَلِكَ** (zálika) olmoshi ishlatiladi. Bu o'zbek tilidagi 'u' yoki 'ana u' so'ziga to'g'ri keladi.",
                "examples": [
                    {
                        "arabic": "ذَلِكَ نَجْمٌ",
                        "meaning": "Ana u yulduz (zalika najmun)"
                    },
                    {
                        "arabic": "ذَلِكَ قَمَرٌ",
                        "meaning": "Ana u oy (zalika qamarun)"
                    },
                    {
                        "arabic": "ذَلِكَ دِيكٌ",
                        "meaning": "Ana u xo'roz (zalika dikun)"
                    },
                    {
                        "arabic": "ذَلِكَ كُرْسِيٌّ",
                        "meaning": "Ana u stul (zalika kursiyyun)"
                    },
                    {
                        "arabic": "ذَلِكَ مَكْتَبٌ",
                        "meaning": "Ana u yozuv stoli (zalika maktabun)"
                    }
                ]
            },
            {
                "title": "❓ مَا هَذَا؟ (Ma haza?) — Bu nima?",
                "content": "**مَا** (mа̄) so'roq yuklamasi 'nima?' degan ma'noni bildiradi va faqat jonsiz narsalar (aqlsiz) uchun ishlatiladi.\n\nSavol: **مَا هَذَا؟** (Bu nima?)\nJavob: **هَذَا ...** (Bu ...)",
                "examples": [
                    {
                        "arabic": "مَا هَذَا؟ هَذَا مِفْتَاحٌ",
                        "meaning": "Bu nima? Bu kalit (ma haza? haza miftahun)"
                    },
                    {
                        "arabic": "مَا هَذَا؟ هَذَا سَرِيرٌ",
                        "meaning": "Bu nima? Bu karavot (ma haza? haza sarirun)"
                    },
                    {
                        "arabic": "مَا ذَلِكَ؟ ذَلِكَ قِطٌّ",
                        "meaning": "U nima? U mushuk (ma zalika? zalika qittun)"
                    },
                    {
                        "arabic": "مَا هَذَا؟ هَذَا كُرْسِيٌّ",
                        "meaning": "Bu nima? Bu stul (ma haza? haza kursiyyun)"
                    },
                    {
                        "arabic": "مَا ذَلِكَ؟ ذَلِكَ حِصَانٌ",
                        "meaning": "U nima? U ot (ma zalika? zalika hisanun)"
                    }
                ]
            },
            {
                "title": "🔍 ال (Al) Artikli — Aniq holat",
                "content": "Arab tilida so'zlar aniq yoki noaniq bo'lishi mumkin. **ال** (al) artikli qo'shilganda so'z aniq holatga o'tadi.\n\n**Muhim qoida:**\nSo'zning oxiridagi tanvin (un) tushib qoladi va faqat 'u' qoladi.\n\nFormula: **ال** + kіtа̄b**un** = **ال**kіtа̄b**u**",
                "examples": [
                    {
                        "arabic": "كِتَابٌ ➡️ الْكِتَابُ",
                        "meaning": "Kitob (noaniq) ➡️ Kitob (aniq) (kitabun -> al-kitabu)"
                    },
                    {
                        "arabic": "قَلَمٌ ➡️ الْقَلَمُ",
                        "meaning": "Qalam ➡️ (O'sha) Qalam (qalamun -> al-qalamu)"
                    },
                    {
                        "arabic": "بَيْتٌ ➡️ الْبَيْتُ",
                        "meaning": "Uy ➡️ (O'sha) Uy (baytun -> al-baytu)"
                    },
                    {
                        "arabic": "جَمَلٌ ➡️ الْجَمَلُ",
                        "meaning": "Tuya ➡️ (O'sha) Tuya (jamalun -> al-jamalu)"
                    },
                    {
                        "arabic": "مُدَرِّسٌ ➡️ الْمُدَرِّسُ",
                        "meaning": "O'qituvchi ➡️ (O'sha) O'qituvchi (mudarrisun -> al-mudarrisu)"
                    }
                ]
            }
        ]
    },
    "tasks": [
        {
            "id": "1-1",
            "type": "multiple-choice",
            "question": "Yaqin masofadagi narsani ko'rsatish uchun qaysi so'z ishlatiladi?",
            "options": [
                "ذَلِكَ (zalika)",
                "هَذَا (haza)",
                "هُوَ (huva)"
            ],
            "correctAnswer": "هَذَا (haza)"
        },
        {
            "id": "1-2",
            "type": "multiple-choice",
            "question": "So'zga 'ال' (al) artikli qo'shilganda oxiri qanday o'zgaradi?",
            "options": [
                "O'zgarmaydi (un)",
                "Tanvin tushib qoladi (u)",
                "Ikki barobar ko'payadi (un -> unun)"
            ],
            "correctAnswer": "Tanvin tushib qoladi (u)"
        },
        {
            "id": "1-3",
            "type": "multiple-choice",
            "question": "'مَا' (ma) so'rog'i kimlar/nimalar uchun ishlatiladi?",
            "options": [
                "Faqat odamlar uchun",
                "Faqat jonsiz narsalar (aqlsiz) uchun",
                "Hamma narsa uchun"
            ],
            "correctAnswer": "Faqat jonsiz narsalar (aqlsiz) uchun"
        },
        {
            "id": "1-4",
            "type": "multiple-choice",
            "question": "Uzoq masofadagi narsani ko'rsatish uchun qaysi so'z ishlatiladi?",
            "options": [
                "هَذَا (haza)",
                "ذَلِكَ (zalika)",
                "مَا (ma)"
            ],
            "correctAnswer": "ذَلِكَ (zalika)"
        },
        {
            "id": "1-5",
            "type": "multiple-choice",
            "question": "Tarjima qiling: 'هَذَا مِفْتَاحٌ'",
            "options": [
                "Bu kalit",
                "U kalit",
                "Bu qalam"
            ],
            "correctAnswer": "Bu kalit"
        },
        {
            "id": "1-6",
            "type": "multiple-choice",
            "question": "Tarjima qiling: 'ذَلِكَ نَجْمٌ'",
            "options": [
                "Bu yulduz",
                "Anavi yulduz",
                "Anavi oy"
            ],
            "correctAnswer": "Anavi yulduz"
        },
        {
            "id": "1-7",
            "type": "multiple-choice",
            "question": "Tarjima qiling: 'الْبَيْتُ'",
            "options": [
                "Bir uy (noaniq)",
                "Uy (aniq)",
                "Mening uyim"
            ],
            "correctAnswer": "Uy (aniq)"
        },
        {
            "id": "1-8",
            "type": "multiple-choice",
            "question": "'Ot' (hayvon) arab tilida nima bo'ladi?",
            "options": [
                "حِمَارٌ",
                "قِطٌّ",
                "حِصَانٌ"
            ],
            "correctAnswer": "حِصَانٌ"
        },
        {
            "id": "1-9",
            "type": "multiple-choice",
            "question": "'Stul' arab tilida nima deyiladi?",
            "options": [
                "كُرْسِيٌّ",
                "سَرِيرٌ",
                "مَكْتَبٌ"
            ],
            "correctAnswer": "كُرْسِيٌّ"
        },
        {
            "id": "1-10",
            "type": "multiple-choice",
            "question": "'Mushuk' so'zining arabcha tarjimasini toping.",
            "options": [
                "كَلْبٌ",
                "قِطٌّ",
                "دِيكٌ"
            ],
            "correctAnswer": "قِطٌّ"
        }
    ]
};
