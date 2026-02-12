import { Lesson } from '../../types';

export const lesson1: Lesson = {
    "id": 1,
    "title": "Lesson 1: هَذَا وَذَلِكَ (Demonstratives)",
    "grammar": "Demonstratives & Article",
    "theory": {
        "sections": [
            {
                "title": "🎯 Introduction: Demonstratives",
                "content": "In this lesson we learn the basics of Arabic:\n1. **هَذَا** (hadhā) — This (for near objects).\n2. **ذَلِكَ** (dhālika) — That (for far objects).\n\nIn Arabic, the verb 'to be' is implied in the present tense. The sentence structure is simple: *Demonstrative + Object*.",
                "examples": [
                    {
                        "arabic": "هَذَا كِتَابٌ",
                        "meaning": "This is a book"
                    },
                    {
                        "arabic": "ذَلِكَ بَابٌ",
                        "meaning": "That is a door"
                    }
                ]
            },
            {
                "title": "🔍 The Article ال (Al)",
                "content": "The definite article **ال** is similar to English 'the'. \n\n**Important Rule:**\nWhen we add **ال** to a word, the tanween (ending -un) disappears!\n- كِتَابٌ (kitābun) ➡️ **الكِتَابُ** (al-kitābu)\n- بَابٌ (bābun) ➡️ **البَابُ** (al-bābu)",
                "examples": [
                    {
                        "arabic": "الْكِتَابُ",
                        "meaning": "The book"
                    },
                    {
                        "arabic": "الْبَابُ",
                        "meaning": "The door"
                    }
                ]
            },
            {
                "title": "❓ Question Word مَا (Ma)",
                "content": "**مَا** (ma) — means 'what?'. Used for non-living objects.\n\n- **مَا هَذَا؟** (ma hadhā?) — What is this?\n- **مَا ذَلِكَ؟** (ma dhālika?) — What is that?",
                "examples": [
                    {
                        "arabic": "مَا هَذَا؟ هَذَا مِفْتَاحٌ",
                        "meaning": "What is this? This is a key"
                    },
                    {
                        "arabic": "مَا ذَلِكَ؟ ذَلِكَ مَكْتَبٌ",
                        "meaning": "What is that? That is a desk"
                    }
                ]
            }
        ]
    },
    "tasks": [
        {
            "id": "1-1",
            "type": "multiple-choice",
            "question": "Choose the correct translation: هَذَا كِتَابٌ",
            "options": [
                "This is a book",
                "That is a book",
                "This is a door"
            ],
            "correctAnswer": "This is a book"
        },
        {
            "id": "1-2",
            "type": "multiple-choice",
            "question": "What does ذَلِكَ (dhālika) mean?",
            "options": [
                "This",
                "That",
                "Who"
            ],
            "correctAnswer": "That"
        },
        {
            "id": "1-3",
            "type": "multiple-choice",
            "question": "What happens to tanween when adding the article ال?",
            "options": [
                "Nothing",
                "It disappears",
                "It doubles"
            ],
            "correctAnswer": "It disappears"
        },
        {
            "id": "1-4",
            "type": "multiple-choice",
            "question": "Translate: مَا هَذَا؟",
            "options": [
                "Who is this?",
                "What is this?",
                "Where is this?"
            ],
            "correctAnswer": "What is this?"
        },
        {
            "id": "1-5",
            "type": "multiple-choice",
            "question": "Choose Arabic translation: 'The book' (definite)",
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
            "question": "How to say 'key' in Arabic?",
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
            "question": "Translate: ذَلِكَ بَابٌ",
            "options": [
                "This is a door",
                "That is a door",
                "That is a desk"
            ],
            "correctAnswer": "That is a door"
        },
        {
            "id": "1-8",
            "type": "multiple-choice",
            "question": "What does كُرْسِيٌّ mean?",
            "options": [
                "Desk",
                "Chair",
                "House"
            ],
            "correctAnswer": "Chair"
        },
        {
            "id": "1-9",
            "type": "multiple-choice",
            "question": "How to ask 'What is that?'",
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
            "question": "Is الْكِتَابُ correct?",
            "options": [
                "Yes",
                "No, should be الكِتَابُ",
                "Yes, if it's a question"
            ],
            "correctAnswer": "No, should be الْكِتَابُ"
        }
    ]
};
