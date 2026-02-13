
import { Lesson } from '../../types';

export const lesson9: Lesson = {
    id: 9,
    title: "Lesson 9: النَّعْتُ (The Adjective)",
    grammar: "Adjective Agreement Rule",
    theory: {
        sections: [
            {
                "title": "Adjectives (Na't)",
                "content": "In Arabic, the adjective (Na't) always **COMES AFTER** the noun it describes (Man'ut). It is not like English where the adjective comes first.",
                "examples": [
                    { "arabic": "وَلَدٌ صَغِيرٌ", "meaning": "A small boy (lit: Boy small)" },
                    { "arabic": "كِتَابٌ جَدِيدٌ", "meaning": "A new book" },
                    { "arabic": "تَاجِرٌ غَنِيٌّ", "meaning": "A rich merchant" },
                    { "arabic": "مُدَرِّسٌ طَوِيلٌ", "meaning": "A tall teacher" },
                    { "arabic": "طَالِبٌ مُجْتَهِدٌ", "meaning": "A hardworking student" }
                ]
            },
            {
                "title": "Rule 1: Definiteness Agreement",
                "content": "The adjective must match the noun in definiteness. If the noun has **AL**, the adjective must have **AL**.",
                "examples": [
                    { "arabic": "الْمُدَرِّسُ الْجَدِيدُ", "meaning": "The new teacher" },
                    { "arabic": "مُدَرِّسٌ جَدِيدٌ", "meaning": "A new teacher" },
                    { "arabic": "أَيْنَ الْمُدَرِّسُ الْجَدِيدُ؟", "meaning": "Where is the new teacher?" },
                    { "arabic": "الْبَيْتُ الْكَبِيرُ", "meaning": "The big house" },
                    { "arabic": "بَيْتٌ كَبِيرٌ", "meaning": "A big house" }
                ]
            },
            {
                "title": "Rule 2: Gender Agreement",
                "content": "The adjective must match the gender. If the noun is feminine (ends in ة), the adjective must also be feminine.",
                "examples": [
                    { "arabic": "بِنْتٌ صَغِيرَةٌ", "meaning": "A small girl" },
                    { "arabic": "سَيَّارَةٌ جَمِيلَةٌ", "meaning": "A beautiful car" },
                    { "arabic": "الْحَقِيبَةُ الْجَدِيدَةُ", "meaning": "The new bag" },
                    { "arabic": "طَبِيبَةٌ شَهِيرَةٌ", "meaning": "A famous doctor (f)" },
                    { "arabic": "اَللُّغَةُ الْعَرَبِيَّةُ", "meaning": "The Arabic language" }
                ]
            },
            {
                "title": "Colors & Descriptions",
                "content": "Adjectives are used to describe colors and states explicitly usually after the noun.",
                "examples": [
                    { "arabic": "قَلَمٌ مَكْسُورٌ", "meaning": "A broken pen" },
                    { "arabic": "مِنْدِيلٌ وَسِخٌ", "meaning": "A dirty handkerchief" },
                    { "arabic": "مَاءٌ بَارِدٌ", "meaning": "Cold water" },
                    { "arabic": "قَمَرٌ جَمِيلٌ", "meaning": "Beautiful moon" },
                    { "arabic": "مَسْجِدٌ مَفْتُوحٌ", "meaning": "Open mosque" }
                ]
            }
        ]
    },
    tasks: [
        {
            "id": "9-1",
            "type": "multiple-choice",
            "question": "Translate: 'A rich merchant'",
            "options": ["تَاجِرٌ غَنِيٌّ", "غَنِيٌّ تَاجِرٌ", "التَّاجِرُ الْغَنِيُّ"],
            "correctAnswer": "تَاجِرٌ غَنِيٌّ"
        },
        {
            "id": "9-2",
            "type": "multiple-choice",
            "question": "Where is the Adjective placed in Arabic?",
            "options": ["Before the noun", "After the noun", "At the end of the sentence"],
            "correctAnswer": "After the noun"
        },
        {
            "id": "9-3",
            "type": "multiple-choice",
            "question": "Complete: 'Al-Bintu ...' (Little)",
            "options": ["صَغِيرَةٌ", "الصَّغِيرَةُ", "صَغِيرٌ"],
            "correctAnswer": "الصَّغِيرَةُ"
        },
        {
            "id": "9-4",
            "type": "multiple-choice",
            "question": "Translate: 'The broken pen'",
            "options": ["قَلَمٌ مَكْسُورٌ", "الْقَلَمُ الْمَكْسُورُ", "الْقَلَمُ مَكْسُورٌ"],
            "correctAnswer": "الْقَلَمُ الْمَكْسُورُ"
        },
        {
            "id": "9-5",
            "type": "multiple-choice",
            "question": "Why is it 'Sayyaratun Jamilatun' and not 'Jamilun'?",
            "options": ["Because 'Car' is feminine", "Because 'Car' is plural", "Random choice"],
            "correctAnswer": "Because 'Car' is feminine"
        },
        {
            "id": "9-6",
            "type": "multiple-choice",
            "question": "Complete: 'Haza Kitabun ...' (New)",
            "options": ["جَدِيدٌ", "الْجَدِيدُ", "جَدِيدَةٌ"],
            "correctAnswer": "جَدِيدٌ"
        },
        {
            "id": "9-7",
            "type": "multiple-choice",
            "question": "Which combination is WRONG?",
            "options": ["رَجُلٌ كَبِيرٌ", "الْبَيْتُ الْجَدِيدُ", "وَلَدٌ صَغِيرَةٌ"],
            "correctAnswer": "وَلَدٌ صَغِيرَةٌ"
        },
        {
            "id": "9-8",
            "type": "multiple-choice",
            "question": "Translate: 'Is this a difficult language?'",
            "options": ["أَهَذِهِ لُغَةٌ صَعْبَةٌ؟", "أَهَذَا لُغَةٌ صَعْبٌ؟", "أَلُغَةٌ هَذِهِ صَعْبَةٌ؟"],
            "correctAnswer": "أَهَذِهِ لُغَةٌ صَعْبَةٌ؟"
        },
        {
            "id": "9-9",
            "type": "multiple-choice",
            "question": "Meaning of 'Shahirun' (شَهِيرٌ)",
            "options": ["Delicious", "Famous", "Tall"],
            "correctAnswer": "Famous"
        },
        {
            "id": "9-10",
            "type": "multiple-choice",
            "question": "Which sentence means 'The man is distinct/rich'?",
            "options": ["الرَّجُلُ غَنِيٌّ", "الرَّجُلُ الْغَنِيُّ", "رَجُلٌ غَنِيٌّ"],
            "correctAnswer": "الرَّجُلُ غَنِيٌّ"
        }
    ]
};
