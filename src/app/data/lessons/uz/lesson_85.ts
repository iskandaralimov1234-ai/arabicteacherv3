import { Lesson } from '../../types';
export const lesson85: Lesson = {
    id: 85, title: "85-dars: Lahn (Grammatik xatolar) (الدَّرْسُ الْخَامِسُ وَالثَّمَانُونَ - اللَّحْنُ)", grammar: "Lahn (Grammatik xatolar)", theory: {
        sections: [
            { title: "📖 Tavsif", content: "Lahn — nutqda yo'l qo'yiladigan grammatik xatolar. Ikki turga bo'linadi: lahn jaliy (og'ir xato — ma'noni o'zgartiradi) va lahn khafiy (yengil xato)." },
            { title: "📝 Asosiy qoidalar", content: "- Lahn jaliy — og'ir xato (harakat yoki harfni noto'g'ri o'qish)\\n- Lahn khafiy — yengil xato (tajvid qoidalarini buzish)\\n- I'rob xatolari — so'z oxiri harakatini noto'g'ri qo'yish\\n- Talaffuz xatolari — harflarni noto'g'ri talaffuz qilish" },
            {
                title: "🗣️ Misollar", content: "Misollar:", examples: [
                    { arabic: "أَنْعَمْتَ — أَنْعَمْتِ — أَنْعَمْتُ", meaning: "An'amta — An'amti — An'amtu — Sen (erkak) — Sen (ayol) — Men — Harakat xatosi ma'noni o'zgartiradi!" },
                    { arabic: "الْحَمْدُ لِلَّهِ ✓ / الْحَمْدَ لِلَّهِ ✗", meaning: "Al-ḥamdu lillāhi ✓ / Al-ḥamda lillāhi ✗ — Damma to'g'ri, fatha xato (lahn jaliy)" },
                    { arabic: "رَبِّ الْعَالَمِينَ ✓ / رَبَّ الْعَالَمِينَ ✗", meaning: "Rabbi al-'ālamīna ✓ / Rabba... ✗ — Kasra to'g'ri, fatha xato" },
                    { arabic: "ض ≠ ظ", meaning: "Ḍād ≠ Ẓā' — Bu ikki harf bir-biridan farq qiladi, aralashtirish — lahn khafiy" }
                ]
            },
            {
                title: "📚 Lug'at", content: "Yangi so'zlar:", examples: [
                    { arabic: "لَحْنٌ", meaning: "laḥnun — Xato/Lahn" }, { arabic: "جَلِيٌّ", meaning: "jaliyyun — Og'ir/Ochiq" },
                    { arabic: "خَفِيٌّ", meaning: "khafiyyun — Yengil/Yashirin" }, { arabic: "خَطَأٌ", meaning: "khaṭa'un — Xato" },
                    { arabic: "صَوَابٌ", meaning: "ṣawābun — To'g'ri" }, { arabic: "تَصْحِيحٌ", meaning: "taṣḥīḥun — Tuzatish" },
                    { arabic: "غَلَطٌ", meaning: "ghalaṭun — Xatolik" }, { arabic: "صَحِيحٌ", meaning: "ṣaḥīḥun — To'g'ri" }
                ]
            }
        ]
    }, tasks: [
        { id: "85-1", type: "multiple-choice", question: "Lahn jaliy nima?", options: ["Yengil xato", "Og'ir xato (ma'noni o'zgartiradi)", "Tajvid xatosi", "Yozuv xatosi"], correctAnswer: "Og'ir xato (ma'noni o'zgartiradi)" },
        { id: "85-2", type: "multiple-choice", question: "Lahn khafiy nima?", options: ["Og'ir xato", "Yengil xato", "Ma'no xatosi", "Yozuv xatosi"], correctAnswer: "Yengil xato" },
        { id: "85-3", type: "multiple-choice", question: "الْحَمْدُ لِلَّهِ da qaysi harakat to'g'ri?", options: ["Fatha", "Damma", "Kasra", "Sukun"], correctAnswer: "Damma" },
        { id: "85-4", type: "multiple-choice", question: "خَطَأٌ nima?", options: ["To'g'ri", "Xato", "Yaxshi", "Chiroyli"], correctAnswer: "Xato" },
        { id: "85-5", type: "multiple-choice", question: "صَوَابٌ nima?", options: ["Xato", "To'g'ri", "Yomon", "Qiyin"], correctAnswer: "To'g'ri" },
        { id: "85-6", type: "multiple-choice", question: "تَصْحِيحٌ nima?", options: ["Buzish", "Tuzatish", "Yozish", "O'qish"], correctAnswer: "Tuzatish" },
        { id: "85-7", type: "multiple-choice", question: "لَحْنٌ nima?", options: ["Musiqa", "Xato/Lahn", "Qo'shiq", "Ovoz"], correctAnswer: "Xato/Lahn" },
        { id: "85-8", type: "multiple-choice", question: "صَحِيحٌ nima?", options: ["Xato", "To'g'ri", "Qiyin", "Oson"], correctAnswer: "To'g'ri" },
        { id: "85-9", type: "multiple-choice", question: "غَلَطٌ nima?", options: ["To'g'ri", "Xatolik", "Yaxshi", "Chiroyli"], correctAnswer: "Xatolik" },
        { id: "85-10", type: "multiple-choice", question: "I'rob xatosi nima?", options: ["Harfni noto'g'ri yozish", "So'z oxiri harakatini noto'g'ri qo'yish", "Harfni tushirib qoldirish", "So'zni takrorlash"], correctAnswer: "So'z oxiri harakatini noto'g'ri qo'yish" }
    ]
};
