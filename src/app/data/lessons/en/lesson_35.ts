import { Lesson } from '../../types';
export const lesson35: Lesson = {
    id: 35, title: "Lesson 35: The Five Verbs (الدَّرْسُ الْخَامِسُ وَالثَّلَاثُونَ - الْأَفْعَالُ الْخَمْسَةُ)", grammar: "The Five Verbs (Al-Af'āl al-Khamsa)", theory: {
        sections: [
            { title: "📖 Description", content: "The Five Verbs (الْأَفْعَالُ الْخَمْسَةُ) are present-tense verb forms connected to specific pronouns. They are special because their i'rāb signs differ from regular verbs: they use nūn (ن) for Marfū', and loss of nūn for Manṣūb/Majzūm." },
            { title: "📝 Key Rules", content: "- The five forms: يَفْعَلَانِ، تَفْعَلَانِ، يَفْعَلُونَ، تَفْعَلُونَ، تَفْعَلِينَ\\n- Marfū': ends with نْ (ثُبُوتُ النُّونِ)\\n- Manṣūb/Majzūm: نْ is dropped (حَذْفُ النُّونِ)\\n- These correspond to: they two (m/f), they (m.pl.), you (m.pl.), you (f.s.)" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "الطُّلَّابُ يَدْرُسُونَ", meaning: "Al-ṭullābu yadrusūna — The students study (Marfū' — nūn present)" },
                    { arabic: "لَنْ يَدْرُسُوا", meaning: "Lan yadrusū — They will not study (Manṣūb — nūn dropped)" },
                    { arabic: "لَمْ يَدْرُسُوا", meaning: "Lam yadrusū — They did not study (Majzūm — nūn dropped)" },
                    { arabic: "أَنْتِ تَكْتُبِينَ", meaning: "Anti taktubīna — You (f.s.) write (Marfū' — nūn present)" },
                    { arabic: "هُمَا يَكْتُبَانِ", meaning: "Humā yaktubāni — They two write (dual — Marfū' with nūn)" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "الْأَفْعَالُ الْخَمْسَةُ", meaning: "al-af'ālu al-khamsatu — The Five Verbs" },
                    { arabic: "ثُبُوتُ النُّونِ", meaning: "thubūtu al-nūni — Presence of nūn (Marfū' sign)" },
                    { arabic: "حَذْفُ النُّونِ", meaning: "ḥadhfu al-nūni — Deletion of nūn (Manṣūb/Majzūm sign)" },
                    { arabic: "يَفْعَلُونَ", meaning: "yaf'alūna — They (m.) do" }, { arabic: "تَفْعَلِينَ", meaning: "taf'alīna — You (f.s.) do" },
                    { arabic: "يَفْعَلَانِ", meaning: "yaf'alāni — They two (m.) do" }, { arabic: "تَفْعَلَانِ", meaning: "taf'alāni — They two (f.) do" },
                    { arabic: "تَفْعَلُونَ", meaning: "taf'alūna — You (m.pl.) do" }
                ]
            }
        ]
    }, tasks: [
        { id: "35-1", type: "multiple-choice", question: "How many verb forms are the 'Five Verbs'?", options: ["Three", "Four", "Five", "Six"], correctAnswer: "Five" },
        { id: "35-2", type: "multiple-choice", question: "The Marfū' sign for the Five Verbs is:", options: ["Ḍamma", "Presence of nūn (ثُبُوتُ النُّونِ)", "Fatḥa", "Alif"], correctAnswer: "Presence of nūn (ثُبُوتُ النُّونِ)" },
        { id: "35-3", type: "multiple-choice", question: "The Manṣūb/Majzūm sign is:", options: ["Adding nūn", "Deletion of nūn (حَذْفُ النُّونِ)", "Adding alif", "Ḍamma"], correctAnswer: "Deletion of nūn (حَذْفُ النُّونِ)" },
        { id: "35-4", type: "multiple-choice", question: "تَفْعَلِينَ corresponds to which pronoun?", options: ["أَنْتَ", "أَنْتِ", "هُمْ", "هُنَّ"], correctAnswer: "أَنْتِ" },
        { id: "35-5", type: "multiple-choice", question: "Translate: الطُّلَّابُ يَدْرُسُونَ", options: ["The students studied", "The students study", "The student studies", "Study, students!"], correctAnswer: "The students study" },
        { id: "35-6", type: "multiple-choice", question: "Translate: لَنْ يَدْرُسُوا", options: ["They studied", "They will not study", "They did not study", "They are studying"], correctAnswer: "They will not study" },
        { id: "35-7", type: "multiple-choice", question: "Translate: أَنْتِ تَكْتُبِينَ", options: ["You (m.) write", "You (f.) write", "She writes", "They write"], correctAnswer: "You (f.) write" },
        { id: "35-8", type: "multiple-choice", question: "What does ثُبُوتُ النُّونِ mean?", options: ["Deletion of nūn", "Presence of nūn", "Adding alif", "Changing vowel"], correctAnswer: "Presence of nūn" },
        { id: "35-9", type: "multiple-choice", question: "What does حَذْفُ النُّونِ mean?", options: ["Presence of nūn", "Deletion of nūn", "Adding nūn", "Doubling nūn"], correctAnswer: "Deletion of nūn" },
        { id: "35-10", type: "multiple-choice", question: "What does يَفْعَلَانِ refer to?", options: ["He does", "They two do (masculine)", "She does", "You do"], correctAnswer: "They two do (masculine)" }
    ]
};
