import { Lesson } from '../../types';
export const lesson48: Lesson = {
    id: 48, title: "Lesson 48: Verb Forms I-X (الدَّرْسُ الثَّامِنُ وَالْأَرْبَعُونَ - أَوْزَانُ الْفِعْلِ)", grammar: "Verb Forms (Awzān)", theory: {
        sections: [
            { title: "📖 Description", content: "Arabic verbs have 10 main forms (أَوْزَان — Awzān). Form I is the base (فَعَلَ). Each additional form adds semantic meaning through modifications to the root." },
            { title: "📝 Key Rules", content: "- I: فَعَلَ (base) — كَتَبَ (wrote)\\n- II: فَعَّلَ (intensification/causation) — عَلَّمَ (taught)\\n- III: فَاعَلَ (reciprocal) — كَاتَبَ (corresponded)\\n- IV: أَفْعَلَ (causation) — أَسْلَمَ (submitted)\\n- V: تَفَعَّلَ (reflexive of II) — تَعَلَّمَ (learned)\\n- VI: تَفَاعَلَ (mutual) — تَكَاتَبَ (exchanged letters)\\n- VII: اِنْفَعَلَ (passive-like) — اِنْكَسَرَ (was broken)\\n- VIII: اِفْتَعَلَ (reflexive) — اِجْتَمَعَ (gathered)\\n- X: اِسْتَفْعَلَ (seeking) — اِسْتَغْفَرَ (sought forgiveness)" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "عَلِمَ → عَلَّمَ → تَعَلَّمَ", meaning: "'Alima → 'allama → ta'allama — He knew → He taught → He learned (Forms I, II, V)" },
                    { arabic: "كَتَبَ → كَاتَبَ → تَكَاتَبَ", meaning: "Kataba → kātaba → takātaba — He wrote → He corresponded → They exchanged letters (Forms I, III, VI)" },
                    { arabic: "سَلِمَ → أَسْلَمَ → اِسْتَسْلَمَ", meaning: "Salima → aslama → istaslama — He was safe → He submitted → He surrendered (Forms I, IV, X)" },
                    { arabic: "غَفَرَ → اِسْتَغْفَرَ", meaning: "Ghafara → istaghfara — He forgave → He sought forgiveness (Forms I, X)" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "وَزْنٌ", meaning: "waznun — Form/Pattern" }, { arabic: "فَعَّلَ", meaning: "fa''ala — Form II pattern" },
                    { arabic: "أَفْعَلَ", meaning: "af'ala — Form IV pattern" }, { arabic: "تَفَعَّلَ", meaning: "tafa''ala — Form V pattern" },
                    { arabic: "اِسْتَفْعَلَ", meaning: "istaf'ala — Form X pattern" }, { arabic: "اِنْفَعَلَ", meaning: "infa'ala — Form VII pattern" },
                    { arabic: "اِفْتَعَلَ", meaning: "ifta'ala — Form VIII pattern" }, { arabic: "تَفَاعَلَ", meaning: "tafā'ala — Form VI pattern" }
                ]
            }
        ]
    }, tasks: [
        { id: "48-1", type: "multiple-choice", question: "How many main verb forms are there?", options: ["Five", "Seven", "Ten", "Fifteen"], correctAnswer: "Ten" },
        { id: "48-2", type: "multiple-choice", question: "Form II (فَعَّلَ) typically indicates:", options: ["Passive", "Intensification/Causation", "Reflexive", "Mutual action"], correctAnswer: "Intensification/Causation" },
        { id: "48-3", type: "multiple-choice", question: "Form X (اِسْتَفْعَلَ) typically indicates:", options: ["Passive", "Causation", "Seeking/Requesting", "Reflexive"], correctAnswer: "Seeking/Requesting" },
        { id: "48-4", type: "multiple-choice", question: "Form V (تَفَعَّلَ) is the reflexive of:", options: ["Form I", "Form II", "Form III", "Form IV"], correctAnswer: "Form II" },
        { id: "48-5", type: "multiple-choice", question: "Translate: عَلَّمَ", options: ["He knew", "He taught", "He learned", "He studied"], correctAnswer: "He taught" },
        { id: "48-6", type: "multiple-choice", question: "Translate: تَعَلَّمَ", options: ["He taught", "He learned", "He knew", "He questioned"], correctAnswer: "He learned" },
        { id: "48-7", type: "multiple-choice", question: "Translate: اِسْتَغْفَرَ", options: ["He forgave", "He sought forgiveness", "He punished", "He remembered"], correctAnswer: "He sought forgiveness" },
        { id: "48-8", type: "multiple-choice", question: "What does وَزْنٌ mean?", options: ["Weight", "Form/Pattern", "Root", "Verb"], correctAnswer: "Form/Pattern" },
        { id: "48-9", type: "multiple-choice", question: "What form is أَسْلَمَ?", options: ["Form I", "Form II", "Form III", "Form IV"], correctAnswer: "Form IV" },
        { id: "48-10", type: "multiple-choice", question: "What form is اِنْكَسَرَ?", options: ["Form V", "Form VI", "Form VII", "Form VIII"], correctAnswer: "Form VII" }
    ]
};
