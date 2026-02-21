import { Lesson } from '../../types';
export const lesson33: Lesson = {
    id: 33, title: "Lesson 33: Transitive and Intransitive Verbs (الدَّرْسُ الثَّالِثُ وَالثَّلَاثُونَ - الْمُتَعَدِّي وَاللَّازِمُ)", grammar: "Transitive and Intransitive Verbs", theory: {
        sections: [
            { title: "📖 Description", content: "A transitive verb (فِعْلٌ مُتَعَدٍّ) takes a direct object (Manṣūb). An intransitive verb (فِعْلٌ لَازِمٌ) does not take a direct object and may need a preposition to connect to a complement." },
            { title: "📝 Key Rules", content: "- Transitive (مُتَعَدٍّ): كَتَبَ الدَّرْسَ (he wrote the lesson — direct object)\\n- Intransitive (لَازِمٌ): ذَهَبَ إِلَى (he went to — needs preposition)\\n- Some verbs can be both depending on context\\n- The direct object of a transitive verb is always Manṣūb" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "كَتَبَ الطَّالِبُ الدَّرْسَ", meaning: "Kataba al-ṭālibu al-darsa — The student wrote the lesson (transitive — الدَّرْسَ is Manṣūb)" },
                    { arabic: "ذَهَبَ الطَّالِبُ إِلَى الْمَدْرَسَةِ", meaning: "Dhahaba al-ṭālibu ilā al-madrasati — The student went to school (intransitive — needs إِلَى)" },
                    { arabic: "أَكَلَ الرَّجُلُ الطَّعَامَ", meaning: "Akala al-rajulu al-ṭa'āma — The man ate the food (transitive)" },
                    { arabic: "جَلَسَ الرَّجُلُ عَلَى الْكُرْسِيِّ", meaning: "Jalasa al-rajulu 'alā al-kursiyyi — The man sat on the chair (intransitive)" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "مُتَعَدٍّ", meaning: "muta'addin — Transitive" }, { arabic: "لَازِمٌ", meaning: "lāzimun — Intransitive" },
                    { arabic: "مَفْعُولٌ بِهِ", meaning: "maf'ūlun bihi — Direct object" }, { arabic: "أَكَلَ", meaning: "akala — He ate" },
                    { arabic: "جَلَسَ", meaning: "jalasa — He sat" }, { arabic: "طَعَامٌ", meaning: "ṭa'āmun — Food" },
                    { arabic: "كُرْسِيٌّ", meaning: "kursiyyun — Chair" }, { arabic: "فِعْلٌ", meaning: "fi'lun — Verb" }
                ]
            }
        ]
    }, tasks: [
        { id: "33-1", type: "multiple-choice", question: "A transitive verb takes:", options: ["A preposition", "A direct object (Manṣūb)", "Only a subject", "No complement"], correctAnswer: "A direct object (Manṣūb)" },
        { id: "33-2", type: "multiple-choice", question: "An intransitive verb:", options: ["Takes a direct object", "Does not take a direct object", "Has no subject", "Is always passive"], correctAnswer: "Does not take a direct object" },
        { id: "33-3", type: "multiple-choice", question: "كَتَبَ is which type of verb?", options: ["Intransitive", "Transitive", "Passive", "Imperative"], correctAnswer: "Transitive" },
        { id: "33-4", type: "multiple-choice", question: "ذَهَبَ is which type of verb?", options: ["Transitive", "Intransitive", "Passive", "Imperative"], correctAnswer: "Intransitive" },
        { id: "33-5", type: "multiple-choice", question: "Translate: أَكَلَ الرَّجُلُ الطَّعَامَ", options: ["The man cooked the food", "The man ate the food", "The food was eaten", "The man found food"], correctAnswer: "The man ate the food" },
        { id: "33-6", type: "multiple-choice", question: "Translate: جَلَسَ الرَّجُلُ عَلَى الْكُرْسِيِّ", options: ["The man left the chair", "The man sat on the chair", "The man broke the chair", "The man bought a chair"], correctAnswer: "The man sat on the chair" },
        { id: "33-7", type: "multiple-choice", question: "Translate: كَتَبَ الطَّالِبُ الدَّرْسَ", options: ["The lesson wrote the student", "The student wrote the lesson", "The student's lesson", "Write the lesson"], correctAnswer: "The student wrote the lesson" },
        { id: "33-8", type: "multiple-choice", question: "What does مُتَعَدٍّ mean?", options: ["Intransitive", "Transitive", "Passive", "Active"], correctAnswer: "Transitive" },
        { id: "33-9", type: "multiple-choice", question: "What does لَازِمٌ mean?", options: ["Transitive", "Intransitive", "Passive", "Active"], correctAnswer: "Intransitive" },
        { id: "33-10", type: "multiple-choice", question: "What does طَعَامٌ mean?", options: ["Water", "Food", "Drink", "Bread"], correctAnswer: "Food" }
    ]
};
