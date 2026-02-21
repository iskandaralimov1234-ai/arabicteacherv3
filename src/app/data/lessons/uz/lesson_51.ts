import { Lesson } from '../../types';

export const lesson51: Lesson = {
    id: 51,
    title: "51-dars: Musannaf (Qisqartirilgan ism) (الدَّرْسُ الْحَادِي وَالْخَمْسُونَ - الْمُصَنَّفُ)",
    grammar: "Musannaf (Qisqartirilgan ism)",
    theory: {
        sections: [
            { title: "📖 Tavsif", content: "Musannaf — ba'zi ismlarning maxsus qisqartirilgan shakli bo'lib, ular i'robda o'zgarishga uchramaydi. Masalan: عِيسَى، مُوسَى، كُبْرَى kabi ismlar." },
            { title: "📝 Asosiy qoidalar", content: "- Ba'zi ismlar qisqartirilgan shaklga ega\\n- Ular i'roblarda harakatsiz qoladi\\n- Marfu', Mansub va Majrurda bir xil shakl\\n- Asosan o'zga tildan o'zlashgan yoki muannas ismlar" },
            {
                title: "🗣️ Misollar", content: "Quyidagi misollarga e'tibor bering:", examples: [
                    { arabic: "جَاءَ عِيسَى", meaning: "Jā'a 'Īsā — Iso keldi (عِيسَى — qisqartirilgan ism, Marfu' lekin harakatsiz)" },
                    { arabic: "رَأَيْتُ مُوسَى", meaning: "Ra'aytu Mūsā — Men Musoni ko'rdim (Mansub lekin harakatsiz)" },
                    { arabic: "هَذِهِ الْكُبْرَى", meaning: "Hādhihi al-kubrā — Bu eng kattasi (الْكُبْرَى — muannas af'al shakli)" },
                    { arabic: "ذَهَبْتُ إِلَى مُسْتَشْفَى", meaning: "Dhahabtu ilā mustashfā — Men kasalxonaga bordim" }
                ]
            },
            {
                title: "📚 Lug'at", content: "Ushbu darsdan yangi so'zlar:", examples: [
                    { arabic: "مَقْصُورٌ", meaning: "maqṣūrun — Qisqartirilgan" },
                    { arabic: "عِيسَى", meaning: "'īsā — Iso (ism)" },
                    { arabic: "مُوسَى", meaning: "mūsā — Muso (ism)" },
                    { arabic: "كُبْرَى", meaning: "kubrā — Eng katta (muannas)" },
                    { arabic: "مُسْتَشْفَى", meaning: "mustashfā — Kasalxona" },
                    { arabic: "دُنْيَا", meaning: "dunyā — Dunyo" },
                    { arabic: "صُغْرَى", meaning: "ṣughrā — Eng kichik (muannas)" },
                    { arabic: "فَتْوَى", meaning: "fatwā — Fatvo" }
                ]
            }
        ]
    },
    tasks: [
        { id: "51-1", type: "multiple-choice", question: "Qisqartirilgan ism i'robda qanday o'zgaradi?", options: ["Oddiy i'rob bilan", "O'zgarmaydi (harakatsiz)", "Faqat Marfu'da o'zgaradi", "Faqat Mansub da o'zgaradi"], correctAnswer: "O'zgarmaydi (harakatsiz)" },
        { id: "51-2", type: "multiple-choice", question: "Qaysi ism qisqartirilgan?", options: ["كِتَابٌ", "عِيسَى", "طَالِبٌ", "مَدْرَسَةٌ"], correctAnswer: "عِيسَى" },
        { id: "51-3", type: "multiple-choice", question: "مُسْتَشْفَى nima degani?", options: ["Maktab", "Kasalxona", "Masjid", "Kutubxona"], correctAnswer: "Kasalxona" },
        { id: "51-4", type: "multiple-choice", question: "كُبْرَى nima degani?", options: ["Kichik", "Eng katta (muannas)", "Chiroyli", "O'rta"], correctAnswer: "Eng katta (muannas)" },
        { id: "51-5", type: "multiple-choice", question: "Tarjima qiling: جَاءَ عِيسَى", options: ["Iso ketdi", "Iso keldi", "Iso o'tirdi", "Iso turdi"], correctAnswer: "Iso keldi" },
        { id: "51-6", type: "multiple-choice", question: "Tarjima qiling: ذَهَبْتُ إِلَى مُسْتَشْفَى", options: ["Men maktabga bordim", "Men kasalxonaga bordim", "Men masjidga bordim", "Men uyga bordim"], correctAnswer: "Men kasalxonaga bordim" },
        { id: "51-7", type: "multiple-choice", question: "دُنْيَا nima degani?", options: ["Oxirat", "Dunyo", "Osmon", "Yer"], correctAnswer: "Dunyo" },
        { id: "51-8", type: "multiple-choice", question: "فَتْوَى nima degani?", options: ["Namoz", "Fatvo", "Duo", "Zikr"], correctAnswer: "Fatvo" },
        { id: "51-9", type: "multiple-choice", question: "مَقْصُورٌ nima degani?", options: ["Uzaytirilgan", "Qisqartirilgan", "O'zgartirilgan", "Buzilgan"], correctAnswer: "Qisqartirilgan" },
        { id: "51-10", type: "multiple-choice", question: "صُغْرَى nima degani?", options: ["Eng katta", "Eng kichik (muannas)", "O'rta", "Teng"], correctAnswer: "Eng kichik (muannas)" }
    ]
};
