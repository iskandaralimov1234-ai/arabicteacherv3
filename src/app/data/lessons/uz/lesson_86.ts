import { Lesson } from '../../types';
export const lesson86: Lesson = {
    id: 86, title: "86-dars: Amaliy grammatika (الدَّرْسُ السَّادِسُ وَالثَّمَانُونَ - النَّحْوُ التَّطْبِيقِيُّ)", grammar: "Amaliy grammatika", theory: {
        sections: [
            { title: "📖 Tavsif", content: "Amaliy grammatika — o'rganilgan barcha naḥv va sarf qoidalarini real matnlarda, xususan Qur'on va hadis matnlarida qo'llash." },
            { title: "📝 Asosiy qoidalar", content: "- I'rob tahlili — gapning har bir so'zini i'rob qilish\\n- Mubtada', xabar, fā'il, maf'ul ni aniqlash\\n- Ko'makchi so'z va izofalarni topish\\n- Sifat va mawsuf muvofiqligini tekshirish" },
            {
                title: "🗣️ Misollar", content: "Misollar:", examples: [
                    { arabic: "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ", meaning: "Bismillāhi al-Raḥmāni al-Raḥīmi — بِ: ko'makchi + اسم: Majrur + الله: mudaf ilayhi Majrur + الرَّحْمَنِ: sifat Majrur + الرَّحِيمِ: sifat Majrur" },
                    { arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", meaning: "Al-ḥamdu lillāhi Rabbi al-'ālamīna — الْحَمْدُ: mubtada' Marfu' + لِلَّهِ: xabar Majrur + رَبِّ: badal Majrur + الْعَالَمِينَ: mudaf ilayhi Majrur" },
                    { arabic: "ذَهَبَ مُحَمَّدٌ إِلَى الْمَسْجِدِ", meaning: "Dhahaba Muhammadun ilā al-masjidi — ذَهَبَ: fe'l + مُحَمَّدٌ: fā'il Marfu' + إِلَى: ko'makchi + الْمَسْجِدِ: Majrur" },
                    { arabic: "إِنَّ اللهَ غَفُورٌ رَحِيمٌ", meaning: "Inna Allāha ghafūrun raḥīmun — إِنَّ: yuklama + اللهَ: ismu inna Mansub + غَفُورٌ: xabaru inna Marfu' + رَحِيمٌ: xabar soniy Marfu'" }
                ]
            },
            {
                title: "📚 Lug'at", content: "Yangi so'zlar:", examples: [
                    { arabic: "تَطْبِيقٌ", meaning: "taṭbīqun — Qo'llash/Amaliy" }, { arabic: "تَحْلِيلٌ", meaning: "taḥlīlun — Tahlil" },
                    { arabic: "إِعْرَابٌ", meaning: "i'rābun — I'rob" }, { arabic: "جُمْلَةٌ اسْمِيَّةٌ", meaning: "jumlatun ismiyyatun — Ismli gap" },
                    { arabic: "جُمْلَةٌ فِعْلِيَّةٌ", meaning: "jumlatun fi'liyyatun — Fe'lli gap" }, { arabic: "بَدَلٌ", meaning: "badalun — Badal" },
                    { arabic: "نَعْتٌ", meaning: "na'tun — Sifat" }, { arabic: "تَابِعٌ", meaning: "tābi'un — Ergashuvchi" }
                ]
            }
        ]
    }, tasks: [
        { id: "86-1", type: "multiple-choice", question: "بِسْمِ da بِ nima?", options: ["Fe'l", "Ko'makchi so'z (harf jarr)", "Ism", "Sifat"], correctAnswer: "Ko'makchi so'z (harf jarr)" },
        { id: "86-2", type: "multiple-choice", question: "الْحَمْدُ gapda nima vazifasini bajaradi?", options: ["Xabar", "Mubtada' (ega)", "Maf'ul", "Sifat"], correctAnswer: "Mubtada' (ega)" },
        { id: "86-3", type: "multiple-choice", question: "تَطْبِيقٌ nima?", options: ["Nazariya", "Qo'llash/Amaliy", "Imtihon", "Dars"], correctAnswer: "Qo'llash/Amaliy" },
        { id: "86-4", type: "multiple-choice", question: "تَحْلِيلٌ nima?", options: ["Qurish", "Tahlil", "Buzish", "Tuzatish"], correctAnswer: "Tahlil" },
        { id: "86-5", type: "multiple-choice", question: "Ismli gap nimadan boshlanadi?", options: ["Fe'ldan", "Ismdan", "Ko'makchi so'zdan", "Yuklamadan"], correctAnswer: "Ismdan" },
        { id: "86-6", type: "multiple-choice", question: "Fe'lli gap nimadan boshlanadi?", options: ["Ismdan", "Fe'ldan", "Ko'makchi so'zdan", "Sifatdan"], correctAnswer: "Fe'ldan" },
        { id: "86-7", type: "multiple-choice", question: "بَدَلٌ nima?", options: ["Sifat", "Badal (almashtiruvchi)", "Fe'l", "Ko'makchi"], correctAnswer: "Badal (almashtiruvchi)" },
        { id: "86-8", type: "multiple-choice", question: "نَعْتٌ nima?", options: ["Ism", "Sifat", "Fe'l", "Ko'makchi"], correctAnswer: "Sifat" },
        { id: "86-9", type: "multiple-choice", question: "إِعْرَابٌ nima?", options: ["Yozish", "I'rob (grammatik tahlil)", "O'qish", "Gapirish"], correctAnswer: "I'rob (grammatik tahlil)" },
        { id: "86-10", type: "multiple-choice", question: "تَابِعٌ nima?", options: ["Mustaqil so'z", "Ergashuvchi so'z", "Asosiy so'z", "Ko'makchi so'z"], correctAnswer: "Ergashuvchi so'z" }
    ]
};
