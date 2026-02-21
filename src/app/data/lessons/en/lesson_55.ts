import { Lesson } from '../../types';
export const lesson55: Lesson = {
    id: 55, title: "Lesson 55: Ordinal Numbers (الدَّرْسُ الْخَامِسُ وَالْخَمْسُونَ - الْعَدَدُ التَّرْتِيبِيُّ)", grammar: "Ordinal Numbers", theory: {
        sections: [
            { title: "📖 Description", content: "Ordinal numbers (الْعَدَدُ التَّرْتِيبِيُّ) indicate order (first, second, third...). They follow the فَاعِلٌ pattern and agree in gender with the noun they describe, acting as adjectives (Na't)." },
            { title: "📝 Key Rules", content: "- Pattern: فَاعِلٌ for masculine, فَاعِلَةٌ for feminine\\n- أَوَّلُ / أُولَى = first (irregular)\\n- ثَانٍ / ثَانِيَةٌ = second\\n- They agree in gender, number, definiteness, and i'rāb with the noun\\n- After 10th, cardinal numbers are used instead" },
            {
                title: "🗣️ Examples", content: "Examples:", examples: [
                    { arabic: "الدَّرْسُ الْأَوَّلُ", meaning: "Al-darsu al-awwalu — The first lesson" },
                    { arabic: "الْمَرَّةُ الثَّانِيَةُ", meaning: "Al-marratu al-thāniyatu — The second time (feminine)" },
                    { arabic: "الطَّابِقُ الثَّالِثُ", meaning: "Al-ṭābiqu al-thālithu — The third floor" },
                    { arabic: "فِي الْقَرْنِ الرَّابِعَ عَشَرَ", meaning: "Fī al-qarni al-rābi'a 'ashara — In the fourteenth century" },
                    { arabic: "الْجُزْءُ الْخَامِسُ", meaning: "Al-juz'u al-khāmisu — The fifth part" }
                ]
            },
            {
                title: "📚 Vocabulary", content: "New words:", examples: [
                    { arabic: "تَرْتِيبِيٌّ", meaning: "tartībiyyun — Ordinal" }, { arabic: "أَوَّلُ", meaning: "awwalu — First (m.)" },
                    { arabic: "ثَانٍ", meaning: "thānin — Second (m.)" }, { arabic: "ثَالِثٌ", meaning: "thālithun — Third (m.)" },
                    { arabic: "رَابِعٌ", meaning: "rābi'un — Fourth (m.)" }, { arabic: "خَامِسٌ", meaning: "khāmisun — Fifth (m.)" },
                    { arabic: "سَادِسٌ", meaning: "sādisun — Sixth (m.)" }, { arabic: "عَاشِرٌ", meaning: "'āshirun — Tenth (m.)" }
                ]
            }
        ]
    }, tasks: [
        { id: "55-1", type: "multiple-choice", question: "Ordinal numbers follow which pattern?", options: ["مَفْعُولٌ", "فَاعِلٌ", "أَفْعَلُ", "فَعِيلٌ"], correctAnswer: "فَاعِلٌ" },
        { id: "55-2", type: "multiple-choice", question: "Ordinal numbers agree with the noun in:", options: ["Gender only", "Gender, number, definiteness, and i'rāb", "Nothing", "Gender and number only"], correctAnswer: "Gender, number, definiteness, and i'rāb" },
        { id: "55-3", type: "multiple-choice", question: "'First' (masculine) in Arabic is:", options: ["ثَانٍ", "أَوَّلُ", "ثَالِثٌ", "آخِرٌ"], correctAnswer: "أَوَّلُ" },
        { id: "55-4", type: "multiple-choice", question: "After which number do you stop using ordinals?", options: ["5th", "10th", "20th", "100th"], correctAnswer: "10th" },
        { id: "55-5", type: "multiple-choice", question: "Translate: الدَّرْسُ الْأَوَّلُ", options: ["The last lesson", "The first lesson", "A lesson", "Lesson one"], correctAnswer: "The first lesson" },
        { id: "55-6", type: "multiple-choice", question: "Translate: الطَّابِقُ الثَّالِثُ", options: ["Three floors", "The third floor", "Floor three", "The tall floor"], correctAnswer: "The third floor" },
        { id: "55-7", type: "multiple-choice", question: "Translate: الْمَرَّةُ الثَّانِيَةُ", options: ["Two times", "The second time", "Many times", "The last time"], correctAnswer: "The second time" },
        { id: "55-8", type: "multiple-choice", question: "What does تَرْتِيبِيٌّ mean?", options: ["Cardinal", "Ordinal", "Fractional", "Decimal"], correctAnswer: "Ordinal" },
        { id: "55-9", type: "multiple-choice", question: "What does ثَالِثٌ mean?", options: ["Second", "Third", "Fourth", "Fifth"], correctAnswer: "Third" },
        { id: "55-10", type: "multiple-choice", question: "What does عَاشِرٌ mean?", options: ["Eighth", "Ninth", "Tenth", "Eleventh"], correctAnswer: "Tenth" }
    ]
};
