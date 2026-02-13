
import { Lesson } from '../../types';

export const lesson8: Lesson = {
    id: 8,
    title: "8-dars: ال (Aniqlovchi va Badal)",
    grammar: "Ko'rsatkich olmoshi + Al (Badal)",
    theory: {
        sections: [
            {
                "title": "Gap va So'z birikmasi farqi",
                "content": "Ushbu ikki shaklni solishtiring:\n1. **هَذَا كِتَابٌ** (Haza Kitabun) = Bu kitobdir. (To'liq gap)\n2. **هَذَا الْكِتَابُ** (Haza Al-Kitabu) = Bu kitob... (Chatoqlanmagan birikma, xabar kerak)\n\nQachonki ko'rsatkich olmoshidan keyin **AL** (ال) bilan boshlanadigan so'z kelsa, bu 'Ushbu ...' degan ma'noni beradi.",
                "examples": [
                    { "arabic": "هَذَا الرَّجُلُ تَاجِرٌ", "meaning": "Ushbu kishi savdogardir" },
                    { "arabic": "ذَلِكَ الْبَيْتُ كَبِيرٌ", "meaning": "Anavi uy kattadir" },
                    { "arabic": "هَذِهِ الْبِنْتُ طَالِبَةٌ", "meaning": "Ushbu qiz talabadir" },
                    { "arabic": "تِلْكَ الْمَدْرَسَةُ جَدِيدَةٌ", "meaning": "Anavi maktab yangidir" },
                    { "arabic": "هَذَا الْوَلَدُ مُهَنْدِسٌ", "meaning": "Ushbu bola muhandisdir" }
                ]
            },
            {
                "title": "Badal Qoidasi",
                "content": "Grammatikada ko'rsatkich olmoshidan keyin kelgan aniq ot **Badal** (O'rinbosar) deb ataladi. U o'zidan oldingi so'zning kelishigini oladi. Agar 'Haza' dan oldin predlog kelsa, keyingi so'z ham kasrali (i) bo'ladi.",
                "examples": [
                    { "arabic": "مِنْ هَذَا الْبَيْتِ", "meaning": "Ushbu uydan (Min Haza Al-Bayti)" },
                    { "arabic": "لِمَنْ هَذَا الْقَلَمُ؟", "meaning": "Ushbu qalam kimniki?" },
                    { "arabic": "فِي تِلْكَ الْغُرْفَةِ", "meaning": "Anavi xonada (Fi Tilka Al-Ghurfati)" },
                    { "arabic": "عَلَى ذَلِكَ الْمَكْتَبِ", "meaning": "Anavi parta ustida" },
                    { "arabic": "إِلَى هَذَا الْمَسْجِدِ", "meaning": "Ushbu masjidga" }
                ]
            },
            {
                "title": "Lug'at: Davlatlar",
                "content": "E'tibor bering, ba'zi davlat nomlari Alif bilan tugaydi. Ular turlanmaydi (kasra olmaydi).",
                "examples": [
                    { "arabic": "أَمْرِيكَا", "meaning": "Amerika" },
                    { "arabic": "سُوِيْسْرَا", "meaning": "Shveytsariya" },
                    { "arabic": "أَلْمَانِيَا", "meaning": "Germaniya" },
                    { "arabic": "إِنْكِلْتَرَّا", "meaning": "Angliya" },
                    { "arabic": "فَرَنسَا", "meaning": "Fransiya" }
                ]
            }
        ]
    },
    tasks: [
        {
            "id": "8-1",
            "type": "multiple-choice",
            "question": "Tarjima qiling: 'Ushbu kishi'",
            "options": ["هَذَا رَجُلٌ", "هَذَا الرَّجُلُ", "الرَّجُلُ هَذَا"],
            "correctAnswer": "هَذَا الرَّجُلُ"
        },
        {
            "id": "8-2",
            "type": "multiple-choice",
            "question": "To'g'ri tugallanishni tanlang: 'Min Haza Al-Bayt...'",
            "options": ["الْبَيْتُ (u)", "الْبَيْتَ (a)", "الْبَيْتِ (i)"],
            "correctAnswer": "الْبَيْتِ (i)"
        },
        {
            "id": "8-3",
            "type": "multiple-choice",
            "question": "'Anavi uy yangidir' deb tarjima qiling",
            "options": ["ذَلِكَ الْبَيْتُ جَدِيدٌ", "ذَلِكَ بَيْتٌ جَدِيدٌ", "ذَلِكَ الْبَيْتِ جَدِيدٌ"],
            "correctAnswer": "ذَلِكَ الْبَيْتُ جَدِيدٌ"
        },
        {
            "id": "8-4",
            "type": "multiple-choice",
            "question": "Qaysi biri to'liqligicha gap (jumla)?",
            "options": ["هَذَا الطَّالِبُ", "هَذَا طَالِبٌ", "ذَلِكَ الْوَلَدُ"],
            "correctAnswer": "هَذَا طَالِبٌ"
        },
        {
            "id": "8-5",
            "type": "multiple-choice",
            "question": "Shifokor qayerdan? (Angliya)",
            "options": ["مِنْ إِنْكِلْتَرَّا", "مِنْ فَرَنسَا", "مِنْ الْمَانِيَا"],
            "correctAnswer": "مِنْ إِنْكِلْتَرَّا"
        },
        {
            "id": "8-6",
            "type": "multiple-choice",
            "question": "Tarjima qiling: 'Ushbu masjidga'",
            "options": ["إِلَى هَذَا الْمَسْجِدِ", "فِي هَذَا الْمَسْجِدُ", "مِنْ هَذَا الْمَسْجِدِ"],
            "correctAnswer": "إِلَى هَذَا الْمَسْجِدِ"
        },
        {
            "id": "8-7",
            "type": "multiple-choice",
            "question": "Ushbu soat kimniki? (Xolid)",
            "options": ["هَذِهِ السَّاعَةُ لِخَالِدٍ", "هَذِهِ سَاعَةٌ خَالِدٌ", "السَّاعَةُ خَالِدٌ"],
            "correctAnswer": "هَذِهِ السَّاعَةُ لِخَالِدٍ"
        },
        {
            "id": "8-8",
            "type": "multiple-choice",
            "question": "'Shveytsariya' arab tilida nima bo'ladi?",
            "options": ["سُوِيْسْرَا", "أَمْرِيكَا", "الصِّينُ"],
            "correctAnswer": "سُوِيْسْرَا"
        },
        {
            "id": "8-9",
            "type": "multiple-choice",
            "question": "Badalni toping: 'Zalika Al-Kitabu Qadimun'",
            "options": ["Zalika", "Al-Kitabu", "Qadimun"],
            "correctAnswer": "Al-Kitabu"
        },
        {
            "id": "8-10",
            "type": "multiple-choice",
            "question": "Tarjima qiling: 'Ushbu mashina chiroyli'",
            "options": ["هَذِهِ السَّيَّارَةُ جَمِيلَةٌ", "هَذِهِ سَيَّارَةٌ جَمِيلَةٌ", "السَّيَّارَةُ هَذِهِ جَمِيلَةٌ"],
            "correctAnswer": "هَذِهِ السَّيَّارَةُ جَمِيلَةٌ"
        }
    ]
};
