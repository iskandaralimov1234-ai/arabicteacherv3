import { Lesson } from '../types';

export const getCurriculum = async (locale: string = 'ru'): Promise<Lesson[]> => {
    try {
        let lessons: Lesson[] = [];
        if (locale === 'en') {
            const mod = await import('./en');
            lessons = mod.lessons;
        } else if (locale === 'uz') {
            const mod = await import('./uz');
            lessons = mod.lessons;
        } else {
            const mod = await import('./ru');
            lessons = mod.lessons;
        }

        if (!lessons || lessons.length === 0) {
            // Fallback to ru
            const ruMod = await import('./ru');
            return ruMod.lessons;
        }

        return lessons;
    } catch (error) {
        console.error(`Failed to load curriculum for locale ${locale}:`, error);
        // Fallback to ru if a locale import completely fails
        try {
            const ruMod = await import('./ru');
            return ruMod.lessons;
        } catch {
            return [];
        }
    }
};
