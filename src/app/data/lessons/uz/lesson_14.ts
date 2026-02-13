import { Lesson } from '../../types';

export const lesson14: Lesson = {
    id: 14,
    title: "14-dars: Ko'plik olmoshlar (أَنْتُمْ، هُمْ، نَحْنُ)",
    grammar: "Plural Personal & Demonstrative Pronouns",
    theory: {
        sections: [
            {
                title: "👉 Uzoqqa ishora: أُولَئِكَ (Anavilar)",
                content: "Biz allaqachon bilamizki, «Bular» — bu هَؤُلَاءِ (ha'ula'i). Uzoqda turgan odamlarga ishora qilish uchun esa **أُولَئِكَ** (Ula'ika) — «Anavilar» ishlatiladi.\nU erkaklar uchun ham, ayollar uchun ham (aqllilar uchun) ishlatiladi.",
                examples: [
                    { arabic: "أُولَئِكَ طُلَّابٌ", meaning: "Anavilar — talabalar" },
                    { arabic: "أُولَئِكَ رِجَالٌ", meaning: "Anavilar — erkaklar" },
                    { arabic: "أُولَئِكَ مُدَرِّسَاتٌ", meaning: "Anavilar — o'qituvchi ayollar" }
                ]
            },
            {
                title: "👥 Ko'plik kishilik olmoshlari",
                content: "Ushbu darsda yangi olmoshlar bilan tanishamiz:\n\n1. **هُمْ** (Hum) — Ular (Muzakkar)\n2. **أَنْتُمْ** (Antum) — Sizlar (Muzakkar)\n3. **نَحْنُ** (Nahnu) — Biz (Muzakkar va Muannas)",
                examples: [
                    { arabic: "هُمْ مُهَنْدِسُونَ", meaning: "Ular muhandislar" },
                    { arabic: "أَنْتُمْ طُلَّابٌ", meaning: "Sizlar talabalarsiz" },
                    { arabic: "نَحْنُ مُسْلِمُونَ", meaning: "Biz musulmonlarmiz" }
                ]
            },
            {
                title: "🔗 Birikma olmoshlar (Sizning, Bizning, Ularning)",
                content: "«Sizlarning uyingiz» yoki «Bizning kitobimiz» demoqchi bo'lsak, quyidagi qo'shimchalarni qo'shamiz:\n\n- **ـكُمْ** (kum) — Sizlarning\n- **ـنَا** (na) — Bizning\n- **ـهُمْ** (hum) — Ularning",
                examples: [
                    { arabic: "بَيْتُكُمْ", meaning: "Sizlarning uyingiz" },
                    { arabic: "رَبُّنَا", meaning: "Bizning Robbimiz" },
                    { arabic: "أَبُوهُمْ", meaning: "Ularning otasi" }
                ]
            },
            {
                title: "🏃‍♂️ Ko'plik fe'llari",
                content: "Bir guruh erkaklarning harakatini ifodalash uchun (Ular ketdilar) fe'lga **ـُوا** (Vav al-Jama'a) qo'shiladi:\n\n- **ذَهَبُوا** (Zahabu) — Ular ketdilar\n- **خَرَجُوا** (Xaraju) — Ular chiqdilar",
                examples: [
                    { arabic: "أَيْنَ الطُّلَّابُ؟ ذَهَبُوا إِلَى الْمَدْرَسَةِ", meaning: "Talabalar qayerda? Ular maktabga ketdilar" },
                    { arabic: "اَلأَوْلَادُ خَرَجُوا", meaning: "Bolalar chiqdilar" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "14-1",
            type: "multiple-choice",
            question: "«أُولَئِكَ» so'zining ma'nosi nima?",
            options: ["Bular", "Anavilar (odamlar uchun)", "Ana u"],
            correctAnswer: "Anavilar (odamlar uchun)"
        },
        {
            id: "14-2",
            type: "multiple-choice",
            question: "«Sizlar» (erkaklar) olmoshi qaysi?",
            options: ["أَنْتَ", "أَنْتُمْ", "هُمْ"],
            correctAnswer: "أَنْتُمْ"
        },
        {
            id: "14-3",
            type: "word-scramble",
            question: "Tuzing: «Biz musulmonlarmiz»",
            arabic: "نَحْنُ مُسْلِمُونَ",
            scrambledWords: ["مُسْلِمُونَ", "نَحْنُ", "هُمْ"],
            correctAnswer: "نَحْنُ مُسْلِمُونَ"
        },
        {
            id: "14-4",
            type: "multiple-choice",
            question: "«Sizlarning uyingiz» — ...",
            options: ["بَيْتُكُمْ", "بَيْتُنَا", "بَيْتُهُمْ"],
            correctAnswer: "بَيْتُكُمْ"
        },
        {
            id: "14-5",
            type: "matching",
            question: "Olmoshlarni tarjimasi bilan bog'lang",
            pairs: [
                { "arabic": "نَحْنُ", "meaning": "Biz" },
                { "arabic": "هُمْ", "meaning": "Ular (O'g'il bolalar)" },
                { "arabic": "أَنْتُمْ", "meaning": "Sizlar (O'g'il bolalar)" },
                { "arabic": "هُنَّ", "meaning": "Ular (Qizlar)" }
            ]
        },
        {
            id: "14-6",
            type: "multiple-choice",
            question: "«Ular ketdilar» qanday aytiladi?",
            options: ["ذَهَبَ", "ذَهَبُوا", "ذَهَبْتُمْ"],
            correctAnswer: "ذَهَبُوا"
        },
        {
            id: "14-7",
            type: "word-scramble",
            question: "Tuzing: «Kitoblaringiz qayerda, ey bolalar?»",
            arabic: "أَيْنَ كُتُبُكُمْ يَا أَوْلَادُ؟",
            scrambledWords: ["يَا", "أَوْلَادُ؟", "كُتُبُكُمْ", "أَيْنَ"],
            correctAnswer: "أَيْنَ كُتُبُكُمْ يَا أَوْلَادُ؟"
        },
        {
            id: "14-8",
            type: "multiple-choice",
            question: "To'g'risini tanlang: «Anavi kishilar — o'qituvchilar»",
            options: ["أُولَئِكَ الرِّجَالُ مُدَرِّسُونَ", "هَؤُلَاءِ الرِّجَالُ مُدَرِّسُونَ", "ذَلِكَ الرِّجَالُ مُدَرِّسُونَ"],
            correctAnswer: "أُولَئِكَ الرِّجَالُ مُدَرِّسُونَ"
        },
        {
            id: "14-9",
            type: "multiple-choice",
            question: "«Bizning Robbimiz» arab tilida:",
            options: ["رَبُّكُمْ", "رَبُّنَا", "رَبُّهُ"],
            correctAnswer: "رَبُّنَا"
        },
        {
            id: "14-10",
            type: "word-scramble",
            question: "Tuzing: «Mening aka-ukalarim uydan chiqdilar»",
            arabic: "إِخْوَتِي خَرَجُوا مِنَ الْبَيْتِ",
            scrambledWords: ["مِنَ", "خَرَجُوا", "الْبَيْتِ", "إِخْوَتِي"],
            correctAnswer: "إِخْوَتِي خَرَجُوا مِنَ الْبَيْتِ"
        }
    ]
};
