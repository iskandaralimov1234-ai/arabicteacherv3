import { Lesson } from '../../types';
export const lesson46: Lesson = {
    id: 46, title: "Lesson 46: The Imperative Verb (الدَّرْسُ السَّادِسُ وَالْأَرْبَعُونَ - فِعْلُ الْأَمْرِ)", grammar: "The Imperative Verb (Fi'l Amr)", theory: {
        sections: [
            { title: "📖 Description", content: "The imperative verb (فِعْلُ الْأَمْرِ — Fi'l al-Amr) is used for commands. It is formed from the present tense by removing the prefix letter and adding hamzatu al-waṣl if needed. It is always Mabnī (indeclinable)." },
            { title: "📝 Key Rules", content: "- Remove the present tense prefix (يـ/تـ/أ/نـ)\\n- If what remains starts with a vowelless consonant → add hamzatu al-waṣl\\n- اُكْتُبْ (write!), اِذْهَبْ (go!), اِقْرَأْ (read!)\\n- Prohibition uses لَا + present Majzūm: لَا تَكْتُبْ (don't write)" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "اُكْتُبِ الدَّرْسَ", meaning: "Uktub al-darsa — Write the lesson!" },
                    { arabic: "اِقْرَأْ بِاسْمِ رَبِّكَ", meaning: "Iqra' bismi rabbika — Read in the name of your Lord!" },
                    { arabic: "اِذْهَبْ إِلَى الْمَدْرَسَةِ", meaning: "Idhhab ilā al-madrasati — Go to the school!" },
                    { arabic: "لَا تَكْتُبْ عَلَى الْجِدَارِ", meaning: "Lā taktub 'alā al-jidāri — Don't write on the wall! (prohibition)" },
                    { arabic: "اِجْلِسُوا", meaning: "Ijlisū — Sit down! (plural masculine)" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "أَمْرٌ", meaning: "amrun — Command" }, { arabic: "نَهْيٌ", meaning: "nahyun — Prohibition" },
                    { arabic: "اُكْتُبْ", meaning: "uktub — Write!" }, { arabic: "اِقْرَأْ", meaning: "iqra' — Read!" },
                    { arabic: "اِذْهَبْ", meaning: "idhhab — Go!" }, { arabic: "اِجْلِسْ", meaning: "ijlis — Sit!" },
                    { arabic: "قُمْ", meaning: "qum — Stand!" }, { arabic: "كُلْ", meaning: "kul — Eat!" }
                ]
            }
        ]
    }, tasks: [
        { id: "46-1", type: "multiple-choice", question: "The imperative is formed from:", options: ["Past tense", "Present tense (removing prefix)", "Verbal noun", "Adjective"], correctAnswer: "Present tense (removing prefix)" },
        { id: "46-2", type: "multiple-choice", question: "Prohibition uses:", options: ["لَا + present Majzūm", "لَنْ + past", "لَمْ + past", "إِنْ + past"], correctAnswer: "لَا + present Majzūm" },
        { id: "46-3", type: "multiple-choice", question: "The imperative verb is always:", options: ["Marfū'", "Manṣūb", "Mabnī (indeclinable)", "Majrūr"], correctAnswer: "Mabnī (indeclinable)" },
        { id: "46-4", type: "multiple-choice", question: "What is added when the remaining stem starts with a vowelless consonant?", options: ["Tā' marbūṭa", "Hamzatu al-waṣl", "Tanwīn", "Tashdīd"], correctAnswer: "Hamzatu al-waṣl" },
        { id: "46-5", type: "multiple-choice", question: "Translate: اُكْتُبِ الدَّرْسَ", options: ["He wrote the lesson", "Write the lesson!", "The lesson was written", "Writing the lesson"], correctAnswer: "Write the lesson!" },
        { id: "46-6", type: "multiple-choice", question: "Translate: لَا تَكْتُبْ عَلَى الْجِدَارِ", options: ["Write on the wall", "Don't write on the wall!", "He wrote on the wall", "The wall is written on"], correctAnswer: "Don't write on the wall!" },
        { id: "46-7", type: "multiple-choice", question: "Translate: اِقْرَأْ بِاسْمِ رَبِّكَ", options: ["He read", "Read in the name of your Lord!", "Reading is good", "The name of your Lord"], correctAnswer: "Read in the name of your Lord!" },
        { id: "46-8", type: "multiple-choice", question: "What does أَمْرٌ mean?", options: ["Prohibition", "Command", "Question", "Statement"], correctAnswer: "Command" },
        { id: "46-9", type: "multiple-choice", question: "What does نَهْيٌ mean?", options: ["Command", "Prohibition", "Permission", "Request"], correctAnswer: "Prohibition" },
        { id: "46-10", type: "multiple-choice", question: "What does قُمْ mean?", options: ["Sit!", "Stand!", "Go!", "Come!"], correctAnswer: "Stand!" }
    ]
};
