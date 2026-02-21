import { Lesson } from '../../types';
export const lesson80: Lesson = {
    id: 80, title: "80-dars: Ibodat fiqhi (الدَّرْسُ الثَّمَانُونَ - فِقْهُ الْعِبَادَاتِ)", grammar: "Fiqh al-'ibādāt (Ibodat fiqhi)", theory: {
        sections: [
            { title: "📖 Tavsif", content: "Ibodat fiqhi — Islomning beshta ustuni: shahoda, namoz, ro'za, zakot va hajning hukmlari va qoidalari." },
            { title: "📝 Asosiy qoidalar", content: "- Shahoda — Islomga kirish\\n- Salāt (namoz) — kuniga 5 vaqt\\n- Savm (ro'za) — Ramazon oyida\\n- Zakāt — mol-mulkdan 2.5%\\n- Hajj — umr bo'yi bir marta (imkon bo'lsa)" },
            {
                title: "🗣️ Misollar", content: "Misollar:", examples: [
                    { arabic: "أَقِيمُوا الصَّلَاةَ", meaning: "Aqīmū al-ṣalāta — Namozni o'qinglar (Qur'on buyrug'i)" },
                    { arabic: "كُتِبَ عَلَيْكُمُ الصِّيَامُ", meaning: "Kutiba 'alaykumu al-ṣiyāmu — Sizlarga ro'za farz qilindi" },
                    { arabic: "وَآتُوا الزَّكَاةَ", meaning: "Wa ātū al-zakāta — Zakotni beringlar" },
                    { arabic: "وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ", meaning: "Wa lillāhi 'alā al-nāsi ḥijju al-bayti — Odamlar uchun Baytullohga hajj qilish farz" }
                ]
            },
            {
                title: "📚 Lug'at", content: "Yangi so'zlar:", examples: [
                    { arabic: "عِبَادَةٌ", meaning: "'ibādatun — Ibodat" }, { arabic: "صَلَاةٌ", meaning: "ṣalātun — Namoz" },
                    { arabic: "صِيَامٌ", meaning: "ṣiyāmun — Ro'za" }, { arabic: "زَكَاةٌ", meaning: "zakātun — Zakot" },
                    { arabic: "حَجٌّ", meaning: "ḥajjun — Hajj" }, { arabic: "شَهَادَةٌ", meaning: "shahādatun — Shahoda" },
                    { arabic: "فَرْضٌ", meaning: "farḍun — Farz" }, { arabic: "سُنَّةٌ", meaning: "sunnatun — Sunnat" }
                ]
            }
        ]
    }, tasks: [
        { id: "80-1", type: "multiple-choice", question: "Islomning nechta ustuni bor?", options: ["Uchta", "To'rtta", "Beshta", "Oltita"], correctAnswer: "Beshta" },
        { id: "80-2", type: "multiple-choice", question: "صَلَاةٌ nima?", options: ["Ro'za", "Namoz", "Zakot", "Hajj"], correctAnswer: "Namoz" },
        { id: "80-3", type: "multiple-choice", question: "Kuniga necha vaqt namoz farz?", options: ["3 vaqt", "4 vaqt", "5 vaqt", "7 vaqt"], correctAnswer: "5 vaqt" },
        { id: "80-4", type: "multiple-choice", question: "صِيَامٌ nima?", options: ["Namoz", "Ro'za", "Zakot", "Hajj"], correctAnswer: "Ro'za" },
        { id: "80-5", type: "multiple-choice", question: "زَكَاةٌ nima?", options: ["Namoz", "Ro'za", "Zakot", "Hajj"], correctAnswer: "Zakot" },
        { id: "80-6", type: "multiple-choice", question: "Hajj necha marta farz?", options: ["Har yili", "Umr bo'yi bir marta", "Ikki marta", "Uch marta"], correctAnswer: "Umr bo'yi bir marta" },
        { id: "80-7", type: "multiple-choice", question: "فَرْضٌ nima?", options: ["Sunnat", "Farz (majburiy)", "Mustahab", "Muboh"], correctAnswer: "Farz (majburiy)" },
        { id: "80-8", type: "multiple-choice", question: "شَهَادَةٌ nima?", options: ["Namoz", "Shahoda (iymon kalimasini aytish)", "Ro'za", "Zakot"], correctAnswer: "Shahoda (iymon kalimasini aytish)" },
        { id: "80-9", type: "multiple-choice", question: "عِبَادَةٌ nima?", options: ["Tijorat", "Ibodat", "Siyosat", "San'at"], correctAnswer: "Ibodat" },
        { id: "80-10", type: "multiple-choice", question: "Ro'za qaysi oyda tutiladi?", options: ["Shavvol", "Ramazon", "Rajab", "Sha'bon"], correctAnswer: "Ramazon" }
    ]
};
