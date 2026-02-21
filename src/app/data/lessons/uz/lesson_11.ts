import { Lesson } from '../../types';

export const lesson11: Lesson = {
    id: 11,
    title: "11-dars: فِيها وَ فِيهِ (Predloglar birlashtirilgan olmoshlar bilan)",
    grammar: "Prepositions with Attached Pronouns",
    theory: {
        sections: [
            {
                title: "🤝 Predlog + Olmosh",
                content: "Arab tilida predloglar ham xuddi ismlar kabi birlashtirilgan olmoshlar bilan birikib kela oladi. Bu egalik yoki joylashuvni ifodalashda ishlatiladi.",
                examples: [
                    { arabic: "فِي + هِ = فِيهِ", meaning: "Fihiy — Unda (ichida)" },
                    { arabic: "لَ + كَ = لَكَ", meaning: "Laka — Senda bor / Sen uchun" },
                    { arabic: "مَعَ + هَا = مَعَهَا", meaning: "Ma’ahā — U bilan (ayolga nisbatan)" }
                ]
            },
            {
                title: "🔄 «-hu» dan «-hi» ga o'zgarishi (Garmoniya qoidasi)",
                content: "Agar predlog **«iy»** tovushi yoki **Yo** harfi bilan tugasa (masalan فِي — «fiy» yoki بِ — «biy»), undan keyin keladigan «uning» (muzakkar) olmoshi talaffuz qulayligi uchun dammadan kasraga o'zgaradi.\n\nAsli: *Fiy-hu* ➡️ O'zgardi: **Fiy-hi** (فِيهِ).\nBu faqat murojaat qilinayotgan shaxs yoki narsa muzakkar (erkak) jinsida bo'lgandagina sodir bo'ladi.",
                examples: [
                    { arabic: "فِيهِ", meaning: "Unda / Undan (Fihiy)" },
                    { arabic: "بِهِ", meaning: "U bilan / U orqali (Bihini)" },
                    { arabic: "فِيهَا", meaning: "Unda (Bu yerda 'hā' o'zgarmaydi - Fiyhā)" }
                ]
            },
            {
                title: "📦 Muzakkar va muannas narsalar",
                content: "Arab tilida o'rta jins («u» narsa) yo'q. Hamma narsalar yo muzakkar, yoki muannasdir.\n- Agar uy haqida gapirsak (**بَيْتٌ** - muz.), **فِيهِ** (unda) deymiz.\n- Agar xona haqida bo'lsa (**غُرْفَةٌ** - muan.), **فِيهَا** (unda) deymiz.",
                examples: [
                    { arabic: "الْبَيْتُ جَمِيلٌ، فِيهِ حَدِيقَةٌ", meaning: "Uy chiroyli, unda bog' bor" },
                    { arabic: "الْغُرْفَةُ جَمِيلَةٌ، فِيهَا نَافِذَةٌ", meaning: "Xona chiroyli, unda deraza bor" }
                ]
            },
            {
                title: "👥 مَعَ (Ma’a) predlogi — «Bilan»",
                content: "«Ma’a» predlogi kimdir bilan birga ekanlikni bildiradi.\n\n- **مَعِي** — men bilan\n- **مَعَهُ** — u bilan\n- **مَعَكَ** — sen bilan",
                examples: [
                    { arabic: "أَيْنَ بِلَالٌ؟ مَعَهُ الْمُدЕРِّسُ", meaning: "Bilol qayerda? U bilan o'qituvchi" },
                    { arabic: "مَنْ مَعَكَ يَا مَحْمُودُ؟ مَعِي زَمِيلِي", meaning: "Siz bilan kim, ey Mahmud? Men bilan hamkasbim" }
                ]
            },
            {
                title: "🎁 لِـ (Li) predlogi — Egalik",
                content: "Когда предлог **لِـ** (uchun/niki) olmoshlar bilan biriksa (faqat 'meniki' dan tashqari), uning harakati fathaga o'zgaradi: **La** (**لَـ**).\n\n- **لِي** (Liy) — Menda bor (istisno, kasra bo'lib qoladi)\n- **لَهُ** (Lahu) — Unda bor\n- **لَكَ** (Laka) — Senda bor",
                examples: [
                    { arabic: "لِي أُخْتٌ وَاحِدَةٌ", meaning: "Mening bitta singlim bor" },
                    { arabic: "لَكَ سَيَّارَةٌ جَمِيلَةٌ", meaning: "Sening chiroyli mashinang bor" },
                    { arabic: "لَهُ خَمْسَةُ أَبْنَاءٍ", meaning: "Uning beshta o'g'li bor" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "11-1",
            type: "multiple-choice",
            question: "«Unda» (muzakkar, 'Fiy' predlogidan keyin) qanday to'g'ri yoziladi?",
            options: ["فِيهُ", "فِيهِ", "فِي هُ"],
            correctAnswer: "فِيهِ"
        },
        {
            id: "11-2",
            type: "multiple-choice",
            question: "Mashina haqida gapirganda (muannas), «unda» deb qanday aytiladi?",
            options: ["فِيهِ", "مَعَهَا", "فِيهَا"],
            correctAnswer: "فِيهَا"
        },
        {
            id: "11-3",
            type: "word-scramble",
            question: "Jumlani tuzing: «Unda (uyda) parta bor»",
            arabic: "فِيهِ مَكْتَبٌ",
            scrambledWords: ["مَكْتَبٌ", "فِيهِ"],
            correctAnswer: "فِيهِ مَكْتَبٌ"
        },
        {
            id: "11-4",
            type: "multiple-choice",
            question: "«Mening akam bor» jumlasini tarjima qiling:",
            options: ["مَعِي أَخٌ", "لِي أَخٌ", "عِنْدِي أَخٌ"],
            correctAnswer: "لِي أَخٌ"
        },
        {
            id: "11-5",
            type: "word-scramble",
            question: "Tuzing: «U bilan hamkasbi bor»",
            arabic: "مَعَهُ زَمِيلُهُ",
            scrambledWords: ["زَمِيلُهُ", "مَعَهُ"],
            correctAnswer: "مَعَهُ زَمِيلُهُ"
        },
        {
            id: "11-6",
            type: "multiple-choice",
            question: "«Ma-’ahu» so'zidagi «-hu» olmoshining harakati qanday?",
            options: ["Kasra", "Damma", "Sukun"],
            correctAnswer: "Damma"
        },
        {
            id: "11-7",
            type: "multiple-choice",
            question: "«Uning kichkina qizi bor» (ayol kishi haqida) tarjimasini tanlang:",
            options: ["لَهُ بِنْتٌ صَغِيرَةٌ", "لَهَا بِنْتٌ صَغِيرَةٌ", "فِيهَا بِنْتٌ صَغِيرَةٌ"],
            correctAnswer: "لَهَا بِنْتٌ صَغِيرَةٌ"
        },
        {
            id: "11-8",
            type: "multiple-choice",
            question: "«Laka» (لَكَ) nima degani?",
            options: ["U uchun", "Senda bor", "Men bilan"],
            correctAnswer: "Senda bor"
        },
        {
            id: "11-9",
            type: "word-scramble",
            question: "Tuzing: «Unda (xonada) kursi bor»",
            arabic: "فِيهَا كُرْسِيٌّ",
            scrambledWords: ["كُرْسِيٌّ", "فِيهَا"],
            correctAnswer: "فِيهَا كُرْسِيٌّ"
        },
        {
            id: "11-10",
            type: "multiple-choice",
            question: "«Ma-’iy» (مَعِي) qanday tarjima qilinadi?",
            options: ["Menda bor", "Mening ichimda", "Men bilan"],
            correctAnswer: "Men bilan"
        }
    ]
};
