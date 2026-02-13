import { Lesson } from '../types';

export const getCurriculum = async (locale: string = 'ru'): Promise<Lesson[]> => {
    // Enable all lessons for testing
    const lessonIds = Array.from({ length: 88 }, (_, i) => i + 1);
    const lessons: Lesson[] = [];

    for (const id of lessonIds) {
        try {
            const module = await import(`./${locale}/lesson_${id}`);
            const lesson = Object.values(module)[0] as Lesson;
            if (lesson && lesson.id) {
                lessons.push(lesson);
            }
        } catch (error) {
            // Silently skip missing lessons for the current locale
        }
    }

    // Fallback to RU if specific locale resulted in no lessons
    if (lessons.length === 0 && locale !== 'ru') {
        return getCurriculum('ru');
    }

    return lessons;
};
