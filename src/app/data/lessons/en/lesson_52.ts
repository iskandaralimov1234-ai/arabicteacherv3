import { Lesson } from '../../types';
export const lesson52: Lesson = {
    id: 52, title: "Lesson 52: Exclamation (الدَّرْسُ الثَّانِي وَالْخَمْسُونَ - التَّعَجُّبُ)", grammar: "Exclamation (Ta'ajjub)", theory: {
        sections: [
            { title: "📖 Description", content: "Exclamation (التَّعَجُّبُ — Al-Ta'ajjub) expresses wonder or amazement. Two standard patterns: مَا أَفْعَلَهُ (How X it is!) and أَفْعِلْ بِهِ (How X!)." },
            { title: "📝 Key Rules", content: "- Pattern 1: مَا أَفْعَلَ + noun → مَا أَجْمَلَ السَّمَاءَ! (How beautiful the sky is!)\\n- Pattern 2: أَفْعِلْ بِـ + noun → أَجْمِلْ بِالسَّمَاءِ! (How beautiful the sky is!)\\n- Both express the same meaning with different constructions\\n- The noun in Pattern 1 is Manṣūb, in Pattern 2 is Majrūr (after بِ)" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "مَا أَجْمَلَ السَّمَاءَ!", meaning: "Mā ajmala al-samā'a! — How beautiful the sky is! (Pattern 1)" },
                    { arabic: "أَجْمِلْ بِالسَّمَاءِ!", meaning: "Ajmil bi-l-samā'i! — How beautiful the sky is! (Pattern 2)" },
                    { arabic: "مَا أَكْبَرَ اللهَ!", meaning: "Mā akbara Allāha! — How great Allah is!" },
                    { arabic: "مَا أَحْسَنَ الْعِلْمَ!", meaning: "Mā aḥsana al-'ilma! — How excellent knowledge is!" },
                    { arabic: "أَعْظِمْ بِهَذَا الْيَوْمِ!", meaning: "A'ẓim bi-hādhā al-yawmi! — How great this day is!" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "تَعَجُّبٌ", meaning: "ta'ajjubun — Exclamation/Wonder" }, { arabic: "مَا أَفْعَلَهُ", meaning: "mā af'alahu — How X it is! (Pattern 1)" },
                    { arabic: "أَفْعِلْ بِهِ", meaning: "af'il bihi — How X! (Pattern 2)" }, { arabic: "سَمَاءٌ", meaning: "samā'un — Sky" },
                    { arabic: "أَجْمَلُ", meaning: "ajmalu — More beautiful" }, { arabic: "أَكْبَرُ", meaning: "akbaru — Greater" },
                    { arabic: "أَحْسَنُ", meaning: "aḥsanu — Better/Best" }, { arabic: "أَعْظَمُ", meaning: "a'ẓamu — Greater/Greatest" }
                ]
            }
        ]
    }, tasks: [
        { id: "52-1", type: "multiple-choice", question: "How many standard exclamation patterns are there?", options: ["One", "Two", "Three", "Four"], correctAnswer: "Two" },
        { id: "52-2", type: "multiple-choice", question: "In مَا أَجْمَلَ السَّمَاءَ, the noun is:", options: ["Marfū'", "Manṣūb", "Majrūr", "Majzūm"], correctAnswer: "Manṣūb" },
        { id: "52-3", type: "multiple-choice", question: "In أَجْمِلْ بِالسَّمَاءِ, the noun is:", options: ["Manṣūb", "Majrūr (after بِ)", "Marfū'", "Majzūm"], correctAnswer: "Majrūr (after بِ)" },
        { id: "52-4", type: "multiple-choice", question: "Both patterns express:", options: ["Different meanings", "The same meaning", "Past tense only", "Future tense only"], correctAnswer: "The same meaning" },
        { id: "52-5", type: "multiple-choice", question: "Translate: مَا أَجْمَلَ السَّمَاءَ!", options: ["The sky is big", "How beautiful the sky is!", "I saw the sky", "The sky is dark"], correctAnswer: "How beautiful the sky is!" },
        { id: "52-6", type: "multiple-choice", question: "Translate: مَا أَكْبَرَ اللهَ!", options: ["God is big", "How great Allah is!", "Allah created", "Allah knows"], correctAnswer: "How great Allah is!" },
        { id: "52-7", type: "multiple-choice", question: "Translate: مَا أَحْسَنَ الْعِلْمَ!", options: ["Knowledge is good", "How excellent knowledge is!", "Seek knowledge", "Knowledge and wisdom"], correctAnswer: "How excellent knowledge is!" },
        { id: "52-8", type: "multiple-choice", question: "What does تَعَجُّبٌ mean?", options: ["Question", "Exclamation/Wonder", "Negation", "Command"], correctAnswer: "Exclamation/Wonder" },
        { id: "52-9", type: "multiple-choice", question: "What does سَمَاءٌ mean?", options: ["Earth", "Sky", "Sea", "Mountain"], correctAnswer: "Sky" },
        { id: "52-10", type: "multiple-choice", question: "What does أَعْظَمُ mean?", options: ["Smaller", "Greater/Greatest", "Older", "Newer"], correctAnswer: "Greater/Greatest" }
    ]
};
