"use client";

import { useState, useEffect } from "react";

interface ProgressData {
    totalXp: number;
    streak: number;
    completedLessons: number[];
    userEmail: string | null;
}

const STORAGE_KEY = "madinahquest_progress";

export const useProgress = () => {
    const [progress, setProgress] = useState<ProgressData>({
        totalXp: 0,
        streak: 14,
        completedLessons: [],
        userEmail: null
    });
    const [isLoaded, setIsLoaded] = useState(false);

    // Load progress from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setProgress(prev => ({
                    ...prev,
                    ...parsed
                }));
            } catch (e) {
                console.error("Failed to parse saved progress:", e);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save progress whenever it changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        }
    }, [progress, isLoaded]);

    const addXP = (amount: number) => {
        setProgress(prev => ({ ...prev, totalXp: prev.totalXp + amount }));
    };

    const completeLesson = (lessonId: number) => {
        setProgress(prev => ({
            ...prev,
            completedLessons: prev.completedLessons.includes(lessonId)
                ? prev.completedLessons
                : [...prev.completedLessons, lessonId]
        }));
    };

    const setSyncEmail = (email: string) => {
        setProgress(prev => ({ ...prev, userEmail: email }));
    };

    return {
        ...progress,
        addXP,
        completeLesson,
        setSyncEmail,
        isLoaded
    };
};
