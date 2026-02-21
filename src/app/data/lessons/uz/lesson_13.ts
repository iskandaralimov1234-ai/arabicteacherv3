import { Lesson } from '../../types';

export const lesson13: Lesson = {
    id: 13,
    title: "13-dars: الْجَمْعُ (Ko'plik formasi)",
    grammar: "Plural Nouns & Demonstrative 'These' (Ha'ula'i)",
    theory: {
        sections: [
            {
                title: "👥 Kirish: Ko'plik formasi",
                content: "Arab tilida ko'plikning uchta asosiy turi bor:\n1. **To'g'ri muzakkar ko'plik** (oxiri -uuna bilan tugaydi)\n2. **To'g'ri muannas ko'plik** (oxiri -atun bilan tugaydi)\n3. **Sinik (noto'g'ri) ko'plik** (so'zning ichki tuzilishi o'zgaradi)\n\nUshbu darsda biz ushbu turlarni o'rganamiz va «Bular» (**هَؤُلَاءِ**) ko'rsatish olmoshini ishlatishni ko'rib chiqamiz.",
                examples: [
                    { arabic: "مُدَرِّسٌ ⬅️ مُدَرِّسُونَ", meaning: "O'qituvchi ⬅️ O'qituvchilar" },
                    { arabic: "مُسْلِمَةٌ ⬅️ مُسْلِمَاتٌ", meaning: "Musulmon ayol ⬅️ Musulmon ayollar" },
                    { arabic: "طَالِبٌ ⬅️ طُلَّابٌ", meaning: "Talaba ⬅️ Talabalar" }
                ]
            },
            {
                title: "👉 Odamlarga ko'rsatish: هَؤُلَاءِ (Ha'ula'i)",
                content: "Yaqindagi bir guruh odamlarga (erkaklar yoki ayollarga) ko'rsatish uchun **هَؤُلَاءِ** (Bular) olmoshi ishlatiladi.\nEslatma: Bu olmosh faqat **aqlli** mavjudotlar (odamlar) uchun qo'llaniladi.",
                examples: [
                    { arabic: "هَؤُلَاءِ رِجَالٌ", meaning: "Bular erkaklar" },
                    { arabic: "هَؤُلَاءِ مُدَرِّسُونَ", meaning: "Bular o'qituvchilar" },
                    { arabic: "هَؤُلَاءِ طَالِبَاتٌ", meaning: "Bular talaba qizlar" },
                    { arabic: "مَنْ هَؤُلَاءِ الرِّجَالُ؟", meaning: "Bu erkaklar kim?" },
                    { arabic: "هَؤُلَاءِ أَصْدِقَائِي", meaning: "Bular mening do'stlarim" }
                ]
            },
            {
                title: "👨‍🏫 To'g'ri muzakkar ko'plik (Jam' mudhakkar salim)",
                content: "Bu forma birlikdagi muzakkar ismning oxiriga **ـُونَ** (-uuna) qo'shimchasini qo'shish bilan yasaladi.\nOdatda kasb egalari va kishilarning sifatlarini ifodalashda qo'llaniladi.",
                examples: [
                    { arabic: "مُهَنْدِسٌ ⬅️ مُهَنْدِسُونَ", meaning: "Muhandis ⬅️ Muhandislar" },
                    { arabic: "مُؤْمِنٌ ⬅️ مُؤْمِنُونَ", meaning: "Mo'min ⬅️ Mo'minlar" },
                    { arabic: "مُجْتَهِدٌ ⬅️ مُجْتَهِدُونَ", meaning: "Tirishqoq ⬅️ Tirishqoqlar" },
                    { arabic: "مُسْلِمٌ ⬅️ مُسْلِمُونَ", meaning: "Musulmon ⬅️ Musulmonlar" },
                    { arabic: "فَلَّاحٌ ⬅️ فَلَّاحُونَ", meaning: "Dehqon ⬅️ Dehqonlar" }
                ]
            },
            {
                title: "👩‍🏫 To'g'ri muannas ko'plik (Jam' mu'annath salim)",
                content: "Bu forma so'z oxiridagi «to-marbuta» (ة) ni tushirib qoldirib, o'rniga **ـَاتٌ** (-aatun) qo'shimchasini qo'shish bilan yasaladi.",
                examples: [
                    { arabic: "طَبِيبَةٌ ⬅️ طَبِيبَاتٌ", meaning: "Shifokor ayol ⬅️ Shifokor ayollar" },
                    { arabic: "مُدَرِّسَةٌ ⬅️ مُدَرِّسَاتٌ", meaning: "O'qituvchi ayol ⬅️ O'qituvchi ayollar" },
                    { arabic: "سَيَّارَةٌ ⬅️ سَيَّارَاتٌ", meaning: "Mashina ⬅️ Mashinalar" },
                    { arabic: "مُسْلِمَةٌ ⬅️ مُسْلِمَاتٌ", meaning: "Musulmon ayol ⬅️ Musulmon ayollar" },
                    { arabic: "زَوْجَةٌ ⬅️ زَوْجَاتٌ", meaning: "Xotin ⬅️ Xotinlar" }
                ]
            },
            {
                title: "🧩 Sinik (noto'g'ri) ko'plik (Jam' taksir)",
                content: "Ko'pgina arabcha so'zlarning ko'plik shakli so'zning o'zagini o'zgartirish orqali yasaladi. Bunday so'zlarning ko'plik shaklini lug'at boyligi sifatida **yodlab borish** kerak.",
                examples: [
                    { arabic: "وَلَدٌ ⬅️ أَوْلَادٌ", meaning: "Bola (o'g'il) ⬅️ Bolalar" },
                    { arabic: "رَجُلٌ ⬅️ رِجَالٌ", meaning: "Erkak ⬅️ Erkaklar" },
                    { arabic: "طَالِبٌ ⬅️ طُلَّابٌ", meaning: "Talaba ⬅️ Talabalar" },
                    { arabic: "تَاجِرٌ ⬅️ تُجَّارٌ", meaning: "Savdogar ⬅️ Savdogarlar" },
                    { arabic: "كِتَابٌ ⬅️ كُتُبٌ", meaning: "Kitob ⬅️ Kitoblar" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "13-1",
            type: "multiple-choice",
            question: "«هَؤُلَاءِ» so'zi qanday tarjima qilinadi?",
            options: ["Bu", "Bular (odamlar uchun)", "Anavilar"],
            correctAnswer: "Bular (odamlar uchun)"
        },
        {
            id: "13-2",
            type: "multiple-choice",
            question: "«مُسْلِمٌ» so'zining ko'pigi qaysi?",
            options: ["مُسْلِمَةٌ", "مُسْلِمُونَ", "مُسْلِمَاتٌ"],
            correctAnswer: "مُسْلِمُونَ"
        },
        {
            id: "13-3",
            type: "word-scramble",
            question: "Tuzing: «Bu erkaklar kim?»",
            arabic: "مَنْ هَؤُلَاءِ الرِّجَالُ؟",
            scrambledWords: ["الرِّجَالُ؟", "هَؤُلَاءِ", "مَنْ"],
            correctAnswer: "مَنْ هَؤُلَاءِ الرِّجَالُ؟"
        },
        {
            id: "13-4",
            type: "multiple-choice",
            question: "«بِنْتٌ» (Qiz bola) so'zining ko'pligi:",
            options: ["بَنَاتٌ", "أَبْنَاءٌ", "بِنْتَاتٌ"],
            correctAnswer: "بَنَاتٌ"
        },
        {
            id: "13-5",
            type: "multiple-choice",
            question: "Qaysi so'z Sinik (noto'g'ri) ko'plikda?",
            options: ["مُدَرِّسُونَ", "طُلَّابٌ", "مُسْلِمَاتٌ"],
            correctAnswer: "طُلَّابٌ"
        },
        {
            id: "13-6",
            type: "multiple-choice",
            question: "Tarjima qiling: «Bu talabalar yangi»",
            options: ["هَؤُلَاءِ طُلَّابٌ جُدُدٌ", "هَؤُلَاءِ طُلَّابٌ جَدِيدٌ", "هَذَا طُلَّابٌ جُدُدٌ"],
            correctAnswer: "هَؤُلَاءِ طُلَّابٌ جُدُدٌ"
        },
        {
            id: "13-7",
            type: "multiple-choice",
            question: "«طَالِبٌ» so'zining ko'pligi qaysi?",
            options: ["طَالِبُونَ", "طُلَّابٌ", "طَالِبَاتٌ"],
            correctAnswer: "طُلَّابٌ"
        },
        {
            id: "13-8",
            type: "multiple-choice",
            question: "«Mening akalarim» deb qanday aytiladi?",
            options: ["أَخِي", "إِخْوَتِي", "أَخَوَاتِي"],
            correctAnswer: "إِخْوَتِي"
        },
        {
            id: "13-9",
            type: "multiple-choice",
            question: "«غَنِيٌّ» (Boy) so'zi uchun ko'plikni tanlang:",
            options: ["غَنِيُّونَ", "أَغْنِيَاءُ", "غَنِيَّاتٌ"],
            correctAnswer: "أَغْنِيَاءُ"
        },
        {
            id: "13-10",
            type: "word-scramble",
            question: "Tuzing: «Otam va amakim savdogarlar»",
            arabic: "أَبِي وَعَمِّي تُجَّارٌ",
            scrambledWords: ["تُجَّارٌ", "وَعَمِّي", "أَبِي"],
            correctAnswer: "أَبِي وَعَمِّي تُجَّارٌ"
        }
    ]
};
