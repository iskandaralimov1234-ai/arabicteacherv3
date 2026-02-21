import { Lesson } from '../../types';
export const lesson24: Lesson = {
    id: 24, title: "Lesson 24: Coordination and Apposition (الدَّرْسُ الرَّابِعُ وَالْعِشْرُونَ - الْعَطْفُ وَالْبَدَلُ)", grammar: "Coordination ('Aṭf) and Apposition (Badal)", theory: {
        sections: [
            { title: "📖 Description", content: "Coordination (العَطْفُ — Al-'Aṭf) connects words or phrases using conjunction particles. Apposition (البَدَلُ — Al-Badal) is when one noun clarifies or replaces another, agreeing in i'rāb." },
            { title: "📝 Key Rules", content: "- وَ (and), فَ (then), ثُمَّ (subsequently), أَوْ (or) — coordination particles\\n- The coordinated word follows the same i'rāb as the word before وَ\\n- Badal agrees in i'rāb with the word it clarifies\\n- Types of Badal: badal kull min kull (total), badal ba'ḍ min kull (partial)" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "جَاءَ مُحَمَّدٌ وَعَلِيٌّ", meaning: "Jā'a Muḥammadun wa 'Aliyyun — Muhammad and Ali came (both Marfū', coordinated with وَ)" },
                    { arabic: "رَأَيْتُ مُحَمَّدًا وَعَلِيًّا", meaning: "Ra'aytu Muḥammadan wa 'Aliyyan — I saw Muhammad and Ali (both Manṣūb)" },
                    { arabic: "جَاءَ الْخَلِيفَةُ عُمَرُ", meaning: "Jā'a al-khalīfatu 'Umaru — The caliph, Umar, came (Badal — 'Umar clarifies 'caliph', both Marfū')" },
                    { arabic: "قَرَأْتُ الْكِتَابَ نِصْفَهُ", meaning: "Qara'tu al-kitāba niṣfahu — I read the book, half of it (Badal ba'ḍ — partial apposition)" },
                    { arabic: "ذَهَبَ أَحْمَدُ ثُمَّ خَالِدٌ", meaning: "Dhahaba Aḥmadu thumma Khālidun — Ahmad went, then Khalid" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "عَطْفٌ", meaning: "'aṭfun — Coordination" }, { arabic: "بَدَلٌ", meaning: "badalun — Apposition" },
                    { arabic: "وَ", meaning: "wa — And" }, { arabic: "فَ", meaning: "fa — Then" },
                    { arabic: "ثُمَّ", meaning: "thumma — Subsequently" }, { arabic: "أَوْ", meaning: "aw — Or" },
                    { arabic: "مَعْطُوفٌ", meaning: "ma'ṭūfun — Coordinated word" }, { arabic: "مُبْدَلٌ مِنْهُ", meaning: "mubdalun minhu — Word being clarified" }
                ]
            }
        ]
    }, tasks: [
        { id: "24-1", type: "multiple-choice", question: "The coordinated word (مَعْطُوف) takes which i'rāb?", options: ["Always Marfū'", "Same as the word before the particle", "Always Manṣūb", "Always Majrūr"], correctAnswer: "Same as the word before the particle" },
        { id: "24-2", type: "multiple-choice", question: "What is Badal (البَدَلُ)?", options: ["A conjunction", "An apposition that clarifies another noun", "A preposition", "A verb form"], correctAnswer: "An apposition that clarifies another noun" },
        { id: "24-3", type: "multiple-choice", question: "In جَاءَ مُحَمَّدٌ وَعَلِيٌّ, why is عَلِيٌّ Marfū'?", options: ["Because it is the subject", "Because it is coordinated with مُحَمَّدٌ (also Marfū')", "Because it follows a preposition", "Because it is indefinite"], correctAnswer: "Because it is coordinated with مُحَمَّدٌ (also Marfū')" },
        { id: "24-4", type: "multiple-choice", question: "Which particle means 'subsequently/then'?", options: ["وَ", "فَ", "ثُمَّ", "أَوْ"], correctAnswer: "ثُمَّ" },
        { id: "24-5", type: "multiple-choice", question: "Translate: جَاءَ مُحَمَّدٌ وَعَلِيٌّ", options: ["Muhammad and Ali left", "Muhammad and Ali came", "Muhammad came to Ali", "Ali went to Muhammad"], correctAnswer: "Muhammad and Ali came" },
        { id: "24-6", type: "multiple-choice", question: "Translate: رَأَيْتُ مُحَمَّدًا وَعَلِيًّا", options: ["I saw Muhammad and Ali", "Muhammad and Ali saw me", "I went with them", "They left"], correctAnswer: "I saw Muhammad and Ali" },
        { id: "24-7", type: "multiple-choice", question: "Translate: ذَهَبَ أَحْمَدُ ثُمَّ خَالِدٌ", options: ["Ahmad and Khalid went", "Ahmad went, then Khalid", "Khalid went, then Ahmad", "Ahmad went with Khalid"], correctAnswer: "Ahmad went, then Khalid" },
        { id: "24-8", type: "multiple-choice", question: "What does عَطْفٌ mean?", options: ["Apposition", "Coordination", "Emphasis", "Exception"], correctAnswer: "Coordination" },
        { id: "24-9", type: "multiple-choice", question: "What does بَدَلٌ mean?", options: ["Coordination", "Apposition", "Emphasis", "Exception"], correctAnswer: "Apposition" },
        { id: "24-10", type: "multiple-choice", question: "What does أَوْ mean?", options: ["And", "Then", "Or", "But"], correctAnswer: "Or" }
    ]
};
