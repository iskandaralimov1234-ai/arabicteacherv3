import { Lesson } from '../../types';
export const lesson45: Lesson = {
    id: 45, title: "Lesson 45: Verb Moods (الدَّرْسُ الْخَامِسُ وَالْأَرْبَعُونَ - إِعْرَابُ الْفِعْلِ الْمُضَارِعِ)", grammar: "Present Tense Verb Moods", theory: {
        sections: [
            { title: "📖 Description", content: "The present tense verb (الْفِعْلُ الْمُضَارِعُ) has three moods (i'rāb states): Marfū' (indicative — default), Manṣūb (subjunctive — after certain particles), and Majzūm (jussive — after certain particles)." },
            { title: "📝 Key Rules", content: "- Default (Marfū'): يَكْتُبُ (ḍamma) — he writes\\n- Manṣūb after: أَنْ، لَنْ، كَيْ، لِ\\n- Majzūm after: لَمْ، لَا (nahy)، لِ (amr)\\n- The verb changes its ending vowel accordingly" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "يَكْتُبُ الطَّالِبُ", meaning: "Yaktubu al-ṭālibu — The student writes (Marfū' — ḍamma)" },
                    { arabic: "أُرِيدُ أَنْ أَكْتُبَ", meaning: "Urīdu an aktuba — I want to write (Manṣūb after أَنْ — fatḥa)" },
                    { arabic: "لَمْ يَكْتُبْ", meaning: "Lam yaktub — He did not write (Majzūm after لَمْ — sukūn)" },
                    { arabic: "لِيَذْهَبْ إِلَى الْمَدْرَسَةِ", meaning: "Li-yadhhab ilā al-madrasati — Let him go to school (Majzūm — lām al-amr)" },
                    { arabic: "لَنْ أَتْرُكَ الدِّرَاسَةَ", meaning: "Lan atruka al-dirāsata — I will never leave studying (Manṣūb after لَنْ)" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "مُضَارِعٌ", meaning: "muḍāri'un — Present tense" }, { arabic: "أَنْ", meaning: "an — That (subjunctive)" },
                    { arabic: "كَيْ", meaning: "kay — In order to" }, { arabic: "لَمْ", meaning: "lam — Did not" },
                    { arabic: "لَا النَّاهِيَةُ", meaning: "lā al-nāhiyatu — Prohibitive lā" }, { arabic: "لَامُ الْأَمْرِ", meaning: "lāmu al-amri — Lām of command" },
                    { arabic: "نَصْبٌ", meaning: "naṣbun — Subjunctive" }, { arabic: "جَزْمٌ", meaning: "jazmun — Jussive" }
                ]
            }
        ]
    }, tasks: [
        { id: "45-1", type: "multiple-choice", question: "The default mood of the present verb is:", options: ["Manṣūb", "Majzūm", "Marfū'", "Mabni"], correctAnswer: "Marfū'" },
        { id: "45-2", type: "multiple-choice", question: "After أَنْ, the verb becomes:", options: ["Marfū'", "Manṣūb", "Majzūm", "Past tense"], correctAnswer: "Manṣūb" },
        { id: "45-3", type: "multiple-choice", question: "After لَمْ, the verb becomes:", options: ["Marfū'", "Manṣūb", "Majzūm", "Past tense"], correctAnswer: "Majzūm" },
        { id: "45-4", type: "multiple-choice", question: "The sign of Marfū' in the present verb is:", options: ["Fatḥa", "Sukūn", "Ḍamma", "Kasra"], correctAnswer: "Ḍamma" },
        { id: "45-5", type: "multiple-choice", question: "Translate: أُرِيدُ أَنْ أَكْتُبَ", options: ["I wrote", "I want to write", "I am writing", "Write!"], correctAnswer: "I want to write" },
        { id: "45-6", type: "multiple-choice", question: "Translate: لَمْ يَكْتُبْ", options: ["He will write", "He writes", "He did not write", "He is writing"], correctAnswer: "He did not write" },
        { id: "45-7", type: "multiple-choice", question: "Translate: لَنْ أَتْرُكَ الدِّرَاسَةَ", options: ["I left studying", "I will never leave studying", "I study sometimes", "Leave studying"], correctAnswer: "I will never leave studying" },
        { id: "45-8", type: "multiple-choice", question: "What does نَصْبٌ mean?", options: ["Indicative", "Subjunctive", "Jussive", "Past tense"], correctAnswer: "Subjunctive" },
        { id: "45-9", type: "multiple-choice", question: "What does جَزْمٌ mean?", options: ["Indicative", "Subjunctive", "Jussive", "Past tense"], correctAnswer: "Jussive" },
        { id: "45-10", type: "multiple-choice", question: "What does كَيْ mean?", options: ["Because", "In order to", "After", "Before"], correctAnswer: "In order to" }
    ]
};
