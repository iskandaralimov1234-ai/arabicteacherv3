import { Lesson } from '../../types';
export const lesson47: Lesson = {
    id: 47, title: "Lesson 47: Sound and Weak Verbs (الدَّرْسُ السَّابِعُ وَالْأَرْبَعُونَ - الصَّحِيحُ وَالْمُعْتَلُّ)", grammar: "Sound and Weak Verbs", theory: {
        sections: [
            { title: "📖 Description", content: "Verbs are classified by their root letters: Ṣaḥīḥ (صَحِيحٌ — Sound) has no weak letters (و، ي، ا), and Mu'tall (مُعْتَلٌّ — Weak) contains one or more of these letters." },
            { title: "📝 Key Rules", content: "- Ṣaḥīḥ types: Salīm (no hamza/doubling), Mahmūz (has hamza), Muḍa''af (doubled letter)\\n- Mu'tall types: Mithāl (weak 1st letter), Ajwaf (weak 2nd), Nāqiṣ (weak 3rd), Lafīf (two weak)\\n- Weak letters often change or drop during conjugation" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "كَتَبَ — يَكْتُبُ", meaning: "Kataba — yaktubu — He wrote/writes (Sound/Salīm — no changes)" },
                    { arabic: "وَعَدَ — يَعِدُ", meaning: "Wa'ada — ya'idu — He promised/promises (Mithāl — و drops in present)" },
                    { arabic: "قَالَ — يَقُولُ", meaning: "Qāla — yaqūlu — He said/says (Ajwaf — و changes to ā in past)" },
                    { arabic: "دَعَا — يَدْعُو", meaning: "Da'ā — yad'ū — He called/calls (Nāqiṣ — weak 3rd letter)" },
                    { arabic: "سَأَلَ — يَسْأَلُ", meaning: "Sa'ala — yas'alu — He asked/asks (Mahmūz — has hamza)" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "صَحِيحٌ", meaning: "ṣaḥīḥun — Sound verb" }, { arabic: "مُعْتَلٌّ", meaning: "mu'tallun — Weak verb" },
                    { arabic: "مِثَالٌ", meaning: "mithālun — First-weak" }, { arabic: "أَجْوَفُ", meaning: "ajwafu — Hollow/Second-weak" },
                    { arabic: "نَاقِصٌ", meaning: "nāqiṣun — Defective/Third-weak" }, { arabic: "مَهْمُوزٌ", meaning: "mahmūzun — Hamzated" },
                    { arabic: "مُضَعَّفٌ", meaning: "muḍa''afun — Doubled" }, { arabic: "حَرْفُ عِلَّةٍ", meaning: "ḥarfu 'illatin — Weak letter" }
                ]
            }
        ]
    }, tasks: [
        { id: "47-1", type: "multiple-choice", question: "A Sound verb (Ṣaḥīḥ) has:", options: ["Weak letters", "No weak letters (و، ي، ا)", "Only hamza", "Only doubled letters"], correctAnswer: "No weak letters (و، ي، ا)" },
        { id: "47-2", type: "multiple-choice", question: "A verb with a weak first letter is called:", options: ["Ajwaf", "Nāqiṣ", "Mithāl", "Mahmūz"], correctAnswer: "Mithāl" },
        { id: "47-3", type: "multiple-choice", question: "A verb with a weak second letter (hollow) is called:", options: ["Mithāl", "Ajwaf", "Nāqiṣ", "Lafīf"], correctAnswer: "Ajwaf" },
        { id: "47-4", type: "multiple-choice", question: "A verb with a weak third letter is called:", options: ["Mithāl", "Ajwaf", "Nāqiṣ", "Mahmūz"], correctAnswer: "Nāqiṣ" },
        { id: "47-5", type: "multiple-choice", question: "Translate: وَعَدَ", options: ["He wrote", "He promised", "He said", "He went"], correctAnswer: "He promised" },
        { id: "47-6", type: "multiple-choice", question: "Translate: قَالَ", options: ["He wrote", "He promised", "He said", "He went"], correctAnswer: "He said" },
        { id: "47-7", type: "multiple-choice", question: "Translate: دَعَا", options: ["He wrote", "He called", "He said", "He went"], correctAnswer: "He called" },
        { id: "47-8", type: "multiple-choice", question: "What does صَحِيحٌ mean?", options: ["Weak", "Sound", "Broken", "Irregular"], correctAnswer: "Sound" },
        { id: "47-9", type: "multiple-choice", question: "What does مُعْتَلٌّ mean?", options: ["Sound", "Weak", "Strong", "Regular"], correctAnswer: "Weak" },
        { id: "47-10", type: "multiple-choice", question: "What does حَرْفُ عِلَّةٍ mean?", options: ["Strong letter", "Weak letter", "Root letter", "Extra letter"], correctAnswer: "Weak letter" }
    ]
};
