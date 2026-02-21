import { Lesson } from '../../types';

export const lesson17: Lesson = {
    id: 17,
    title: "17-dars: 11 dan 19 gacha sonlar (الدَّرْسُ السَّابِعَ عَشَرَ - الْعَدَدُ مِنْ أَحَدَ عَشَرَ إِلَى تِسْعَةَ عَشَرَ)",
    grammar: "11 dan 19 gacha sonlar",
    theory: {
        sections: [
            {
                title: "📖 Tavsif",
                content: "11 dan 19 gacha sonlar ikki qismdan iborat (birliklar va o'nliklar). Ikkala qism ham o'zgarmas bo'lib, fathaga tugaydi. Sanaladigan so'z (مَعْدُودٌ) doimo birlik sonda Mansub (مَنْصُوبٌ) holatida turadi."
            },
            {
                title: "📝 Asosiy qoidalar",
                content: "- 11 va 12: ikkala qism ham sanalayotgan so'z jinsi bilan moslashadi\\n- 13-19: birinchi qism qarama-qarshi jinsda, ikkinchisi — o'sha jinsda\\n- Sanaladigan so'z birlik sonda Mansub (مَنْصُوبٌ) holatida\\n- 11 soni: أَحَدَ عَشَرَ (muzakkar) / إِحْدَى عَشْرَةَ (muannas)"
            },
            {
                title: "🗣️ Misollar",
                content: "Quyidagi misollarga e'tibor bering:",
                examples: [
                    { arabic: "أَحَدَ عَشَرَ كِتَابًا", meaning: "Aḥada 'ashara kitāban — O'n bitta kitob (11: ikkala qism muzakkar, sanaladigan so'z muzakkar birlik, Mansub holati)" },
                    { arabic: "اثْنَا عَشَرَ طَالِبًا", meaning: "Ithnā 'ashara tāliban — O'n ikkita talaba (12: ikkala qism muzakkar, sanaladigan so'z muzakkar birlik, Mansub holati)" },
                    { arabic: "خَمْسَةَ عَشَرَ رَجُلًا", meaning: "Khamsata 'ashara rajulan — O'n beshta erkak (birlik muannas, o'nlik muzakkar, sanaladigan so'z muzakkar, Mansub)" },
                    { arabic: "تِسْعَةَ عَشَرَ بَيْتًا", meaning: "Tis'ata 'ashara baytan — O'n to'qqizta uy (birlik muannas, o'nlik muzakkar, sanaladigan so'z muzakkar, Mansub)" }
                ]
            },
            {
                title: "📚 Lug'at",
                content: "Ushbu darsdan yangi so'zlar:",
                examples: [
                    { arabic: "أَحَدَ عَشَرَ", meaning: "aḥada 'ashara — O'n bir" },
                    { arabic: "اثْنَا عَشَرَ", meaning: "ithnā 'ashara — O'n ikki" },
                    { arabic: "ثَلَاثَةَ عَشَرَ", meaning: "thalāthata 'ashara — O'n uch" },
                    { arabic: "أَرْبَعَةَ عَشَرَ", meaning: "arba'ata 'ashara — O'n to'rt" },
                    { arabic: "خَمْسَةَ عَشَرَ", meaning: "khamsata 'ashara — O'n besh" },
                    { arabic: "سِتَّةَ عَشَرَ", meaning: "sittata 'ashara — O'n olti" },
                    { arabic: "سَبْعَةَ عَشَرَ", meaning: "sab'ata 'ashara — O'n yetti" },
                    { arabic: "تِسْعَةَ عَشَرَ", meaning: "tis'ata 'ashara — O'n to'qqiz" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "17-1",
            type: "multiple-choice",
            question: "13-19 sonlarining qismlari sanaladigan so'z bilan qanday moslashadi?",
            options: ["Ikkala qism ham o'sha jinsda", "Ikkala qism ham qarama-qarshi jinsda", "Birinchi qism qarama-qarshi, ikkinchisi o'sha jinsda", "Moslashmaydi"],
            correctAnswer: "Birinchi qism qarama-qarshi, ikkinchisi o'sha jinsda"
        },

        {
            id: "17-2",
            type: "multiple-choice",
            question: "11-19 sonidan keyin sanaladigan so'z qaysi sonda turadi?",
            options: ["Ko'plik", "Birlik", "Ikklik (musnna)", "Songa bog'liq"],
            correctAnswer: "Birlik"
        },

        {
            id: "17-3",
            type: "multiple-choice",
            question: "11-19 sonidan keyin sanaladigan so'z qaysi holatda turadi?",
            options: ["Marfu' (مَرْفُوعٌ)", "Majrur (مَجْرُورٌ)", "Mansub (مَنْصُوبٌ)", "Majzum (مَجْزُومٌ)"],
            correctAnswer: "Mansub (مَنْصُوبٌ)"
        },

        {
            id: "17-4",
            type: "multiple-choice",
            question: "11 sonida qaysi birlik ishlatiladi?",
            options: ["واحد", "أحد", "واحد / أحدى", "اثنين"],
            correctAnswer: "واحد / أحدى"
        },

        {
            id: "17-5",
            type: "multiple-choice",
            question: "Tarjima qiling: أَحَدَ عَشَرَ كِتَابًا",
            options: ["O'nta kitob", "O'n bitta kitob", "O'n ikkita kitob", "O'n bitta kitob"],
            correctAnswer: "O'n bitta kitob"
        },

        {
            id: "17-6",
            type: "multiple-choice",
            question: "Tarjima qiling: خَمْسَةَ عَشَرَ طَالِبًا",
            options: ["Beshta talaba", "O'n beshta talaba", "O'n beshta talaba (qiz)", "Beshta talaba (qiz)"],
            correctAnswer: "O'n beshta talaba"
        },

        {
            id: "17-7",
            type: "multiple-choice",
            question: "Tarjimasi nima: ثَلَاثَةَ عَشَرَ رَجُلًا?",
            options: ["Uchta erkak", "O'n uchta erkak", "O'ttizta erkak", "O'n uchta ayol"],
            correctAnswer: "O'n uchta erkak"
        },

        {
            id: "17-8",
            type: "multiple-choice",
            question: "Qaysi so'z 'o'n bir' ma'nosini bildiradi?",
            options: ["عَشَرَةٌ", "أَحَدَ عَشَرَ", "اثْنَا عَشَرَ", "اثْنَانِ"],
            correctAnswer: "أَحَدَ عَشَرَ"
        },

        {
            id: "17-9",
            type: "multiple-choice",
            question: "Qaysi so'z 'o'n besh' ma'nosini bildiradi?",
            options: ["خَمْسَةٌ", "خَمْسَةَ عَشَرَ", "خَمْسُونَ", "خَامِسٌ"],
            correctAnswer: "خَمْسَةَ عَشَرَ"
        },

        {
            id: "17-10",
            type: "multiple-choice",
            question: "Qaysi so'z 'o'n ikki' ma'nosini bildiradi?",
            options: ["اثْنَانِ", "اثْنَا عَشَرَ", "عَشَرَةٌ", "اثْنَا عَشَرَةٌ"],
            correctAnswer: "اثْنَا عَشَرَ"
        }
    ]
};
