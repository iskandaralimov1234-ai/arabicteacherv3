import { Lesson } from '../../types';

export const lesson15: Lesson = {
    id: 15,
    title: "Lesson 15: Feminine Plural (أَنْتُنَّ)",
    grammar: "Feminine Plural Pronouns & Verbs",
    theory: {
        sections: [
            {
                title: "👥 The Pronoun 'You' (Feminine Plural)",
                content: "To address a group of women, we use the pronoun **أَنْتُنَّ** (Antunna) — 'You all' (feminine).\nThis is the feminine counterpart to 'Antum'.",
                examples: [
                    { arabic: "أَنْتُنَّ طَالِبَاتٌ", meaning: "You are female students" },
                    { arabic: "أَنْتُنَّ مُدَرِّسَاتٌ", meaning: "You are female teachers" },
                    { arabic: "مَنْ أَنْتُنَّ؟", meaning: "Who are you (women)?" }
                ]
            },
            {
                title: "🔗 Attached Pronoun 'Your' (Feminine Plural)",
                content: "When saying 'Your house' (addressing women), we use the suffix **ـكُنَّ** (-kunna).",
                examples: [
                    { arabic: "بَيْتُكُنَّ", meaning: "Your house (fem. pl.)" },
                    { arabic: "هَذِهِ مَدْرَسَتُكُنَّ", meaning: "This is your school" },
                    { arabic: "أَيْنَ أُخْتُكُنَّ؟", meaning: "Where is your sister?" }
                ]
            },
            {
                title: "🏃‍♀️ Past Tense Verbs (They - Feminine)",
                content: "To describe the action of a group of women (They went), we add **ـْنَ** (Nun al-Niswa) to the verb:\n\n- **ذَهَبْنَ** (Dhahabna) — They (women) went\n- **خَرَجْنَ** (Kharajna) — They went out",
                examples: [
                    { arabic: "الطَّالِبَاتُ ذَهَبْنَ", meaning: "The female students went" },
                    { arabic: "ذَهَبْنَ إِلَى الْفَصْلِ", meaning: "They went to the classroom" }
                ]
            },
            {
                title: "⏱ Adverbs of Time: قَبْلَ and بَعْدَ",
                content: "The words **قَبْلَ** (Qabla - Before) and **بَعْدَ** (Ba'da - After) are always used in an Idafa construction (the following noun has a kasra).\nThey usually end with a fatha.",
                examples: [
                    { arabic: "قَبْلَ الصَّلَاةِ", meaning: "Before the prayer" },
                    { arabic: "بَعْدَ الدَّرْسِ", meaning: "After the lesson" },
                    { arabic: "قَبْلَ الأَذَانِ", meaning: "Before the Adhan" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "15-1",
            type: "multiple-choice",
            question: "How to say 'You all' to a group of women?",
            options: ["أَنْتُمْ", "أَنْتُنَّ", "هُنَّ"],
            correctAnswer: "أَنْتُنَّ"
        },
        {
            id: "15-2",
            type: "multiple-choice",
            question: "'Your book' (addressing women):",
            options: ["كِتَابُكُمْ", "كِتَابُكُنَّ", "كِتَابُهُمْ"],
            correctAnswer: "كِتَابُكُنَّ"
        },
        {
            id: "15-3",
            type: "word-scramble",
            question: "Arrange: 'Where is your school, O sisters?'",
            arabic: "أَيْنَ مَدْرَسَتُكُنَّ يَا أَخَوَاتُ؟",
            scrambledWords: ["يَا", "أَخَوَاتُ؟", "مَدْرَسَتُكُنَّ", "أَيْنَ"],
            correctAnswer: "أَيْنَ مَدْرَسَتُكُنَّ يَا أَخَوَاتُ؟"
        },
        {
            id: "15-4",
            type: "multiple-choice",
            question: "How to say 'They (women) went out'?",
            options: ["خَرَجُوا", "خَرَجْنَ", "خَرَجَتْ"],
            correctAnswer: "خَرَجْنَ"
        },
        {
            id: "15-5",
            type: "multiple-choice",
            question: "Translate: 'Before the lesson'",
            options: ["قَبْلَ الدَّرْسِ", "بَعْدَ الدَّرْسِ", "فِي الدَّرْسِ"],
            correctAnswer: "قَبْلَ الدَّرْسِ"
        },
        {
            id: "15-6",
            type: "word-scramble",
            question: "Arrange: 'We went after the prayer'",
            arabic: "ذَهَبْنَا بَعْدَ الصَّلَاةِ",
            scrambledWords: ["الصَّلَاةِ", "بَعْدَ", "ذَهَبْنَا"],
            correctAnswer: "ذَهَبْنَا بَعْدَ الصَّلَاةِ"
        },
        {
            id: "15-7",
            type: "matching",
            question: "Match verb and subject",
            pairs: [
                { "arabic": "ذَهَبُوا", "meaning": "They (M) went" },
                { "arabic": "ذَهَبْنَ", "meaning": "They (F) went" },
                { "arabic": "ذَهَبْتُمْ", "meaning": "You (M) went" },
                { "arabic": "ذَهَبْنَا", "meaning": "We went" }
            ]
        },
        {
            id: "15-8",
            type: "multiple-choice",
            question: "Plural of «أُخْتٌ» (sister):",
            options: ["إِخْوَةٌ", "أَخَوَاتٌ", "أُخْتَاتٌ"],
            correctAnswer: "أَخَوَاتٌ"
        },
        {
            id: "15-9",
            type: "multiple-choice",
            question: "'Who are you, O women?'",
            options: ["مَنْ أَنْتُنَّ يَا نِسَاءُ؟", "مَنْ أَنْتُمْ يَا نِسَاءُ؟", "مَنْ هُنَّ يَا نِسَاءُ؟"],
            correctAnswer: "مَنْ أَنْتُنَّ يَا نِسَاءُ؟"
        },
        {
            id: "15-10",
            type: "word-scramble",
            question: "Arrange: 'They (women) returned from school'",
            arabic: "رَجَعْنَ مِنَ الْمَدْرَسَةِ",
            scrambledWords: ["الْمَدْرَسَةِ", "مِنَ", "رَجَعْنَ"],
            correctAnswer: "رَجَعْنَ مِنَ الْمَدْرَسَةِ"
        }
    ]
};
