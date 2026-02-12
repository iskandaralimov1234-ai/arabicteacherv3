import { Lesson } from '../../types';

export const lesson1: Lesson = {
    "id": 1,
    "title": "1-dars: هَذَا وَذَلِكَ (Ko'rsatkich olmoshlari)",
    "grammar": "Ko'rsatkich olmoshlari va artikl",
    "theory": {
        "sections": [
            {
                "title": "🎯 Kirish: Ko'rsatkich olmoshlari",
                "content": "Ushbu darsda biz arab tilining asoslarini o'rganamiz:\n1. **هَذَا** (hazá) — bu (yaqin narsalar uchun).\n2. **ذَلِكَ** (zálika) — u, ana u (uzoqdagi narsalar uchun).\n\nArab tilida 'bo'lmoq' fe'li hozirgi zamonda ishlatilmaydi. Gap tuzilishi oddiy: *Ko'rsatish + Narsa*.",
                "examples": [
                    {
                        "arabic": "هَذَا كِتَابٌ",
                        "meaning": "Bu kitob"
                    },
                    {
                        "arabic": "ذَلِكَ بَابٌ",
                        "meaning": "U eshik"
                    }
                ]
            },
            {
                "title": "🔍 ال (al) artikli",
                "content": "Aniq artikl **ال** ingliz tilidagi 'the' artikliga o'xshash. \n\n**Muhim qoida:**\nSo'zga **ال** qo'shilganda, tanvin (-un qo'shimchasi) tushib qoladi!\n- كِتَابٌ (kitabun) ➡️ **الكِتَابُ** (al-kitabu)\n- بَابٌ (babun) ➡️ **البَابُ** (al-babu)",
                "examples": [
                    {
                        "arabic": "الْكِتَابُ",
                        "meaning": "Ushbu (aniq) kitob"
                    },
                    {
                        "arabic": "الْبَابُ",
                        "meaning": "Ushbu (aniq) eshik"
                    }
                ]
            },
            {
                "title": "❓ مَا (ma) so'roq so'zi",
                "content": "**مَا** (ma) — 'nima?' degan ma'noni anglatadi. Jonsiz narsalar uchun ishlatiladi.\n\n- **مَا هَذَا؟** (ma haza?) — Bu nima?\n- **مَا ذَلِكَ؟** (ma zalika?) — U nima?",
                "examples": [
                    {
                        "arabic": "مَا هَذَا؟ هَذَا مِفْتَاحٌ",
                        "meaning": "Bu nima? Bu kalit"
                    },
                    {
                        "arabic": "مَا ذَلِكَ؟ ذَلِكَ مَكْتَبٌ",
                        "meaning": "U nima? U stol"
                    }
                ]
            }
        ]
    },
    "tasks": [
        {
            "id": "1-1",
            "type": "multiple-choice",
            "question": "To'g'ri tarjimani tanlang: هَذَا كِتَابٌ",
            "options": [
                "Bu kitob",
                "U kitob",
                "Bu eshik"
            ],
            "correctAnswer": "Bu kitob"
        },
        {
            "id": "1-2",
            "type": "multiple-choice",
            "question": "ذَلِكَ (zalika) so'zi nimani anglatadi?",
            "options": [
                "Bu",
                "U",
                "Kim"
            ],
            "correctAnswer": "U"
        },
        {
            "id": "1-3",
            "type": "multiple-choice",
            "question": "ال artikli qo'shilganda tanvin bilan nima sodir bo'ladi?",
            "options": [
                "Hech narsa",
                "U tushib qoladi",
                "U ikkilanadi"
            ],
            "correctAnswer": "U tushib qoladi"
        },
        {
            "id": "1-4",
            "type": "multiple-choice",
            "question": "Qanday tarjima qilinadi: مَا هَذَا؟",
            "options": [
                "Bu kim?",
                "Bu nima?",
                "U qayerda?"
            ],
            "correctAnswer": "Bu nima?"
        },
        {
            "id": "1-5",
            "type": "multiple-choice",
            "question": "Arabcha tarjimani tanlang: 'Ushbu kitob' (aniq)",
            "options": [
                "كِتَابٌ",
                "الكِتَابُ",
                "هَذَا كِتَابٌ"
            ],
            "correctAnswer": "الكِتَابُ"
        },
        {
            "id": "1-6",
            "type": "multiple-choice",
            "question": "Arab tilida 'kalit' nima deyiladi?",
            "options": [
                "مِفْتَاحٌ",
                "قَلَمٌ",
                "بَابٌ"
            ],
            "correctAnswer": "مِفْتَاحٌ"
        },
        {
            "id": "1-7",
            "type": "multiple-choice",
            "question": "Tarjima qiling: ذَلِكَ بَابٌ",
            "options": [
                "Bu eshik",
                "U eshik",
                "U stol"
            ],
            "correctAnswer": "U eshik"
        },
        {
            "id": "1-8",
            "type": "multiple-choice",
            "question": "كُرْسِيٌّ so'zi nimani anglatadi?",
            "options": [
                "Stol",
                "Stul",
                "Uy"
            ],
            "correctAnswer": "Stul"
        },
        {
            "id": "1-9",
            "type": "multiple-choice",
            "question": "'U nima?' deb qanday so'raladi?",
            "options": [
                "مَا هَذَا؟",
                "مَا ذَلِكَ؟",
                "مَنْ هَذَا؟"
            ],
            "correctAnswer": "مَا ذَلِكَ؟"
        },
        {
            "id": "1-10",
            "type": "multiple-choice",
            "question": "To'g'rimi: الْكِتَابُ ?",
            "options": [
                "Ha",
                "Yo'q, الكِتَابُ bo'lishi kerak",
                "Ha, agar bu savol bo'lsa"
            ],
            "correctAnswer": "Yo'q, الكِتَابُ bo'lishi kerak"
        }
    ]
};
