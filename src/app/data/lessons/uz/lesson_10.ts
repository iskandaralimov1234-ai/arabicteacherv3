import { Lesson } from '../../types';

export const lesson10: Lesson = {
    id: 10,
    title: "10-dars: الضَّمَائِرُ الْمُتَّصِلَةُ (Birlashtirilgan olmoshlar)",
    grammar: "Possessive & Attached Pronouns (my, your, his, her)",
    theory: {
        sections: [
            {
                title: "📎 Birlashtirilgan olmoshlar nima?",
                content: "Arab tilida egalik olmoshlari (mening, sening va h.k.) alohida so'z emas. Ular so'zning oxiriga qo'shimcha (suffiks) bo'lib yopishib keladi.\n\nBirlikdagi asosiy qo'shimchalar:\n1. **«-iy»** (ـِي) — Mening\n2. **«-ka»** (ـكَ) — Sening (muzakkar)\n3. **«-ki»** (ـكِ) — Sening (muannas)\n4. **«-hu»** (ـهُ) — Uning (o'g'il bolaga nisbatan)\n5. **«-hā»** (ـهَا) — Uning (qiz bolaga nisbatan)",
                examples: [
                    { arabic: "كِتَابِي", meaning: "Kitobiy — Mening kitobim" },
                    { arabic: "كِتَابُكَ", meaning: "Kitobuka — Sening kitobing (muz.)" },
                    { arabic: "كِتَابُكِ", meaning: "Kitobuki — Sening kitobing (muan.)" }
                ]
            },
            {
                title: "🙍‍♂️ Murojaat: Sening (muzakkar va muannas)",
                content: "Murojaat qilayotganda muzakkar va muannas jinsini farqlash juda muhim.\n- Erkak kishiga murojaatda: **-ka** (ـكَ).\n- Ayol kishiga murojaatda: **-ki** (ـكِ).\n\nYozuvda ular bir xil (Kof harfi), faqat harakatida (fatha yoki kasra) farq bor.",
                examples: [
                    { arabic: "أَيْنَ بَيْتُكَ يَا حَامِدُ؟", meaning: "Sening uying qayerda, ey Homid?" },
                    { arabic: "أَيْنَ بَيْتُكِ يَا آمِنَةُ؟", meaning: "Sening uying qayerda, ey Omina?" },
                    { arabic: "مَا اسْمُكَ؟", meaning: "Isming nima? (erkak kishidan so'rash)" },
                    { arabic: "مَا اسْمُكِ؟", meaning: "Isming nima? (ayol kishidan so'rash)" }
                ]
            },
            {
                title: "👤 Uchinchi shaxs: Uning (hu va hā)",
                content: "Boshqa birov haqida gapirganda:\n- **-hu** (ـهُ) muzakkar uchun.\n- **-hā** (ـهَا) muannas uchun.\n\nSo'z oxiridagi nuqtasiz 'Ha' (ـه) - 'uning' (muz.), Alif bilan kelgan 'Ha' (ـهَا) - 'uning' (muan.) deganidir.",
                examples: [
                    { arabic: "اِسْمُهُ بِلَالٌ", meaning: "Uning ismi Bilol" },
                    { arabic: "اِسْمُهَا زَيْنَبُ", meaning: "Uning ismi Zaynab" },
                    { arabic: "أَبُوهَا تِاجِرٌ", meaning: "Uning otasi tijoratchi" },
                    { arabic: "أُمُّهُ طَبِيبَةٌ", meaning: "Uning onasi shifokor" }
                ]
            },
            {
                title: "🤫 'Mening' (-iy) qo'shimchasining maxsus qoidasi",
                content: "So'zga **«-iy»** (ـِي) qo'shimchasi qo'shilsa, u o'zidan oldingi harfni **kasra** bilan o'qishga majbur qiladi (hatto so'z damma bilan tugashi kerak bo'lsa ham).\n\nMasalan:\n- Kitabu (kitob) + iy = **Kitobiy** (mening kitobim).\n- Qalamu (ruchka) + iy = **Qalamiy** (mening ruchkam).",
                examples: [
                    { arabic: "هَذَا كِتَابِي", meaning: "Bu mening kitobim" },
                    { arabic: "هَذَا قَلَمِي", meaning: "Bu mening ruchkam" },
                    { arabic: "أَنَا طَالِبٌ وَهَذَا مَكْتَبِي", meaning: "Men talabaman va bu mening partam" }
                ]
            },
            {
                title: "🏡 Qarindoshlik so'zlari bilan kelishi",
                content: "«Ota» (**أَبٌ**) va «Aka/Uka» (**أَخٌ**) so'zlariga olmoshlar qo'shilganda (faqat 'mening' dan tashqari), ular o'rtasiga bog'lovchi **Vov** (و) harfi tushadi.",
                examples: [
                    { arabic: "أَبِي", meaning: "Mening otam (o'zgarishsiz)" },
                    { arabic: "أَبُوهُ", meaning: "Uning otasi (Vov qo'shildi)" },
                    { arabic: "أَبُوكَ", meaning: "Sening otang (Vov qo'shildi)" },
                    { arabic: "أَخُوهَا", meaning: "Uning akasi" },
                    { arabic: "أَخُوكِ", meaning: "Sening akang (ayol kishiga)" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "10-1",
            type: "multiple-choice",
            question: "Ayol kishiga nisbatan «Isming nima?» deb qanday so'raladi?",
            options: ["اِسْمُكَ", "اِسْمُكِ", "اِسْمُهَا"],
            correctAnswer: "اِسْمُكِ"
        },
        {
            id: "10-2",
            type: "multiple-choice",
            question: "«Uning» (o'g'il bolaga nisbatan) ma'nosini beruvchi qo'shimchani tanlang:",
            options: ["ـهَا", "ـكَ", "ـهُ"],
            correctAnswer: "ـهُ"
        },
        {
            id: "10-3",
            type: "word-scramble",
            question: "Jumlani tuzing: «Bu mening uyim»",
            arabic: "هَذَا بَيْتِي",
            scrambledWords: ["بَيْتِي", "هَذَا"],
            correctAnswer: "هَذَا بَيْتِي"
        },
        {
            id: "10-4",
            type: "multiple-choice",
            question: "«أَخُوكَ» so'zi qanday tarjima qilinadi?",
            options: ["Mening akam", "Sening akang", "Uning akasi"],
            correctAnswer: "Sening akang"
        },
        {
            id: "10-5",
            type: "word-scramble",
            question: "Tuzing: «Uning ismi Fotima»",
            arabic: "اِسْمُهَا فَاطِمَةُ",
            scrambledWords: ["فَاطِمَةُ", "اِسْمُهَا"],
            correctAnswer: "اِسْمُهَا فَاطِمَةُ"
        },
        {
            id: "10-6",
            type: "multiple-choice",
            question: "«Abu» (ota) va «-ka» (sening) orasiga qaysi harf qo'shiladi?",
            options: ["Alif", "Vov", "Yo"],
            correctAnswer: "Vov"
        },
        {
            id: "10-7",
            type: "multiple-choice",
            question: "«Uning mashinasi» (erkak kishiga):",
            options: ["سَيَّارَتُهَا", "سَيَّارَتُهُ", "سَيَّارَتِي"],
            correctAnswer: "سَيَّارَتُهُ"
        },
        {
            id: "10-8",
            type: "multiple-choice",
            question: "Erkak kishiga nisbatan «sening» qo'shimchasining harakati qanday?",
            options: ["Fatha (ـكَ)", "Kasra (ـكِ)", "Damma (ـكُ)"],
            correctAnswer: "Fatha (ـكَ)"
        },
        {
            id: "10-9",
            type: "word-scramble",
            question: "Tuzing: «Mening otam tijoratchi»",
            arabic: "أَبِي تَاجِرٌ",
            scrambledWords: ["تَاجِرٌ", "أَبِي"],
            correctAnswer: "أَبِي تَاجِرٌ"
        },
        {
            id: "10-10",
            type: "multiple-choice",
            question: "«Talaba qiz, uning ismi Xadicha» deb qanday aytiladi?",
            options: ["طَالِبَةٌ اِسْمُهَا خَدِيجَةُ", "طَالِبَةٌ اِسْمُهُ خَدِيجَةُ", "طَالِبٌ اِسْمُهَا خَدِيجَةُ"],
            correctAnswer: "طَالِبَةٌ اِسْمُهَا خَدِيجَةُ"
        }
    ]
};
