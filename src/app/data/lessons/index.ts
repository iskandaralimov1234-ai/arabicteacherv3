import { Lesson } from '../types';

export const getCurriculum = async (locale: string = 'ru'): Promise<Lesson[]> => {
    // Only first 5 lessons are active for now, as per recent restriction
    const lessonIds = [1, 2, 3, 4, 5];

    try {
        const lessons = await Promise.all(
            lessonIds.map(async (id) => {
                const module = await import(`./${locale}/lesson_${id}`);
                return Object.values(module)[0] as Lesson;
            })
        );
        return lessons;
    } catch (error) {
        console.error(`Failed to load lessons for locale ${locale}:`, error);
        // Fallback to RU if specific locale fails
        if (locale !== 'ru') {
            return getCurriculum('ru');
        }
        return [];
    }
};
