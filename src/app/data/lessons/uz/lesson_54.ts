import { Lesson } from '../../types';
export const lesson54: Lesson = {
    id: 54, title: "54-dars: Mabniy (O'zgarmas so'zlar) (الدَّرْسُ الرَّابِعُ وَالْخَمْسُونَ - الْمَبْنِيُّ)", grammar: "Mabniy (O'zgarmas so'zlar)", theory: {
        sections: [
            { title: "📖 Tavsif", content: "Mabniy (الْمَبْنِيُّ) — bu i'robda o'zgarmaydigan so'zlar. Ular doimo bir xil shaklda qoladi. Masalan: zamirlar, ishora ismlari, shart yuklamalari va ba'zi hollarda fe'llar." },
            { title: "📝 Asosiy qoidalar", content: "- Zamirlar doimo mabniy: أَنَا، أَنْتَ، هُوَ\\n- Ishora ismlari: هَذَا، هَذِهِ، ذَلِكَ\\n- Ba'zi yuklamalar: مَنْ، مَا\\n- O'tgan zamon fe'li doimo mabniy" },
            {
                title: "🗣️ Misollar", content: "Misollar:", examples: [
                    { arabic: "هُوَ طَالِبٌ", meaning: "Huwa ṭālibun — U talaba (هُوَ — mabniy zamir)" },
                    { arabic: "هَذَا كِتَابٌ", meaning: "Hādhā kitābun — Bu kitob (هَذَا — mabniy ishora ismi)" },
                    { arabic: "مَنْ جَاءَ؟", meaning: "Man jā'a? — Kim keldi? (مَنْ — mabniy)" },
                    { arabic: "كَتَبَ الطَّالِبُ", meaning: "Kataba al-ṭālibu — Talaba yozdi (كَتَبَ — mabniy fe'l)" }
                ]
            },
            {
                title: "📚 Lug'at", content: "Yangi so'zlar:", examples: [
                    { arabic: "مَبْنِيٌّ", meaning: "mabniyyun — O'zgarmas (mabniy)" }, { arabic: "مُعْرَبٌ", meaning: "mu'rabun — O'zgaruvchan (mu'rab)" },
                    { arabic: "ضَمَائِرُ", meaning: "ḍamā'iru — Zamirlar" }, { arabic: "أَسْمَاءُ الْإِشَارَةِ", meaning: "asmā'u al-ishārati — Ishora ismlari" },
                    { arabic: "أَنَا", meaning: "anā — Men" }, { arabic: "أَنْتَ", meaning: "anta — Sen" },
                    { arabic: "هُوَ", meaning: "huwa — U" }, { arabic: "هِيَ", meaning: "hiya — U (ayol)" }
                ]
            }
        ]
    }, tasks: [
        { id: "54-1", type: "multiple-choice", question: "Mabniy so'zlar i'robda qanday o'zgaradi?", options: ["Oddiy o'zgaradi", "O'zgarmaydi", "Ba'zan o'zgaradi", "Faqat Mansub da"], correctAnswer: "O'zgarmaydi" },
        { id: "54-2", type: "multiple-choice", question: "Qaysi so'z doimo mabniy?", options: ["كِتَابٌ", "هُوَ", "طَالِبٌ", "مَدْرَسَةٌ"], correctAnswer: "هُوَ" },
        { id: "54-3", type: "multiple-choice", question: "O'tgan zamon fe'li mabniymi?", options: ["Ha, doimo", "Yo'q", "Ba'zan", "Faqat uchta fe'l"], correctAnswer: "Ha, doimo" },
        { id: "54-4", type: "multiple-choice", question: "Tarjima qiling: هَذَا كِتَابٌ", options: ["U kitob", "Bu kitob", "O'sha kitob", "Qaysi kitob?"], correctAnswer: "Bu kitob" },
        { id: "54-5", type: "multiple-choice", question: "Tarjima qiling: مَنْ جَاءَ؟", options: ["Nima keldi?", "Kim keldi?", "Qachon keldi?", "Qayerdan keldi?"], correctAnswer: "Kim keldi?" },
        { id: "54-6", type: "multiple-choice", question: "مَبْنِيٌّ nima degani?", options: ["O'zgaruvchan", "O'zgarmas", "Qisqartirilgan", "Uzaytirilgan"], correctAnswer: "O'zgarmas" },
        { id: "54-7", type: "multiple-choice", question: "مُعْرَبٌ nima degani?", options: ["O'zgarmas", "O'zgaruvchan", "Tushirilgan", "Qo'shilgan"], correctAnswer: "O'zgaruvchan" },
        { id: "54-8", type: "multiple-choice", question: "ضَمَائِرُ nima degani?", options: ["Fe'llar", "Zamirlar", "Sifatlar", "Ismlar"], correctAnswer: "Zamirlar" },
        { id: "54-9", type: "multiple-choice", question: "أَنَا nima degani?", options: ["Sen", "Men", "U", "Biz"], correctAnswer: "Men" },
        { id: "54-10", type: "multiple-choice", question: "هِيَ nima degani?", options: ["Men", "Sen", "U (erkak)", "U (ayol)"], correctAnswer: "U (ayol)" }
    ]
};
