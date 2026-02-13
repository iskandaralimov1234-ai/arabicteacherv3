import { Lesson } from '../../types';

export const lesson26: Lesson = {
    id: 26,
    title: "26-dars: Qiyosiy daraja va 11-20 sonlari",
    grammar: "Comparatives & Numbers 11-20",
    theory: {
        sections: [
            {
                title: "📏 Sifatning Qiyosiy darajasi",
                content: "«Kattaroq», «Chiroyliroq» deyish uchun **أَفْعَلُ مِن** (Af'alu min) qolipi ishlatiladi.\n- **أَطْوَلُ مِنْ** — ...dan uzunroq\n- **أَجْمَلُ مِنْ** — ...dan chiroyliroq\n- **أَصْغَرُ مِنْ** — ...dan kichikroq",
                examples: [
                    { arabic: "حَامِدٌ أَطْوَلُ مِنْ بِلَالٍ", meaning: "Hamid Biloldan uzunroq" },
                    { arabic: "هَذَا الْكِتَابُ أَسْهَلُ مِنْ ذَاكَ", meaning: "Bu kitob anavinisidan osonroq" },
                    { arabic: "آَمِنَةُ أَصْغَرُ مِنْ زَيْنَبَ", meaning: "Omina Zaynabdan kichikroq (yoshlikroq)" }
                ]
            },
            {
                title: "🏆 Orttirma daraja (Eng...)",
                content: "Xuddi shu **أَفْعَلُ** qolipi «Eng...» ma'nosida ham keladi, agar undan keyin so'z qaratqich kelishigida (Mudof) kelsa.\n- **أَحْسَنُ طَالِبٍ** — Eng yaxshi talaba\n- **أَكْبَرُ غُرْفَةٍ** — Eng katta xona",
                examples: [
                    { arabic: "مُحَمَّدٌ أَحْسَنُ طَالِبٍ فِي الْفَصْلِ", meaning: "Muhammad sinfdagi eng yaxshi talaba" },
                    { arabic: "اللهُ أَكْبَرُ", meaning: "Alloh Buyukdir (Eng Buyuk)" }
                ]
            },
            {
                title: "🔢 11-20 Sonlari (1-qism)",
                content: "11 dan 19 gacha bo'lgan sonlar ikki qismdan iborat bo'lib, ikkala qismi ham **Fatha** oladi (Mabniy).\nSanalmish so'z **Birlik**da va **Tushum kelishigida** (Tamyiz - Fathali) bo'ladi.",
                examples: [
                    { arabic: "أَحَدَ عَشَرَ كَوْكَباً", meaning: "O'n bitta yulduz" },
                    { arabic: "تِسْعَةَ عَشَرَ طَالِباً", meaning: "O'n to'qqizta talaba" }
                ]
            },
            {
                title: "👥 Odamlar (Ko'plik takrori)",
                content: "Odamlarga oid ko'pgina so'zlar siniq ko'plik shakliga ega.\n- **فَتًى** (Yigit) ➡ **فِتْيَةٌ** (Yigitlar)\n- **أَخٌ** (Aka/Uka) ➡ **إِخْوَةٌ** (Aka-ukalar)",
                examples: [
                    { arabic: "هَؤُلَاءِ إِخْوَتِي", meaning: "Bular mening aka-ukalarim" },
                    { arabic: "هُمْ فِتْيَةٌ صِغَارٌ", meaning: "Ular kichkina yigitlar" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "26-1",
            type: "multiple-choice",
            question: "«Ahmad Alidan uzunroq» qanday aytiladi?",
            options: ["أَحْمَدُ طَوِيلٌ عَلِيٍّ", "أَحْمَدُ أَطْوَلُ مِنْ عَلِيٍّ", "أَحْمَدُ أَطْوَلَ مِنْ عَلِيٍّ"],
            correctAnswer: "أَحْمَدُ أَطْوَلُ مِنْ عَلِيٍّ"
        },
        {
            id: "26-2",
            type: "word-scramble",
            question: "Tuzing: «Bu mashina anavisidan chiroyliroq»",
            arabic: "هَذِهِ السَّيَّارَةُ أَجْمَلُ مِنْ تِلْكَ",
            scrambledWords: ["أَجْمَلُ", "السَّيَّارَةُ", "هَذِهِ", "مِنْ", "تِلْكَ"],
            correctAnswer: "هَذِهِ السَّيَّارَةُ أَجْمَلُ مِنْ تِلْكَ"
        },
        {
            id: "26-3",
            type: "multiple-choice",
            question: "«Eng yaxshi uy» qanday aytiladi?",
            options: ["أَحْسَنُ بَيْتٍ", "أَحْسَنُ بَيْتًا", "أَحْسَنُ الْبَيْتِ"],
            correctAnswer: "أَحْسَنُ بَيْتٍ"
        },
        {
            id: "26-4",
            type: "matching",
            question: "Sifat va darajani moslashtiring",
            pairs: [
                { "arabic": "كَبِيرٌ", "meaning": "Katta" },
                { "arabic": "أَكْبَرُ", "meaning": "Kattaroq / Eng katta" },
                { "arabic": "صَغِيرٌ", "meaning": "Kichik" },
                { "arabic": "أَصْغَرُ", "meaning": "Kichikroq / Eng kichik" }
            ]
        },
        {
            id: "26-5",
            type: "multiple-choice",
            question: "To'g'ri yozuvni tanlang: «11 yulduz»",
            options: ["أَحَدَ عَشَرَ كَوْكَبٌ", "أَحَدَ عَشَرَ كَوْكَباً", "أَحَدُ عَشَرَ كَوْكَباً"],
            correctAnswer: "أَحَدَ عَشَرَ كَوْكَباً"
        },
        {
            id: "26-6",
            type: "multiple-choice",
            question: "«Quyosh Oydan kattaroq»",
            options: ["الشَّمْسُ أَكْبَرُ مِنَ الْقَمَرِ", "الشَّمْسُ كَبِيرَةٌ مِنَ الْقَمَرِ", "الشَّمْسُ أَكْبَرُ الْقَمَرِ"],
            correctAnswer: "الشَّمْسُ أَكْبَرُ مِنَ الْقَمَرِ"
        },
        {
            id: "26-7",
            type: "word-scramble",
            question: "Tuzing: «Men o'n bitta yulduzni ko'rdim»",
            arabic: "رَأَيْتُ أَحَدَ عَشَرَ كَوْكَباً",
            scrambledWords: ["كَوْكَباً", "عَشَرَ", "رَأَيْتُ", "أَحَدَ"],
            correctAnswer: "رَأَيْتُ أَحَدَ عَشَرَ كَوْكَباً"
        },
        {
            id: "26-8",
            type: "multiple-choice",
            question: "«Fatā» (Yigit) so'zining ko'pligi:",
            options: ["فِتْيَةٌ", "فَتَيَاتٌ", "أَفْتِيَاءُ"],
            correctAnswer: "فِتْيَةٌ"
        },
        {
            id: "26-9",
            type: "multiple-choice",
            question: "«Eng yosh (kichik) talaba kim?»",
            options: ["مَنْ صَغِيرُ طَالِبٍ؟", "مَنْ أَصْغَرُ طَالِبٍ؟", "مَنْ أَصْغَرُ الطَّالِبِ؟"],
            correctAnswer: "مَنْ أَصْغَرُ طَالِبٍ؟"
        },
        {
            id: "26-10",
            type: "word-scramble",
            question: "Tuzing: «Mening yozuvim sening yozuvingdan chiroyliroq»",
            arabic: "خَطِّي أَجْمَلُ مِنْ خَطِّكَ",
            scrambledWords: ["خَطِّكَ", "أَجْمَلُ", "خَطِّي", "مِنْ"],
            correctAnswer: "خَطِّي أَجْمَلُ مِنْ خَطِّكَ"
        }
    ]
};
