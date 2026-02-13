import { Lesson } from '../../types';

export const lesson14: Lesson = {
    id: 14,
    title: "Lesson 14: Plural Pronouns (أَنْتُمْ، هُمْ، نَحْنُ)",
    grammar: "Plural Personal & Demonstrative Pronouns",
    theory: {
        sections: [
            {
                title: "👉 Pointing to Distant Groups: أُولَئِكَ (Those)",
                content: "We already know that 'these' is هَؤُلَاءِ (ha'ula'i). To point to people who are far away, we use **أُولَئِكَ** (Ula'ika) meaning 'Those'.\nIt is used for both men and women (rational beings).",
                examples: [
                    { arabic: "أُولَئِكَ طُلَّابٌ", meaning: "Those are students" },
                    { arabic: "أُولَئِكَ رِجَالٌ", meaning: "Those are men" },
                    { arabic: "أُولَئِكَ مُدَرِّسَاتٌ", meaning: "Those are female teachers" }
                ]
            },
            {
                title: "👥 Plural Personal Pronouns",
                content: "In this lesson, we introduce new plural pronouns:\n\n1. **هُمْ** (Hum) — They (masculine)\n2. **أَنْتُمْ** (Antum) — You all (masculine group)\n3. **نَحْنُ** (Nahnu) — We (both genders)",
                examples: [
                    { arabic: "هُمْ مُهَنْدِسُونَ", meaning: "They are engineers" },
                    { arabic: "أَنْتُمْ طُلَّابٌ", meaning: "You are students" },
                    { arabic: "نَحْنُ مُسْلِمُونَ", meaning: "We are Muslims" }
                ]
            },
            {
                title: "🔗 Attached Pronouns (Your, Our, Their)",
                content: "When we want to say 'Your house' or 'Our book', we add suffixes:\n\n- **ـكُمْ** (-kum) — Your (plural)\n- **ـنَا** (-na) — Our\n- **ـهُمْ** (-hum) — Their",
                examples: [
                    { arabic: "بَيْتُكُمْ", meaning: "Your house" },
                    { arabic: "رَبُّنَا", meaning: "Our Lord" },
                    { arabic: "أَبُوهُمْ", meaning: "Their father" }
                ]
            },
            {
                title: "🏃‍♂️ Plural Verbs (Past Tense)",
                content: "To express the action of a group of men (They went), we add **ـُوا** (Waw al-Jama'a) to the verb:\n\n- **ذَهَبُوا** (Dhahabu) — They went\n- **خَرَجُوا** (Kharaju) — They went out/exited",
                examples: [
                    { arabic: "أَيْنَ الطُّلَّابُ؟ ذَهَبُوا إِلَى الْمَدْرَسَةِ", meaning: "Where are the students? They went to school" },
                    { arabic: "اَلأَوْلَادُ خَرَجُوا", meaning: "The children went out" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "14-1",
            type: "multiple-choice",
            question: "What does «أُولَئِكَ» mean?",
            options: ["These", "Those (for people)", "That"],
            correctAnswer: "Those (for people)"
        },
        {
            id: "14-2",
            type: "multiple-choice",
            question: "Which pronoun means 'You all' (masculine)?",
            options: ["أَنْتَ", "أَنْتُمْ", "هُمْ"],
            correctAnswer: "أَنْتُمْ"
        },
        {
            id: "14-3",
            type: "word-scramble",
            question: "Arrange: 'We are Muslims'",
            arabic: "نَحْنُ مُسْلِمُونَ",
            scrambledWords: ["مُسْلِمُونَ", "نَحْنُ", "هُمْ"],
            correctAnswer: "نَحْنُ مُسْلِمُونَ"
        },
        {
            id: "14-4",
            type: "multiple-choice",
            question: "Translate: 'Your house'",
            options: ["بَيْتُكُمْ", "بَيْتُنَا", "بَيْتُهُمْ"],
            correctAnswer: "بَيْتُكُمْ"
        },
        {
            id: "14-5",
            type: "matching",
            question: "Match pronoun and meaning",
            pairs: [
                { "arabic": "نَحْنُ", "meaning": "We" },
                { "arabic": "هُمْ", "meaning": "They (M)" },
                { "arabic": "أَنْتُمْ", "meaning": "You all (M)" },
                { "arabic": "هُنَّ", "meaning": "They (F)" }
            ]
        },
        {
            id: "14-6",
            type: "multiple-choice",
            question: "How to say 'They went'?",
            options: ["ذَهَبَ", "ذَهَبُوا", "ذَهَبْتُمْ"],
            correctAnswer: "ذَهَبُوا"
        },
        {
            id: "14-7",
            type: "word-scramble",
            question: "Arrange: 'Where are your books, O children?'",
            arabic: "أَيْنَ كُتُبُكُمْ يَا أَوْلَادُ؟",
            scrambledWords: ["يَا", "أَوْلَادُ؟", "كُتُبُكُمْ", "أَيْنَ"],
            correctAnswer: "أَيْنَ كُتُبُكُمْ يَا أَوْلَادُ؟"
        },
        {
            id: "14-8",
            type: "multiple-choice",
            question: "Choose correct: 'Those men are teachers'",
            options: ["أُولَئِكَ الرِّجَالُ مُدَرِّسُونَ", "هَؤُلَاءِ الرِّجَالُ مُدَرِّسُونَ", "ذَلِكَ الرِّجَالُ مُدَرِّسُونَ"],
            correctAnswer: "أُولَئِكَ الرِّجَالُ مُدَرِّسُونَ"
        },
        {
            id: "14-9",
            type: "multiple-choice",
            question: "'Our Lord' in Arabic:",
            options: ["رَبُّكُمْ", "رَبُّنَا", "رَبُّهُ"],
            correctAnswer: "رَبُّنَا"
        },
        {
            id: "14-10",
            type: "word-scramble",
            question: "Arrange: 'My brothers went out from the house'",
            arabic: "إِخْوَتِي خَرَجُوا مِنَ الْبَيْتِ",
            scrambledWords: ["مِنَ", "خَرَجُوا", "الْبَيْتِ", "إِخْوَتِي"],
            correctAnswer: "إِخْوَتِي خَرَجُوا مِنَ الْبَيْتِ"
        }
    ]
};
