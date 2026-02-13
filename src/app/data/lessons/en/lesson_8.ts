
import { Lesson } from '../../types';

export const lesson8: Lesson = {
    id: 8,
    title: "Lesson 8: The Specific Noun (Badal)",
    grammar: "Demonstrative + Al- (Badal)",
    theory: {
        sections: [
            {
                "title": "Sentence vs Phrase",
                "content": "Compare these two forms:\n1. **هَذَا كِتَابٌ** (Haza Kitabun) = This is a book. (Complete sentence)\n2. **هَذَا الْكِتَابُ** (Haza Al-Kitabu) = This book... (Incomplete phrase, needs predicate)\n\nWhen a noun with **AL** follows a demonstrative, it becomes specific 'This X'.",
                "examples": [
                    { "arabic": "هَذَا الرَّجُلُ تَاجِرٌ", "meaning": "This man is a merchant" },
                    { "arabic": "ذَلِكَ الْبَيْتُ كَبِيرٌ", "meaning": "That house is big" },
                    { "arabic": "هَذِهِ الْبِنْتُ طَالِبَةٌ", "meaning": "This girl is a student" },
                    { "arabic": "تِلْكَ الْمَدْرَسَةُ جَدِيدَةٌ", "meaning": "That school is new" },
                    { "arabic": "هَذَا الْوَلَدُ مُهَنْدِسٌ", "meaning": "This boy is an engineer" }
                ]
            },
            {
                "title": "Badal Rule",
                "content": "In grammar, the noun following the demonstrative is called a **Badal** (Substitute). It takes the same grammatical case as the demonstrative. If 'Haza' is affected by a preposition, the noun will also show the genitive case (kasra).",
                "examples": [
                    { "arabic": "مِنْ هَذَا الْبَيْتِ", "meaning": "From this house (Min Haza Al-Bayti)" },
                    { "arabic": "لِمَنْ هَذَا الْقَلَمُ؟", "meaning": "Whose is this pen?" },
                    { "arabic": "فِي تِلْكَ الْغُرْفَةِ", "meaning": "In that room (Fi Tilka Al-Ghurfati)" },
                    { "arabic": "عَلَى ذَلِكَ الْمَكْتَبِ", "meaning": "On that desk (Ala Zalika Al-Maktabi)" },
                    { "arabic": "إِلَى هَذَا الْمَسْجِدِ", "meaning": "To this mosque (Ila Haza Al-Masjidi)" }
                ]
            },
            {
                "title": "Vocabulary: Countries",
                "content": "Notice how some country names end in Alif (Long A). These are indeclinable (they don't take kasra visibly).",
                "examples": [
                    { "arabic": "أَمْرِيكَا", "meaning": "America" },
                    { "arabic": "سُوِيْسْرَا", "meaning": "Switzerland" },
                    { "arabic": "أَلْمَانِيَا", "meaning": "Germany" },
                    { "arabic": "إِنْكِلْتَرَّا", "meaning": "England" },
                    { "arabic": "فَرَنسَا", "meaning": "France" }
                ]
            }
        ]
    },
    tasks: [
        {
            "id": "8-1",
            "type": "multiple-choice",
            "question": "Translate: 'This man'",
            "options": ["هَذَا رَجُلٌ", "هَذَا الرَّجُلُ", "الرَّجُلُ هَذَا"],
            "correctAnswer": "هَذَا الرَّجُلُ"
        },
        {
            "id": "8-2",
            "type": "multiple-choice",
            "question": "Choose the correct ending: 'Min Haza Al-Bayt...'",
            "options": ["الْبَيْتُ (u)", "الْبَيْتَ (a)", "الْبَيْتِ (i)"],
            "correctAnswer": "الْبَيْتِ (i)"
        },
        {
            "id": "8-3",
            "type": "multiple-choice",
            "question": "Translate 'That house is new'",
            "options": ["ذَلِكَ الْبَيْتُ جَدِيدٌ", "ذَلِكَ بَيْتٌ جَدِيدٌ", "ذَلِكَ الْبَيْتِ جَدِيدٌ"],
            "correctAnswer": "ذَلِكَ الْبَيْتُ جَدِيدٌ"
        },
        {
            "id": "8-4",
            "type": "multiple-choice",
            "question": "Which phrase is a complete sentence?",
            "options": ["هَذَا الطَّالِبُ", "هَذَا طَالِبٌ", "ذَلِكَ الْوَلَدُ"],
            "correctAnswer": "هَذَا طَالِبٌ"
        },
        {
            "id": "8-5",
            "type": "multiple-choice",
            "question": "Where is the doctor from? (England)",
            "options": ["مِنْ إِنْكِلْتَرَّا", "مِنْ فَرَنسَا", "مِنْ الْمَانِيَا"],
            "correctAnswer": "مِنْ إِنْكِلْتَرَّا"
        },
        {
            "id": "8-6",
            "type": "multiple-choice",
            "question": "Translate: 'To this mosque'",
            "options": ["إِلَى هَذَا الْمَسْجِدِ", "فِي هَذَا الْمَسْجِدُ", "مِنْ هَذَا الْمَسْجِدِ"],
            "correctAnswer": "إِلَى هَذَا الْمَسْجِدِ"
        },
        {
            "id": "8-7",
            "type": "multiple-choice",
            "question": "Whose is this watch? (Khalid)",
            "options": ["هَذِهِ السَّاعَةُ لِخَالِدٍ", "هَذِهِ سَاعَةٌ خَالِدٌ", "السَّاعَةُ خَالِدٌ"],
            "correctAnswer": "هَذِهِ السَّاعَةُ لِخَالِدٍ"
        },
        {
            "id": "8-8",
            "type": "multiple-choice",
            "question": "What is 'Switzerland' in Arabic?",
            "options": ["سُوِيْسْرَا", "أَمْرِيكَا", "الصِّينُ"],
            "correctAnswer": "سُوِيْسْرَا"
        },
        {
            "id": "8-9",
            "type": "multiple-choice",
            "question": "Identify the Badal: 'Zalika Al-Kitabu Qadimun'",
            "options": ["Zalika", "Al-Kitabu", "Qadimun"],
            "correctAnswer": "Al-Kitabu"
        },
        {
            "id": "8-10",
            "type": "multiple-choice",
            "question": "Translate: 'This car is beautiful'",
            "options": ["هَذِهِ السَّيَّارَةُ جَمِيلَةٌ", "هَذِهِ سَيَّارَةٌ جَمِيلَةٌ", "السَّيَّارَةُ هَذِهِ جَمِيلَةٌ"],
            "correctAnswer": "هَذِهِ السَّيَّارَةُ جَمِيلَةٌ"
        }
    ]
};
