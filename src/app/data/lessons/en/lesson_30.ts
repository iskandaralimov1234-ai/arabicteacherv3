import { Lesson } from '../../types';
export const lesson30: Lesson = {
    id: 30, title: "Lesson 30: Conditional Sentences (الدَّرْسُ الثَّلَاثُونَ - الْجُمْلَةُ الشَّرْطِيَّةُ)", grammar: "Conditional Sentences (Shart)", theory: {
        sections: [
            { title: "📖 Description", content: "Conditional sentences (الشَّرْطُ — Al-Shart) consist of a condition (protasis) and a result (apodosis). The particle إِنْ (if) requires both verbs to be in the Majzūm state. إِذَا (when/if) is used with past tense verbs." },
            { title: "📝 Key Rules", content: "- إِنْ + Majzūm verb (condition) + Majzūm verb (result)\\n- إِذَا + past verb (condition) + past/present verb (result)\\n- مَنْ (whoever) and مَا (whatever) can also introduce conditions\\n- لَوْ = 'if' for impossible/past conditions" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "إِنْ تَدْرُسْ تَنْجَحْ", meaning: "In tadrus tanjaḥ — If you study, you will succeed (both Majzūm)" },
                    { arabic: "إِذَا جَاءَ مُحَمَّدٌ أَكْرَمْتُهُ", meaning: "Idhā jā'a Muḥammadun akramtuhu — When Muhammad comes, I will honor him" },
                    { arabic: "مَنْ يَعْمَلْ خَيْرًا يَجِدْهُ", meaning: "Man ya'mal khayran yajidhu — Whoever does good will find it" },
                    { arabic: "لَوْ دَرَسْتَ لَنَجَحْتَ", meaning: "Law darasta la-najaḥta — If you had studied, you would have succeeded" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "شَرْطٌ", meaning: "sharṭun — Condition" }, { arabic: "جَوَابُ الشَّرْطِ", meaning: "jawābu al-sharṭi — Result of condition" },
                    { arabic: "إِنْ", meaning: "in — If (conditional)" }, { arabic: "إِذَا", meaning: "idhā — When/If" },
                    { arabic: "لَوْ", meaning: "law — If (impossible)" }, { arabic: "مَنْ", meaning: "man — Whoever" },
                    { arabic: "نَجَحَ", meaning: "najaḥa — He succeeded" }, { arabic: "أَكْرَمَ", meaning: "akrama — He honored" }
                ]
            }
        ]
    }, tasks: [
        { id: "30-1", type: "multiple-choice", question: "إِنْ puts both verbs in which state?", options: ["Marfū'", "Manṣūb", "Majzūm", "Past tense"], correctAnswer: "Majzūm" },
        { id: "30-2", type: "multiple-choice", question: "إِذَا is typically used with:", options: ["Present verbs", "Past tense verbs", "Imperative verbs", "Passive verbs"], correctAnswer: "Past tense verbs" },
        { id: "30-3", type: "multiple-choice", question: "لَوْ is used for:", options: ["Real conditions", "Impossible/past conditions", "Future conditions", "Present conditions"], correctAnswer: "Impossible/past conditions" },
        { id: "30-4", type: "multiple-choice", question: "What is جَوَابُ الشَّرْطِ?", options: ["The condition", "The result of the condition", "The particle", "The subject"], correctAnswer: "The result of the condition" },
        { id: "30-5", type: "multiple-choice", question: "Translate: إِنْ تَدْرُسْ تَنْجَحْ", options: ["Study and succeed", "If you study, you will succeed", "You studied and succeeded", "Study to succeed"], correctAnswer: "If you study, you will succeed" },
        { id: "30-6", type: "multiple-choice", question: "Translate: مَنْ يَعْمَلْ خَيْرًا يَجِدْهُ", options: ["He did good", "Whoever does good will find it", "Do good work", "He found good"], correctAnswer: "Whoever does good will find it" },
        { id: "30-7", type: "multiple-choice", question: "Translate: لَوْ دَرَسْتَ لَنَجَحْتَ", options: ["If you study, succeed", "If you had studied, you would have succeeded", "Study and succeed", "You studied and succeeded"], correctAnswer: "If you had studied, you would have succeeded" },
        { id: "30-8", type: "multiple-choice", question: "What does شَرْطٌ mean?", options: ["Result", "Condition", "Negation", "Emphasis"], correctAnswer: "Condition" },
        { id: "30-9", type: "multiple-choice", question: "What does نَجَحَ mean?", options: ["He failed", "He succeeded", "He left", "He came"], correctAnswer: "He succeeded" },
        { id: "30-10", type: "multiple-choice", question: "What does أَكْرَمَ mean?", options: ["He punished", "He honored", "He left", "He wrote"], correctAnswer: "He honored" }
    ]
};
