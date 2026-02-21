import { Lesson } from '../../types';
export const lesson87: Lesson = {
    id: 87, title: "87-dars: Qur'on i'robi (الدَّرْسُ السَّابِعُ وَالثَّمَانُونَ - إِعْرَابُ الْقُرْآنِ)", grammar: "I'rob al-Qur'ān (Qur'on i'robi)", theory: {
        sections: [
            { title: "📖 Tavsif", content: "Qur'on i'robi — Qur'oni Karim oyatlarining grammatik tahlili. Har bir so'zning i'rob holati, vazifasi va boshqa so'zlar bilan bog'lanishi o'rganiladi." },
            { title: "📝 Asosiy qoidalar", content: "- Har bir so'zning grammatik vazifasini aniqlash\\n- Marfu', Mansub, Majrur holatlarini belgilash\\n- Fe'l, ism va harflarni farqlash\\n- Oyatning ma'nosini grammatik tahlil orqali chuqurroq tushunish" },
            {
                title: "🗣️ Misollar", content: "Misollar:", examples: [
                    { arabic: "قُلْ هُوَ اللهُ أَحَدٌ", meaning: "Qul huwa Allāhu aḥadun — قُلْ: fe'l amr Majzum + هُوَ: mubtada' + اللهُ: xabar 1 Marfu' + أَحَدٌ: xabar 2 Marfu'" },
                    { arabic: "اللهُ الصَّمَدُ", meaning: "Allāhu al-ṣamadu — اللهُ: mubtada' Marfu' + الصَّمَدُ: xabar Marfu'" },
                    { arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ", meaning: "Lam yalid wa lam yūlad — لَمْ: jazm yuklamasi + يَلِدْ: fe'l mudori' Majzum + وَ: bog'lovchi + لَمْ يُولَدْ: fe'l mudori' majhul Majzum" },
                    { arabic: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", meaning: "Wa lam yakun lahu kufuwan aḥadun — يَكُنْ: fe'l nāqis Majzum + لَهُ: xabar + كُفُوًا: ḥāl Mansub + أَحَدٌ: ismu kāna Marfu'" }
                ]
            },
            {
                title: "📚 Lug'at", content: "Yangi so'zlar:", examples: [
                    { arabic: "إِعْرَابٌ", meaning: "i'rābun — I'rob/Grammatik tahlil" }, { arabic: "قُلْ", meaning: "qul — Ayt (buyruq shakli)" },
                    { arabic: "أَحَدٌ", meaning: "aḥadun — Yagona/Bir" }, { arabic: "الصَّمَدُ", meaning: "al-ṣamadu — Muhtojsiz" },
                    { arabic: "يَلِدُ", meaning: "yalidu — U tug'adi" }, { arabic: "يُولَدُ", meaning: "yūladu — U tug'iladi" },
                    { arabic: "كُفُوٌ", meaning: "kufuwun — Teng/O'xshash" }, { arabic: "فِعْلُ أَمْرٍ", meaning: "fi'lu amrin — Buyruq fe'li" }
                ]
            }
        ]
    }, tasks: [
        { id: "87-1", type: "multiple-choice", question: "قُلْ qanday fe'l?", options: ["O'tgan zamon", "Hozirgi-kelajak", "Buyruq fe'li (amr)", "Noaniq fe'l"], correctAnswer: "Buyruq fe'li (amr)" },
        { id: "87-2", type: "multiple-choice", question: "اللهُ gapda nima vazifasini bajaradi (اللهُ الصَّمَدُ)?", options: ["Xabar", "Mubtada' (ega)", "Maf'ul", "Sifat"], correctAnswer: "Mubtada' (ega)" },
        { id: "87-3", type: "multiple-choice", question: "لَمْ dan keyin fe'l qaysi holatda turadi?", options: ["Marfu'", "Mansub", "Majrur", "Majzum"], correctAnswer: "Majzum" },
        { id: "87-4", type: "multiple-choice", question: "أَحَدٌ nima degani?", options: ["Ko'p", "Yagona/Bir", "Ikki", "Uch"], correctAnswer: "Yagona/Bir" },
        { id: "87-5", type: "multiple-choice", question: "الصَّمَدُ nima degani?", options: ["Muhtoj", "Muhtojsiz", "Kuchsiz", "Kuchli"], correctAnswer: "Muhtojsiz" },
        { id: "87-6", type: "multiple-choice", question: "يَلِدُ nima degani?", options: ["U tug'iladi", "U tug'adi", "U o'ladi", "U yashaydi"], correctAnswer: "U tug'adi" },
        { id: "87-7", type: "multiple-choice", question: "يُولَدُ nima degani?", options: ["U tug'adi", "U tug'iladi", "U o'ladi", "U yashaydi"], correctAnswer: "U tug'iladi" },
        { id: "87-8", type: "multiple-choice", question: "كُفُوٌ nima degani?", options: ["Katta", "Teng/O'xshash", "Kichik", "Boshqa"], correctAnswer: "Teng/O'xshash" },
        { id: "87-9", type: "multiple-choice", question: "فِعْلُ أَمْرٍ nima?", options: ["O'tgan zamon fe'li", "Buyruq fe'li", "Hozirgi zamon fe'li", "Kelajak zamon fe'li"], correctAnswer: "Buyruq fe'li" },
        { id: "87-10", type: "multiple-choice", question: "Qur'on i'robi nima uchun kerak?", options: ["Faqat yodlash uchun", "Oyatlarni chuqurroq tushunish uchun", "Faqat chiroyli o'qish uchun", "Faqat imtihon uchun"], correctAnswer: "Oyatlarni chuqurroq tushunish uchun" }
    ]
};
