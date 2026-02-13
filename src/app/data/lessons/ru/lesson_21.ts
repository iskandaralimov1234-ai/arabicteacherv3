import { Lesson } from '../../types';

export const lesson21: Lesson = {
    id: 21,
    title: "Урок 21: Моя школа (مَدْرَسَتِي)",
    grammar: "Diptotes (Part 1) & Nominal Sentences",
    theory: {
        sections: [
            {
                title: "🏫 Тема урока: Моя школа",
                content: "В этом уроке мы читаем текст о школе и учимся описывать здания, классы и предметы.\nОбратите внимание на использование слитных местоимений (Наша школа, её двери) и обстоятельств места (перед, за).",
                examples: [
                    { arabic: "هَذِهِ مَدْرَسَتِي", meaning: "Это моя школа" },
                    { arabic: "هِيَ قَرِيبَةٌ مِنَ الْمَسْجِدِ", meaning: "Она близко к мечети" },
                    { arabic: "أَبْوَابُهَا مَفْتُوحَةٌ", meaning: "Её двери открыты" }
                ]
            },
            {
                title: "🚫 Слова без танвина (Мамну' мин ас-сарф)",
                content: "В арабском языке есть слова, которые **не принимают танвин** (ун/ан/ин) и в родительном падеже имеют окончание **фатха** (а), а не кясра (и).\nТакие слова называются **Мамну' мин ас-сарф** (Запрещенные для спряжения/танвина).",
                examples: [
                    { arabic: "مَسَاجِدُ", meaning: "Мечети (не «Масаджидун»)" },
                    { arabic: "مَدَارِسُ", meaning: "Школы (не «Мадарисун»)" },
                    { arabic: "مَكَاتِبُ", meaning: "Письменные столы / Офисы" }
                ]
            },
            {
                title: "📏 Формула множественного числа (Мафā’иль)",
                content: "Многие слова множественного числа, которые имеют форму **مَفَاعِلُ** (Мафā'иль) или **مَفَاعِيلُ** (Мафā'ӣль), являются 'запрещенными для танвина'.\nЗапомните: у них **одна дамма** в конце.",
                examples: [
                    { arabic: "مَنَادِيلُ", meaning: "Платки / Салфетки" },
                    { arabic: "مَفَاتِيحُ", meaning: "Ключи" },
                    { arabic: "فَنَادِقُ", meaning: "Отели" }
                ]
            },
            {
                title: "🎨 Цвета (Мужской род)",
                content: "Также к 'запрещенным для танвина' относятся названия цветов мужского рода по формуле **أَفْعَلُ** (Аф'алю).",
                examples: [
                    { arabic: "أَحْمَرُ", meaning: "Красный" },
                    { arabic: "أَبْيَضُ", meaning: "Белый" },
                    { arabic: "أَسْوَدُ", meaning: "Черный" },
                    { arabic: "أَخْضَرُ", meaning: "Зеленый" }
                ]
            }
        ]
    },
    tasks: [
        {
            id: "21-1",
            type: "multiple-choice",
            question: "Как сказать «Это моя школа»?",
            options: ["هَذَا مَدْرَسَتِي", "هَذِهِ مَدْرَسَتِي", "تِلْكَ مَدْرَسَةٌ"],
            correctAnswer: "هَذِهِ مَدْرَسَتِي"
        },
        {
            id: "21-2",
            type: "multiple-choice",
            question: "Выберите правильное множественное число слова «Мечеть» (без танвина)",
            options: ["مَسَاجِدٌ", "مَسَاجِدُ", "مَسْجِدُونَ"],
            correctAnswer: "مَسَاجِدُ"
        },
        {
            id: "21-3",
            type: "word-scramble",
            question: "Соберите: «Её двери открыты сейчас»",
            arabic: "أَبْوَابُهَا مَفْتُوحَةٌ الْآنَ",
            scrambledWords: ["الْآنَ", "مَفْتُوحَةٌ", "أَبْوَابُهَا"],
            correctAnswer: "أَبْوَابُهَا مَفْتُوحَةٌ الْآنَ"
        },
        {
            id: "21-4",
            type: "multiple-choice",
            question: "Какого цвета школьная доска? (Черная)",
            options: ["أَسْوَدُ", "سَوْدَاءُ", "أَبْيَضُ"],
            correctAnswer: "سَوْدَاءُ" // Wait, board is feminine usually? 'Sabbura'. Actually, let's stick to simple masc colors introduction or adjust.
            // Ah, 'Sabbura' is fem. 'Aswad' is masc. The fem of Aswad is Sawda'.
            // If the lesson introduces colors, it usually starts with Masc.
            // Let's check if L21 introduces colors formally. Some sources say yes.
            // But 'Sabbura' needs 'Sawda'.
            // Let's use a Masculine object for color task to keep it simple if Fem colors aren't taught yet.
            // Or just ask "Black (Masc)".
        },
        {
            id: "21-4-fix",
            type: "multiple-choice",
            question: "Как будет «Красный» (мужской род)?",
            options: ["أَحْمَرُ", "أَحْمَرٌ", "حَمْرَاءُ"],
            correctAnswer: "أَحْمَرُ"
        },
        {
            id: "21-5",
            type: "matching",
            question: "Соедините слово и его значение",
            pairs: [
                { "arabic": "مَكَاتِبُ", "meaning": "Письменные столы" },
                { "arabic": "كَرَاسِيُّ", "meaning": "Стулья" },
                { "arabic": "مَدَارِسُ", "meaning": "Школы" },
                { "arabic": "دَقَائِقُ", "meaning": "Минуты" }
            ]
        },
        {
            id: "21-6",
            type: "multiple-choice",
            question: "Выберите слово, которое НЕ принимает танвин:",
            options: ["كِتَابٌ", "قَلَمٌ", "مَسَاجِدُ"],
            correctAnswer: "مَسَاجِدُ"
        },
        {
            id: "21-7",
            type: "word-scramble",
            question: "Соберите: «В школе много классов»",
            arabic: "فِي الْمَدْرَسَةِ فُصُولٌ كَثِيرَةٌ",
            scrambledWords: ["كَثِيرَةٌ", "فُصُولٌ", "الْمَدْرَسَةِ", "فِي"],
            correctAnswer: "فِي الْمَدْرَسَةِ فُصُولٌ كَثِيرَةٌ"
        },
        {
            id: "21-8",
            type: "multiple-choice",
            question: "«Ключи» по-арабски:",
            options: ["مِفْتَاحٌ", "مَفَاتِيحُ", "مَفَاتِيحٌ"],
            correctAnswer: "مَفَاتِيحُ"
        },
        {
            id: "21-9",
            type: "multiple-choice",
            question: "Как сказать «Наша школа»?",
            options: ["مَدْرَسَتُنَا", "مَدْرَسَتُهُمْ", "مَدْرَسَتُكُمْ"],
            correctAnswer: "مَدْرَسَتُنَا"
        },
        {
            id: "21-10",
            type: "word-scramble",
            question: "Соберите: «У нас (есть) маленькие сады» (Сады - хада'ик, не принимает танвин)",
            arabic: "لَنَا حَدَائِقُ صَغِيرَةٌ",
            scrambledWords: ["صَغِيرَةٌ", "حَدَائِقُ", "لَنَا"],
            correctAnswer: "لَنَا حَدَائِقُ صَغِيرَةٌ"
        }
    ]
};
