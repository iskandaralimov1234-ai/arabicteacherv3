import { Lesson } from '../../types';
export const lesson31: Lesson = {
    id: 31, title: "Lesson 31: Derived Nouns (الدَّرْسُ الْحَادِي وَالثَّلَاثُونَ - الْمُشْتَقَّاتُ)", grammar: "Derived Nouns (Mushtaqqāt)", theory: {
        sections: [
            { title: "📖 Description", content: "Derived nouns (الْمُشْتَقَّاتُ — Al-Mushtaqqāt) are nouns formed from verb roots. The main types are: Active Participle (اسْمُ الْفَاعِلِ), Passive Participle (اسْمُ الْمَفْعُولِ), and Verbal Noun (الْمَصْدَرُ)." },
            { title: "📝 Key Rules", content: "- اسْمُ الْفَاعِلِ (Active Participle): فَاعِلٌ pattern → كَاتِبٌ (writer)\\n- اسْمُ الْمَفْعُولِ (Passive Participle): مَفْعُولٌ pattern → مَكْتُوبٌ (written)\\n- صِيغَةُ الْمُبَالَغَةِ (Intensive form): فَعَّالٌ → كَذَّابٌ (great liar)\\n- These are derived from the three-letter root" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "كَاتِبٌ — مِنْ كَتَبَ", meaning: "Kātibun — from kataba — Writer (Active Participle from 'he wrote')" },
                    { arabic: "مَكْتُوبٌ — مِنْ كُتِبَ", meaning: "Maktūbun — from kutiba — Written (Passive Participle)" },
                    { arabic: "عَلَّامَةٌ — مِنْ عَلِمَ", meaning: "'Allāmatun — from 'alima — Great scholar (Intensive form)" },
                    { arabic: "مُعَلِّمٌ — مِنْ عَلَّمَ", meaning: "Mu'allimun — from 'allama — Teacher (Active Participle from Form II)" },
                    { arabic: "مَطْبُوخٌ — مِنْ طَبَخَ", meaning: "Maṭbūkhun — from ṭabakha — Cooked (Passive Participle)" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "مُشْتَقٌّ", meaning: "mushtaqqun — Derived" }, { arabic: "اِسْمُ الْفَاعِلِ", meaning: "ismu al-fā'ili — Active Participle" },
                    { arabic: "اِسْمُ الْمَفْعُولِ", meaning: "ismu al-maf'ūli — Passive Participle" }, { arabic: "مَصْدَرٌ", meaning: "maṣdarun — Verbal noun" },
                    { arabic: "كَاتِبٌ", meaning: "kātibun — Writer" }, { arabic: "مَكْتُوبٌ", meaning: "maktūbun — Written" },
                    { arabic: "مُعَلِّمٌ", meaning: "mu'allimun — Teacher" }, { arabic: "عَلَّامَةٌ", meaning: "'allāmatun — Great scholar" }
                ]
            }
        ]
    }, tasks: [
        { id: "31-1", type: "multiple-choice", question: "The Active Participle (اسْمُ الْفَاعِلِ) follows which pattern?", options: ["مَفْعُولٌ", "فَاعِلٌ", "فَعَّالٌ", "مِفْعَالٌ"], correctAnswer: "فَاعِلٌ" },
        { id: "31-2", type: "multiple-choice", question: "The Passive Participle (اسْمُ الْمَفْعُولِ) follows which pattern?", options: ["فَاعِلٌ", "مَفْعُولٌ", "فَعِيلٌ", "فُعَالٌ"], correctAnswer: "مَفْعُولٌ" },
        { id: "31-3", type: "multiple-choice", question: "كَاتِبٌ is derived from which verb?", options: ["قَرَأَ", "كَتَبَ", "عَلِمَ", "دَرَسَ"], correctAnswer: "كَتَبَ" },
        { id: "31-4", type: "multiple-choice", question: "What is the intensive form (صِيغَةُ الْمُبَالَغَةِ) pattern?", options: ["فَاعِلٌ", "مَفْعُولٌ", "فَعَّالٌ", "مَفْعَلٌ"], correctAnswer: "فَعَّالٌ" },
        { id: "31-5", type: "multiple-choice", question: "Translate: كَاتِبٌ", options: ["Book", "Writer", "Written", "Writing"], correctAnswer: "Writer" },
        { id: "31-6", type: "multiple-choice", question: "Translate: مَكْتُوبٌ", options: ["Writer", "Writing", "Written", "Book"], correctAnswer: "Written" },
        { id: "31-7", type: "multiple-choice", question: "Translate: مُعَلِّمٌ", options: ["Student", "Teacher", "Knowledge", "School"], correctAnswer: "Teacher" },
        { id: "31-8", type: "multiple-choice", question: "What does مُشْتَقٌّ mean?", options: ["Original", "Derived", "Simple", "Complex"], correctAnswer: "Derived" },
        { id: "31-9", type: "multiple-choice", question: "What does مَصْدَرٌ mean?", options: ["Active Participle", "Passive Participle", "Verbal noun", "Adjective"], correctAnswer: "Verbal noun" },
        { id: "31-10", type: "multiple-choice", question: "What does عَلَّامَةٌ mean?", options: ["Teacher", "Great scholar", "Student", "Writer"], correctAnswer: "Great scholar" }
    ]
};
