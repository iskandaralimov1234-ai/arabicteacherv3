import { Lesson } from '../../types';
export const lesson22: Lesson = {
    id: 22, title: "Lesson 22: The Iḍāfa (الدَّرْسُ الثَّانِي وَالْعِشْرُونَ - الْإِضَافَةُ)", grammar: "The Iḍāfa (Construct State)", theory: {
        sections: [
            { title: "📖 Description", content: "The Iḍāfa (الْإِضَافَةُ) is a construct linking two nouns to express possession or association: 'the book of the teacher' = كِتَابُ الْمُعَلِّمِ. The first noun is called Muḍāf (مُضَافٌ) and the second Muḍāf Ilayhi (مُضَافٌ إِلَيْهِ)." },
            { title: "📝 Key Rules", content: "- Muḍāf (1st noun): loses tanwīn and the article الـ\\n- Muḍāf Ilayhi (2nd noun): always Majrūr (مَجْرُورٌ)\\n- The Muḍāf's case depends on its role in the sentence\\n- You cannot insert anything between the two Iḍāfa nouns" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "كِتَابُ الطَّالِبِ", meaning: "Kitābu al-ṭālibi — The student's book (Muḍāf + Muḍāf Ilayhi Majrūr)" },
                    { arabic: "بَابُ الْمَسْجِدِ", meaning: "Bābu al-masjidi — The door of the mosque" },
                    { arabic: "مُدِيرُ الْمَدْرَسَةِ", meaning: "Mudīru al-madrasati — The principal of the school" },
                    { arabic: "أُسْتَاذُ اللُّغَةِ الْعَرَبِيَّةِ", meaning: "Ustādhu al-lughati al-'arabiyyati — The teacher of the Arabic language (chain Iḍāfa)" },
                    { arabic: "فِي غُرْفَةِ الْمُدِيرِ", meaning: "Fī ghurfati al-mudīri — In the room of the principal" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "إِضَافَةٌ", meaning: "iḍāfatun — Construct state (Iḍāfa)" }, { arabic: "مُضَافٌ", meaning: "muḍāfun — First noun in Iḍāfa" },
                    { arabic: "مُضَافٌ إِلَيْهِ", meaning: "muḍāfun ilayhi — Second noun in Iḍāfa" }, { arabic: "نِسْبَةٌ", meaning: "nisbatun — Association/Attribution" },
                    { arabic: "مِلْكِيَّةٌ", meaning: "milkiyyatun — Possession/Ownership" }, { arabic: "تَقْدِيرٌ", meaning: "taqdīrun — Estimation" },
                    { arabic: "غُرْفَةٌ", meaning: "ghurfatun — Room" }, { arabic: "مُدِيرٌ", meaning: "mudīrun — Principal/Director" }
                ]
            }
        ]
    }, tasks: [
        { id: "22-1", type: "multiple-choice", question: "The second noun in an Iḍāfa (Muḍāf Ilayhi) is always in which state?", options: ["Marfū'", "Manṣūb", "Majrūr", "Majzūm"], correctAnswer: "Majrūr" },
        { id: "22-2", type: "multiple-choice", question: "The first noun in an Iḍāfa (Muḍāf) loses which features?", options: ["Its vowels", "Its tanwīn and الـ", "Its gender", "Its meaning"], correctAnswer: "Its tanwīn and الـ" },
        { id: "22-3", type: "multiple-choice", question: "In كِتَابُ الطَّالِبِ, why is الطَّالِبِ in kasra?", options: ["Because it is the subject", "Because it is the Muḍāf Ilayhi (Majrūr)", "Because it is indefinite", "Because it is a verb"], correctAnswer: "Because it is the Muḍāf Ilayhi (Majrūr)" },
        { id: "22-4", type: "multiple-choice", question: "Can you add a word between the Muḍāf and Muḍāf Ilayhi?", options: ["Yes, always", "No, never", "Only adjectives", "Only prepositions"], correctAnswer: "No, never" },
        { id: "22-5", type: "multiple-choice", question: "Translate: بَابُ الْمَسْجِدِ", options: ["The mosque's wall", "The door of the mosque", "The mosque's window", "Next to the mosque"], correctAnswer: "The door of the mosque" },
        { id: "22-6", type: "multiple-choice", question: "Translate: مُدِيرُ الْمَدْرَسَةِ", options: ["The school's student", "The principal of the school", "The teacher of the school", "The school building"], correctAnswer: "The principal of the school" },
        { id: "22-7", type: "multiple-choice", question: "Translate: كِتَابُ الطَّالِبِ", options: ["The student reads", "The student's book", "A book and a student", "The book is for students"], correctAnswer: "The student's book" },
        { id: "22-8", type: "multiple-choice", question: "What does إِضَافَةٌ mean?", options: ["Addition", "Construct state (Iḍāfa)", "Preposition", "Conjunction"], correctAnswer: "Construct state (Iḍāfa)" },
        { id: "22-9", type: "multiple-choice", question: "What does مُضَافٌ mean?", options: ["Second noun in Iḍāfa", "First noun in Iḍāfa", "Adjective", "Verb"], correctAnswer: "First noun in Iḍāfa" },
        { id: "22-10", type: "multiple-choice", question: "What does مُدِيرٌ mean?", options: ["Teacher", "Student", "Principal/Director", "Worker"], correctAnswer: "Principal/Director" }
    ]
};
