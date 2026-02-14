"use client";

import { motion } from "framer-motion";
import { Lock, Star, Check, Play, MapPin } from "lucide-react";
import { Lesson } from "../data/types";

interface LearningPathProps {
    currentLessonId: number;
    completedLessons: number[];
    onSelectLesson: (id: number) => void;
    curriculum: Lesson[];
}

export default function LearningPath({ currentLessonId, completedLessons, onSelectLesson, curriculum }: LearningPathProps) {
    const totalLessons = 88;
    const maxCompleted = Math.max(...completedLessons, 0);

    const pathItems = Array.from({ length: totalLessons }, (_, i) => {
        const id = i + 1;
        const data = curriculum.find(l => l.id === id);
        const isCompleted = completedLessons.includes(id);

        // A lesson is locked if it's not completed AND it's more than 1 lesson ahead of the furthest completed one.
        // Also, if the lesson data (content) is missing, it's effectively locked.
        const isLocked = !isCompleted && id > maxCompleted + 1;
        const canPlay = !isLocked && !!data;
        const isCurrent = id === maxCompleted + 1;

        return {
            id,
            title: data ? data.title : `Lesson ${id}`,
            isCompleted,
            isLocked: isLocked || !data,
            canPlay,
            isCurrent: isCurrent && !!data
        };
    });

    return (
        <div className="relative py-20 max-w-xl mx-auto px-4">
            {/* Main Path Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-2 md:w-3 bg-neutral-800 -translate-x-1/2 rounded-full overflow-hidden">
                <motion.div
                    className="w-full bg-gradient-to-b from-emerald-500 via-emerald-600 to-neutral-800"
                    initial={{ height: "0%" }}
                    animate={{ height: `${(Math.max(...completedLessons, 0) / totalLessons) * 100}%` }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </div>

            <div className="space-y-24 relative z-10">
                {pathItems.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px" }}
                            className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} justify-center relative`}
                        >
                            {/* Connecting Dash (Ornamental) */}
                            <div className={`absolute top-1/2 -translate-y-1/2 w-1/2 h-1 border-b-2 border-dashed border-neutral-800/50 ${isLeft ? 'right-1/2 origin-right' : 'left-1/2 origin-left'} -z-10`} />

                            {/* Node Button */}
                            <button
                                onClick={() => item.canPlay && onSelectLesson(item.id)}
                                disabled={item.isLocked}
                                className={`relative w-20 h-20 md:w-24 md:h-24 rounded-[2rem] flex items-center justify-center border-b-4 transition-all duration-300 z-20 group outline-none focus:ring-4 focus:ring-emerald-500/30
                                    ${item.isCompleted
                                        ? 'bg-emerald-500 border-emerald-700 shadow-[0_10px_0_rgb(4,120,87)] active:shadow-none active:translate-y-[10px]'
                                        : item.isCurrent
                                            ? 'bg-amber-400 border-amber-600 shadow-[0_10px_0_rgb(217,119,6)] active:shadow-none active:translate-y-[10px] animate-bounce-subtle'
                                            : 'bg-neutral-800 border-neutral-900 text-neutral-600 shadow-[0_10px_0_rgb(23,23,23)] opacity-80 cursor-not-allowed'
                                    }
                                `}
                            >
                                {/* Inner Icon */}
                                <div className="relative z-10">
                                    {item.isCompleted ? (
                                        <Check size={32} className="text-white drop-shadow-md" strokeWidth={3} />
                                    ) : item.isCurrent ? (
                                        <Star size={32} className="text-amber-900 fill-amber-900" />
                                    ) : (
                                        <Lock size={24} />
                                    )}
                                </div>

                                {/* Ripple Effect for Current Lesson */}
                                {item.isCurrent && (
                                    <>
                                        <div className="absolute inset-0 rounded-[2rem] bg-amber-400 animate-ping opacity-20" />
                                        <div className="absolute -inset-4 rounded-[3rem] border-2 border-amber-500/30 animate-pulse" />
                                    </>
                                )}

                                {/* Interactive Tooltip / Label */}
                                <div className={`absolute top-full mt-4 md:top-1/2 md:-translate-y-1/2 md:mt-0 
                                    ${isLeft
                                        ? 'md:left-full md:ml-6 text-center md:text-left origin-top md:origin-left'
                                        : 'md:right-full md:mr-6 text-center md:text-right origin-top md:origin-right'} 
                                    w-40 md:w-64 transition-all duration-300 z-30 pointer-events-none group-hover:scale-105
                                `}>
                                    <div className={`p-3 md:p-4 rounded-xl backdrop-blur-md border shadow-xl
                                        ${item.isCurrent
                                            ? 'bg-neutral-900/90 border-amber-500/50 text-white'
                                            : item.isCompleted
                                                ? 'bg-neutral-900/80 border-emerald-500/30 text-emerald-100'
                                                : 'bg-neutral-900/60 border-neutral-800 text-neutral-500'
                                        }
                                    `}>
                                        <div className="text-xs font-bold font-mono tracking-widest opacity-70 mb-1 uppercase">
                                            {item.isCurrent ? 'Current Mission' : item.isCompleted ? 'Completed' : 'Locked'}
                                        </div>
                                        <div className="font-bold text-sm md:text-base leading-tight">
                                            {item.title}
                                        </div>
                                    </div>

                                    {/* Connector Arrow for Desktop */}
                                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border-l border-b
                                        ${isLeft
                                            ? '-left-1.5 bg-neutral-900 border-inherit'
                                            : '-right-1.5 bg-neutral-900 border-inherit'
                                        }
                                        ${item.isCurrent
                                            ? 'border-amber-500/50 bg-neutral-900'
                                            : item.isCompleted
                                                ? 'border-emerald-500/30 bg-neutral-900'
                                                : 'border-neutral-800 bg-neutral-900'
                                        }
                                    `} />
                                </div>
                            </button>
                        </motion.div>
                    );
                })}
            </div>

            {/* Start Marker */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-12 flex flex-col items-center opacity-50">
                <MapPin size={32} className="text-neutral-500 mb-2" />
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-500">Start Point</span>
            </div>
        </div>
    );
}

