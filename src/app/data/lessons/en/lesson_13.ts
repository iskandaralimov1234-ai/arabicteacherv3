import { Lesson } from '../../types';

export const lesson13: Lesson = {
    id: 13,
    title: "Lesson 13: Plural Nouns (الْجَمْعُ)",
    grammar: "Plural Nouns & Demonstrative 'These'",
    theory: {
        sections: [
            {
                title: "👥 Introduction: Plural Forms",
                content: "In Arabic, there are three types of plurals:\n1. **Sound Masculine Plural** (ends with -ūna)\n2. **Sound Feminine Plural** (ends with -ātun)\n3. **Broken Plural** (the internal structure of the word changes)\n\nIn this lesson, we will learn these forms and how to use the demonstrative pronoun 'These' (هَؤُلَاءِ).",
                examples: [
                    { arabic: "مُدَرِّسٌ ⬅️ مُدَرِّسُونَ", meaning: "Teacher ⬅️ Teachers" },
                    { arabic: "مُسْلِمَةٌ ⬅️ مُسْلِمَاتٌ", meaning: "Muslim woman ⬅️ Muslim women" },
                    { arabic: "طَالِبٌ ⬅️ طُلَّابٌ", meaning: "Student ⬅️ Students" }
                ]
            },
            {
                title: "👉 Pointing to People: هَؤُلَاءِ (Ha'ula'i)",
                content: "To point to a group of people (men or women), we use **هَؤُلَاءِ** (These).\nIt is used only for **rational beings** (humans).",
                examples: [
                    { arabic: "هَؤُلَاءِ رِجَالٌ", meaning: "These are men" },
                    { arabic: "هَؤُلَاءِ مُدَرِّسُونَ", meaning: "These are teachers" },
                    { arabic: "هَؤُلَاءِ طَالِبَاتٌ", meaning: "These are female students" },
                    { arabic: "مَنْ هَؤُلَاءِ الرِّجَالُ؟", meaning: "Who are these men?" },
                    { arabic: "هَؤُلَاءِ أَصْدِقَائِي", meaning: "These are my friends" }
                ]
            },
            {
                title: "👨‍🏫 Sound Masculine Plural",
                content: "Formed by adding **ـُونَ** (ūna) to the end of the singular noun.\nUsually applied to professions and participial adjectives.",
                examples: [
                    { arabic: "مُهَنْدِسٌ ⬅️ مُهَنْدِسُونَ", meaning: "Engineer ⬅️ Engineers" },
                    { arabic: "مُؤْمِنٌ ⬅️ مُؤْمِنُونَ", meaning: "Believer ⬅️ Believers" },
                    { arabic: "كَافِرٌ ⬅️ كَافِرُونَ", meaning: "Disbeliever ⬅️ Disbelievers" },
                    { arabic: "مُجْتَهِدٌ ⬅️ مُجْتَهِدُونَ", meaning: "Hardworking (sing) ⬅️ Hardworking (pl)" },
                    { arabic: "مُسْلِمٌ ⬅️ مُسْلِمُونَ", meaning: "Muslim ⬅️ Muslims" }
                ]
            },
            {
                title: "👩‍🏫 Sound Feminine Plural",
                content: "Formed by replacing the 'Ta-Marbuta' (ة) with **ـَاتٌ** (-ātun).",
                examples: [
                    { arabic: "طَبِيبَةٌ ⬅️ طَبِيبَاتٌ", meaning: "Female Doctor ⬅️ Female Doctors" },
                    { arabic: "مُدَرِّسَةٌ ⬅️ مُدَرِّسَاتٌ", meaning: "Female Teacher ⬅️ Female Teachers" },
                    { arabic: "سَيَّارَةٌ ⬅️ سَيَّارَاتٌ", meaning: "Car ⬅️ Cars" },
                    { arabic: "مُسْلِمَةٌ ⬅️ مُسْلِمَاتٌ", meaning: "Muslim woman ⬅️ Muslim women" },
                    { arabic: "زَوْجَةٌ ⬅️ زَوْجَاتٌ", meaning: "Wife ⬅️ Wives" }
                ]
            },
            {
                title: "🧩 Broken Plural (Jam' Taksir)",
                content: "Many words form their plural by changing the internal structure of the word (breaking the pattern). These must be **memorized**.",
                examples: [
                    { arabic: "وَلَدٌ ⬅️ أَوْلَادٌ", meaning: "Boy ⬅️ Boys/Children" },
                    { arabic: "رَجُلٌ ⬅️ رِجَالٌ", meaning: "Man ⬅️ Men" },
                    { arabic: "طَالِبٌ ⬅️ طُلَّابٌ", meaning: "Student ⬅️ Students" },
                    { arabic: "تَاجِرٌ ⬅️ تُجَّارٌ", meaning: "Merchant ⬅️ Merchants" },
                    { arabic: "قَلَمٌ ⬅️ أَقْلَامٌ", meaning: "Pen ⬅️ Pens" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "13-1",
            type: "multiple-choice",
            question: "What does «هَؤُلَاءِ» mean?",
            options: ["This", "These (for people)", "Those"],
            correctAnswer: "These (for people)"
        },
        {
            id: "13-2",
            type: "multiple-choice",
            question: "What is the plural of «مُسْلِمٌ»?",
            options: ["مُسْلِمَةٌ", "مُسْلِمُونَ", "مُسْلِمَاتٌ"],
            correctAnswer: "مُسْلِمُونَ"
        },
        {
            id: "13-3",
            type: "word-scramble",
            question: "Arrange: 'Who are these men?'",
            arabic: "مَنْ هَؤُلَاءِ الرِّجَالُ؟",
            scrambledWords: ["الرِّجَالُ؟", "هَؤُلَاءِ", "مَنْ"],
            correctAnswer: "مَنْ هَؤُلَاءِ الرِّجَالُ؟"
        },
        {
            id: "13-4",
            type: "multiple-choice",
            question: "Plural of «بِنْتٌ» (Girl):",
            options: ["بَنَاتٌ", "أَبْنَاءٌ", "بِنْتَاتٌ"],
            correctAnswer: "بَنَاتٌ"
        },
        {
            id: "13-5",
            type: "multiple-choice",
            question: "Which word is a Broken Plural?",
            options: ["مُدَرِّسُونَ", "طُلَّابٌ", "مُسْلِمَاتٌ"],
            correctAnswer: "طُلَّابٌ"
        },
        {
            id: "13-6",
            type: "multiple-choice",
            question: "Translate: 'These students are new'",
            options: ["هَؤُلَاءِ طُلَّابٌ جُدُدٌ", "هَؤُلَاءِ طُلَّابٌ جَدِيدٌ", "هَذَا طُلَّابٌ جُدُدٌ"],
            correctAnswer: "هَؤُلَاءِ طُلَّابٌ جُدُدٌ"
        },
        {
            id: "13-7",
            type: "multiple-choice",
            question: "What is the plural of «طَالِبٌ»?",
            options: ["طَالِبُونَ", "طُلَّابٌ", "طَالِبَاتٌ"],
            correctAnswer: "طُلَّابٌ"
        },
        {
            id: "13-8",
            type: "multiple-choice",
            question: "How to say 'My brothers'?",
            options: ["أَخِي", "إِخْوَتِي", "أَخَوَاتِي"],
            correctAnswer: "إِخْوَتِي"
        },
        {
            id: "13-9",
            type: "multiple-choice",
            question: "Plural of «غَنِيٌّ» (Rich):",
            options: ["غَنِيُّونَ", "أَغْنِيَاءُ", "غَنِيَّاتٌ"],
            correctAnswer: "أَغْنِيَاءُ"
        },
        {
            id: "13-10",
            type: "word-scramble",
            question: "Arrange: 'My father and my uncle are merchants'",
            arabic: "أَبِي وَعَمِّي تُجَّارٌ",
            scrambledWords: ["تُجَّارٌ", "وَعَمِّي", "أَبِي"],
            correctAnswer: "أَبِي وَعَمِّي تُجَّارٌ"
        }
    ]
};
