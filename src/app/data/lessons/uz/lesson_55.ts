import { Lesson } from '../../types';
export const lesson55: Lesson = {
    id: 55, title: "55-dars: Tafsir (Sharhlash) (الدَّرْسُ الْخَامِسُ وَالْخَمْسُونَ - التَّفْسِيرُ)", grammar: "Tafsir (Sharhlash)", theory: {
        sections: [
            { title: "📖 Tavsif", content: "Tafsir — bu gapning ma'nosini tushuntirib berish uchun ishlatiladigan grammatik tushuncha. أَيْ (ya'ni) va أَنْ (ekanligini) so'zlari bilan tushuntiriladi." },
            { title: "📝 Asosiy qoidalar", content: "- أَيْ — ya'ni (tushuntirish uchun)\\n- أَنْ — ekanligini (tushuntirish uchun)\\n- Oldingi so'zning ma'nosini ochib beradi\\n- Ba'zan kontekst orqali aniqlanadi" },
            {
                title: "🗣️ Misollar", content: "Misollar:", examples: [
                    { arabic: "الْإِنْسَانُ أَيِ الْبَشَرُ", meaning: "Al-insānu ay al-basharu — Inson, ya'ni odam" },
                    { arabic: "أَشَرْتُ إِلَيْهِ أَنِ اجْلِسْ", meaning: "Ashartu ilayhi an ijlis — Men unga o'tir deb ishora qildim" },
                    { arabic: "كَتَبْتُ إِلَيْهِ أَنِ افْعَلْ", meaning: "Katabtu ilayhi an if'al — Men unga qil deb yozdim" },
                    { arabic: "الشَّجَاعَةُ أَيِ الْبَسَالَةُ", meaning: "Al-shajā'atu ay al-basālatu — Jasorat, ya'ni mardlik" }
                ]
            },
            {
                title: "📚 Lug'at", content: "Yangi so'zlar:", examples: [
                    { arabic: "تَفْسِيرٌ", meaning: "tafsīrun — Sharhlash/Tushuntirish" }, { arabic: "أَيْ", meaning: "ay — Ya'ni" },
                    { arabic: "أَنْ", meaning: "an — ...ekanligini" }, { arabic: "إِنْسَانٌ", meaning: "insānun — Inson" },
                    { arabic: "بَشَرٌ", meaning: "basharun — Odam" }, { arabic: "شَجَاعَةٌ", meaning: "shajā'atun — Jasorat" },
                    { arabic: "بَسَالَةٌ", meaning: "basālatun — Mardlik" }, { arabic: "أَشَارَ", meaning: "ashāra — U ishora qildi" }
                ]
            }
        ]
    }, tasks: [
        { id: "55-1", type: "multiple-choice", question: "Tushuntirish uchun qaysi so'z ishlatiladi?", options: ["هَلْ", "أَيْ", "يَا", "لَا"], correctAnswer: "أَيْ" },
        { id: "55-2", type: "multiple-choice", question: "أَيْ nima degani?", options: ["Agar", "Ya'ni", "Lekin", "Chunki"], correctAnswer: "Ya'ni" },
        { id: "55-3", type: "multiple-choice", question: "تَفْسِيرٌ nima degani?", options: ["Savol", "Sharhlash", "Buyruq", "Inkor"], correctAnswer: "Sharhlash" },
        { id: "55-4", type: "multiple-choice", question: "Tarjima qiling: الْإِنْسَانُ أَيِ الْبَشَرُ", options: ["Inson va odam", "Inson, ya'ni odam", "Inson emas odam", "Inson yoki odam"], correctAnswer: "Inson, ya'ni odam" },
        { id: "55-5", type: "multiple-choice", question: "أَنْ tafsir ma'nosida qanday ishlatiladi?", options: ["Savol sifatida", "...ekanligini deb tushuntirish", "Inkor sifatida", "Buyruq sifatida"], correctAnswer: "...ekanligini deb tushuntirish" },
        { id: "55-6", type: "multiple-choice", question: "إِنْسَانٌ nima degani?", options: ["Hayvon", "Inson", "O'simlik", "Tosh"], correctAnswer: "Inson" },
        { id: "55-7", type: "multiple-choice", question: "شَجَاعَةٌ nima degani?", options: ["Qo'rqoqlik", "Jasorat", "Sabr", "Donishmandlik"], correctAnswer: "Jasorat" },
        { id: "55-8", type: "multiple-choice", question: "أَشَارَ nima degani?", options: ["U gapirdi", "U ishora qildi", "U yozdi", "U o'qidi"], correctAnswer: "U ishora qildi" },
        { id: "55-9", type: "multiple-choice", question: "بَشَرٌ nima degani?", options: ["Hayvon", "Odam", "Malak", "Jin"], correctAnswer: "Odam" },
        { id: "55-10", type: "multiple-choice", question: "بَسَالَةٌ nima degani?", options: ["Qo'rquv", "Mardlik", "Xotirjamlik", "Sabr"], correctAnswer: "Mardlik" }
    ]
};
