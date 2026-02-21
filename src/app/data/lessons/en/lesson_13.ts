import { Lesson } from '../../types';

export const lesson13: Lesson = {
    id: 13,
    title: "Lesson 13: الْجَمْعُ (The Plural)",
    grammar: "Plural Nouns & Demonstrative 'These' (Ha'ula'i)",
    theory: {
        sections: [
            {
                title: "👥 Introduction: The Plural",
                content: "In Arabic, there are three main types of plurals:\n1. **Sound Masculine Plural** (ends in -ūna)\n2. **Sound Feminine Plural** (ends in -āt)\n3. **Broken Plural** (the structure of the singular word changes entirely)\n\nIn this lesson, we will study these types and learn to use the demonstrative pronoun 'These' (**هَؤُلَاءِ**).",
                examples: [
                    { arabic: "مُدَرِّسٌ ⬅️ مُدَرِّسُونَ", meaning: "Teacher ⬅️ Teachers" },
                    { arabic: "مُسْلِمَةٌ ⬅️ مُسْلِمَاتٌ", meaning: "Muslim woman ⬅️ Muslim women" },
                    { arabic: "طَالِبٌ ⬅️ طُلَّابٌ", meaning: "Student ⬅️ Students" }
                ]
            },
            {
                title: "👉 Pointing to People: هَؤُلَاءِ (Ha'ula'i)",
                content: "To point to a group of people (men or women) nearby, we use **هَؤُلَاءِ** (These).\nNote: This is used only for **rational beings** (humans).",
                examples: [
                    { arabic: "هَؤُلَاءِ رِجَالٌ", meaning: "These are men" },
                    { arabic: "هَؤُلَاءِ مُدَرِّسُونَ", meaning: "These are teachers" },
                    { arabic: "هَؤُلَاءِ طَالِبَاتٌ", meaning: "These are female students" },
                    { arabic: "مَنْ هَؤُلَاءِ الرِّجَالُ؟", meaning: "Who are these men?" },
                    { arabic: "هَؤُلَاءِ أَصْدِقَائِي", meaning: "These are my friends" }
                ]
            },
            {
                title: "👨‍🏫 Sound Masculine Plural (Jam' Mudhakkar Salim)",
                content: "This is formed by adding the suffix **ـُونَ** (-ūna) to the end of the singular masculine noun.\nIt is commonly used for professions and descriptions of people.",
                examples: [
                    { arabic: "مُهَنْدِسٌ ⬅️ مُهَنْدِسُونَ", meaning: "Engineer ⬅️ Engineers" },
                    { arabic: "مُؤْمِنٌ ⬅️ مُؤْمِنُونَ", meaning: "Believer ⬅️ Believers" },
                    { arabic: "مُجْتَهِدٌ ⬅️ مُجْتَهِدُونَ", meaning: "Hardworking ⬅️ Hardworking (pl.)" },
                    { arabic: "مُسْلِمٌ ⬅️ مُسْلِمُونَ", meaning: "Muslim ⬅️ Muslims" },
                    { arabic: "فَلَّاحٌ ⬅️ فَلَّاحُونَ", meaning: "Farmer ⬅️ Farmers" }
                ]
            },
            {
                title: "👩‍🏫 Sound Feminine Plural (Jam' Mu'annath Salim)",
                content: "This is formed by replacing the 'Ta-Marbuta' (ة) with the suffix **ـَاتٌ** (-ātun).",
                examples: [
                    { arabic: "طَبِيبَةٌ ⬅️ طَبِيبَاتٌ", meaning: "Doctor (f) ⬅️ Doctors (f)" },
                    { arabic: "مُدَرِّسَةٌ ⬅️ مُدَرِّسَاتٌ", meaning: "Teacher (f) ⬅️ Teachers (f)" },
                    { arabic: "سَيَّارَةٌ ⬅️ سَيَّارَاتٌ", meaning: "Car ⬅️ Cars" },
                    { arabic: "مُسْلِمَةٌ ⬅️ مُسْلِمَاتٌ", meaning: "Muslim woman ⬅️ Muslim women" },
                    { arabic: "زَوْجَةٌ ⬅️ زَوْجَاتٌ", meaning: "Wife ⬅️ Wives" }
                ]
            },
            {
                title: "🧩 Broken Plural (Jam' Taksir)",
                content: "Many Arabic words form their plural by changing the internal structure of the word itself. Unlike English 'books' (adding -s), these are like 'man' ➡️ 'men'. These forms must be **memorized** as you learn the vocabulary.",
                examples: [
                    { arabic: "وَلَدٌ ⬅️ أَوْلَادٌ", meaning: "Boy ⬅️ Boys" },
                    { arabic: "رَجُلٌ ⬅️ رِجَالٌ", meaning: "Man ⬅️ Men" },
                    { arabic: "طَالِبٌ ⬅️ طُلَّابٌ", meaning: "Student ⬅️ Students" },
                    { arabic: "تَاجِرٌ ⬅️ تُجَّارٌ", meaning: "Merchant ⬅️ Merchants" },
                    { arabic: "كِتَابٌ ⬅️ كُتُبٌ", meaning: "Book ⬅️ Books" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "13-1",
            type: "multiple-choice",
            question: "How do you translate 'هَؤُلَاءِ'?",
            options: ["This", "These (for humans)", "Those"],
            correctAnswer: "These (for humans)"
        },
        {
            id: "13-2",
            type: "multiple-choice",
            question: "What is the plural of 'مُسْلِمٌ'?",
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
            question: "Plural of 'بِنْتٌ' (Girl):",
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
            question: "What is the plural of 'طَالِبٌ'?",
            options: ["طَالِبُونَ", "طُلَّابٌ", "طَالِبَاتٌ"],
            correctAnswer: "طُلَّابٌ"
        },
        {
            id: "13-8",
            type: "multiple-choice",
            question: "How do you say 'My brothers'?",
            options: ["أَخِي", "إِخْوَتِي", "أَخَوَاتِي"],
            correctAnswer: "إِخْوَتِي"
        },
        {
            id: "13-9",
            type: "multiple-choice",
            question: "Choose the plural for 'غَنِيٌّ' (Rich):",
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
