import { Lesson } from '../../types';
export const lesson27: Lesson = {
    id: 27, title: "Lesson 27: The Verbal Sentence (الدَّرْسُ السَّابِعُ وَالْعِشْرُونَ - الْجُمْلَةُ الْفِعْلِيَّةُ)", grammar: "The Verbal Sentence (Jumla Fi'liyya)", theory: {
        sections: [
            { title: "📖 Description", content: "The verbal sentence (الْجُمْلَةُ الْفِعْلِيَّةُ — Jumla Fi'liyya) begins with a verb and typically follows the order: Verb + Subject (Fā'il) + Object (Maf'ūl bihi). The subject is Marfū' (مَرْفُوعٌ) and the object is Manṣūb (مَنْصُوبٌ)." },
            { title: "📝 Key Rules", content: "- Verb first, then subject (Fā'il — Marfū'), then object (Maf'ūl — Manṣūb)\\n- The verb agrees with the subject in gender but stays singular even with plural subject\\n- Past tense (الْمَاضِي): كَتَبَ (he wrote)\\n- Present tense (الْمُضَارِعُ): يَكْتُبُ (he writes/is writing)" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "كَتَبَ الطَّالِبُ الدَّرْسَ", meaning: "Kataba al-ṭālibu al-darsa — The student wrote the lesson (V + Fā'il Marfū' + Maf'ūl Manṣūb)" },
                    { arabic: "قَرَأَتِ الطَّالِبَةُ الْكِتَابَ", meaning: "Qara'ati al-ṭālibatu al-kitāba — The female student read the book" },
                    { arabic: "يَدْرُسُ الطُّلَّابُ الْعَرَبِيَّةَ", meaning: "Yadrusu al-ṭullābu al-'arabiyyata — The students study Arabic (verb stays singular!)" },
                    { arabic: "فَتَحَ الرَّجُلُ الْبَابَ", meaning: "Fataḥa al-rajulu al-bāba — The man opened the door" },
                    { arabic: "شَرِبَتِ الْبِنْتُ الْمَاءَ", meaning: "Sharibati al-bintu al-mā'a — The girl drank the water" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "جُمْلَةٌ فِعْلِيَّةٌ", meaning: "jumlatun fi'liyyatun — Verbal sentence" }, { arabic: "فَاعِلٌ", meaning: "fā'ilun — Subject/Doer" },
                    { arabic: "مَفْعُولٌ بِهِ", meaning: "maf'ūlun bihi — Direct object" }, { arabic: "فِعْلٌ مَاضٍ", meaning: "fi'lun māḍin — Past tense verb" },
                    { arabic: "فِعْلٌ مُضَارِعٌ", meaning: "fi'lun muḍāri'un — Present tense verb" }, { arabic: "فَتَحَ", meaning: "fataḥa — He opened" },
                    { arabic: "شَرِبَ", meaning: "shariba — He drank" }, { arabic: "بَابٌ", meaning: "bābun — Door" }
                ]
            }
        ]
    }, tasks: [
        { id: "27-1", type: "multiple-choice", question: "A verbal sentence begins with:", options: ["A noun", "A verb", "A preposition", "A pronoun"], correctAnswer: "A verb" },
        { id: "27-2", type: "multiple-choice", question: "The subject (Fā'il) is in which state?", options: ["Manṣūb", "Majrūr", "Marfū'", "Majzūm"], correctAnswer: "Marfū'" },
        { id: "27-3", type: "multiple-choice", question: "The direct object (Maf'ūl bihi) is in which state?", options: ["Marfū'", "Manṣūb", "Majrūr", "Majzūm"], correctAnswer: "Manṣūb" },
        { id: "27-4", type: "multiple-choice", question: "When the subject is plural, the verb:", options: ["Becomes plural too", "Stays singular", "Becomes dual", "Is omitted"], correctAnswer: "Stays singular" },
        { id: "27-5", type: "multiple-choice", question: "Translate: كَتَبَ الطَّالِبُ الدَّرْسَ", options: ["The lesson wrote the student", "The student wrote the lesson", "The student's lesson", "Write the lesson"], correctAnswer: "The student wrote the lesson" },
        { id: "27-6", type: "multiple-choice", question: "Translate: فَتَحَ الرَّجُلُ الْبَابَ", options: ["The man closed the door", "The door opened the man", "The man opened the door", "The man found the door"], correctAnswer: "The man opened the door" },
        { id: "27-7", type: "multiple-choice", question: "Translate: شَرِبَتِ الْبِنْتُ الْمَاءَ", options: ["The girl drank the water", "The boy drank the water", "The girl cooked water", "The water fell"], correctAnswer: "The girl drank the water" },
        { id: "27-8", type: "multiple-choice", question: "What does فَاعِلٌ mean?", options: ["Object", "Subject/Doer", "Verb", "Adjective"], correctAnswer: "Subject/Doer" },
        { id: "27-9", type: "multiple-choice", question: "What does مَفْعُولٌ بِهِ mean?", options: ["Subject", "Direct object", "Indirect object", "Adverb"], correctAnswer: "Direct object" },
        { id: "27-10", type: "multiple-choice", question: "What does فَتَحَ mean?", options: ["He closed", "He opened", "He wrote", "He read"], correctAnswer: "He opened" }
    ]
};
