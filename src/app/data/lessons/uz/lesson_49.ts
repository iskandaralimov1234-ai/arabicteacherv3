import { Lesson } from '../../types';

export const lesson49: Lesson = {
    id: 49,
    title: "49-dars: Ḥāl (Holat holi) (الدَّرْسُ التَّاسِعُ وَالْأَرْبَعُونَ - الْحَالُ)",
    grammar: "Ḥāl (Holat holi)",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "Ḥāl (الْحَالُ) — fe'l bajarilayotgandagi ega yoki maf'ulning holatini tasvirlaydigan so'z. U doimo Mansub holatida, noaniq va nekra bo'ladi."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- Ḥāl ega yoki maf'ulning holatini bildiradi\\n- Doimo Mansub holatida turadi\\n- Doimo nekra (noaniq ta'rifsiz) bo'ladi\\n- 'Qanday holatda?' savoliga javob beradi"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "جَاءَ مُحَمَّدٌ ضَاحِكًا", meaning: "Jā'a Muhammadun ḍāḥikan — Muhammad kulib keldi (ضَاحِكًا — Ḥāl, eganing holati)" },
                    { arabic: "شَرِبْتُ الْمَاءَ بَارِدًا", meaning: "Sharibtu al-mā'a bāridan — Men suvni sovuq holatda ichdim (بَارِدًا — Ḥāl, maf'ulning holati)" },
                    { arabic: "رَجَعَ الطَّالِبُ مَسْرُورًا", meaning: "Raja'a al-ṭālibu masrūran — Talaba xursand bo'lib qaytdi" },
                    { arabic: "خَرَجَ الْمُعَلِّمُ مُسْرِعًا", meaning: "Kharaja al-mu'allimu musri'an — O'qituvchi tez chiqib ketdi" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "حَالٌ", meaning: "ḥālun — Holat holi" },
                    { arabic: "صَاحِبُ الْحَالِ", meaning: "ṣāḥibu al-ḥāli — Ḥāl egasi" },
                    { arabic: "ضَاحِكٌ", meaning: "ḍāḥikun — Kulib turgan" },
                    { arabic: "بَارِدٌ", meaning: "bāridun — Sovuq" },
                    { arabic: "مَسْرُورٌ", meaning: "masrūrun — Xursand" },
                    { arabic: "مُسْرِعٌ", meaning: "musri'un — Tez/Shoshilgan" },
                    { arabic: "رَجَعَ", meaning: "raja'a — U qaytdi" },
                    { arabic: "خَرَجَ", meaning: "kharaja — U chiqdi" }
                ]
            }
        ]
    },
    tasks: [
        { id: "49-1", type: "multiple-choice", question: "Ḥāl nimani bildiradi?", options: ["Sababni", "Ega yoki maf'ulning holatini", "Vaqtni", "Joyni"], correctAnswer: "Ega yoki maf'ulning holatini" },
        { id: "49-2", type: "multiple-choice", question: "Ḥāl qaysi holatda turadi?", options: ["Marfu'", "Majrur", "Mansub", "Majzum"], correctAnswer: "Mansub" },
        { id: "49-3", type: "multiple-choice", question: "Ḥāl qanday savolga javob beradi?", options: ["Nima uchun?", "Qachon?", "Qanday holatda?", "Qayerda?"], correctAnswer: "Qanday holatda?" },
        { id: "49-4", type: "multiple-choice", question: "Ḥāl ta'rifli (ma'rifa) bo'ladimi?", options: ["Ha, doimo", "Yo'q, doimo nekra", "Ba'zan", "Kodga bog'liq"], correctAnswer: "Yo'q, doimo nekra" },
        { id: "49-5", type: "multiple-choice", question: "Tarjima qiling: جَاءَ مُحَمَّدٌ ضَاحِكًا", options: ["Muhammad ketdi", "Muhammad kulib keldi", "Muhammad yig'lab keldi", "Muhammad o'tirdi"], correctAnswer: "Muhammad kulib keldi" },
        { id: "49-6", type: "multiple-choice", question: "Tarjima qiling: شَرِبْتُ الْمَاءَ بَارِدًا", options: ["Men issiq suv ichdim", "Men suvni sovuq holatda ichdim", "Men suv sotib oldim", "Men suv qidiryapman"], correctAnswer: "Men suvni sovuq holatda ichdim" },
        { id: "49-7", type: "multiple-choice", question: "ضَاحِكٌ nima degani?", options: ["Yig'layotgan", "Kulib turgan", "O'tirgan", "Turgan"], correctAnswer: "Kulib turgan" },
        { id: "49-8", type: "multiple-choice", question: "مَسْرُورٌ nima degani?", options: ["Xafa", "Xursand", "G'azablangan", "Hayron"], correctAnswer: "Xursand" },
        { id: "49-9", type: "multiple-choice", question: "خَرَجَ nima degani?", options: ["U kirdi", "U chiqdi", "U keldi", "U ketdi"], correctAnswer: "U chiqdi" },
        { id: "49-10", type: "multiple-choice", question: "مُسْرِعٌ nima degani?", options: ["Sekin", "Tez/Shoshilgan", "Tinch", "Og'ir"], correctAnswer: "Tez/Shoshilgan" }
    ]
};
