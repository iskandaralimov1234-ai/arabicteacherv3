import { Lesson } from '../../types';
export const lesson28: Lesson = {
    id: 28, title: "Lesson 28: Exception (Al-Istithnā') (الدَّرْسُ الثَّامِنُ وَالْعِشْرُونَ - الِاسْتِثْنَاءُ)", grammar: "Exception (Al-Istithnā')", theory: {
        sections: [
            { title: "📖 Description", content: "Exception (الِاسْتِثْنَاءُ — Al-Istithnā') is separating an element from a general group. The particle إِلَّا (illā — except) is the most common exception particle. The state of the excepted noun depends on the sentence type." },
            { title: "📝 Key Rules", content: "- Affirmative sentence + complete: excepted noun is Manṣūb → جَاءَ الطُّلَّابُ إِلَّا مُحَمَّدًا\\n- Negative sentence + complete: excepted noun follows the sentence structure (Badal)\\n- Other exception particles: غَيْرُ, سِوَى, خَلَا\\n- مَا خَلَا and مَا عَدَا make the excepted noun Manṣūb" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "جَاءَ الطُّلَّابُ إِلَّا مُحَمَّدًا", meaning: "Jā'a al-ṭullābu illā Muḥammadan — All students came except Muhammad (affirmative → Manṣūb)" },
                    { arabic: "مَا جَاءَ أَحَدٌ إِلَّا مُحَمَّدٌ", meaning: "Mā jā'a aḥadun illā Muḥammadun — No one came except Muhammad (negative → Marfū' as Badal)" },
                    { arabic: "كُلُّ الطُّلَّابِ حَاضِرُونَ إِلَّا عَلِيًّا", meaning: "Kullu al-ṭullābi ḥāḍirūna illā 'Aliyyan — All students are present except Ali" },
                    { arabic: "لَمْ يَذْهَبْ أَحَدٌ إِلَّا زَيْدًا", meaning: "Lam yadhhab aḥadun illā Zaydan — No one went except Zayd" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "اسْتِثْنَاءٌ", meaning: "istithnā'un — Exception" }, { arabic: "إِلَّا", meaning: "illā — Except" },
                    { arabic: "مُسْتَثْنًى", meaning: "mustathnan — Excepted noun" }, { arabic: "مُسْتَثْنَى مِنْهُ", meaning: "mustathnā minhu — General group" },
                    { arabic: "غَيْرُ", meaning: "ghayru — Other than" }, { arabic: "سِوَى", meaning: "siwā — Other than" },
                    { arabic: "خَلَا", meaning: "khalā — Except" }, { arabic: "حَاضِرٌ", meaning: "ḥāḍirun — Present" }
                ]
            }
        ]
    }, tasks: [
        { id: "28-1", type: "multiple-choice", question: "In an affirmative complete sentence, the excepted noun is:", options: ["Marfū'", "Manṣūb", "Majrūr", "Majzūm"], correctAnswer: "Manṣūb" },
        { id: "28-2", type: "multiple-choice", question: "In a negative complete sentence, the excepted noun:", options: ["Is always Manṣūb", "Follows sentence structure (Badal)", "Is always Majrūr", "Is omitted"], correctAnswer: "Follows sentence structure (Badal)" },
        { id: "28-3", type: "multiple-choice", question: "Which is the most common exception particle?", options: ["غَيْرُ", "إِلَّا", "سِوَى", "خَلَا"], correctAnswer: "إِلَّا" },
        { id: "28-4", type: "multiple-choice", question: "What other words can be used for exception?", options: ["Only إِلَّا", "غَيْرُ، سِوَى، خَلَا", "Only غَيْرُ", "Only سِوَى"], correctAnswer: "غَيْرُ، سِوَى، خَلَا" },
        { id: "28-5", type: "multiple-choice", question: "Translate: جَاءَ الطُّلَّابُ إِلَّا مُحَمَّدًا", options: ["All students came with Muhammad", "All students came except Muhammad", "Only Muhammad came", "Muhammad didn't come"], correctAnswer: "All students came except Muhammad" },
        { id: "28-6", type: "multiple-choice", question: "Translate: مَا جَاءَ أَحَدٌ إِلَّا مُحَمَّدٌ", options: ["Everyone came", "No one came except Muhammad", "Muhammad didn't come", "Only no one came"], correctAnswer: "No one came except Muhammad" },
        { id: "28-7", type: "multiple-choice", question: "Translate: كُلُّ الطُّلَّابِ حَاضِرُونَ إِلَّا عَلِيًّا", options: ["All students are absent", "All students are present except Ali", "Only Ali is present", "Ali and students are present"], correctAnswer: "All students are present except Ali" },
        { id: "28-8", type: "multiple-choice", question: "What does اسْتِثْنَاءٌ mean?", options: ["Addition", "Exception", "Emphasis", "Coordination"], correctAnswer: "Exception" },
        { id: "28-9", type: "multiple-choice", question: "What does مُسْتَثْنًى mean?", options: ["General group", "Excepted noun", "Exception particle", "Conjunction"], correctAnswer: "Excepted noun" },
        { id: "28-10", type: "multiple-choice", question: "What does حَاضِرٌ mean?", options: ["Absent", "Present", "Late", "Early"], correctAnswer: "Present" }
    ]
};
