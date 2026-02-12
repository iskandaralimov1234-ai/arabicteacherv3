"use client";

import { motion } from "framer-motion";
import { Lock, Star, Check, BookOpen } from "lucide-react";
import { Lesson } from "../data/types";

interface LearningPathProps {
    currentLessonId: number;
    completedLessons: number[];
    onSelectLesson: (id: number) => void;
    curriculum: Lesson[];
}

export default function LearningPath({ currentLessonId, completedLessons, onSelectLesson, curriculum }: LearningPathProps) {
    // We simulate 88 lessons by creating a list based on the curriculum + placeholders
    const totalLessons = 88;
    const pathItems = Array.from({ length: totalLessons }, (_, i) => {
        const id = i + 1;
        const data = curriculum.find(l => l.id === id);
        const isCompleted = completedLessons.includes(id);
        // DEV MODE: All lessons unlocked for testing
        const isLocked = id > 5 || (!isCompleted && id > Math.max(...completedLessons, 0) + 1);
        const canPlay = !isLocked;

        return {
            id,
            title: data ? data.title : `Lesson ${id}`,
            isCompleted,
            isLocked,
            canPlay
        };
    });

    return (
        <div className="relative py-20 max-w-2xl mx-auto">
            {/* Path Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-neutral-800 -translate-x-1/2 rounded-full" />

            <div className="space-y-16 relative z-10">
                {pathItems.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} justify-center relative`}
                        >
                            {/* Node */}
                            <button
                                onClick={() => item.canPlay && onSelectLesson(item.id)}
                                disabled={item.isLocked}
                                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-4 transition-all duration-300 z-20 hover:scale-110 active:scale-95 group
                  ${item.isCompleted
                                        ? 'bg-emerald-600 border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)]'
                                        : item.isLocked
                                            ? 'bg-neutral-800 border-neutral-700 opacity-70'
                                            : 'bg-amber-500 border-amber-300 shadow-[0_0_30px_rgba(245,158,11,0.4)] animate-pulse'
                                    }
                `}
                            >
                                {item.isCompleted ? (
                                    <Check size={28} className="text-white md:w-8 md:h-8" />
                                ) : item.isLocked ? (
                                    <Lock size={20} className="text-neutral-500 md:w-6 md:h-6" />
                                ) : (
                                    <Star size={28} className="text-white fill-white md:w-8 md:h-8" />
                                )}

                                {/* Tooltip Title */}
                                <div className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? 'left-full ml-3 md:ml-6 text-left origin-left' : 'right-full mr-3 md:mr-6 text-right origin-right'} w-32 md:w-48 transition-all duration-300 ${!item.isLocked ? 'scale-100 opacity-100' : 'scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100'}`}>
                                    <div className="font-bold text-sm md:text-lg text-white mb-0.5 md:mb-1">{item.title}</div>
                                    <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                                        {item.isCompleted ? 'COMPLETED' : item.isLocked ? 'LOCKED' : 'CURRENT MISSION'}
                                    </div>
                                </div>
                            </button>
                        </motion.div>
                    );
                })}
            </div>

            {/* Start Marker */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-8 text-neutral-500 font-mono text-sm uppercase tracking-widest">
                Start Journey
            </div>
        </div>
    );
}
