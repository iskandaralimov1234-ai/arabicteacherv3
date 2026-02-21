import { Lesson } from '../../types';
export const lesson49: Lesson = {
    id: 49, title: "Lesson 49: The Maṣdar (الدَّرْسُ التَّاسِعُ وَالْأَرْبَعُونَ - الْمَصْدَرُ)", grammar: "Verbal Noun (Maṣdar)", theory: {
        sections: [
            { title: "📖 Description", content: "The Maṣdar (الْمَصْدَرُ — Verbal Noun) is the noun form of a verb's meaning. Each verb form has its own characteristic maṣdar pattern. It is the 'source' from which other forms derive." },
            { title: "📝 Key Rules", content: "- Form I: irregular patterns → كِتَابَةٌ (writing), ذَهَابٌ (going)\\n- Form II: تَفْعِيلٌ → تَعْلِيمٌ (teaching)\\n- Form III: مُفَاعَلَةٌ / فِعَالٌ → مُكَاتَبَةٌ (correspondence)\\n- Form IV: إِفْعَالٌ → إِسْلَامٌ (submission)\\n- Form V: تَفَعُّلٌ → تَعَلُّمٌ (learning)\\n- Form X: اِسْتِفْعَالٌ → اِسْتِغْفَارٌ (seeking forgiveness)" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "كَتَبَ → كِتَابَةٌ", meaning: "Kataba → kitābatun — He wrote → Writing (Form I maṣdar)" },
                    { arabic: "عَلَّمَ → تَعْلِيمٌ", meaning: "'Allama → ta'līmun — He taught → Teaching (Form II: تَفْعِيلٌ)" },
                    { arabic: "أَسْلَمَ → إِسْلَامٌ", meaning: "Aslama → islāmun — He submitted → Islam/Submission (Form IV: إِفْعَالٌ)" },
                    { arabic: "تَعَلَّمَ → تَعَلُّمٌ", meaning: "Ta'allama → ta'allumun — He learned → Learning (Form V: تَفَعُّلٌ)" },
                    { arabic: "اِسْتَغْفَرَ → اِسْتِغْفَارٌ", meaning: "Istaghfara → istighfārun — He sought forgiveness → Seeking forgiveness (Form X)" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "مَصْدَرٌ", meaning: "maṣdarun — Verbal noun/Source" }, { arabic: "كِتَابَةٌ", meaning: "kitābatun — Writing" },
                    { arabic: "تَعْلِيمٌ", meaning: "ta'līmun — Teaching" }, { arabic: "إِسْلَامٌ", meaning: "islāmun — Submission/Islam" },
                    { arabic: "تَعَلُّمٌ", meaning: "ta'allumun — Learning" }, { arabic: "اِسْتِغْفَارٌ", meaning: "istighfārun — Seeking forgiveness" },
                    { arabic: "ذَهَابٌ", meaning: "dhahābun — Going" }, { arabic: "قِرَاءَةٌ", meaning: "qirā'atun — Reading" }
                ]
            }
        ]
    }, tasks: [
        { id: "49-1", type: "multiple-choice", question: "The maṣdar of Form II follows which pattern?", options: ["إِفْعَالٌ", "تَفْعِيلٌ", "تَفَعُّلٌ", "اِسْتِفْعَالٌ"], correctAnswer: "تَفْعِيلٌ" },
        { id: "49-2", type: "multiple-choice", question: "The maṣdar of Form IV follows which pattern?", options: ["تَفْعِيلٌ", "إِفْعَالٌ", "تَفَعُّلٌ", "فِعَالٌ"], correctAnswer: "إِفْعَالٌ" },
        { id: "49-3", type: "multiple-choice", question: "Form I maṣdars are:", options: ["Always regular", "Irregular (many patterns)", "Always تَفْعِيلٌ", "Always فِعَالٌ"], correctAnswer: "Irregular (many patterns)" },
        { id: "49-4", type: "multiple-choice", question: "The maṣdar of Form X follows which pattern?", options: ["تَفَعُّلٌ", "تَفَاعُلٌ", "اِسْتِفْعَالٌ", "اِنْفِعَالٌ"], correctAnswer: "اِسْتِفْعَالٌ" },
        { id: "49-5", type: "multiple-choice", question: "Translate: تَعْلِيمٌ", options: ["Learning", "Teaching", "Writing", "Reading"], correctAnswer: "Teaching" },
        { id: "49-6", type: "multiple-choice", question: "Translate: إِسْلَامٌ", options: ["Peace", "Submission/Islam", "Learning", "Reading"], correctAnswer: "Submission/Islam" },
        { id: "49-7", type: "multiple-choice", question: "Translate: اِسْتِغْفَارٌ", options: ["Forgiveness", "Seeking forgiveness", "Remembrance", "Worship"], correctAnswer: "Seeking forgiveness" },
        { id: "49-8", type: "multiple-choice", question: "What does مَصْدَرٌ mean?", options: ["Verb", "Verbal noun/Source", "Adjective", "Preposition"], correctAnswer: "Verbal noun/Source" },
        { id: "49-9", type: "multiple-choice", question: "What does كِتَابَةٌ mean?", options: ["Book", "Writing", "Reading", "Letter"], correctAnswer: "Writing" },
        { id: "49-10", type: "multiple-choice", question: "What does قِرَاءَةٌ mean?", options: ["Writing", "Reading", "Speaking", "Listening"], correctAnswer: "Reading" }
    ]
};
