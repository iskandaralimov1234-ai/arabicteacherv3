import { Lesson } from '../../types';

export const lesson13: Lesson = {
    id: 13,
    title: "13-dars: Ko'plik shakli (الْجَمْعُ)",
    grammar: "Plural Nouns & Demonstrative 'These'",
    theory: {
        sections: [
            {
                title: "👥 Kirish: Ko'plik shakli",
                content: "Arab tilida ko'plikning uch turi mavjud:\n1. **To'g'ri Muzakkar Ko'plik** (-una qo'shimchasi)\n2. **To'g'ri Muannas Ko'plik** (-atun qo'shimchasi)\n3. **Siniq Ko'plik** (so'zning o'zagi o'zgaradi)\n\nUshbu darsda biz ularni va «Bular» (هَؤُلَاءِ) ko'rsatish olmoshini o'rganamiz.",
                examples: [
                    { arabic: "مُدَرِّسٌ ⬅️ مُدَرِّسُونَ", meaning: "O'qituvchi ⬅️ O'qituvchilar" },
                    { arabic: "مُسْلِمَةٌ ⬅️ مُسْلِمَاتٌ", meaning: "Muslima ⬅️ Muslimalar" },
                    { arabic: "طَالِبٌ ⬅️ طُلَّابٌ", meaning: "Talaba ⬅️ Talabalar" }
                ]
            },
            {
                title: "👉 Odamlarga ishora: هَؤُلَاءِ (Ha'ula'i)",
                content: "Odamlar guruhiga (erkak yoki ayol) ishora qilish uchun **هَؤُلَاءِ** (Bular) olmoshi ishlatiladi.\nU faqat **aqlli zotlar** (insonlar) uchun ishlatiladi.",
                examples: [
                    { arabic: "هَؤُلَاءِ رِجَالٌ", meaning: "Bular erkaklar" },
                    { arabic: "هَؤُلَاءِ مُدَرِّسُونَ", meaning: "Bular o'qituvchilar" },
                    { arabic: "هَؤُلَاءِ طَالِبَاتٌ", meaning: "Bular talaba qizlar" },
                    { arabic: "مَنْ هَؤُلَاءِ الرِّجَالُ؟", meaning: "Bu erkaklar kim?" },
                    { arabic: "هَؤُلَاءِ أَصْدِقَائِي", meaning: "Bular mening do'stlarim" }
                ]
            },
            {
                title: "👨‍🏫 To'g'ri Muzakkar Ko'plik",
                content: "So'z oxiriga **ـُونَ** (una) qo'shish orqali yasaladi.\nOdatda kasblar va insonlarning sifatlari uchun qo'llaniladi.",
                examples: [
                    { arabic: "مُهَنْدِسٌ ⬅️ مُهَنْدِسُونَ", meaning: "Muhandis ⬅️ Muhandislar" },
                    { arabic: "مُؤْمِنٌ ⬅️ مُؤْمِنُونَ", meaning: "Mo'min ⬅️ Mo'minlar" },
                    { arabic: "كَافِرٌ ⬅️ كَافِرُونَ", meaning: "Kofir ⬅️ Kofirlar" },
                    { arabic: "مُجْتَهِدٌ ⬅️ مُجْتَهِدُونَ", meaning: "Tirishqoq ⬅️ Tirishqoqlar" },
                    { arabic: "مُسْلِمٌ ⬅️ مُسْلِمُونَ", meaning: "Musulmon ⬅️ Musulmonlar" }
                ]
            },
            {
                title: "👩‍🏫 To'g'ri Muannas Ko'plik",
                content: "«Ta-marbuta» (ة) harfini **ـَاتٌ** (atun) ga almashtirish orqali yasaladi.",
                examples: [
                    { arabic: "طَبِيبَةٌ ⬅️ طَبِيبَاتٌ", meaning: "Shifokor ayol ⬅️ Shifokor ayollar" },
                    { arabic: "مُدَرِّسَةٌ ⬅️ مُدَرِّسَاتٌ", meaning: "O'qituvchi ayol ⬅️ O'qituvchi ayollar" },
                    { arabic: "سَيَّارَةٌ ⬅️ سَيَّارَاتٌ", meaning: "Mashina ⬅️ Mashinalar" },
                    { arabic: "مُسْلِمَةٌ ⬅️ مُسْلِمَاتٌ", meaning: "Muslima ⬅️ Muslimalar" },
                    { arabic: "زَوْجَةٌ ⬅️ زَوْجَاتٌ", meaning: "Ayol (rafiqasi) ⬅️ Ayollar" }
                ]
            },
            {
                title: "🧩 Siniq Ko'plik (Jam' Taksir)",
                content: "Ko'p so'zlar ko'plikda o'zak o'zgarishi orqali yasaladi. Bu shakllarni **yodlash** kerak.",
                examples: [
                    { arabic: "وَلَدٌ ⬅️ أَوْلَادٌ", meaning: "Bola ⬅️ Bolalar" },
                    { arabic: "رَجُلٌ ⬅️ رِجَالٌ", meaning: "Kishi ⬅️ Kishilar" },
                    { arabic: "طَالِبٌ ⬅️ طُلَّابٌ", meaning: "Talaba ⬅️ Talabalar" },
                    { arabic: "تَاجِرٌ ⬅️ تُجَّارٌ", meaning: "Savdogar ⬅️ Savdogarlar" },
                    { arabic: "قَلَمٌ ⬅️ أَقْلَامٌ", meaning: "Qalam ⬅️ Qalamlar" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "13-1",
            type: "multiple-choice",
            question: "«هَؤُلَاءِ» so'zining ma'nosi nima?",
            options: ["Bu", "Bular (odamlar uchun)", "Anavilar"],
            correctAnswer: "Bular (odamlar uchun)"
        },
        {
            id: "13-2",
            type: "multiple-choice",
            question: "«مُسْلِمٌ» so'zining ko'plik shakli qanday?",
            options: ["مُسْلِمَةٌ", "مُسْلِمُونَ", "مُسْلِمَاتٌ"],
            correctAnswer: "مُسْلِمُونَ"
        },
        {
            id: "13-3",
            type: "word-scramble",
            question: "Jumlani tuzing: «Bu kishilar kim?»",
            arabic: "مَنْ هَؤُلَاءِ الرِّجَالُ؟",
            scrambledWords: ["الرِّجَالُ؟", "هَؤُلَاءِ", "مَنْ"],
            correctAnswer: "مَنْ هَؤُلَاءِ الرِّجَالُ؟"
        },
        {
            id: "13-4",
            type: "multiple-choice",
            question: "«بِنْتٌ» (Qiz) so'zining ko'pligi:",
            options: ["بَنَاتٌ", "أَبْنَاءٌ", "بِنْتَاتٌ"],
            correctAnswer: "بَنَاتٌ"
        },
        {
            id: "13-5",
            type: "multiple-choice",
            question: "Qaysi so'z Siniq Ko'plik hisoblanadi?",
            options: ["مُدَرِّسُونَ", "طُلَّابٌ", "مُسْلِمَاتٌ"],
            correctAnswer: "طُلَّابٌ"
        },
        {
            id: "13-6",
            type: "multiple-choice",
            question: "Tarjima qiling: «Bu talabalar yangidir»",
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
            question: "«Mening aka-ukalarim» deb qanday aytiladi?",
            options: ["أَخِي", "إِخْوَتِي", "أَخَوَاتِي"],
            correctAnswer: "إِخْوَتِي"
        },
        {
            id: "13-9",
            type: "multiple-choice",
            question: "«غَنِيٌّ» (Boy) so'zining ko'pligi:",
            options: ["غَنِيُّونَ", "أَغْنِيَاءُ", "غَنِيَّاتٌ"],
            correctAnswer: "أَغْنِيَاءُ"
        },
        {
            id: "13-10",
            type: "word-scramble",
            question: "Tuzing: «Otam va amakim savdogarlardir»",
            arabic: "أَبِي وَعَمِّي تُجَّارٌ",
            scrambledWords: ["تُجَّارٌ", "وَعَمِّي", "أَبِي"],
            correctAnswer: "أَبِي وَعَمِّي تُجَّارٌ"
        }
    ]
};
